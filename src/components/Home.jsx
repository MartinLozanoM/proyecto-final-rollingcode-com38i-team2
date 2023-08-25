import CardCategory from "./CardCategory";
import Slider from "./Slider";
import Promotions from "./Promotions";

export const Home = () => {
  return (
    <main className="home-container">
      <Slider />
      <div className="my-4">
        <CardCategory />
      </div>
      <Promotions />
    </main>
  );
};
