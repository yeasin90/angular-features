import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatExpansionModule],
  exports: [MatInputModule, MatButtonModule, MatExpansionModule],
})
export class AppMaterialModule { }
