"use client";

import { Header } from "../_components/Header";
import { useEffect, useState } from "react";
import { GetMarketoLandingPageDetails } from "./APICall";
import {
  infoSectionType,
  MarketoLandingPageDetailsType2,
} from "../component_types/component_types";
import { IntroRichtextWithImage } from "../_components/IntroRichtextWithImage";
import { InfoSection } from "../_components/InfoSection";
import { ContactUsCard } from "../_components/ContactUsCard";
import { FooterLoaded } from "../_components/FooterLoaded";

const Page = () => {
  const [marketoLandingPageDetails, setMarketoLandingPageDetails] =
    useState<MarketoLandingPageDetailsType2>(
      {} as MarketoLandingPageDetailsType2
    );

  const LoadData = async () => {
    const tempdata: MarketoLandingPageDetailsType2 =
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
      <IntroRichtextWithImage
        IntroRichTextWithImageDetails={
          marketoLandingPageDetails?.introRichtextWithImage
        }
      />
      {marketoLandingPageDetails?.infoSections &&
        marketoLandingPageDetails?.infoSections.map(
          (InfoSectionDetails: infoSectionType, infokey: number) => {
            return (
              <InfoSection
                key={infokey}
                InfoSectionDetails={InfoSectionDetails}
              />
            );
          }
        )}
      <ContactUsCard
        ContactUsCardDetails={marketoLandingPageDetails?.contactUsCard}
      />
      <FooterLoaded FooterLoadedDetails={marketoLandingPageDetails?.footer} />
    </div>
  );
};

export default Page;
