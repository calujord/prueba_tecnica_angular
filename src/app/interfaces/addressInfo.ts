export interface AddressInfo {
  Address: string;
  City: { Name: string; Region: string; CountryRegion: string };
}

export interface People {
  UserName: string;
  FirstName: string;
  LastName: string;
  MiddleName: string | null;
  Gender: string;
  Age: number | null;
  Emails: string[];
  FavoriteFeature: string;
  Features: string[];
  AddressInfo: AddressInfo[] | null;
  HomeAddress:
    | AddressInfo
    | null
    | { Address: string | null; City: string | null };
}

export enum SearchFields {
  UserName = 'UserName',
  FirstName = 'FirstName',
  LastName = 'LastName',
  MiddleName = 'MiddleName',
}
