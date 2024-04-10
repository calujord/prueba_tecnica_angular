import { Component, OnInit } from '@angular/core';
import { colDefs } from '../../configuration/columns/columnDefinitions';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  selector: 'app-datatable',
  templateUrl: './datatable.template.html',
  styleUrl: './datatable.styles.css',
  providers: [ApiService],
})
export class DatatableComponent implements OnInit {
  public colDefs = colDefs;
  public rowData$: Observable<any> = this.apiService.getData();
  constructor(public apiService: ApiService) {}

  public ngOnInit(): void {
    this.rowData$.subscribe((data: { [key: string]: any }[]) => {
      var keys = [];

      for (let key in data[0]) {
        keys.push(key);
      }
      console.log({ data, keys });
    });
  }
}
