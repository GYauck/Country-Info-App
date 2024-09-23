import { Module } from '@nestjs/common';
import { CountryService } from './services/country.service';
import { CountryController } from './controllers/country.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
