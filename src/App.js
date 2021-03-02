import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import DetailPage from "./pages/DetailPage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={Info} exact />
        <Route
          path="/search"
          render={(props) => <SearchPage {...props} />}
          exact
        />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
