import { memo } from "react";
import PageRoutes from "./resource/PageRoutes";
import { SWRConfig } from "swr";
import { fetcher } from "./utils/swrService";

const App = () => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        errorRetryCount: 2,
        fetcher,
      }}
    >
      <PageRoutes />
    </SWRConfig>
  );
};

export default memo(App);
