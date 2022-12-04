import './App.css';
import MainBoard from "./Frontend/MainBoard";
import {ThemeContext, Theme} from "./Shareable/ThemeContext";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === Theme.dark ? Theme.light : Theme.dark,
            }));
        };

        // L’état local contient aussi la fonction de mise à jour donc elle va
        // être passée au fournisseur de contexte
        this.state = {
            theme: Theme.light,
            toggleTheme: this.toggleTheme,
            name:"launch"
        };
    }


    setClassName = (props) => {
        console.log("test")
        if(props)
        {
            this.setState({...this.state, name:"" })
        }

    }

    render() {

        return (
            <ThemeContext.Provider value={this.state}>
                <div className={`container-fluid vh-100 ${this.state.theme.className} ${this.state.name}`}>

                    <MainBoard/>
                </div>

            </ThemeContext.Provider>
        );
    }
}

export default App;
