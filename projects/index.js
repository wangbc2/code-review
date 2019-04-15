import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

const Links = () => (
    <nav>
        <Link to="home">Home</Link>
        <Link to="menu">Menu</Link>
    </nav>
);

const Home = () => (
    <h1>Home</h1>
);

const Menu = (match) => {

    return (
        <div>
            <Link to="/menu/food">Food</Link>
            <Link to="/menu/drink">Drinks</Link>
            <Link to="/menu/sides">Sides</Link>
        </div>
    );
};

const App = () => (

    <Router>
        <div>
            <Links />
            <Route path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route
                path="/menu/:subitem"
                render={(match) => {
                    return (
                        <h2>{match.match.params.subitem}</h2>
                    );
                }}
            />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));