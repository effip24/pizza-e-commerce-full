const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const { addPizza, updatePizza, deletePizza } = require("../controllers/menu");
const { validateUrl } = require("../utils/validateUrl");

router.post(
  "/menu",
  celebrate({
    body: Joi.object().keys({
      url: Joi.string().custom(validateUrl),
      name: Joi.string(),
      text: Joi.string(),
      price: Joi.string(),
    }),
  }),
  addPizza
);
router.patch(
  "/menu/:pizzaId",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string(),
      text: Joi.string(),
      price: Joi.string(),
    }),
  }),
  updatePizza
);
router.delete("/menu/:pizzaId", deletePizza);

module.exports = router;
