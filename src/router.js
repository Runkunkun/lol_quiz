import React from "react";
import {Route, Switch} from "react-router-dom"

import ItemQuiz from "./components/ItemQuiz";
import NavTab from "./components/NavTab";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route component={ItemQuiz} path="/item-quiz"/>
                <Route component={NavTab} path="/" />
            </Switch>
        </div>
    );
}

export default Router
