import "./components/styles/ContentContainer.css";
import Home from "./components/Home.js";
import Account from "./components/Account.js";
import Markets from "./components/Markets.js";
import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
import MarketManager from "./components/MarketManager.js";

interface ContentProps {
  name: string;
}

const contents = {
  home: Home,
  account: Account,
  markets: Markets,
  cart: Cart,
  checkout: Checkout,
  "market-manager": MarketManager,
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
