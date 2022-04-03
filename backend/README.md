# pizza-e-commerce-api

The API of "pizza-e-commerce".

#### Link to the API: https://pizza-e-commerce-api.herokuapp.com/

#### Technologies and Techniques

<p align="left"> 
 <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="express js" width="40" height="40"/>

<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png" alt="mongoDB" width="40" height="40"/>
</p>

#### To run the server

```
  git clone https://github.com/effip24/pizza-e-commerce-api.git
```

```
  cd pizza-e-commerce-api
```

```
  npm install
```

```
  npm run start
```

#### Link to the API:

| end point                      | Description                            |
| :----------------------------- | :------------------------------------- |
| `POST /signin`                 | admin authorization                          |
| `POST /signup`                 | admin registration                           |
| `GET /users`                   | returns all admins                      |
| `GET /users/me`                | returns a logged in admin               |
| `GET /orders`                | returns all orders |
| `GET /orders/status/:orderId`                | returns the status of an order by id |
| `GET /orders/:orderId`                | returns an order by id |
| `POST /orders`               | creates an order|
| `GET /menu`               | returns the menu|
| `GET /menu/:pizzaId`               | returns a pizza item from the menu|
| `POST /menu/`               | adds new pizza to the menu|
| `PATCH /menu/:pizzaId`               | updates pizza item |
| `DELETE /menu/:pizzaId`               | deletes pizza item |
