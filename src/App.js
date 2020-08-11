import React from "react";
import { Header, Footer } from "./components";
import "./app.scss";
import UserManagement from "./components/UserManagement";

function App() {

  return (
    <div className="App">
      <Header title="Kullanıcı Listesi -" />

      <UserManagement />

      <Footer />
    </div>
  );
}

export default App;
