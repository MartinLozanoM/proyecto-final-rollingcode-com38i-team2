import { Button, Card } from "react-bootstrap";

export const ItemProduct = ({ product: { title, image, price } }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className="product-card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button className="product-card-button" variant="primary">
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
};
