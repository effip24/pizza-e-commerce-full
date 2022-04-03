import "./AdminMenuCard.css";

const AdminMenuCard = ({ card, onEdit, onRemove }) => {
  const handleEdit = () => {
    onEdit(card);
  };

  const handleRemoveClick = () => {
    onRemove(card._id);
  };

  return (
    <>
      <tr className="table__tr table__tr_type_admin">
        <td className="tabe__td">
          <img className="menu-card__img" src={card.url} alt="pizza"></img>
        </td>
        <td className="tabe__td">
          <p className="menu-card__name">{card.name}</p>
        </td>
        <td className="tabe__td">
          <p className="menu-card__name">{card.price}$</p>
        </td>

        <td className="tabe__td">
          <div className="menu-card__button-wrap">
            <button className="menu-card__button menu-card__button_type_edit" onClick={handleEdit}></button>
            <button className="menu-card__button menu-card__button_type_rm" onClick={handleRemoveClick}></button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default AdminMenuCard;
