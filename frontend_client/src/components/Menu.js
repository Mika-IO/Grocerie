import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  storefrontSharp,
  personCircleSharp,
  cartSharp,
  cardSharp,
} from "ionicons/icons";
import "./styles/Menu.css";

const appPages= [
  {
    title: "Mercados",
    url: "/markets",
    iosIcon: storefrontSharp,
  },
  {
    title: "Minha conta",
    url: "/account",
    iosIcon: personCircleSharp,
  },
  {
    title: "Carrinho",
    url: "/cart",
    iosIcon: cartSharp,
  },
  {
    title: "Finalizar compra",
    url: "/checkout",
    iosIcon: cardSharp,
  },
];

function Menu(){
  const location = useLocation();

  return (
    <IonMenu side="end" contentId="main" type="reveal">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={appPage.iosIcon} />
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
