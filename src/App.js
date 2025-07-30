import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./consts";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

// const Shop = () => {
//   return <div>THIS IS THE SHOP PAGE</div>;
// };

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.AUTH} element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
