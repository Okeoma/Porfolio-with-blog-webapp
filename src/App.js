import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

//Components
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="max-w-none mx-auto pt-20 pl-10 pr-10" 
      style={{
        background: "linear-gradient(to bottom, #F0F4FD, #A1A3BA)",
      }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Articles-list" component={ArticlesList} />
          <Route exact path="/Article/:name" component={Article} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
