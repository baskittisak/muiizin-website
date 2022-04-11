import { memo, useCallback } from "react";
import { useLanguage } from "../../utils/useLanguage";
import { useResponsive } from "../../utils/useResponsive";
import { Space } from "antd";
import Typography from "../Typography";

const Translation = () => {
  const { language, onChangeLanguage } = useLanguage();
  const { md } = useResponsive();

  const propMenu = useCallback(
    (active) => ({
      fontSize: md ? 20 : 28,
      lineHeight:md ? 22 : 30,
      fontWeight: 700,
      color: active ? "#044700" : "#8FA29A",
    }),
    [md]
  );

  return (
    <Space size={md ? 8 : 10}>
      <Typography
        {...propMenu(language === "en")}
        onClick={() => onChangeLanguage("en")}
      >
        EN
      </Typography>
      <Typography {...propMenu(false)}>|</Typography>
      <Typography
        {...propMenu(language === "th")}
        onClick={() => onChangeLanguage("th")}
      >
        TH
      </Typography>
    </Space>
  );
};

export default memo(Translation);
