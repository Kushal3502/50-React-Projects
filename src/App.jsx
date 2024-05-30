import "./App.css";
import Accordion from "./components/01_Accordion/Accordion";
import Color from "./components/02_RandomColorGenerator/Color";
import StarRating from "./components/03_StarRating/StarRating";
import Slider from "./components/04_ImageSlider/Slider";
import LoadMore from "./components/05_LoadMore/LoadMore";
import Tree from "./components/06_TreeView/Tree";
import menus from "./components/06_TreeView/data";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <Color /> */}
      {/* <StarRating /> */}
      {/* <Slider page={2} limit={10} /> */}
      {/* <LoadMore /> */}
      <Tree menu={menus} />
    </>
  );
}

export default App;
