import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { FinanceService } from './services/finance.service';
import { jwtDecode } from 'jwt-decode';
import { SseService } from 'app/shared/services/socket.service';
import { Subscription } from 'rxjs';
import { PipesModule } from 'app/shared/pipes/pipes.module';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ReactiveFormsModule, MatSelectModule,PipesModule, FormsModule, MatInputModule, MatDatepickerModule, MatProgressSpinnerModule, DatePipe, MatPaginatorModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass],
})
export class FinanceComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  dataSource: any;
  displayedColumns: string[] = ['index', 'id', 'status', 'full_name', 'type', 'amount', 'created_at', "comment"];
  currentUser: any = { activeBalance: '', frozenbalance: '' };
  balances: any;
  private sseSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private financeService: FinanceService,
    private dialog: MatDialog,
    private sseService: SseService,
    private ref: ChangeDetectorRef
  ) { }
  ngOnChanges() {
    this.ref.detectChanges();
  }
  ngOnInit(): void {
    this.currentUser = jwtDecode(localStorage.getItem('merchant'));
    this.form = this.formBuilder.group({
      from: [''],
      to: [''],
      type: ['']
    })
    this.sseSubscription = this.sseService.getUpdates().subscribe(
      (data) => {
        if (data.type == 'transactionVerified' || data.type == 'transactionRejected') {
          this.getAllTransaction();
          this.getBalance();
        }
      },
      (error) => {
        console.error(error);
      }
    );
    this.getAllTransaction();
    this.getBalance();
  }
  getBalance() {
    this.financeService.getBalance(this.currentUser.merchantId).subscribe((res: any) => {
      if (res) {
        this.balances = res.data;
      }
    })
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
      data: { type }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllTransaction();
    });
  }
}