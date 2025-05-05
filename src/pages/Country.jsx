import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/Gcountriesapi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/ui/SearchFilter";

// Country.jsx
export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = country => {
    if (!search) return true;
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  const filterRegion = country => {
    if (filter === "all") return true;
    return country.region.toLowerCase() === filter;
  };

  const visible = countries
    .filter(searchCountry)
    .filter(filterRegion);

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {visible.map((c, i) => (
          <CountryCard country={c} key={i} />
        ))}
      </ul>
    </section>
  );
};
