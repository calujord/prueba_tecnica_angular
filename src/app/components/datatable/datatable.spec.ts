import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableComponent } from './datatable.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { mock_data } from './mock-data';

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    component.filteredData$ = of(mock_data);
    component.apiData$ = of(mock_data);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the search inputs and data table', () => {
    let userNameInput: HTMLInputElement =
      fixture.nativeElement.querySelector('#userName');
    let firstNameImput: HTMLInputElement =
      fixture.nativeElement.querySelector('#firstName');
    let lastNameImput: HTMLInputElement =
      fixture.nativeElement.querySelector('#lastName');
    let dataTable: HTMLElement =
      fixture.nativeElement.querySelector('#datatable');
    expect(userNameInput).toBeTruthy();
    expect(firstNameImput).toBeTruthy();
    expect(lastNameImput).toBeTruthy();
    expect(dataTable).toBeTruthy();
  });

  it('should display data in the table', () => {
    let rows: HTMLElement[] = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(20);
  });

  it('should filter the data when userName input changes', () => {
    inputSearchValue(fixture, '#userName', 'Russell');

    let rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(1);

    inputSearchValue(fixture, '#userName', '');

    rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(20);
  });

  it('should filter the data when firstName input changes', () => {
    inputSearchValue(fixture, '#firstName', 'Russell');

    let rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(1);

    inputSearchValue(fixture, '#firstName', '');

    rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(20);
  });

  it('should filter the data when lastName input changes', () => {
    inputSearchValue(fixture, '#lastName', 'Whyte');

    let rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(1);

    inputSearchValue(fixture, '#lastName', '');

    rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(20);
  });

  it('should filter the data when userName, lastName, and firstName inputs change', () => {
    inputSearchValue(fixture, '#lastName', 'a');
    inputSearchValue(fixture, '#firstName', 'r');
    inputSearchValue(fixture, '#userName', 's');

    let rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(1);

    inputSearchValue(fixture, '#userName', '');

    rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(4);

    inputSearchValue(fixture, '#firstName', '');

    rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(10);

    inputSearchValue(fixture, '#lastName', '');

    rows = fixture.nativeElement.querySelectorAll('.ag-row');
    expect(rows.length).toEqual(20);
  });
});

/**
 * Types a value in an input field and triggers all Events to propagate the change.
 */
function inputSearchValue(
  fixture: ComponentFixture<DatatableComponent>,
  fieldSelector: string,
  value: string
) {
  let inputField: HTMLInputElement =
    fixture.nativeElement.querySelector(fieldSelector);
  let tableSearch: HTMLInputElement =
    fixture.nativeElement.querySelector('#tableSearch');
  inputField.value = value;
  inputField.dispatchEvent(new Event('input'));
  inputField.dispatchEvent(new Event('blur'));
  tableSearch.dispatchEvent(new Event('input'));
  tableSearch.dispatchEvent(new Event('blur'));
  fixture.detectChanges();
}
