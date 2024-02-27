import { product } from "./data.js";
import { getImageUrl } from "./Product.js";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Avatar({ item, size }) {
  return (
    <img
      src={getImageUrl(item)}
      alt={item.name}
      className="avatar"
      width={size}
      height={size}
    />
  );
}

function Descript({ item }) {
  return (
    <li className={item.checked ? "item checked" : "item"}>
      {item.detail} {item.checked && "✔"}
    </li>
  );
}

export default function Gallery() {
  const cardItems = product.map((item, i) => (
    <Card key={item.id}>
      <Avatar
        size={200}
        item={{
          name: item.name,
          imageId: item.imageId,
        }}
      ></Avatar>
      <ul>
        <Descript
          item={{
            detail: item.detail[0],
            checked: item.checked[0],
          }}
        ></Descript>
      </ul>
    </Card>
  ));

  return (
    <section>
      <h1>미용 제품들</h1>
      <div className="itemList">{cardItems}</div>
    </section>
  );
}
