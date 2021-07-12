import "./App.css";
import { Route, Switch } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";
import { TrenddingGifsContext } from "./context/TrenddingContext";
import { Authe } from "./context/auth";
import PrivateRoute from "./components/privateRoute/index";
//components
import Menu from "./components/menu/menu";
// import pages

import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/details";
import Login from "./pages/Login";
import Register from "./pages/register"
function App() {

  return (
    <>
      <header className="App-header">
        <Menu />
      </header>

      <section className="h-5/6">
        <GifsContextProvider>
          <TrenddingGifsContext>
            <Authe>
              <Switch>
                <Route component={Home} path="/" />
                <Route component={Search} path="/search/:keyword" />
                <PrivateRoute
                  component={Details}
                  path="/details/:id"
                ></PrivateRoute>
                <Route component={Register} path="/register" />
                <Route component={Login} path="/login" />
              </Switch>
            </Authe>
          </TrenddingGifsContext>
        </GifsContextProvider>
      </section>
    </>
  );
}

export default App;
