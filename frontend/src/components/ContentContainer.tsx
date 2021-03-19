import './styles/ContentContainer.css';
import Home from './Home';
import Account from './Account';
import Markets from './Markets';
import Cart from './Cart';
import Checkout from './Checkout';
import MarketManager from './MarketManager';
import { IonContent, IonFooter, IonToolbar, IonText } from '@ionic/react';

interface ContentProps {
  name: string;
}

const contents = {
  'home': Home,
  'account': Account,
  'markets': Markets,
  'cart': Cart,
  'checkout': Checkout,
  'market-manager': MarketManager
};

function strategy(o:any, i:any){
  return o[i]
};

function ContentContainer ({ name }:ContentProps) {
  let props = { name };
  let Content = strategy(contents, name)
  return (
    <div className="container">
        <Content name={name}/>
    </div>
  );
};

//      <IonContent />
//      <IonFooter id="footer">
//        <IonToolbar>
//          <p>Todos os direitos reservados à Kitanda.SHOP 2021</p>
//        </IonToolbar>
//      </IonFooter>

export default ContentContainer;
