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
import { storefrontSharp, personCircleSharp, cartSharp, cardSharp, settingsSharp } from 'ionicons/icons';
import './styles/Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Mercados',
    url: '/markets',
    iosIcon: storefrontSharp,
  },
  {
    title: 'Minha conta',
    url: '/account',
    iosIcon: personCircleSharp,
  },
  {
    title: 'Carrinho',
    url: '/cart',
    iosIcon: cartSharp,
  },
  {
    title: 'Finalizar compra',
    url: '/checkout',
    iosIcon: cardSharp,
  },
  {
    title: 'Meu mercado',
    url: '/market-manager',
    iosIcon: settingsSharp,
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
