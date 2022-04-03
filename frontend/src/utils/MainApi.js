class MainApi {
  /** constructor of MainApi class.
   * @param  baseUrl - the URL to make the request to.
   */
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  updateToken(token) {
    this._headers.authorization = `Bearer ${token}`;
  }

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getMenu() {
    return fetch(`${this._baseUrl}/menu`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addToMenu(pizza) {
    return fetch(`${this._baseUrl}/menu`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        url: pizza.url,
        name: pizza.name,
        text: pizza.text,
        price: pizza.price,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  removeFromMenu(pizzaId) {
    return fetch(`${this._baseUrl}/menu/${pizzaId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  updateMenu(pizza, pizzaId) {
    console.log(pizzaId);
    return fetch(`${this._baseUrl}/menu/${pizzaId}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: pizza.name,
        text: pizza.text,
        price: pizza.price,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  createOrder(order) {
    return fetch(`${this._baseUrl}/orders`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        firstName: order.firstName,
        lastName: order.lastName,
        address: order.address,
        phone: order.phone,
        notes: order.notes || "none",
        total: order.total,
        billing: order.billing,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getOrders() {
    return fetch(`${this._baseUrl}/orders`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getOrder(phone) {
    return fetch(`${this._baseUrl}/orders/${phone}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getOrderStatus(orderId) {
    return fetch(`${this._baseUrl}/orders/status/${orderId}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  setOrderStatus(orderId, status) {
    return fetch(`${this._baseUrl}/orders/status/${orderId}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        status: status,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const mainApi = new MainApi({
  baseUrl: "https://pizza-e-commerce-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    authorization: "",
  },
});

export default mainApi;
