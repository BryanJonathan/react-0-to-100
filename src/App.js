import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./consts";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <div>THIS IS THE SHOP PAGE</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
