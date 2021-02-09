import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={Info} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
