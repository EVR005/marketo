"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { GetFestivals } from "./APICall";
import { FestivalCard } from "../_components/FestivalCard";
import { FestivalCardType } from "../component_types/component_types";

const LandingPage = () => {
  const [festivals, setFestivals] = useState<FestivalCardType[]>([]);

  // const { register, handleSubmit } = useForm();
  const onChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    const tempdata: FestivalCardType[] = await GetFestivals(locale);
    setFestivals(tempdata);
  };

  const LoadData = async () => {
    const tempdata: FestivalCardType[] = await GetFestivals("na");
    console.log(tempdata);
    setFestivals(tempdata);
  };

  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
      <div className="grid grid-rows-12">
        <div className="flex items-end justify-end row-span-1">
          <label>Choose locale : </label>
          <select onChange={onChange}>
            <option value="na">North America</option>
            <option value="eu">Europe</option>
          </select>
        </div>
        <div className="px-3 row-span-11 flex flex-wrap items-center justify-center gap-4">
          {festivals.map((festival: FestivalCardType, festkey: number) => {
            return <FestivalCard key={festkey} festival={festival} />;
          })}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
