import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
