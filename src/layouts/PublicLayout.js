import React from "react";
import { Header, Footer, Sidebar } from "../components";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col"><Sidebar /></div>
          <div className="col col col-lg-10">{children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PublicLayout;
