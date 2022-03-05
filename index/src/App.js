import Editor from "./components/editor.component"
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import List from "./components/listArticle.component";
import Home from "./components/Home";
import Navbar from "./components/Nabar";
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResult";
import SearchCategory from "./components/SearchPerCategory";
import Contact from "./components/Contact";
import Trends from "./Trends";
import HotTopics from "./HotTopics";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/search" element={<SearchResult />}/>
          <Route   path="/gg" element={<SearchCategory/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/trends" element={<Trends/>} />
          <Route  path="/hottopic" element={<HotTopics/>} />


        <Route exact path="/a" element={<List />} />
          <Route exact path="/editor" element={<Editor />} />
        
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
