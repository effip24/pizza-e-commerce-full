import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Order from "../Pages/MyOrder/MyOrder";
import Admin from "../Pages/Admin/Admin";
import NothingFound from "../NothingFound/NothingFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";
import { useEffect, useState } from "react";

const App = () => {
  const [menu, setMenu] = useState([]);
  const [discountPizzas, setDiscountPizzas] = useState([]);

  const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipping, setShipping] = useState(10);

  const [ordersHistory, setOrdersHistory] = useState([]);
  const [customerOrders, setCustomerOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState(0);

  const [isInfoToolTipOpen, setIsIfoToolTipOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminToken, setAdminToken] = useState(localStorage.getItem("token"));
  const [isSending, setIsSending] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsSearching(true);
    mainApi
      .getMenu()
      .then((menu) => {
        setMenu(menu);
        setDiscountPizzas(menu.slice(0, 3));
      })
      .catch((err) => {
        console.log("there was a problem getting menu from server ", err);
      })
      .finally(() => {
        setIsSearching(false);
      });
  }, []);

  useEffect(() => {
    if (adminToken) {
      mainApi.updateToken(adminToken);

      mainApi
        .checkToken()
        .then((user) => {
          setIsAdmin(user.admin);
          console.log(isAdmin);
        })
        .catch((err) => console.log("error please log in again ", err));

      if (isAdmin) {
        mainApi
          .getOrders()
          .then((orders) => {
            setOrdersHistory(orders.reverse());
          })
          .catch((err) => {
            console.log("there was a problem getting orders history ", err);
          });
      }
    }
  }, [adminToken, isAdmin]);

  useEffect(() => {
    const total = cartList
      .map((pizza) => parseInt(pizza.pizza.price) * parseInt(pizza.amount))
      .reduce((prev, curr) => prev + curr, 0);
    setTotalPrice(total);
  }, [cartList]);

  const saveToLocalCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleAddToCart = (pizza, amount) => {
    const inCart = cartList.some((card) => card.pizza._id === pizza._id);

    if (!inCart) {
      setCartList([...cartList, { pizza: pizza, amount: amount }]);
      saveToLocalCart([...cartList, { pizza: pizza, amount: amount }]);
    }
  };

  const handleCartUpdate = (card, amount) => {
    const updateCartList = cartList.map((pizza) =>
      pizza.pizza._id === card.pizza._id ? { pizza: pizza.pizza, amount: amount } : pizza
    );
    setCartList(updateCartList);
    saveToLocalCart(updateCartList);
  };

  const handleRemoveFromCart = (card) => {
    setCartList(cartList.filter((pizza) => pizza.pizza._id !== card.pizza._id));
    saveToLocalCart(cartList.filter((pizza) => pizza.pizza._id !== card.pizza._id));
  };

  const handlePlaceOrder = (order) => {
    setIsSearching(true);
    mainApi
      .createOrder(order)
      .then(() => {
        setIsIfoToolTipOpen(true);
        setCartList([]);
        setTotalPrice(0);
        localStorage.removeItem("cart");
      })
      .catch((err) => {
        console.log("there was a problem placing order", err);
      })
      .finally(() => {
        setIsSearching(false);
      });
  };

  const handleCustomerOrdersSearch = (phone) => {
    setIsSearching(true);
    mainApi
      .getOrder(phone)
      .then((orders) => {
        setCustomerOrders(orders.reverse());
      })
      .catch((err) => {
        console.log("there was a problem getting order", err);
      })
      .finally(() => {
        setIsSearching(false);
      });
  };

  const handleOrderStatusCheck = (orderId) => {
    mainApi
      .getOrderStatus(orderId)
      .then((status) => {
        setOrderStatus(status.status);
      })
      .catch((err) => console.log("there was a problem updating order status", err));
  };

  const handleNextStage = (orderId, status) => {
    mainApi
      .setOrderStatus(orderId._id, status)
      .then((newOrder) => {
        const newOrderHistory = ordersHistory.map((order) => (order._id === newOrder._id ? newOrder : order));

        setOrdersHistory(newOrderHistory);
      })
      .catch((err) => {
        console.log("there was a problem setting order status", err);
      });
  };

  const handleAddToMenu = (pizza) => {
    mainApi
      .addToMenu(pizza)
      .then((newPizza) => {
        setMenu([newPizza, ...menu]);
      })
      .catch((err) => {
        console.log("there was a problem adding new item to menu", err);
      });
  };

  const handleMenuCardEdit = (card, cardId) => {
    mainApi
      .updateMenu(card, cardId)
      .then((updatedItem) => {
        const newMenu = menu.map((pizza) => (pizza._id === updatedItem._id ? updatedItem : pizza));
        setMenu(newMenu);
      })
      .catch((err) => console.log("there was a problem updating the menu", err));
  };

  const handleRemoveCardFromMenu = (cardId) => {
    mainApi
      .removeFromMenu(cardId)
      .then((card) => {
        const newMenu = menu.filter((pizza) => pizza._id !== cardId);
        setMenu(newMenu);
      })
      .catch((err) => {
        console.log("there was a problem removing the item from menu", err);
      });
  };

  const handleAdminLogin = (email, password) => {
    setIsSending(true);
    setAdminLoginError(false);
    mainApi
      .login(email, password)
      .then((token) => {
        setAdminToken(token.token);
        mainApi.updateToken(token.token);
        setIsAdmin(true);
        localStorage.setItem("token", token.token);
        history.push("/admin");
      })
      .catch((err) => {
        setAdminLoginError(true);
        console.log("there was a problem login into admin section", err);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const closeAllPopups = () => {
    setIsIfoToolTipOpen(false);
  };

  return (
    <div className="page">
      <Header cartItems={cartList.length} isAdmin={isAdmin} />
      <Switch>
        <ProtectedRoute path="/admin" isAdmin={isAdmin}>
          <Admin
            menu={menu}
            ordersHistory={ordersHistory}
            onNextStage={handleNextStage}
            onAddToMenu={handleAddToMenu}
            onMenuEdit={handleMenuCardEdit}
            onRemove={handleRemoveCardFromMenu}
          />
        </ProtectedRoute>

        <Route exact path="/">
          <Home discountPizzas={discountPizzas} onAddToCart={handleAddToCart} isSearching={isSearching} />
        </Route>

        <Route path="/menu">
          <Menu menu={menu} onAddToCart={handleAddToCart} isSearching={isSearching} />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/cart">
          <Cart
            cartList={cartList}
            onUpdateCart={handleCartUpdate}
            onRemoveFromCart={handleRemoveFromCart}
            totalPrice={totalPrice}
            shipping={shipping}
          />
        </Route>

        <Route path="/checkout">
          <Checkout
            totalPrice={totalPrice}
            onPlaceOrder={handlePlaceOrder}
            shipping={shipping}
            isInfoToolTipOpen={isInfoToolTipOpen}
            closeAllPopups={closeAllPopups}
            isSearching={isSearching}
          />
        </Route>

        <Route path="/order">
          <Order
            customerOrders={customerOrders}
            onOrderSearch={handleCustomerOrdersSearch}
            orderStatus={orderStatus}
            onStatusCheck={handleOrderStatusCheck}
          />
        </Route>

        <Route path="/login">
          <Login onLogin={handleAdminLogin} isSending={isSending} adminLoginError={adminLoginError} />
        </Route>

        <Route path="/*">
          <NothingFound showNothingFound={true} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
