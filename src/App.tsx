import { useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Footer from "./components/footer/";
import Navbar from "./components/navbar/";

import Nothing from "./pages/nothing";

import { store } from "./store";
import { authActions } from "./store/auth";

import AuthRoute from "./common/HOC/authRoute";

function App() {
        useEffect(() => {
                store.dispatch(authActions.resetAuth());
        });

        return (
                <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <div className="flex-1 h-auto">
                                <Switch>
                                        <Route path="/">
                                                <Nothing />
                                        </Route>
                                        <AuthRoute>
                                                <Route path="/needtologin">
                                                        <h1>If you can read this one, you are already login</h1>
                                                </Route>
                                        </AuthRoute>
                                </Switch>
                        </div>
                        <Footer />
                </div>
        );
}

export default App;
