import LoginAndRegistration from "./LoginAndRegistration";
import React, { useState } from "react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { barChartSharp, personCircleSharp } from "ionicons/icons";

const Orders: React.FC = () => (
  <>
    <IonLabel>Pedidos</IonLabel>
  </>
);

const Perfil: React.FC = () => (
  <>
    <IonLabel>Perfil</IonLabel>
  </>
);

const contents: any = {
  0: Orders,
  1: Perfil,
};

function Account() {
  const [contentName, setContentName] = useState(0);
  return (
    <>
      <div className="mm-content">{contents[contentName]}</div>
      <IonTabBar slot="bottom">
        <IonTabButton tab="orders">
          <IonIcon icon={barChartSharp} />
        </IonTabButton>

        <IonTabButton tab="perfil">
          <IonIcon icon={personCircleSharp} />
        </IonTabButton>
      </IonTabBar>
    </>
  );
}

export default Account;
