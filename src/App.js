import { memo } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t: translate } = useTranslation();

  return <>{translate("welcome")}</>;
};

export default memo(App);
