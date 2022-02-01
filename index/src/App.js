import Editor from "./components/editor.component"
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import List from "./components/listArticle.component";

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path="/" element={<List />} />
        <Route exact path="/editor" element={<Editor />} />
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
