import { ValueGetterParams, ValueFormatterParams } from 'ag-grid-community'; // Column Definition Type Interface
import { AddressInfo } from '../interfaces/addressInfo';

/**
 *  Return 'null' if value is null else return value as it is.
 *  Used to explicitly print 'null' in the table.
 */
export const nullValueFormatter = (params: ValueFormatterParams) =>
  params.value === null ? 'null' : params.value;

/**
 *  Group address info into an array.
 */
export const addressInfoGetter = (val: ValueGetterParams) => {
  if (val.data?.AddressInfo?.length) {
    return val.data?.AddressInfo?.map((info: AddressInfo) => info.Address);
  }
};

/**
 *  Gets the value for the given "City" field.
 */
export const cityValueGetter =
  (cityFieldName: 'Name' | 'Region' | 'CountryRegion') =>
  (val: ValueGetterParams) => {
    if (val.data?.AddressInfo?.length > 0) {
      return val.data?.AddressInfo?.map(
        (info: AddressInfo) => info.City?.[cityFieldName]
      );
    }
  };
