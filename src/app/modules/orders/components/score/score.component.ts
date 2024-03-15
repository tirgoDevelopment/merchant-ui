import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, NgModule, OnInit, Pipe, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { TranslocoModule } from '@ngneat/transloco';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { PipesModule } from 'app/shared/pipes/pipes.module';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatIconModule, MatTabsModule,PipesModule, NgIf, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, AngularYandexMapsModule, MatDialogModule, TranslocoModule, FuseDrawerComponent, MatButtonModule, NgFor, NgClass, MatTooltipModule],
})
export class ScoreComponent implements OnInit {
  loading: boolean = false;

  tax
  selectdriver: boolean = false;
  serviceSafe: number = 1200000
  selectDriver:any;

  constructor(
    private dialogRef: MatDialogRef<ScoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private orderService: OrdersService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    console.log(this.data);
    
  }

  returnTax() {
    this.tax = 0;
    return this.tax = (12 / 100) * (this.data.amount / 0.88);
  }
  returnAmount() {
    return this.data.amount + this.tax + this.serviceSafe;
  }
  close(type) {
    this.dialogRef.close(type)
  }
}
