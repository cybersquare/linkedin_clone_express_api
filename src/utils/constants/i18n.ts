import AR_Translation from "../i18n/ar";
import EN_Translation from "../i18n/en";
export type WebLanguageType = {
        key: string,
        name: string,
        translations: any,
}

export const AppDefaults = {
    language: "en",
    availableCountry: "ar",
};

export const WebLanguages : WebLanguageType[] = [
    {
      key: "en",
      name: "English",
      translations: EN_Translation,
    },
    {
      key: "ar",
      name: "Arabic",
      translations: AR_Translation,
    },
];
  