import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
function App() {

  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipies" element={<Recipes/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
      <Footer/>
      </Router>
  );
}

export default App;
