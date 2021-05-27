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
  bagAddSharp
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
    title: "Controle de estoque",
    url: "/stockcontrol",
    iosIcon: bagAddSharp,
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
