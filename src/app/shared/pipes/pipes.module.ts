import { NgModule } from '@angular/core';
import { DateFormatPipe } from './dateFormat.pipe';
import { FileFetchPipe } from './file-fetch.pipe';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NumberFormatPipe } from './number.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [DateFormatPipe,FileFetchPipe,NumberFormatPipe],
  declarations: [DateFormatPipe,FileFetchPipe,NumberFormatPipe],
})
export class PipesModule { }
