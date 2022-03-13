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
import Content from "./components/content";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/ff" element={<Home/>} />
          <Route  path="/" element={<SearchResult />}/>
          <Route   path="/gg" element={<SearchCategory/>} />
          <Route  path="/qd" element={<Contact/>} />
          <Route  path="/ggg" element={<Trends/>} />
          <Route  path="/fdtt" element={<HotTopics/>} />
          <Route path="/sg" element={<Content/>}/>

          <Route exact path="/a" element={<List />} />
          <Route exact path="/editor" element={<Editor />} />
        
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
