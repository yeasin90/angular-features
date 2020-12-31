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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CustomPipesComponent,
    CustomDirectiveComponent,
    RoundBlockDirective,
    GenderPipePipe
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
