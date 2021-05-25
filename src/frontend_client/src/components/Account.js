import LoginAndRegistration from "./LoginAndRegistration.js";
import "./styles/Account.css";
import React, { useState } from "react";
import { IonTitle, IonCardContent, IonGrid, IonRow, IonCol, IonTabBar, IonButton, IonAvatar, IonItem, IonCard, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { barChartSharp, personCircleSharp } from "ionicons/icons";

function Orders(){
  return (
  <>
      <IonTitle>Seus pedidos</IonTitle>
      <IonCard  className="checkoutcard">
        <IonCardContent >
        <IonGrid>
          <p>Ao Supermercado Perimental Leste</p>
          <IonRow>
            <IonCol>
              <div> 
                <IonLabel>Total R$ 19,00</IonLabel>
              </div>
            </IonCol>
            <br/>
            <IonCol>
              <div>
                <IonLabel>STATUS: Preparando</IonLabel>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonCardContent>
      </IonCard>
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
          <IonTitle>Mikaio Faria Damaceno</IonTitle>
        </IonItem>
        <br/>
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
        <IonButton className="btn-sair" routerLink={"/markets"} shape="round">
            Sair dessa conta
          </IonButton>
      </IonCard>
    </>
  )
}
   
function Account() {
  const [contentAccount, setContentAccount] = useState(Perfil())
  return (
    <>
      <IonTabBar className="tabs-account" slot="top">
        <IonTabButton onclick={() => setContentAccount(Orders())} tab="orders">
          <IonIcon icon={barChartSharp} />
        </IonTabButton>

        <IonTabButton onclick={() => setContentAccount(Perfil())} tab="perfil">
          <IonIcon icon={personCircleSharp} />
        </IonTabButton>
      </IonTabBar>
      <div className="aa-content">
        {contentAccount}
      </div>
    </>
  );
}

export default Account;
