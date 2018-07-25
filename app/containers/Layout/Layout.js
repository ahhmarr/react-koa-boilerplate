import React from "react";
import Aux from "../../hoc/Aux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
const Layout = props => {
  return (
    <Aux>
      <Header />
      <Main>Hello world</Main>
      <Footer />
    </Aux>
  );
};
export default Layout;
