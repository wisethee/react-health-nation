import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main
      id="main"
      className="main flex flex-col relative overflow-hidden"
      role="main"
    >
      <Outlet />
    </main>
  );
};

export default Main;
