import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";
import MainFooter from "../MainFooter";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
};

export default RootLayout;
