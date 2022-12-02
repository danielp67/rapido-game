import './App.css';
import MainBoard from "./Frontend/MainBoard";
import {ThemeContext, Theme} from "./Frontend/ThemeContext";
import React, {useReducer, useState} from "react";
import Modal from "./Frontend/Modal";


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
        if(props)
        {
            this.setState({...this.state, name:"" })
        }

    }

    render() {

        return (
            <ThemeContext.Provider value={this.state}>
                <div className={`container-fluid vh-100 ${this.state.theme.className} ${this.state.name}`}>


                    <div className={"overlay"}>
                        <div className="card launch-card text-center my-auto">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Score</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Rapido game</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary" data-bs-target="#exampleModalToggle2"
                                        data-bs-toggle="modal">
                                    <i className="fa fa-cog" aria-hidden="true"/> Settings
                                </button>

                                <button className="btn btn-primary" onClick={() => this.setClassName(true)}>
                                    <i className="fa fa-play" aria-hidden="true"/> Start
                                </button>

                            </div>

                        </div>
                    </div>
                    <MainBoard/>
                </div>

            </ThemeContext.Provider>
        );
    }
}

export default App;
