import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main
      id="main"
      className="main flex flex-col px-4 md:px-8 lg:px-12 xl:px-16"
      role="main"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
