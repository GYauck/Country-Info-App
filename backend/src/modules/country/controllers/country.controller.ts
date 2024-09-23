import {
  Body,
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

  @Post('/population/')
  async getPopulationData(@Body() countryName: string) {
    if (!countryName || countryName === 'undefined') {
      throw new NotFoundException('Valid country name is required');
    }

    const countryInfo =
      await this.countryService.getPopulationData(countryName);
    if (!countryInfo) {
      throw new NotFoundException(`Country with name ${countryName} not found`);
    }
    return countryInfo;
  }
}
