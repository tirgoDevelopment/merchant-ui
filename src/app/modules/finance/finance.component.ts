import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { FinanceService } from './services/finance.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ReactiveFormsModule, MatSelectModule, FormsModule, MatInputModule, MatDatepickerModule, MatProgressSpinnerModule, DatePipe, MatPaginatorModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass],
})
export class FinanceComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  dataSource: any[];
  displayedColumns: string[] = ['index', 'id','status','full_name','type','amount','created_at',"comment"];
  currentUser:any;
  constructor(
    private formBuilder: FormBuilder,
    private financeService: FinanceService,
    private dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this.currentUser = jwtDecode(localStorage.getItem('merchant'));
    this.form = this.formBuilder.group({
      from: [''],
      to: [''],
      type: ['']
    })
    this.getAllTransaction();
  }

  getAllTransaction() {
    this.financeService.getAll(this.currentUser.userId).subscribe((res: any) => {
      this.dataSource = res.data;
    })
  }
  createModal(type) {
    const dialogRef = this.dialog.open(CreateTransactionComponent, {
      autoFocus: false,
      disableClose: true,
      data: {
        type
      }
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
}