import { Route, Switch } from "react-router-dom";

function App() {
        return (
                <div className="flex flex-col">
                        <Switch>
                                <Route path="/">
                                        <h1 className="text-5xl font-semibold text-blue-500">
                                                Noting here, write you code
                                        </h1>
                                </Route>
                        </Switch>
                </div>
        );
}

export default App;
