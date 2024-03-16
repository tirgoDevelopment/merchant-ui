import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
import { jwtDecode } from 'jwt-decode';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from 'app/core/auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { DocumentsService } from './services/documents.service';
import { PipesModule } from 'app/shared/pipes/pipes.module';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatInputModule, CommonModule,MatCardModule,PipesModule, ReactiveFormsModule, FormsModule, MatProgressSpinnerModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass],
})
export class DocumentsComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit(): void {
  }
}