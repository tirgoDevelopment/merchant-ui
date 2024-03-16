import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/core/user/user.types';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    API_URL = 'https://merchant.tirgo.io/api/v2';
    merchant
    private _user = new BehaviorSubject<any>(null);
    private _merchant = new BehaviorSubject<any>(null);

    /**
     * Constructor
     */
    constructor(private http: HttpClient) {
    }

    getUser() {
     let user = jwtDecode(localStorage.getItem('merchant'));
    }
    set user(value) {
        this.merchant = value;
        this._user.next(value);
    }

    get user$(): Observable<any> {
        return this._user.asObservable();
    }

    getUserValue(): any {
        return this._user.getValue();
    }
}
