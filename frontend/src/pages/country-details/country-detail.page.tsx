import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetCountryDetail,
  useGetCountryPopulation,
} from "@/queries/useCountries";
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, CartesianGrid } from "recharts";

const CountryDetailPage = (): JSX.Element => {
  const { countryCode } = useParams();

  const { data: country } = useGetCountryDetail(countryCode?? '');
  const { data: population } = useGetCountryPopulation(
    country?.commonName ?? ""
  );

  const chartConfig = {
    value: {
      label: "Quantity",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col gap-20 mt-10 items-center justify-center">
      <h1 className="font-bold text-4xl">{country?.officialName}</h1>
      <div>
        <Table className="border-2">
          <TableCaption>List of bordering countries.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Common Name</TableHead>
              <TableHead>Country Code</TableHead>
              <TableHead>Official Name</TableHead>
              <TableHead className="text-right">Region</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {country?.borders.map((borderCountry) => (
              <TableRow key={borderCountry.commonName}>
                <TableCell className="font-medium">
                  {borderCountry.commonName}
                </TableCell>
                <TableCell className="font-medium">
                  {borderCountry.countryCode}
                </TableCell>
                <TableCell>{borderCountry.officialName}</TableCell>
                <TableCell>{borderCountry.region}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border-5">
        <ChartContainer config={chartConfig} className="h-[900px] w-full">
          <BarChart accessibilityLayer data={population?.data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.toString()}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
              fill="rgb(37 99 235)"
              radius={4}
              barSize={10}
            />{" "}
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CountryDetailPage;
