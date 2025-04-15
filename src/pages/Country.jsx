import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/Gcountriesapi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/layout/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      // console.log(res.data)
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((currCountry, idx) => {
          return <CountryCard country={currCountry} key={idx} />;
        })}
      </ul>
    </section>
  );
};
