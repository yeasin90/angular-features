import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { RoundBlockDirective } from './components/custom-directive/round-block.directive';
import { GenderPipePipe } from './components/custom-pipes/gender-pipe.pipe';
import { Parent1Component } from './components/communication/parent-child/parent1/parent1.component';
import { Child1Component } from './components/communication/parent-child/child1/child1.component';
import { Parent2Component } from './components/communication/child-parent/parent2/parent2.component';
import { Child2Component } from './components/communication/child-parent/child2/child2.component';
import { Parent3Component } from './components/communication/view-child/parent3/parent3.component';
import { Child3Component } from './components/communication/view-child/child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CustomPipesComponent,
    CustomDirectiveComponent,
    RoundBlockDirective,
    GenderPipePipe,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
