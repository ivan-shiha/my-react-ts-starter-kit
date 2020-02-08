
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>*</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));