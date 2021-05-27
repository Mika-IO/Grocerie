import "./components/styles/ContentContainer.css";
import Home from "./components/Home.js";
import MyMarket from "./components/MyMarket";
import Orders from "./components/Orders.js";
import StockControl from "./components/StockControl.js";
import LoginAndRegister from "./components/LoginAndRegistration.js";


interface ContentProps {
  name: string;
}

const contents = {
  home: Home,
  mymarket: MyMarket,
  orders: Orders,
  stockcontrol: StockControl,
  login: LoginAndRegister,
};

function strategy(o: any, i: any) {
  return o[i];
}

function ContentContainer({ name }: ContentProps) {
  let props = { name };
  let Content = strategy(contents, name);
  return (
    <div className="container">
      <Content name={name} />
    </div>
  );
}

export default ContentContainer;
