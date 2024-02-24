import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent } from '@fuse/components/alert';
import { CountryService } from 'app/shared/services/country.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrService } from 'ngx-toastr';
import { AgreementComponent } from '../agreement/agreement.component';
import { TypesService } from 'app/shared/services/types.service';
import { OrdersService } from '../../services/orders.service';
import { forkJoin } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, MatDatepickerModule, MatSelectModule, MatAutocompleteModule, MatDialogModule, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, NgxMatIntlTelInputComponent],
})
export class CreateOrderComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  findList: any[] | undefined = [];
  viewText = false;
  currentStep = 1;
  currentUser: any;
  currencies: any;
  cargoTypes: any;
  transportKinds: any;
  transportTypes: any;
  packagesTypes: any;
  cargoLoadingMethods: any;

  isAutotransport: any;
  isRefrigerator: any;
  isRefrigeratorMode: boolean = false;
  isCistern: any;
  isContainer: any;

  constructor(
    private dialogRef: MatDialogRef<CreateOrderComponent>,
    private formBuilder: FormBuilder,
    private orderService: OrdersService,
    private typesService: TypesService,
    private authService: AuthService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.currentUser = jwtDecode(this.authService.accessToken)
    this.form = this.formBuilder.group({
      merchantId: [this.currentUser.merchantId],
      sendDate: [null, Validators.required],
      loadingLocation: [null, Validators.required],
      deliveryLocation: [null, Validators.required],
      selectedLocations: [[]],
      customsPlaceLocation: [null],
      customsClearancePlaceLocation: [null],
      additionalLoadingLocation: [null],
      additionalDeliveryLocation: [null],
      isUrgent: [true],
      isTwoDays: [false],
      isAdr: [false],
      isCarnetTir: [false],
      isGlonas: [false],
      isParanom: [false],

      offeredPrice: [null],
      offeredPriceCurrencyId: [null],
      inAdvancePrice: [0],
      inAdvancePriceCurrencyId: [null],
      paymentMethod: ['cash'],
      isSafeTransaction: [false],

      transportKindIds: [null, Validators.required],
      transportTypeIds: [null, Validators.required],
      refrigeratorFrom: [null],
      refrigeratorTo: [null],
      refrigeratorCount: [null],
      isHook: [null],
      cargoTypeId: [null, Validators.required],
      cargoWeight: [null, Validators.required],
      cargoLength: [null],
      cargoWidth: [null],
      cargoHeight: [null],
      cubature: [null],
      cargoPackageId: [null],
      loadingMethodId: [null]
    })
    this.changeValue();
    forkJoin({
      currencies: this.typesService.getCurrencies(),
      cargoTypes: this.typesService.getCargoTypes(),
      transportTypes: this.typesService.getTransportTypes(),
      packagesTypes: this.typesService.getPackages(),
      cargoLoadingMethods: this.typesService.getCargoLoadingMethod(),
      transportKinds: this.typesService.getTransportKinds(),
    }).subscribe({
      next: (results: any) => {
        this.currencies = results.currencies.data;
        this.cargoTypes = results.cargoTypes.data;
        this.transportTypes = results.transportTypes.data;
        this.packagesTypes = results.packagesTypes.data;
        this.cargoLoadingMethods = results.cargoLoadingMethods.data;
        this.transportKinds = results.transportKinds.data;
        this.form.patchValue({
          offeredPriceCurrencyId: this.currencies[0].id,
          inAdvancePriceCurrencyId: this.currencies[0].id
        });
      },
      error: (error: any) => {
        console.error('Error fetching currencies and cargo types:', error);
      }
    });
  }
  filterPastDates = (date: Date | null): boolean => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return date && date >= currentDate;
  };
  createOrder() {
    // this.form.disable();
    console.log(this.form.value);
    
    this.orderService.createOrder(this.form.value).subscribe((res: any) => {
      if (res.success) {
        this.form.enable();
        this.toastr.success('Заказ успешно создан');
        this.closeModal();
      }
    },error => {
      this.form.enable();
      this.toastr.error(error.error.message);
    })
  }
  nextStep() {
    if (this.form.value.sendDate == null) {
      this.toastr.error('Не можем создать заказ, Нужно выбрать дата отправки груза');
    }
    else if (this.form.value.loadingLocation == null) {
      this.toastr.error('Не можем создать заказ, Нужно выбрать место отправки груза');
    }
    else if (this.form.value.deliveryLocation == null) {
      this.toastr.error('Не можем создать заказ, Нужно выбрать место доставки груза');
    }
    else if (this.currentStep > 2 && this.form.value.cargoTypeId == null) {
      this.form.enable();
      this.toastr.error('Не можем создать заказ, Нужно выбрать тип груза');
    }
    else if (this.currentStep > 2 && this.form.value.transportTypeIds == null) {
      this.form.enable();
      this.toastr.error('Не можем создать заказ, Нужно выбрать тип транспорта');
    }
    else if (this.currentStep > 2 && this.form.value.transportKindIds == null) {
      this.form.enable();
      this.toastr.error('Не можем создать заказ, Нужно выбрать вид транспорта');
    }
    else if (this.currentStep > 2 && this.form.value.cargoWeight == null) {
      this.form.enable();
      this.toastr.error('Не можем создать заказ, Нужно выбрать вес груза');
    }
    else if (this.currentStep < 3) {
      this.currentStep++;
    }
    else if (this.currentStep == 3) {
      this.createOrder();
    }
  }
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  changeValue() {
    this.form.get('isUrgent').valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('isTwoDays').setValue(false);
      }
    });
    this.form.get('isTwoDays').valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('isUrgent').setValue(false);
      }
    });
    this.form.get('isSafeTransaction').valueChanges.subscribe((value) => {
      if (value) {
        this.agreementModal();
      }
    });

    this.form.get('transportKindIds').valueChanges.subscribe((values) => {
      this.isAutotransport = values.includes('Автовоз');
      this.isRefrigerator = values.includes('Рефрежатор');
      this.isCistern = values.includes('Цистерна');
      this.isContainer = values.includes('Контейнеровоз');
    });
  }
  findCity(ev: any) {
    // try {
    //   const findText = ev.target.value.toString().trim().toLowerCase();
    //   if (findText.length >= 2) {
    //     this.viewText = true;
    //     this.countryService.findCity(findText).subscribe((res: any) => {
    //       this.findList = res;
    //     })
    //   } else {
    //     this.viewText = false;
    //     this.findList = [];
    //   }
    // } catch (error) {
    //   console.error("Error fetching city data:", error);
    // }
  }
  closeModal() {
    this.dialogRef.close();
  }
  agreementModal() {
    const dialogRef: MatDialogRef<AgreementComponent> = this.dialog.open(AgreementComponent, {
      autoFocus: false,
      disableClose: true,
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === 'close') {
        this.form.get('isSafeTransaction')?.setValue(false);
      }
    });
  }
  getDynamicLabel(location: string): string {
    switch (location) {
      case 'customsPlaceLocation':
        return 'Место затаможки';
      case 'customsClearancePlaceLocation':
        return 'Место растаможки';
      case 'additionalLoadingLocation':
        return 'Дополнительное место погрузки';
      case 'additionalDeliveryLocation':
        return 'Дополнительное место погрузки';
      default:
        return null;
    }
  }
  onCheckboxChange(event: any) {
    this.isRefrigeratorMode = event.checked;
  }
}
