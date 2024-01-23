import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail.jsx/Detail";
import Favorites from "./components/Favorites/Favorites";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import { ROUTES } from "./helpers/RoutesPath";
import About from "./views/About";

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const login = () => {
    navigate("/home");
  };

  async function onSearch(id) {
    // eslint-disable-next-line eqeqeq
    if (characters.find((char) => char.id == id)) {
      return alert(`Ya se agrego el personaje con este ID: ${id}`);
    } else {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
        alert(error.message);
      }
    }
  }
  async function randomCharacters() {
    const numeroDecimal = Math.random();
    const id = Math.floor(numeroDecimal * 826) + 1;

    if (characters.find((char) => char.id == id)) {
      return alert(`Ya se agrego el personaje con este ID: ${id}`);
    } else {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
        alert(error.message);
      }
    }
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      {pathname === "/" ||
      pathname === ROUTES.HOME ||
      pathname === ROUTES.ABOUT ||
      pathname === ROUTES.FAVORITES ? (
        /* Your conditional rendering logic goes here */
        <>
          {pathname !== "/" && (
            <Nav onSearch={onSearch} randomCharacter={randomCharacters} />
          )}
          <Routes>
            <Route path={"/"} element={<Form login={login} />} />
            <Route
              path={ROUTES.HOME}
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path={ROUTES.FAVORITES} element={<Favorites />} />
          </Routes>
        </>
      ) : (
        <div>
          <h1>No existe la ruta</h1>
        </div>
      )}
    </div>
  );
}

export default App;
