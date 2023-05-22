import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "./helpers/RoutesPath";
import Detail from "./components/Detail.jsx/Detail";
import About from "./views/About";
import Form from "./components/Form/Form";

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "tobiasolveira@outlook.com";
  const PASSWORD = "Ogeidojr96!";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate(ROUTES.HOME);
    }
  }

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
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
  }, [access]);

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
      </Routes>
    </div>
  );
}

export default App;
