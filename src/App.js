import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./consts";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.AUTH} element={<Authentication />} />
        <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
