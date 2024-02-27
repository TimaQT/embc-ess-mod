import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ApiModule } from './core/api/api.module';
import { ErrorHandlingModule } from './shared/error-handling/error-handing.module';
import { SharedModule } from './shared/shared.module';
import { DatePipe } from '@angular/common';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { Compute } from './core/interfaces/compute';
import { ComputeFeaturesService } from './core/services/compute/computeFeatures.service';
import { ComputeWizardService } from './core/services/compute/computeWizard.service';
import { InjectionToken, NgModule } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

export const computeInterfaceToken = new InjectionToken<Compute>('Compute');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        customUrlValidation: (url) =>
          url.startsWith('/api') && !url.endsWith('/configuration'),
        sendAccessToken: true
      }
    }),
    ApiModule.forRoot({ rootUrl: '' }),
    NgIdleKeepaliveModule.forRoot(),
    ErrorHandlingModule.forRoot(),
    SharedModule,
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers: [
    DatePipe,
    {
      provide: computeInterfaceToken,
      useClass: ComputeFeaturesService,
      multi: true
    },
    {
      provide: computeInterfaceToken,
      useClass: ComputeWizardService,
      multi: true
    },
    provideNgxMask()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
