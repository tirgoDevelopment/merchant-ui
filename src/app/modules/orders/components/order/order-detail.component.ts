import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
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
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatIconModule,MatTabsModule,NgIf,PipesModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, AngularYandexMapsModule, MatDialogModule, TranslocoModule, FuseDrawerComponent, MatButtonModule, NgFor, NgClass, MatTooltipModule],
})
export class OrderDetailComponent implements OnInit {
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog) {}
  ngOnInit(): void {}

  statusOrderCheck(params) {
    switch (params) {
      case 'waiting':
        return "Ожидающий";
      case 1:
        return "Выполняется";
      case 2:
        return "Выполнен";
      case 3:
        return "Завершен";
      case 4:
        return "Отменен";
      default:
        return "Не определен";
    }
  }
  returnClassStatusOrder(params) {
    switch (params) {
      case 'waiting':
        return "status-order-blue";
      case 1:
        return "status-order-yellow";
      case 2:
        return "status-order-green";
      case 3:
        return "status-order-info";
      case 4:
        return "status-order-red";
      default:
        return "status-order";
    }
  }
  acceptDriver() {
    const dialogRef = this.dialog.open(ScoreComponent, {
      autoFocus: false,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });   
    // if(this.data.isSafeTransaction) {}
  }
}
