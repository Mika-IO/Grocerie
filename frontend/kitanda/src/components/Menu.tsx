import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeSharp, storefrontSharp, personCircleSharp, cartSharp, cardSharp, bagSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Início',
    url: '/page/Inicio',
    iosIcon: homeSharp
  },
  {
    title: 'Mercados',
    url: '/page/Mercados',
    iosIcon: storefrontSharp,
  },
  {
    title: 'Minha conta',
    url: '/page/Conta',
    iosIcon: personCircleSharp,
  },
  {
    title: 'Carrinho',
    url: '/page/Carrinho',
    iosIcon: cartSharp,
  },
  {
    title: 'Finalizar compra',
    url: '/page/Checkout',
    iosIcon: cardSharp,
  },
  {
    title: 'Meu mercado',
    url: '/page/Meu mercado',
    iosIcon: bagSharp,
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon}/>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
