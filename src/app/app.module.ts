import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@/app/app-routing.module';
import { ErrorInterceptorService } from '@/app/utils/error-interceptor.service';
import { errorReducer } from '@/app/store/error.reducer';
import { userReducer } from '@/app/store/user.reducer';

// import in next section the component of the app
import { HomeComponent } from '@/app/pages/home/home.component';
import { AppComponent } from '@/app/app.component';
import { ValidationComponent } from './pages/validation/validation.component';
import { InputTextFormComponent } from '@components/form/input/input.form.component';
import { SelfieComponent } from './pages/selfie/selfie.component';
import { environment } from '@/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValidationComponent,
    InputTextFormComponent,
    SelfieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ errors: errorReducer, user: userReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.env.storeLog as boolean,
      autoPause: true
    }),
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
