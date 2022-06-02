import useBreadcrumbs from "hooks/useBreadcrumbs";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const breadcrumbs = useBreadcrumbs();

  return <>Home</>;
};

export default Home;
