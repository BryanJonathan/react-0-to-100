import Directory from "./components/directory/directory.component";
import { categories } from "./consts";

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
