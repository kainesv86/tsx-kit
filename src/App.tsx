import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Footer from "./components/footer/";
import Navbar from "./components/navbar/";

import Nothing from "./pages/nothing";

import { store } from "./store";
import { authActions } from "./store/auth";

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
                                </Switch>
                        </div>
                        <Footer />
                </div>
        );
}

export default App;
