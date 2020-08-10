import React from 'react';
import { Header, Footer } from './components'
import './app.scss';


function App() {

  const users = [
    {name: "Mehmet", surname: "Yılmaz", city: "İstanbul"},
    {name: "Erol", surname: "Ülgü", city: "Hatay"},
    {name: "Emral", surname: "Yılmaz", city: "İstanbul"},
  ];

  return (
    <div className="App">

      <Header title="Kullanıcı Listesi -" />

      <ul>
        { users.map((i) => <li>{i.name}</li>) } 
       </ul>

       <Footer />
    </div>
  );

}

export default App;
