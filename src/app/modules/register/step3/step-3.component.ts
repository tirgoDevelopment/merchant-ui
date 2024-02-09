import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { jwtDecode } from 'jwt-decode';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'app/core/user/user.service';
import { AuthService } from 'app/core/auth/auth.service';
import { NgxMaskDirective } from 'ngx-mask';
import { TypesService } from 'app/shared/services/types.service';

@Component({
  selector: 'auth-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  standalone: true,
  imports: [MatSnackBarModule, NgxMaskDirective, MatStepperModule, CommonModule, MatCheckboxModule, MatIconModule, NgClass, MatSelectModule, RouterLink, NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, NgxMatIntlTelInputComponent],
})
export class Step3Component implements OnInit {
  toastr = inject(ToastrService);
  user = inject(UserService);
  @ViewChild('signUpNgForm') signUpNgForm: NgForm;
  signUpForm: FormGroup;
  merchant: any;
  phone: string;
  id: number;
  currencies: any;
  showBankAccount2: boolean = false;
  showTrashIcon: boolean = false;
  currentUser: any;
  completed: boolean = false;
  constructor(
    private authService: AuthService,
    private typesService: TypesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.currentUser = jwtDecode(localStorage.getItem('merchant'));
    this.authService.getMerchantById(this.currentUser.merchantId).subscribe((res: any) => {
      if (res.success) {
        this.merchant = res.data;
        if (this.merchant.completed && (!this.merchant.verified && !this.merchant.rejected)) {
          this.completed = true;
        }
      }
    })

    this.signUpForm = this.formBuilder.group({
      id: [''],
      companyName: [''],
      companyType: [''],
      password: [''],
      email: [''],
      phoneNumber: [''],
      merchantId: [''],
      responsiblePersonLastName: [''],
      responsiblePersonFistName: [''],
      registrationCertificateFilePath: [''],
      passportFilePath: [''],
      logoFilePath: [''],
      responsbilePersonPhoneNumber: [''],
      supervisorFirstName: [''],
      supervisorLastName: [''],
      legalAddress: [''],
      factAddress: [''],

      currency: ['', [Validators.required]],
      bankAccount: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(20), Validators.pattern('^[0-9]*$')]],
      currency2: [''],
      bankAccount2: ['', [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^[0-9]*$')]],
      bankName: ['', [Validators.required]],
      inn: ['', [Validators.required]],
      taxPayerCode: ['', [Validators.minLength(12), Validators.maxLength(12), Validators.required]],
      oked: ['', [Validators.required]],
      mfo: ['', [Validators.required, Validators.required, Validators.maxLength(5), Validators.minLength(5), Validators.pattern('^[0-9]*$')]],
      dunsNumber: [''],
      ibanNumber: [''],
      notes: [''],
    });

    this.typesService.getCurrencies().subscribe((res: any) => {
      if (res.success) {
        this.currencies = res.data;
        this.signUpForm.patchValue({ currency: this.currencies[0].id, currency2: this.currencies[0].id });
      }
    })
  }
  signUp() {
    if (this.signUpForm.value.bankAccount2) {
      this.signUpForm.patchValue({
        responsiblePersonLastName: this.merchant.responsiblePersonLastName,
        responsiblePersonFistName: this.merchant.responsiblePersonFistName,
        registrationCertificateFilePath: this.merchant.registrationCertificateFilePath,
        passportFilePath: this.merchant.passportFilePath,
        logoFilePath: this.merchant.logoFilePath,
        responsbilePersonPhoneNumber: this.merchant.responsbilePersonPhoneNumber,
        supervisorFirstName: this.merchant.supervisorFirstName,
        supervisorLastName: this.merchant.supervisorLastName,
        legalAddress: this.merchant.legalAddress,
        factAddress: this.merchant.factAddress,

        merchantId: +this.merchant.id,
        companyName: this.merchant.companyName,
        companyType: this.merchant.companyType,
        password: this.merchant.password,
        phoneNumber: this.merchant.phoneNumber,
        email: this.merchant.email,
        bankAccounts: [
          { account: +this.signUpForm.value.bankAccount, currency: this.signUpForm.value.currency },
          { account: +this.signUpForm.value.bankAccount2, currency: this.signUpForm.value.currency2 },
        ]
      });
    } 
    else {
      this.signUpForm.patchValue({
        responsiblePersonLastName: this.merchant.responsiblePersonLastName,
        responsiblePersonFistName: this.merchant.responsiblePersonFistName,
        registrationCertificateFilePath: this.merchant.registrationCertificateFilePath,
        passportFilePath: this.merchant.passportFilePath,
        logoFilePath: this.merchant.logoFilePath,
        responsbilePersonPhoneNumber: this.merchant.responsbilePersonPhoneNumber,
        supervisorFirstName: this.merchant.supervisorFirstName,
        supervisorLastName: this.merchant.supervisorLastName,
        legalAddress: this.merchant.legalAddress,
        factAddress: this.merchant.factAddress,
        
        merchantId: +this.merchant.id,
        companyName: this.merchant.companyName,
        companyType: this.merchant.companyType,
        password: this.merchant.password,
        phoneNumber: this.merchant.phoneNumber,
        email: this.merchant.email,
        bankAccounts: [
          { account: +this.signUpForm.value.bankAccount, currency: this.signUpForm.value.currency }
        ]
      });
    }


    this.signUpForm.disable();
    if (this.signUpForm.value.bankName === '') {
      this.signUpForm.enable();
      this.toastr.error('Требуется указать Наименование банка');
    }
    else if (this.signUpForm.value.bankAccount === '') {
      this.signUpForm.enable();
      this.toastr.error('Требуется указать Расчетный счет');
    }
    else if (this.signUpForm.value.inn === '') {
      this.signUpForm.enable();
      this.toastr.error('Требуется указать ИНН');
    }
    else if (this.signUpForm.value.taxPayerCode === '') {
      this.signUpForm.enable();
      this.toastr.error('Требуется указать Код плательщика НДС');
    }
    else if (this.signUpForm.value.oked === '') {
      this.signUpForm.enable();
      this.toastr.error('Требуется указать Код плательщика ОКЭД');
    }
    else if (this.signUpForm.value.mfo === '') {
      this.signUpForm.enable();
      this.toastr.error('Требуется указать Код плательщика МФО');
    }
    else {
      this.signUpForm.enable();
      this.authService.merchantComplete(this.signUpForm.value).subscribe((res: any) => {
        if (res.success) {
          this.completed = true;
          this.signUpForm.enable();
        }
      }, error => {
        this.signUpForm.enable();
        this.toastr.error(error.message);
      })
    }
  }
  toggleShowBankAccount2() {
    this.showBankAccount2 = !this.showBankAccount2;
    this.showTrashIcon = !this.showTrashIcon;
  }
}

