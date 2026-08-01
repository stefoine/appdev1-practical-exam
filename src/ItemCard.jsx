import { APP_NAME, AUTHOR } from '../constants';

function ItemCard() {
  const name = 'Sample Item';
  const category = 'General';
  const count = 2;
  const isAvailable = true;

  return (
    <>
      <div className="item-card">
        <h3>{name}</h3>
        <p>Category: {category}</p>
        <p>{count * 4} in stock across all branches</p>
        <p>{isAvailable ? "Available" : "Not Available"}</p>
        <p>{`${APP_NAME} by ${AUTHOR}`}</p>
      </div>
      <p>Featured: {name}</p>
    </>
  );
}

export default ItemCard;