import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "./helpers/RoutesPath";
import Detail from "./components/Detail.jsx/Detail";
import About from "./views/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty/";
    fetch(`${URL_BASE}character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
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
    </div>
  );
}

export default App;
