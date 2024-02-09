import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { jwtDecode } from 'jwt-decode';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { env } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  API_URL = 'https://merchant.tirgo.io/api/v1'
  public _authenticated: boolean;
  private _user: any;

  constructor(
    private http: HttpClient,
    private _userService: UserService,
    private router: Router
  ) {
  }
  set accessToken(token: string) {
    localStorage.setItem('merchant', token);
  }
  get accessToken(): string {
    return localStorage.getItem('merchant') ?? '';
  }
  merchantCreate(data) {
    return this.http.post(env.authApiUrl + '/register/client-merchant', data);
  }
  merchantComplete(data) {
    return this.http.post(env.authApiUrl + '/register/client-merchant/complete', data);
  }
  merchantUpdate(data) {
    return this.http.post(env.authApiUrl + '/register/client-merchant/step', data);
  }
  verifyPhone(data) {
    return this.http.post(env.authApiUrl + '/client-merchant-user/phone-verify', data);
  }
  verifyCode(data) {
    return this.http.post(env.authApiUrl + '/client-merchant-user/verify-code', data);
  }
  getMerchantById(id) {
    return this.http.get(env.authApiUrl + '/client-merchant/id?id=' + id);
  }
  forgotPassword(email: string): Observable<any> {
    return this.http.post('api/auth/forgot-password', email);
  }
  resetPassword(data): Observable<any> {
    return this.http.patch(env.apiUrl + '/users/reset-password', data);
  }
  signIn(credentials: { username: string; password: string,userType: string }) {
    credentials.userType = 'client_merchant_user';
    return this.http.post(env.authApiUrl + '/login', credentials);
  }
  sendEmail(email) {
    return this.http.post(env.apiUrl + '/merchant-user/send-code', email);
  }
  signInUsingToken(): Observable<any> {
    return this.http.post('api/auth/sign-in-with-token', {
      accessToken: this.accessToken,
    }).pipe(
      catchError(() =>
        of(false),
      ),
      switchMap((response: any) => {
        if (response.accessToken) {
          this.accessToken = response.accessToken;
        }
        this._authenticated = true;
        this._userService.user = response.user;
        return of(true);
      }),
    );
  }
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('merchant');
    // Set the authenticated flag to false
    this._authenticated = false;
    // Return the observable
    return of(true);
  }
  signUp(user: { name: string; email: string; password: string; company: string }): Observable<any> {
    return this.http.post('api/auth/sign-up', user);
  }
  unlockSession(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post('api/auth/unlock-session', credentials);
  }
  check(): Observable<boolean> {
    if (this.accessToken) {
      return of(true);
    }

    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    // if (AuthUtils.isTokenExpired(this.accessToken)) {
    //   return of(false);
    // }
  }
  redirect(curMerch) {
    if(curMerch.completed && curMerch.verified) {
      this.router.navigate(['/orders'])
    }
    if (curMerch.completed && !curMerch.verified) {
      this.router.navigate(['/auth/sign-up'])
    }
    if (!curMerch.completed && curMerch.email) {
      this.router.navigate(['/register/step2'])
    }
    if (curMerch.completed && (!curMerch.rejected && !curMerch.verified)) {
      this.router.navigate(['/register/step3'])
    }
  }
  getCurrencies() {
    return this.http.get(env.apiUrl + '/currency/all');
  }
}
