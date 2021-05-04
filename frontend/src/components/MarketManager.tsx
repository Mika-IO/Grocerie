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

const EditProducts: React.FC = () => (
  <>
    <IonLabel>Editar produtos</IonLabel>
  </>
);

const ImportProducts: React.FC = () => (
  <>
    <IonLabel>Importar produtos</IonLabel>
  </>
);

const Orders: React.FC = () => (
  <>
    <IonLabel>Pedidos</IonLabel>
  </>
);

const Settings: React.FC = () => (
  <>
    <IonLabel>Configuração</IonLabel>
  </>
);

const contents: any = {
  0: EditProducts,
  1: ImportProducts,
  2: Orders,
  3: Settings,
};

function MarketManager() {
  const [contentName, setContentName] = useState(0);
  return (
    <>
      <div className="mm-content">{contents[contentName]}</div>
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
