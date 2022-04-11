import { useEffect, useMemo, useState } from "react";

export const useResponsive = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
  }, []);

  const breakpointType = useMemo(() => {
    const xxl = width > 1600 ? 1 : 0;
    const xl = width <= 1600 ? 1 : 0;
    const lg = width <= 1200 ? 1 : 0;
    const md = width <= 992 ? 1 : 0;
    const sm = width <= 768 ? 1 : 0;
    const xs = width <= 576 ? 1 : 0;
    const se = height <= 580 ? 1 : 0;
    const pro = lg && height > 940 ? 1 : 0;

    return {
      width,
      height,
      xxl,
      xl,
      lg,
      md: md || pro,
      sm,
      xs,
      se,
    };
  }, [height, width]);

  return breakpointType;
};
