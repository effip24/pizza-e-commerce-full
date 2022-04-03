import "./OrderHistoryCard.css";

const OrderHistoryCard = ({ order, onNextStage }) => {
  const status = ["paid", "preparing", "delivery", "delivered"];

  const handleNextStage = () => {
    const status = order.status + 1 > 3 ? 1 : order.status + 1;
    onNextStage(order, status.toString());
  };
  return (
    <>
      <tr className="table__tr table__tr_type_admin">
        <td className="table__td" aria-label="Id">
          {order._id}
        </td>
        <td className="table__td" aria-label="Customer">
          {`${order.firstName} ${order.lastName}`}
        </td>
        <td className="table__td" aria-label="Total">
          {`${order.total}$`}
        </td>
        <td className="table__td" aria-label="Payment">
          {order.billing}
        </td>
        <td className="table__td" aria-label="Status">
          {status[order.status]}
        </td>
        <td className="table__td" aria-label="Action">
          <button
            className={`table__button ${order.status === 3 ? "table__button_inactive" : ""}`}
            onClick={handleNextStage}
          >
            Next Stage
          </button>
        </td>
      </tr>
    </>
  );
};
export default OrderHistoryCard;
