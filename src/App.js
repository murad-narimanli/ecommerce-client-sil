import Layout from "./components/layout/Layout"
import Routing from "./components/layout/Routing";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from "../src/store"



function App() {
  return (
    // <Provider store={store}>

    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
      </BrowserRouter>
   
    </div>
    // </Provider>

  );
}

export default App;
