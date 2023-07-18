import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/layout";
import Main from "./components/pages/loginPage";
import Det from "./components/pages/detailpage";
import JobNews from "./components/pages/news";
import About from "./components/pages/about";
// import Registration from "./components/pages/registration";
import Mainpage from "./components/pages/mainpage";
import { AuthContextProvider } from "./components/context/AuthContext";
function App() {
  
  return (
    <AuthContextProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="" element={<Mainpage />} />
            <Route path="/details" element={<Det />} />
            <Route path="/about" element={<About />}/>
            <Route path="/loginPage" element={<Main />} />
            <Route path="/news" element={<JobNews />} />
          </Routes>
        </Layout>
      </div>
    </AuthContextProvider>
  );
}

export default App;
