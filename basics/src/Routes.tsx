import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/Home/index'
import { Registration } from './pages/Registration/index';
import { Products } from './pages/Products/index';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

