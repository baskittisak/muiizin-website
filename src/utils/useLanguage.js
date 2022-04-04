import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const language = useMemo(() => {
    return i18n.language === "en" ? "en" : "th";
  }, [i18n.language]);

  const onChangeLanguage = useCallback(
    (language) => {
      i18n.changeLanguage(language);
    },
    [i18n]
  );

  return { language, onChangeLanguage };
};
