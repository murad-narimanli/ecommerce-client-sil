import Layout from "./components/layout/Layout"
import Routing from "./components/layout/Routing";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
