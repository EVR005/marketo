"use client";

import { Header } from "../../_components/Header";
import { useEffect, useState } from "react";
import { GetMarketoLandingPageDetails } from "../APICall";
import {
  infoSectionType,
  MarketoLandingPageDetailsType2,
} from "../../component_types/component_types";
import { IntroRichtextWithImage } from "../../_components/IntroRichtextWithImage";
import { InfoSection } from "../../_components/InfoSection";
import { ContactUsCard } from "../../_components/ContactUsCard";
import { FooterLoaded } from "../../_components/FooterLoaded";
import { Skeleton } from "src/components/ui/skeleton";
import { redirect, useParams } from "next/navigation";
import { Params } from "next/dist/server/request/params";

const Page = () => {
  const params: Params = useParams();
  const [marketoLandingPageDetails, setMarketoLandingPageDetails] =
    useState<MarketoLandingPageDetailsType2>(
      {} as MarketoLandingPageDetailsType2
    );
  const [isLoading, setIsLoading] = useState(true);

  const LoadData = async () => {
    const opco = params?.opco as string;
    const tempdata: MarketoLandingPageDetailsType2 =
      await GetMarketoLandingPageDetails(opco);
    console.log(tempdata, "hii");
    if (Object.keys(tempdata).length === 0) {
      redirect("/pagenotfound");
    }
    setMarketoLandingPageDetails(tempdata);
    setIsLoading(false);
  };

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <>
      {isLoading && (
        <div>
          <Skeleton className="w-full h-full" />
        </div>
      )}
      {!isLoading && (
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
          <FooterLoaded
            FooterLoadedDetails={marketoLandingPageDetails?.footer}
          />
        </div>
      )}
    </>
  );
};

export default Page;
