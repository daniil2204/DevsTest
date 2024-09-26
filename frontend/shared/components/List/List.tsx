"use client";
import { countriesService } from "@/shared/services/countries.service";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";
import Link from "next/link";
import styles from "./List.module.scss";
import { useState } from "react";
import { ROUTES } from "@/utils/routes";

const List = () => {
  const [country, setCountry] = useState<string>("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      return await countriesService.getAllCountries();
    },
  });
  const inputChange = (search: string) => {
    setCountry(search.toLowerCase());
  };
  return (
    <div className={styles.listPage}>
      <div className={styles.listHead}>
        <p>List of countries</p>
        <input
          onChange={(e) => inputChange(e.target.value)}
          placeholder="Find country"
        />
      </div>
      {isLoading && <Spinner />}
      {data && !isError && (
        <div className={styles.list}>
          {data
            .filter((item) => item.name.toLowerCase().includes(country))
            .map((item) => {
              return (
                <Link
                  className={styles.link}
                  href={`${ROUTES.COUNTRY}/${item.countryCode}`}
                  key={item.name}
                >
                  {item.name.length > 10
                    ? `${item.name.slice(0, 10)}...`
                    : item.name}
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default List;
