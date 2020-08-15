import React from 'react';
import './styles.scss';
import Router from "./router";
import Header from "./components/header";

function App() {
    return (
        <div className="App">
            <Header />
            <Router/>
        </div>
    );
}

export default App;
