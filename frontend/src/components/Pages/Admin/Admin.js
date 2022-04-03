import "./Admin.css";

import MenuPanel from "./MenuPanel/MenuPanel";
import OrdersPanel from "./OrdersPanel/OrdersPanel";

const Admin = ({ menu, ordersHistory, onNextStage, onAddToMenu, onMenuEdit, onRemove }) => {
  return (
    <section className="admin">
      <div className="admin__panel-container">
        <MenuPanel menu={menu} onAddToMenu={onAddToMenu} onMenuEdit={onMenuEdit} onRemove={onRemove} />
        <OrdersPanel ordersHistory={ordersHistory} onNextStage={onNextStage} />
      </div>
    </section>
  );
};
export default Admin;
