import { ICountryResponce } from "@/types/countries";
import Image from "next/image";
import styles from "./Country.module.scss";
import BourderCountry from "../BorderCountry/BourderCountry";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Country = ({ data, flag, population }: ICountryResponce) => {
  return (
    <div className={styles.container}>
      <p>Country - {data.officialName}</p>
      <Image
        width={100}
        height={70}
        src={flag}
        alt={`Flag of ${data.officialName}`}
      />
      <div>
        <p>Borders</p>
        {data.borders?.map((item) => (
          <BourderCountry
            key={item.countryCode}
            borders={item.borders}
            commonName={item.commonName}
            countryCode={item.countryCode}
            officialName={item.officialName}
            region={item.region}
          />
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={population}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Country;
