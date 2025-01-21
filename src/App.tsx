import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
const App = () => {
  return (
    <>
      <Suspense fallback={<div>...loaging</div>}>{useRoutes(routes)}</Suspense>
    </>
  );
};

export default App;

