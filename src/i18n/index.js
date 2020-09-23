const NextI18Next = require("next-i18next").default;
const path = require("path");

const NextI18NextInstance = new NextI18Next({
  otherLanguages: ["de", "ru", "ua", "fr"],
  preload: ["de", "ru", "ua", "fr", "en"],
  localePath: path.resolve("./public/static/locales"),
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  keySeparator: "."
});

export default NextI18NextInstance;
export const {
  appWithTranslation,
  withTranslation,
  useTranslation,
  i18n
} = NextI18NextInstance;
