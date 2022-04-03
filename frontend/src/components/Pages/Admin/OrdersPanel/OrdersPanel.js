import "./OrdersPanel.css";

import OrderHistoryCard from "./OrderHistoryCard/OrderHistoryCard";

const OrdersPanel = ({ ordersHistory, onNextStage }) => {
  return (
    <section className="panel">
      <div className="panel__table-container">
        <p className="panel__title">Orders</p>
        <table className="table">
          <thead className="table__thead">
            <tr className="table__tr">
              <th className="table__th" scope="col">
                Id
              </th>
              <th className="table__th" scope="col">
                Customer
              </th>
              <th className="table__th" scope="col">
                Total
              </th>
              <th className="table__th" scope="col">
                Payment
              </th>
              <th className="table__th" scope="col">
                Status
              </th>
              <th className="table__th" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersHistory.map((card) => (
              <OrderHistoryCard key={card._id} order={card} onNextStage={onNextStage} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default OrdersPanel;
