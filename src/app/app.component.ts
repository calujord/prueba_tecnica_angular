import { Component } from '@angular/core';
import { DatatableComponent } from './components/datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [DatatableComponent, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.template.html',
})
export class AppComponent {}
