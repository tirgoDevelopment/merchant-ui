import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrdersService } from './services/orders.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'app/core/auth/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { OrderDetailComponent } from './components/order/order-detail.component';
import { SseService } from 'app/shared/services/socket.service';
import { Subscription } from 'rxjs';
import { PaginationComponent } from 'app/shared/components/pagination/pagination.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [PaginationComponent, ReactiveFormsModule, FormsModule,DatePipe, MatProgressSpinnerModule, MatPaginatorModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass],
})
export class OrdersComponent implements OnInit {

  totalPagesCount: number = 1;
  size: number = 5;
  currentPage: number = 1;

  isLoading: boolean = false;
  dataSource: any[];
  displayedColumns: string[] = ['index', 'id', 'sendLocation', 'cargoDeliveryLocation', 'status', 'date_send', 'offeredPrice', 'secure_transaction', 'type_cargo', 'transport_type'];
  currentUser: any;
  private sseSubscription: Subscription;

  constructor(
    private orderService: OrdersService,
    private authService: AuthService,
    private dialog: MatDialog,
    private sseService: SseService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.currentUser = jwtDecode(this.authService.accessToken);    
    this.getOrders();
    this.sseSubscription = this.sseService.getUpdates().subscribe(
      (data) => {
        if (data.type == 'driverAcceptOffer' || data.type == 'driverOffer' || data.type == 'driverOffer') {
          this.getOrders();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getOrders() {
    this.isLoading = true;
    this.orderService.getOrdersByMerchant(this.currentUser.userId,this.size, this.currentPage).subscribe((res: any) => {
      if (res && res.success) {
        this.isLoading = false;
        this.dataSource = res.data;
        this.totalPagesCount = res.totalPagesCount;
        
        this.dataSource.forEach((v) => {
          if (v.driverOffers && Array.isArray(v.driverOffers)) {
            v.driverOffers = v.driverOffers.filter(offer => offer.rejected == false);
          }
        })
      }
      else {
        this.isLoading = false;
        this.dataSource = [];
      }
    })
    this.isLoading = false;
  }
  addTwoDays(date: Date): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + 2);
    return result;
  }
  createOrderModal() {
    const dialogRef = this.dialog.open(CreateOrderComponent, {
      autoFocus: false,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOrders();
    });
  }
  showOrderDetails(order) {
    const dialogRef = this.dialog.open(OrderDetailComponent, {
      height: '100vh',
      autoFocus: false,
      disableClose: true,
      data: order,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOrders();
    });
  }
  onPaginationEvent(event: any): void {
    this.size = event.size;
    this.currentPage = event.page;
    this.getOrders()
  }
  
}