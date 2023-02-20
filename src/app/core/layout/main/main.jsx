import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main id="main" className="main flex flex-col" role="main">
      <Outlet />
    </main>
  );
};

export default Main;
