import { useQuery } from "@tanstack/react-query";
import { CountryService } from "../services/country.service";

export const useGetAllCountries = () =>
  useQuery({
    queryKey: ["getAllCountries"],
    queryFn: CountryService().findAll,
  });

export const useGetCountryDetail = (countryCode: string) =>
  useQuery({
    queryKey: ["countryInfo", countryCode],
    queryFn: () => CountryService().findById(countryCode),
    enabled: !!countryCode,
  });

export const useGetCountryPopulation = (countryName: string) =>
  useQuery({
    queryKey: ["countryPopulation", countryName],
    queryFn: () => CountryService().findCountryPopulation(countryName),
    enabled: !!countryName,
  });
