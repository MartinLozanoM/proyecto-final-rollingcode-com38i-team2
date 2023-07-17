import CardCategory from "./CardCategory";
import Slider from "./Slider";
import Promotions from "./Promotions";

export const Home = () => {
  return (
    <main>
    <h1>Pet Shop</h1>
      <Slider/>
      <div>
        <CardCategory /> 
      </div>  
      <Promotions/>
    </main>
  );
};