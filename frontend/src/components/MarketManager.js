import LoginAndRegistration from "./LoginAndRegistration";
import React, { useState } from "react";
import "./styles/MarketManager.css";
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import {
  barChartSharp,
  cloudUploadSharp,
  settingsSharp,
  createSharp,
} from "ionicons/icons";

function EditProducts(){
  return <IonLabel>Editar produtos</IonLabel>
}


function ImportProducts(){
  return <IonLabel>Importar produtos</IonLabel>
}


function Orders(){
  return <IonLabel>Pedidos</IonLabel>

}

function Settings(){
  return <IonLabel>Configuração</IonLabel>

}
  
function MarketManager() {
  // const [contentName, setContentName] = useState(0);
  return (
    <>
      <div className="mm-content"></div>
      <IonTabBar slot="bottom">
        <IonTabButton tab="orders">
          <IonIcon icon={barChartSharp} />
        </IonTabButton>

        <IonTabButton tab="import-products">
          <IonIcon icon={cloudUploadSharp} />
        </IonTabButton>

        <IonTabButton tab="edit-products">
          <IonIcon icon={createSharp} />
        </IonTabButton>

        <IonTabButton tab="settings">
          <IonIcon icon={settingsSharp} />
        </IonTabButton>
      </IonTabBar>
    </>
  );
}

export default MarketManager;
