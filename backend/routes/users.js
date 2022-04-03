const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const {
  getUsers,
  getCurrentUser,
  createUser,
} = require("../controllers/users");

router.get("/users/me", getCurrentUser);
router.get("/users", getUsers);

router.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    }),
  }),
  createUser
);
module.exports = router;
