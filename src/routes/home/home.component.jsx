import Directory from "../../components/directory/directory.component";
import { CATEGORIES } from "../../consts";

const Home = () => {
  return <Directory categories={CATEGORIES} />;
};

export default Home;
