import "./Receipt.css";

import { convertDate, convertTime } from "../../utils/Date";

const Receipt = ({ order, onSearch }) => {
  const handleOrderSearch = () => {
    onSearch(order._id);
  };

  return (
    <table className="table">
      <thead className="table__thead">
        <tr className="table__tr">
          <th className="table__th" scope="col">
            Id
          </th>
          <th className="table__th" scope="col">
            Name
          </th>
          <th className="table__th" scope="col">
            Date
          </th>
          <th className="table__th" scope="col">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="table__tr" onClick={handleOrderSearch}>
          <td className="table__td" scope="row" aria-label="Id">
            {`#${order._id}`}
          </td>
          <td className="table__td" aria-label="Name">
            {`${order.firstName} ${order.lastName}`}
          </td>
          <td className="table__td" aria-label="Date">
            {`${convertDate(order.createdAt)} At ${convertTime(order.createdAt)}`}
          </td>
          <td className="table__td" aria-label="Total">
            {`${order.total}$`}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Receipt;
