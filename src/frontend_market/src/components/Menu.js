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
  cartSharp,
  cardSharp,
  bagAddSharp,
  personCircleSharp
} from "ionicons/icons";
import "./styles/Menu.css";

const appPages= [
  {
    title: "Meu mercado",
    url: "/mymarket",
    iosIcon: storefrontSharp,
  },
  {
    title: "Pedidos",
    url: "/orders",
    iosIcon: cartSharp,
  },
  {
    title: "Pagamentos",
    url: "/payments",
    iosIcon: cardSharp,
  },
  {
    title: "Controle de estoque",
    url: "/stockcontrol",
    iosIcon: bagAddSharp,
  },
  {
    title: "Minha conta",
    url: "/account",
    iosIcon: personCircleSharp,
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
