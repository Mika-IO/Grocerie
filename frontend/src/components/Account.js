import LoginAndRegistration from "./LoginAndRegistration.js";
import React, { useState } from "react";
import { IonTabBar, IonContent, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { barChartSharp, personCircleSharp } from "ionicons/icons";

function Orders(){
  return (<>
    <IonLabel>Pedidos</IonLabel>
  </>)
}
  

function Perfil(){
  return  <IonLabel>Perfil</IonLabel>
}
   
function Account() {
  // const [contentName, setContentName] = useState(0);
  return (
    <>
      <IonContent className="mm-content">

	<p>AAAA</p>
      </IonContent>
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
