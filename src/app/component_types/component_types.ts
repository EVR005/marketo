interface Richtext {
  html: string;
  markdown: string;
  plaintext: string;
  json: Array<{
    nodeType: string;
    content: Array<{
      nodeType: string;
      value: string;
    }>;
  }>;
}

interface Image {
  _path: string;
}

export interface InformationCardType {
  image: Image;
  description: Richtext;
  linkName: string | null;
  linkUrl: string | null;
}

export interface InformationCardWithoutImageType {
  image: Image | null;
  description: Richtext;
  linkName: string | null;
  linkUrl: string | null;
}

export interface FooterType {
  links: Richtext;
  logo: Image;
  logoLinkUrl: string;
}

export interface HeaderType {
  logo: Image;
  linkName: string | null;
  linkUrl: string | null;
  logoLinkUrl: string;
}

export interface IntroRichtextType {
  introRichtext: Richtext;
}

export interface MarketoLandingPageDetailsType1 {
  header: HeaderType;
  introRichtext: IntroRichtextType;
  informationCards: InformationCardType[];
  mainImageCard: InformationCardType;
  careersCard: InformationCardWithoutImageType;
  footer: FooterType;
}

export interface IntroRichtextWithImageType {
  introRichtext: Richtext;
  banner: Image;
}

export interface infoSectionType {
  banner: Image;
  description: Richtext;
  heading: string;
  imageLeft: Image;
  imageRight: Image;
  linkName: string;
  linkUrl: string;
}

export interface FooterLoadedType {
  contact: Richtext;
  location: Richtext;
  otherLinks: Richtext;
  logo: Image;
  facebookLink: string;
  linkedinLink: string;
  logoLinkUrl: string;
  privacyPolicyLink: string;
  email: string;
}

export interface MarketoLandingPageDetailsType2 {
  header: HeaderType;
  introRichtextWithImage: IntroRichtextWithImageType;
  infoSections: infoSectionType[];
  contactUsCard: InformationCardType;
  footer: FooterLoadedType;
}

export interface FestivalCardType {
  description: Richtext;
  festivalDate: string;
  festivalName: string;
  picture: Image;
}
