import React from "react";
import {Route, Switch} from "react-router-dom"
import NavTab from "./components/NavTab";
import Imprint from "./components/imprint";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route component={Imprint} path="/imprint"/>
                <Route component={NavTab} path="/" />
            </Switch>
        </div>
    );
}

export default Router
