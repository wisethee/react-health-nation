import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./core/layout/header/header";
import Footer from "./core/layout/footer/footer";
import Main from "./core/layout/main/main";
import Auth from "./routes/auth/auth";
import NotFound from "./routes/not-found/not-found";
import Home from "./routes/home/home";
import Experimental from "./routes/experimental/experimental";
import Donate from "./routes/donate/donate";

const App = () => {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/experimental" element={<Experimental />} />
          <Route path="/donate/:id" element={<Donate />} />
        </Route>
      </Routes>

      <Footer />
    </Fragment>
  );
};

export default App;
