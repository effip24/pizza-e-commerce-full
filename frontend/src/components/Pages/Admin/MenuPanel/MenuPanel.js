import "./MenuPanel.css";

import AdminMenuCard from "./AdminMenuCard/AdminMenuCard";
import AddToMenuPopup from "./AddToMenuPopup/AddToMenuPopup";
import EditMenuCardPopup from "./EditMenuCardPopup/EditMenuCardPopup";
import { useState } from "react";

const MenuPanel = ({ menu, onAddToMenu, onMenuEdit, onRemove }) => {
  const [isAddToMenuOpen, setIsAddToMenuOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [menuEditCard, setMenuEditCard] = useState({});

  const handleAddToMenuClick = () => {
    setIsAddToMenuOpen(!isAddToMenuOpen);
  };

  const handleEditClick = (card) => {
    setIsEditPopupOpen(!isEditPopupOpen);
    setMenuEditCard(card);
  };

  const handleAddToMenu = (pizza) => {
    setIsAddToMenuOpen(!isAddToMenuOpen);
    onAddToMenu(pizza);
  };

  return (
    <section className="panel">
      <div className="panel__table-container">
        <div className="panel__title-wrap">
          <p className="panel__title">Menu</p>
          <button className="panel__menu-add" onClick={handleAddToMenuClick}>
            Add
          </button>
        </div>
        <table className="table">
          <thead className="table__thead">
            <tr className="table__tr">
              <th className="table__th" scope="col">
                Image
              </th>
              <th className="table__th" scope="col">
                Name
              </th>
              <th className="table__th" scope="col">
                Price
              </th>
              <th className="table__th" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {menu.map((card) => (
              <AdminMenuCard key={card._id} card={card} onEdit={handleEditClick} onRemove={onRemove} />
            ))}
          </tbody>
        </table>
      </div>
      <AddToMenuPopup isOpen={isAddToMenuOpen} onAddToMenu={handleAddToMenu} onClose={handleAddToMenuClick} />
      <EditMenuCardPopup
        menuEditCard={menuEditCard}
        isOpen={isEditPopupOpen}
        onClose={handleEditClick}
        onMenuEdit={onMenuEdit}
      />
    </section>
  );
};
export default MenuPanel;
