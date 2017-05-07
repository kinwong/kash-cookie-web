export interface IExchange {
  country: string;
  countryCode: string;
  mic: string;
  operatingMic: string;
  os: string;
  description: string;
  acronym: string;
  city: string;
  website: string;
  statusDate: string;
  status: string;
  creationDate: string;
  comments: string;
}

export interface ICurrency {
  country: string;
  name: string;
  code: string;
  numbericCode: string;
  minorUnit: string;
  withdrawalDate: string;
  remark: string;
}

export interface ISpot {
  ric: string;
  timestamp: Date;
  value: number;
}
