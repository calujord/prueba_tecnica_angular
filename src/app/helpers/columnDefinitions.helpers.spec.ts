import { AddressInfo } from '../interfaces/addressInfo';
import {
  addressInfoGetter,
  nullValueFormatter,
} from './columnDefinitions.helpers';
import { ValueGetterParams, ValueFormatterParams } from 'ag-grid-community'; // Column Definition Type Interface

describe('Column Definition Helpers', () => {
  it('should convert null values into "null" and respect the rest', () => {
    expect(nullValueFormatter({ value: null } as ValueFormatterParams)).toEqual(
      'null'
    );
    expect(
      nullValueFormatter({ value: undefined } as ValueFormatterParams)
    ).toEqual(undefined);
    expect(
      nullValueFormatter({ value: 'Address info' } as ValueFormatterParams)
    ).toEqual('Address info');
  });

  it('should return Address info', () => {
    const address1: AddressInfo = {
      Address: 'Address1',
      City: {
        Name: 'Madrid',
        Region: 'MAD',
        CountryRegion: 'Comunidad de Madrid',
      },
    };
    const address2: AddressInfo = {
      Address: 'Address2',
      City: { Name: 'Barcelona', Region: 'BCN', CountryRegion: 'Cataluña' },
    };
    expect(
      addressInfoGetter({
        data: { AddressInfo: [] },
      } as ValueGetterParams)
    ).toEqual(undefined);
    expect(
      addressInfoGetter({
        data: { AddressInfo: [address1, address2] },
      } as ValueGetterParams)
    ).toEqual(['Address1', 'Address2']);
  });
});
