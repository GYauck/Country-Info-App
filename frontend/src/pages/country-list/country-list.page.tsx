import { useGetAllCountries } from "@/queries/useCountries";
import { Badge } from "@/components/ui/badge";
import { getNavigatePath, PublicPaths } from "@/routes";
import { useNavigate } from "react-router-dom";

const CountryListPage = (): JSX.Element => {
  const { data: countries = [] } = useGetAllCountries();

  const navigate = useNavigate();

  const navigateToCountryDetail = (countryCode: string) => {
    navigate(
      getNavigatePath(PublicPaths.COUNTRY_DETAILS, {
        countryCode: countryCode,
      })
    );
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-10 mx-10">
      {countries.map((country) => (
        <Badge
          key={country.name}
          className="m-1 w-44 bg-slate-600"
          onClick={()=> navigateToCountryDetail(country.countryCode)}
        >
          {country.name}
        </Badge>
      ))}
    </div>
  );
};

export default CountryListPage;
