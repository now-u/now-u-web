import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from '@/pages/Home';
import { Route as PageRoute } from "@/utils/constants"
import { About } from '@/pages/About';
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path={PageRoute.HOME} element={<Home />} />
          <Route path={PageRoute.ABOUT} element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};
