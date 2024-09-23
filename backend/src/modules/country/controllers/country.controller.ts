import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CountryService } from '../services/country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  getAvailableCountries() {
    return this.countryService.getAvailableCountries();
  }

  @Get(':countryCode')
  async getCountryInfo(@Param('countryCode') countryCode: string) {
    if (!countryCode || countryCode === 'undefined') {
      throw new NotFoundException('Valid country code is required');
    }

    const countryInfo = await this.countryService.getCountryData(countryCode);
    if (!countryInfo) {
      throw new NotFoundException(`Country with code ${countryCode} not found`);
    }
    return countryInfo;
  }

  @Post('/population/:countryCode')
  async getPopulationData(@Param('countryCode') countryName: string) {
    const countryInfo =
      await this.countryService.getPopulationData(countryName);

    return countryInfo;
  }

  @Post('/flag/:countryCode')
  async getCountryFlag(@Param('countryCode') countryName: string) {
    const countryFlag = await this.countryService.getCountryFlag(countryName);

    return countryFlag;
  }
}
