import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '@/pages/Home';
import { Route as PageRoute } from "@/utils/constants"
import { About } from '@/pages/About';
import { Navbar } from "@/components/Navbar";
import { CausesPage } from "@/pages/causes";
import { Footer } from "@/components/Footer";

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

        <Footer />

      </div>
    </BrowserRouter>
  );
};
