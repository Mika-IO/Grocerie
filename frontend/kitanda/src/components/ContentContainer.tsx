import './styles/ContentContainer.css';
import Home from './Home';
import Markets from './Markets';
import Account from './Account';
import Cart from './Cart';
import Checkout from './Checkout';
import MarketManager from './MarketManager';
interface ContentProps {
  name: string;
}

const contents = {
  'home': <Home/>,
  'markets': <Markets/>,
  'account:': <Account/>,
  'cart': <Cart/>,
  'Checkout': <Checkout/>,
  'market-manager': <MarketManager/>
};

function strategy(o:any, i:any){
  return o[i]
};

function ContentContainer ({ name }:ContentProps) {
  let props = { name };
  return (
    <div className="container">
      <div>{strategy(contents, name)}</div>
      <strong>Todos os direitos reservados à Kitanda.SHOP 2021</strong>
    </div>
  );
};

export default ContentContainer;
