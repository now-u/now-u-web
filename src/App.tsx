import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from '@/pages/Home';
import { Route as PageRoute } from "@/utils/constants"
import { About } from '@/pages/About';
import { Navbar } from "./components/Navbar";
import { CausesPage } from "./pages/causes";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <Routes>
          <Route path={PageRoute.HOME} element={<Home />} />
          <Route path={PageRoute.ABOUT} element={<About />} />
          <Route path={PageRoute.CAUSES} element={<CausesPage/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};
