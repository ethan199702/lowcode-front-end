import { useEffect } from "react";
import nprogress from "nprogress";

const NProgress = () => {
  useEffect(() => {
    nprogress.configure({ showSpinner: false });
    nprogress.start();
    return () => {
      nprogress.done();
    };
  }, []);

  return null;
};

export default NProgress;
