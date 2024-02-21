import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { jwtDecode } from 'jwt-decode';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from 'app/core/auth/auth.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatInputModule,MatCardModule, ReactiveFormsModule, FormsModule, MatProgressSpinnerModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass],
})
export class DocumentsComponent implements OnInit {
  fileApi = "https://merchant.tirgo.io/api/v1/file/download/"
  currentMerchant: any;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.getMerchant();
  }

  getMerchant() {
    let curUser: any = jwtDecode(this.authService.accessToken);

    this.authService.getMerchantById(curUser.merchantId).subscribe((res: any) => {
      if (res.success) {
        this.currentMerchant = res.data;
      }
    })
  }
}