import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [PaginationComponent, MatInputModule, MatSelectModule, ReactiveFormsModule, FormsModule, DatePipe, MatProgressSpinnerModule, MatPaginatorModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass],
  animations: [
    trigger('showHideFilter', [
      state('show', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      state('hide', style({
        height: '0',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('show <=> hide', animate('300ms ease-in-out'))
    ])
  ]
})
export class OrdersComponent implements OnInit {

  totalPagesCount: number = 1;
  size: number = 5;
  currentPage: number = 1;
  showFilter:boolean = false;
  isLoading: boolean = false;
  dataSource: any[];
  displayedColumns: string[] = ['index', 'id', 'sendLocation', 'cargoDeliveryLocation', 'status', 'date_send', 'offeredPrice', 'secure_transaction', 'type_cargo', 'transport_type'];
  currentUser: any;
  filter = { userId: null, clientId: null, orderId: null, statusId: null, loadingLocation: null, deliveryLocation: null, transportKindId: null, transportTypeId: null, createAt: null, sendDate: null }
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
  getOrders(filter?: any) {
    let pagination = { size: this.size, currentPage: this.currentPage };
    this.isLoading = true;

    let request;
    if (filter) {
      request = this.orderService.getOrdersByMerchant(this.currentUser.userId, pagination, filter);
    } else {
      request = this.orderService.getOrdersByMerchant(this.currentUser.userId, pagination);
    }

    request.subscribe((res: any) => {
      if (res && res.success) {
        this.isLoading = false;
        this.dataSource = res.data;
        this.totalPagesCount = res.totalPagesCount;

        this.dataSource.forEach((v) => {
          if (v.driverOffers && Array.isArray(v.driverOffers)) {
            v.driverOffers = v.driverOffers.filter(offer => offer.rejected == false);
          }
        });
      } else {
        this.isLoading = false;
        this.dataSource = [];
      }
    });
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
  generateFilterPath(filter: any) {
    let url = '';
    for (const key in filter) {
      if (filter[key] !== null && filter[key] !== undefined) {
        url += `&${key}=${encodeURIComponent(filter[key])}`;
      }
    }
    this.getOrders()
    return url.length > 0 ? url.substr(1) : url;
  }
  applyFilter() {
    if (this.filter) {
      const filterPath = this.generateFilterPath(this.filter);
      this.getOrders(filterPath);
    }
  }
  resetSearch() {
    if (this.filter) {
      this.filter = { userId: null, clientId: null, orderId: null, statusId: null, loadingLocation: null, deliveryLocation: null, transportKindId: null, transportTypeId: null, createAt: null, sendDate: null }
      this.getOrders();
    }
  }
}