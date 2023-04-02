import Profiles from "./components/Profiles/Profiles";
import Arcade from "./components/Arcade/Arcade";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-full text-center">
      <main className="flex h-auto flex-row justify-center">
        <aside className="min-w-nav w-1/6">
          <nav className="flex h-full min-h-screen flex-col bg-cyan-400 shadow-sm shadow-teal-900 transition-all duration-75 ease-in-out">
            <div className="w-full bg-cyan-400"></div>
            <Link
              className=" w-full bg-transparent p-8 text-center font-Inter font-medium tracking-wider text-white hover:border-l-2 hover:border-cyan-700 hover:bg-cyan-500 focus:bg-cyan-800 active:shadow-inner"
              to="/"
            >
              APP
            </Link>
            <Link
              className=" w-full bg-transparent p-8 text-center font-Inter font-medium tracking-wider text-white hover:border-l-2 hover:border-cyan-700 hover:bg-cyan-500 focus:bg-cyan-800 focus:shadow-inner focus:shadow-slate-900"
              to="/Profiles"
            >
              Meet the Team
            </Link>
            <Link
              className=" w-full bg-transparent p-8 text-center font-Inter font-medium tracking-wider text-white hover:border-l-2 hover:border-cyan-700 hover:bg-cyan-500 focus:bg-cyan-800 focus:shadow-inner focus:shadow-slate-900"
              to="/Arcade"
            >
              Arcade
            </Link>
          </nav>
        </aside>

        <main className="h-full w-5/6">
          <Routes>
            <Route path="/" element={<div className="w-4/6"></div>} />
            <Route path="/Profiles" element={<Profiles />} />
            <Route path="/Arcade" element={<Arcade />} />
          </Routes>
        </main>
      </main>
    </div>
  );
}

export default App;
