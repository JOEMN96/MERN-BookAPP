import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBookForm from "./components/Pages/AddNewBook";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addBook">
            <AddBookForm />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
