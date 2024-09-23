import { axiosFactory } from "./axios.instance";
import {
  CountryDetailDTO,
  CountryFlagDTO,
  CountryNameDTO,
  CountryPopulationDTO,
} from "../dtos/country.dto";

export interface CountryServiceDefinition {
  findAll: () => Promise<CountryNameDTO[]>;
  findById: (countryCode?: string) => Promise<CountryDetailDTO>;
  findCountryPopulation: (
    countryName?: string
  ) => Promise<CountryPopulationDTO>;
  findCountryFlag: (countryName?: string) => Promise<CountryFlagDTO>;
}

export const CountryService = (): CountryServiceDefinition => {
  const axiosInstance = axiosFactory("/countries");

  const findAll = async (): Promise<CountryNameDTO[]> => {
    const response = await axiosInstance.get("");
    return response.data;
  };

  const findById = async (countryCode?: string): Promise<CountryDetailDTO> => {
    const response = await axiosInstance.get(`/${countryCode}`);
    return response.data;
  };

  const findCountryPopulation = async (
    countryName?: string
  ): Promise<CountryPopulationDTO> => {
    const response = await axiosInstance.post(`/population/${countryName}`);
    return response.data;
  };

  const findCountryFlag = async (
    countryName?: string
  ): Promise<CountryFlagDTO> => {
    const response = await axiosInstance.post(`/flag/${countryName}`);
    return response.data;
  };

  return {
    findAll,
    findById,
    findCountryPopulation,
    findCountryFlag,
  };
};
