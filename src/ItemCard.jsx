import { APP_NAME, AUTHOR } from './components/constants';

function ItemCard() {
  const name = 'Sample Item';
  const category = 'General';
  const count = 2;
  const isAvailable = true;

  return (
    <div class="item-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>{count * 4} in stock across all branches</p>
      <p>{isAvailable ? "Available"}</p>
      <p>{APP_NAME by AUTHOR}</p>
    </div>
    <p>Featured: {name}</p>
  );
}

export ItemCard;