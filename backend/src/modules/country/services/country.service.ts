import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountryService {
  constructor(private httpService: HttpService) {}
  private readonly logger = new Logger(CountryService.name);

  getAvailableCountries() {
    return this.httpService
      .get('https://date.nager.at/api/v3/AvailableCountries')
      .pipe(map((response) => response.data));
  }

  async getCountryData(countryCode: string) {
    const country = this.httpService
      .get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
      .pipe(map((response) => response.data));

    return country;
  }

  async getPopulationData(countryName: string) {
    const requestBody = {
      country: countryName,
    };
    const { data } = await firstValueFrom(
      this.httpService.post(
        'https://countriesnow.space/api/v0.1/countries/population',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            accept: '*/*',
          },
        },
      ),
    );

    return data.data;
  }
}
