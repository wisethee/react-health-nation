import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./core/layout/header/header";
import Footer from "./core/layout/footer/footer";
import Main from "./core/layout/main/main";
import Auth from "./routes/auth/auth";
import NotFound from "./routes/not-found/not-found";
import Home from "./routes/home/home";
import Donate from "./routes/donate/donate";
// import Animate from "./core/components/animate/animate"
import Checkout from "./routes/checkout/checkout";
import AppModal from "./core/components/modal/modal.component";

const App = () => {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/donate/:id" element={<Donate />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>

      <Footer />
      {/* <Animate /> */}
    </Fragment>
  );
};

export default App;
