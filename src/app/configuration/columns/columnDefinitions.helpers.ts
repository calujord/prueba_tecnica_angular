import { ValueGetterParams, ValueFormatterParams } from 'ag-grid-community'; // Column Definition Type Interface

interface AddressInfo {
  Address: string;
  City: { Name: string; Region: string; CountryRegion: string };
}

export const nullValueFormatter = (params: ValueFormatterParams) =>
  params.value === null ? 'null' : params.value;

export const addressInfoGetter = (val: ValueGetterParams) => {
  if (val.data?.AddressInfo?.length) {
    return val.data?.AddressInfo?.map((info: AddressInfo) => info.Address);
  }
};

export const cityValueGetter =
  (cityFieldName: 'Name' | 'Region' | 'CountryRegion') =>
  (val: ValueGetterParams) => {
    if (val.data?.AddressInfo?.length > 0) {
      return val.data?.AddressInfo?.map(
        (info: AddressInfo) => info.City?.[cityFieldName]
      );
    }
  };
