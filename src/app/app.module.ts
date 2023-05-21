import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CommonModule } from '@angular/common';
import { PowerPipe } from './pipes/power.pipe';
import { EmptyPipe } from './pipes/empty.pipe';
import { DefaultPipe } from './pipes/default.pipe';
import { UpperCasePipe1 } from './pipes/uppercase.pipe';
import { AppHighlight } from './directives/highlight.directive';
import { AppUnlessDirective } from './directives/app-unless.directive';
import { DelayRenderingDirective } from './directives/delay-rendering.directive';
import { CustomDropdownComponent } from './home/custom-dropdown/custom-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsValidationComponent } from './home/js-validation/js-validation.component';
import { SearchComponent } from './search/search.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PowerPipe,
    EmptyPipe,
    DefaultPipe,
    UpperCasePipe1,
    AppHighlight,
    AppUnlessDirective,
    DelayRenderingDirective,
    CustomDropdownComponent,
    JsValidationComponent,
    SearchComponent,
    HorizontalBarComponent,
    VerticalBarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
