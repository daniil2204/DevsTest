import { ICountry } from "@/types/countries";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import styles from "./BourderCountry.module.scss";

const BourderCountry = (country: ICountry) => {
  return (
    <div className={styles.container}>
      <Link href={`${ROUTES.COUNTRY}/${country.countryCode}`}>
        Country - {country.officialName}
      </Link>
    </div>
  );
};

export default BourderCountry;
