import { memo, useCallback } from "react";
import { useLanguage } from "../../utils/useLanguage";
import { Space } from "antd";
import Typography from "../Typography";

const Translation = () => {
  const { language, onChangeLanguage } = useLanguage();

  const propMenu = useCallback(
    (active) => ({
      fontSize: 28,
      lineHeight: 30,
      fontWeight: 700,
      color: active ? "#044700" : "#8FA29A",
    }),
    []
  );

  return (
    <Space size={10}>
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
