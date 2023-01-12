const authController = require("../controllers/auth");
const middlewareController = require("../middlewares/authMiddlewares");

const router = require("express").Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.post("/check", middlewareController.verifyToken, authController.checkToken);

router.post("/refresh", middlewareController.verifyTokenRefresh, authController.requestRefreshToken);


module.exports = router;