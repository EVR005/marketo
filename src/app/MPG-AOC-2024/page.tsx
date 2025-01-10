"use client";

import { Header } from "../_components/Header";
import { useEffect, useState } from "react";
import { GetMarketoLandingPageDetails } from "./APICall";
import { InformationCardsGallery } from "../_components/InformationCardsGallery";
import { MainImageCard } from "../_components/MainImageCard";
import { CareersCard } from "../_components/CareersCard";
import { Footer } from "../_components/Footer";
import { IntroRichtext } from "../_components/IntroRichtext";
import { MarketoLandingPageDetailsType1 } from "../component_types/component_types";

const Page = () => {
  const [marketoLandingPageDetails, setMarketoLandingPageDetails] =
    useState<MarketoLandingPageDetailsType1>(
      {} as MarketoLandingPageDetailsType1
    );

  const LoadData = async () => {
    const tempdata: MarketoLandingPageDetailsType1 =
      await GetMarketoLandingPageDetails();
    console.log(tempdata);
    setMarketoLandingPageDetails(tempdata);
  };

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div>
      <Header HeaderDetails={marketoLandingPageDetails?.header} />
      <IntroRichtext
        IntroRichTextDetails={marketoLandingPageDetails?.introRichtext}
      />
      <InformationCardsGallery
        informationCardsDetails={marketoLandingPageDetails?.informationCards}
      />
      <MainImageCard
        MainImageCardDetails={marketoLandingPageDetails?.mainImageCard}
      />
      <CareersCard CareersDetails={marketoLandingPageDetails?.careersCard} />
      <Footer FooterDetails={marketoLandingPageDetails?.footer} />
    </div>
  );
};

export default Page;
