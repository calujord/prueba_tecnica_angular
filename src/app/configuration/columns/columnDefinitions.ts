import { ColDef, ColGroupDef } from 'ag-grid-community'; // Column Definition Type Interface
import {
  addressInfoGetter,
  cityValueGetter,
  nullValueFormatter,
} from '../../helpers/columnDefinitions.helpers';


/***
 *  Contains the definitions and properties of each column displayed in the table
 *  More info on: https://ag-grid.com/angular-data-grid/column-properties/
 */
export const colDefs: (ColDef | ColGroupDef)[] = [
  { field: 'UserName' },
  { field: 'FirstName' },
  { field: 'LastName' },
  { field: 'MiddleName' },
  { field: 'Gender' },
  { field: 'Age' },
  { field: 'Emails' },
  { field: 'FavoriteFeature' },
  { field: 'Features' },
  {
    headerName: 'Address Info',
    children: [
      {
        field: 'Address',
        valueGetter: addressInfoGetter,
      },
      {
        field: 'City',
        children: [
          {
            field: 'Name',
            valueGetter: cityValueGetter('Name'),
          },
          {
            field: 'CountryRegion',
            valueGetter: cityValueGetter('CountryRegion'),
          },
          {
            field: 'Region',
            valueGetter: cityValueGetter('Region'),
          },
        ],
      },
    ],
  },
  {
    field: 'HomeAddress',
    children: [
      {
        field: 'Address',
        valueGetter: (params) => params.data?.HomeAddress?.Address,
        valueFormatter: nullValueFormatter,
      },
      {
        field: 'City',
        valueGetter: (params) => params.data?.HomeAddress?.City,
        valueFormatter: nullValueFormatter,
      },
    ],
  },
];
