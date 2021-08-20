import "./App.css";
import ImageSlider from "./Components/Slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Checkout from "./ComponentCheckout/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ImageSlider />
      <Checkout />
    </>
  );
}

export default App;
