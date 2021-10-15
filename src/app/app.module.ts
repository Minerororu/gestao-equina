import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ComponentModule } from './components/component.module';
import { ImportModule } from './import.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthService } from './helpers/auth.service';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    ImportModule,
    PagesModule,
    ComponentModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
