import LoginAndRegistration from "./LoginAndRegistration.js";
import "./styles/Account.css";
import React, { useState } from "react";
import { IonTabBar, IonButton, IonAvatar, IonItem, IonCard, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { barChartSharp, personCircleSharp } from "ionicons/icons";

function Orders(){
  return (<>
    <IonLabel>Pedidos</IonLabel>
  </>)
}
  

function Perfil(){
  return  (
    <>
      <IonCard className="perfil-content">
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>Mikaio Faria Damaceno</IonLabel>
        </IonItem>
        <br/>
        <IonItem>
          <IonLabel>Supermercado Perimental Leste</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Rua Perimental leste N°5560</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Setor 9 de baixo || Ariquemes-RO</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>CPF: 045.426.952-80</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>mikaiodev@gmail.com</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pedidos 965</IonLabel>
        </IonItem>
        <IonButton className="btn-sair" routerLink={"/markets"} shape="round">
            Sair dessa conta
          </IonButton>
      </IonCard>
    </>
  )
}
   
function Account() {
  // const [contentName, setContentName] = useState(0);
  return (
    <>
      <div className="aa-content">
        <Perfil/>
      </div>
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
