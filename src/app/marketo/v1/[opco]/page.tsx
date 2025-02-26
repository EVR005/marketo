"use client";

import { Header } from "../../../_components/Header";
import { useEffect, useState } from "react";
import { GetMarketoLandingPageDetails } from "../APICall";
import { InformationCardsGallery } from "../../../_components/InformationCardsGallery";
import { MainImageCard } from "../../../_components/MainImageCard";
import { CareersCard } from "../../../_components/CareersCard";
import { Footer } from "../../../_components/Footer";
import { IntroRichtext } from "../../../_components/IntroRichtext";
import { MarketoLandingPageDetailsType1 } from "../../../component_types/component_types";
import { Skeleton } from "src/components/ui/skeleton";
import { useParams, redirect } from "next/navigation";
import { Params } from "next/dist/server/request/params";
import { HeroBanner } from "src/app/_components/HeroBanner";
import Script from "next/script";

const Page = () => {
  const params: Params = useParams();

  const [marketoLandingPageDetails, setMarketoLandingPageDetails] =
    useState<MarketoLandingPageDetailsType1>(
      {} as MarketoLandingPageDetailsType1
    );

  const [isLoading, setIsLoading] = useState(true);

  const LoadData = async () => {
    const opco = params.opco as string;
    const tempdata: MarketoLandingPageDetailsType1 =
      await GetMarketoLandingPageDetails(opco);
    if (Object.keys(tempdata).length === 0) {
      redirect("/pagenotfound");
    }
    console.log(tempdata);
    setMarketoLandingPageDetails(tempdata);
    setIsLoading(false);
  };

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <>
      {isLoading && (
        <div id="loading">
          <Skeleton className="w-full h-full" />
          <div className="mt-12 hidden" id="marketoform"></div>
        </div>
      )}
      {!isLoading && (
        <div>
          <Header HeaderDetails={marketoLandingPageDetails?.header} />
          <HeroBanner
            HeroBannerDetails={marketoLandingPageDetails?.heroBanner}
          />
          <IntroRichtext
            IntroRichTextDetails={marketoLandingPageDetails?.introRichtext}
          />
          <InformationCardsGallery
            informationCardsDetails={
              marketoLandingPageDetails?.informationCards
            }
          />
          <MainImageCard
            MainImageCardDetails={marketoLandingPageDetails?.mainImageCard}
          />
          <CareersCard
            CareersDetails={marketoLandingPageDetails?.careersCard}
          />
          <div className="mt-12" id="marketoform"></div>
          <Footer FooterDetails={marketoLandingPageDetails?.footer} />
          <Script
            src={marketoLandingPageDetails?.marketoFormLaunchScriptUrl}
            strategy="afterInteractive"
            onLoad={() => {
              function moveFormElement(
                tagname: string,
                targetContainerId: string
              ) {
                const element = document.getElementsByTagName(
                  tagname
                )[0] as HTMLElement;
                const targetContainer =
                  document.getElementById(targetContainerId);

                if (element && targetContainer) {
                  targetContainer.appendChild(element);
                  element.style.display = "block";
                }
              }
              moveFormElement("form", "marketoform");
            }}
          ></Script>
        </div>
      )}
    </>
  );
};

export default Page;
