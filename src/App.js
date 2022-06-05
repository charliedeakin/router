// import { Link } from "react-router-dom";

import "./App.css";

// import { getInvoices } from "./data";
import ToggleDisplay from "./components/ToggleDisplay";


function App() {
  // let invoices = getInvoices();
  return (
    <div className="App">
      
      <ToggleDisplay />
      {/* <main>
        {invoices.map(({ number, name }) => (
          <>
          <Link key={number} to={`/invoices/${number}`}>
            {name}
          </Link>{" "}
          </>
        ))}
      </main> */}
    </div>
  );
}

export default App;
