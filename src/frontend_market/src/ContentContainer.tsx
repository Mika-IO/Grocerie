import "./components/styles/ContentContainer.css";
import Home from "./components/Home";
import MyMarket from "./components/MyMarket";
import Orders from "./components/Orders";
import StockControl from "./components/StockControl";
import Payments from "./components/Payments";
import LoginAndRegister from "./components/LoginAndRegistration";
import Account from "./components/Account";
import { Logout } from "./services/Auth"


interface ContentProps {
  name: string;
}

const contents = {
  home: Home,
  mymarket: MyMarket,
  orders: Orders,
  stockcontrol: StockControl,
  login: LoginAndRegister,
  payments: Payments,
  account: Account,
  logout: Logout,
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
