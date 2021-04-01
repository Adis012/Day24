import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        setMyStorage;
        // Cookie 
        document.cookie = "year=2021";

        // Local Storage
        localStorage.setItem('Paragon', 'yes, but Arena first');

        // Session Storage
        sessionStorage.setItem('fronted', 'React');

        // remove all
        localStorage.clear();

    }
    render() {
        return (
            <div>className="App"</div>
        );
    }
}           

console.log(document.cookie, localStorage, sessionStorage);
export default App;
