import React, {lazy, Suspense} from "react";
import {Route, Redirect} from "react-router-dom"

const Home = lazy(() => import('../module/home/view'))
const Cotaloge = lazy(() => import('../module/cotaloge/view'))

const Router = () => {
    return (
        <div>
            <Route path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="/home">
                <Suspense fallback={<div>lOADING</div>}>
                    <Home/>
                </Suspense>
            </Route>
            <Route path="/cotaloge">
                <Suspense fallback={<div>lOADING</div>}>
                    <Cotaloge/>
                </Suspense>
            </Route>
        </div>
    )
}

export default Router