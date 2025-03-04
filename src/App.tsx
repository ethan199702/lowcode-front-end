import { useRoutes } from "react-router-dom";
import routes from "@/router";
const App = () => {
  //@ts-ignore
  return <>{useRoutes(routes)}</>;
};

export default App;

