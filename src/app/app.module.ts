import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptorService } from '@/app/utils/error-interceptor.service';
import { HomeComponent } from './pages/home/home.component';
import { errorReducer } from './store/error.reducer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidationComponent } from './pages/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ errors: errorReducer }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
