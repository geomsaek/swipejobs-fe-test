import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Page } from "./controllers/page";

const App = () => {

    return <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/jobs/jobId/:id">
                    <Page type="jobView" />
                </Route>
                <Route path="/jobs">
                    <Page type="jobList" />
                </Route>
                <Route path="/">
                    <Page type="profile" />
                </Route>
            </Switch>
        </Router>
    </Provider>
}

window.onload = () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
}