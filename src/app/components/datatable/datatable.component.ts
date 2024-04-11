import { Component } from '@angular/core';
import { colDefs } from '../../configuration/columns/columnDefinitions';
import { ApiService } from '../../services/api.service';
import { Observable, first, map } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  People,
  SearchFields,
} from '../../interfaces/addressInfo';

@Component({
  standalone: true,
  imports: [AgGridAngular, CommonModule, ReactiveFormsModule],
  selector: 'app-datatable',
  templateUrl: './datatable.template.html',
  styleUrl: './datatable.styles.css',
  providers: [ApiService],
})
export class DatatableComponent {
  /** Column definitions */
  public colDefs = colDefs;

  /** API data retrieved */
  public apiData$: Observable<People[]> = this.apiService.getData();

  /** Data fiitered by inputs */
  public filteredData$: Observable<People[]> = this.apiData$;

  /** Form Controls */
  public firstName = new FormControl<string>('');
  public lastName = new FormControl<string>('');
  public userName = new FormControl<string>('');
  public tableSearch = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    userName: this.userName,
  });

  constructor(public apiService: ApiService) {}

  /** Listen to changes on inputs and filter api data accordingly */
  public onFormChange() {
    let { firstName, lastName, userName } = this.tableSearch.value;

    this.filteredData$ = this.apiData$.pipe(
      map((data: People[]) => {
        return data.filter((person: People) => {
          /** Helper function to search the input value in the corresponding field */
          const filterField = (field: SearchFields, value: any) => {
            return person?.[field]
              ?.toLowerCase()
              .includes((value ?? '').toLowerCase());
          };

          let filterFirstName = filterField(SearchFields.FirstName, firstName);
          let filterLastName = filterField(SearchFields.LastName, lastName);
          let filterUserName = filterField(SearchFields.UserName, userName);

          return filterFirstName && filterUserName && filterLastName;
        });
      })
    );
  }
}
