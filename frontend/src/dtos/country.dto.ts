export interface CountryNameDTO {
  countryCode: string;
  name: string;
}
export interface CountryDetailDTO {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: [
    {
      commonName: string;
      countryCode: string;
      officialName: string;
      region: string;
    }
  ];
}

export interface CountryPopulationDTO {
  data: [
    {
      year: number;
      value: number;
    }
  ];
}

export interface CountryFlagDTO {
  data: {
    flag: string;
  };
}
