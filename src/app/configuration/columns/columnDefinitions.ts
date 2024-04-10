import { ColDef, ColGroupDef } from 'ag-grid-community'; // Column Definition Type Interface
import {
  addressInfoGetter,
  cityValueGetter,
  nullValueFormatter,
} from './columnDefinitions.helpers';

export const columnKeys = [
  'UserName',
  'FirstName',
  'LastName',
  'MiddleName',
  'Gender',
  'Age',
  'Emails',
  'FavoriteFeature',
  'Features',
  'AddressInfo',
  'HomeAddress',
];

export const defaultColDef: ColDef[] = [
  {
    pinned: false,
    rowDrag: false,
  },
];

export const colDefs: (ColDef | ColGroupDef)[] = [
  { field: 'FirstName' },
  { field: 'LastName' },
  { field: 'MiddleName' },
  { field: 'Gender' },
  { field: 'Age' },
  { field: 'Emails' },
  { field: 'FavoriteFeature' },
  { field: 'Features' },
  {
    headerName: 'AddressInfo',
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
