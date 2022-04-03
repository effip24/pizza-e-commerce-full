const Menu = require("../models/menu");
const NotFoundError = require("../utils/errors/NotFoundError");
const BadRequest = require("../utils/errors/BadRequest");
const { menuItemNotExistsMssg, forbiddenMssg } = require("../utils/constants");

module.exports.getMenu = (req, res, next) => {
  Menu.find({})
    .then((menu) => res.status(200).send(menu))
    .catch(next);
};

module.exports.addPizza = (req, res, next) => {
  const { url, name, text, price } = req.body;

  Menu.create({
    url,
    name,
    text,
    price,
  })
    .then((pizza) => res.status(200).send(pizza))
    .catch(next);
};

module.exports.updatePizza = (req, res, next) => {
  const { url, name, text, price } = req.body;

  Menu.findOneAndUpdate(
    { _id: req.params.pizzaId },
    { url, name, text, price },
    { new: true }
  )
    .then((pizza) => {
      if (!pizza) {
        throw new NotFoundError(menuItemNotExistsMssg);
      }
      res.status(200).send(pizza);
    })
    .catch(next);
};

module.exports.deletePizza = (req, res, next) => {
  Menu.findOneAndRemove({ _id: req.params.pizzaId })
    .then((deletedPizza) => {
      if (!deletedPizza) {
        throw new NotFoundError(menuItemNotExistsMssg);
      }
      res.status(200).send(deletedPizza);
    })
    .catch(next);
};
