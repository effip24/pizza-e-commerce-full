const Order = require("../models/order");

module.exports.getOrders = (req, res, next) => {
  Order.find({})
    .then((orders) => res.status(200).send(orders))
    .catch(next);
};

module.exports.getOrder = (req, res, next) => {
  Order.find({ phone: req.params.orderId })
    .then((orders) => res.status(200).send(orders))
    .catch(next);
};

module.exports.getActiveOrders = (req, res, next) => {
  Order.find({ phone: req.params.orderId })
    .then((orders) => res.status(200).send(orders))
    .catch(next);
};

module.exports.getStatus = (req, res, next) => {
  Order.findOne({ _id: req.params.orderId })
    .then((order) => {
      res.status(200).send({ status: order.status });
    })
    .catch(next);
};

module.exports.setStatus = (req, res, next) => {
  const { status } = req.body;

  Order.findOneAndUpdate({ _id: req.params.orderId }, { status }, { new: true })
    .then((order) => res.status(200).send(order))
    .catch(next);
};

module.exports.createOrder = (req, res, next) => {
  const { firstName, lastName, address, phone, notes, total, billing } =
    req.body;

  Order.create({
    firstName,
    lastName,
    address,
    phone,
    notes,
    total,
    billing,
  })
    .then((order) => res.status(200).send(order))
    .catch(next);
};
