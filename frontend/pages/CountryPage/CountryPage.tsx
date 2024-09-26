"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { countriesService } from "@/shared/services/countries.service";
import Spinner from "@/shared/components/Spinner/Spinner";
import { ROUTES } from "@/utils/routes";
import Country from "@/shared/components/Country/Country";
const CountryPage = () => {
  const { code } = useParams() as {
    code: string;
  };
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: [`countryBy${code}`],
    queryFn: async () => {
      if (code) {
        return await countriesService.getInfoByCode(code);
      } else {
        router.push("/");
      }
    },
  });
  if (isError) {
    router.push(ROUTES.HOME);
  }
  return (
    <div>
      {isLoading && <Spinner />}
      <div>
        {data && (
          <Country
            data={data.data}
            flag={data.flag}
            population={data.population}
          />
        )}
      </div>
    </div>
  );
};

export default CountryPage;
