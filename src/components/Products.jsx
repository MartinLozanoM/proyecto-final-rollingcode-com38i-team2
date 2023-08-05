import { useContext } from "react";
import { dataContext } from "./DataContext";

const Products = () => {
    const { data, cart, setCart} = useContext(dataContext);

    const buyProducts = (product) => {
        console.log(product);
        setCart([...cart, product])

    }

    return data.map((product)=> {
        return (
            <div className="card">
                <img src={product.image} alt='img-product-card' />
                <h3>{product.title}</h3>
                <h4>{product.price}$</h4>
                <button onClick={()=> buyProducts(product)}>Comprar</button>
            </div>
        );
    });
}

export default Products