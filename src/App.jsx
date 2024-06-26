import "./App.css";
import Accordion from "./components/01_Accordion/Accordion";
import Color from "./components/02_RandomColorGenerator/Color";
import StarRating from "./components/03_StarRating/StarRating";
import Slider from "./components/04_ImageSlider/Slider";
import LoadMore from "./components/05_LoadMore/LoadMore";
import Tree from "./components/06_TreeView/Tree";
import menus from "./components/06_TreeView/data";
import QrGenerator from "./components/07_QrGenerator/QrGenerator";
import Theme from "./components/08_ThemeChanger/Theme";
import Scroll from "./components/09_ScrollIndicator/Scroll";
import TabTest from "./components/10_Tabs/TabTest";
import Modal from "./components/11_CustomModal/Modal";
import GitHub from "./components/12_GitHubProfileFinder/GitHub";
import SearchAutoComplete from "./components/13_SearchAutocomplete/SearchAutoComplete";
import TicTacToe from "./components/14_TicTacToe/TicTacToe";
import UseFetchHook from "./components/16_UseFetch/useFetchHook";
import UseOnClick from "./components/17_UseOnClick/UseOnClick";
import Weather from "./components/21_WeatherApp/Weather";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <Color /> */}
      {/* <StarRating /> */}
      {/* <Slider page={2} limit={10} /> */}
      {/* <LoadMore /> */}
      {/* <Tree menu={menus} /> */}
      {/* <QrGenerator /> */}
      {/* <Theme /> */}
      {/* <Scroll url={"https://dummyjson.com/products"} limit={100} /> */}
      {/* <TabTest /> */}
      {/* <Modal /> */}
      {/* <GitHub /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <UseFetchHook /> */}
      {/* <UseOnClick /> */}
      <Weather />
    </>
  );
}

export default App;
