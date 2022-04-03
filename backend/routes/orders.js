const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const { getOrders, setStatus } = require("../controllers/orders");

router.get("/orders", getOrders);
router.post(
  "/orders/status/:orderId",
  celebrate({
    body: Joi.object().keys({
      status: Joi.string(),
    }),
  }),
  setStatus
);

module.exports = router;
