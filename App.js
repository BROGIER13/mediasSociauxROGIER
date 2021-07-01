import React from 'react'
import './App.css';
import AppGallery from "./Components/AppGallery";
import AppToken from "./Components/AppToken";
import Home from "./Components/Home";
import { Route, Link, BrowserRouter as Router} from "react-router-dom";

const App = () => {
    return (
        <>
            <header>
                <h1>Création de mon application avec l'API Basic Display</h1>
            </header>
            <Router>
                <div>
                    <hr/>
                    <ul>
                        <li>
                            <Link className={"link"} to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link className={"link"} to="/token">Choix du token</Link>
                        </li>
                        <li>
                            <Link className={"link"} to="/gallery">Affichage de la galerie</Link>
                        </li>
                    </ul>
                    <hr/>
                        <Route exact path="/" component={Home} />
                        <Route path="/token" component={AppToken} />
                        <Route path="/gallery" component={AppGallery} />
                </div>
            </Router>
            <footer>
                Projet final de Médias Sociaux et Big Data - ROGIER Bastien - 5A Alternant 2020/2021
                <p>
                    CopyRight © BR
                </p>
            </footer>
        </>
    );
}

export default App;