import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main id="main" role="main">
      <Outlet />
    </main>
  );
};

export default Main;
