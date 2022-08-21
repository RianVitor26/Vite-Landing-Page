import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/Home/index'
import { WhatIs } from './pages/WhatIs/index';
import { Create } from './pages/Create/index';
  
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatis" element={<WhatIs />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  )
}

