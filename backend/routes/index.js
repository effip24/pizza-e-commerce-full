const router = require("express").Router();

const { celebrate, Joi } = require("celebrate");
const { errors } = require("celebrate");

const auth = require("../middleware/auth");
const menu = require("./menu");
const orders = require("./orders");
const users = require("./users");

const { createOrder, getOrder, getStatus } = require("../controllers/orders");
const { login } = require("../controllers/users");
const { getMenu } = require("../controllers/menu");

const { requestLogger, errorLogger } = require("../middleware/Logger");

const NotFoundError = require("../utils/errors/NotFoundError");

router.get("/menu", getMenu);
router.get("/order", createOrder);
router.get("/orders/:orderId", getOrder);
router.get("/orders/status/:orderId", getStatus);

router.post(
  "/orders",
  celebrate({
    body: Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      address: Joi.string(),
      phone: Joi.string(),
      notes: Joi.string(),
      total: Joi.string(),
      billing: Joi.string(),
    }),
  }),
  createOrder
);

router.post(
  "/signin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    }),
  }),
  login
);

router.use(requestLogger);

// protecting menu and useres
router.use(auth);
router.use("/", orders);
router.use("/", menu);
router.use("/", users);

router.get("*", (req, res, next) => {
  next(new NotFoundError("requested resource not found"));
});

router.use(errorLogger);
router.use(errors());
router.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
});

module.exports = router;
