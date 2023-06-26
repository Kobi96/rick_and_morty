const { Router } = require("express");
const getCharacterById = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const router = Router();

router.get("/character/:id", getCharacterById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
