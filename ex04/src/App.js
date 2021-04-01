import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "" };
    }
    render() {
        return (
            <div>
                <div>className="App"</div>
                <button
                type="button"
                onClick={getMyStorage}>
                </button>
            </div>

        )
    }
}
// Cookie 
document.cookie = "year=2021";

// Local Storage
localStorage.setItem('Paragon', 'yes, but Arena first');

// Session Storage
sessionStorage.setItem('fronted', 'React');

console.log(document.cookie, localStorage, sessionStorage);

export default App;
