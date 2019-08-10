import React from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './Component/Home/App';
import Contact from './Component/page/Contact';

const AppRouter = ()=>(
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact</Link>

                    </li>
                </ul>
            </nav>
            <Route path="/" exact component={App} />
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>
);

export default AppRouter;