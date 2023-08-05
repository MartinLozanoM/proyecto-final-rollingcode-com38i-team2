import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { dataContext } from "./DataContext";

export const ItemProduct = ({ product: { title, image, price } }, product) => {
  const{cart, setCart} = useContext(dataContext);
  const buyProducts = (product) => {
    console.log(product);
    setCart([...cart, product])

}
  
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="product-card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button onClick={()=> buyProducts(product)} className="product-card-button" variant="primary">
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
};
