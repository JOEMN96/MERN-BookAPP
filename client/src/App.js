import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBookForm from "./components/Pages/AddNewBook";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addBook">
            <AddBookForm />
          </Route>
        </>
      </Switch>
    </Router>
  );
}

export default App;
