import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthRoute from "./components/routes/AuthRoute";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StripeSuccess from "./pages/stripe-success";
import StripeCancel from "./pages/stripe-cancel";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <Nav />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <AuthRoute exact path="/stripe/success" component={StripeSuccess} />
        <AuthRoute exact path="/stripe/cancel" component={StripeCancel} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
