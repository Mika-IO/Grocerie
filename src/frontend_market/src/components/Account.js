import LoginAndRegistration from "./LoginAndRegistration.js";
import "./styles/Account.css";
import React, { useState } from "react";
import { IonTitle, IonButton, IonAvatar, IonItem, IonCard, IonLabel } from "@ionic/react";

   
function Account() {
  return (
      <div className="aa-content">
        <IonCard className="perfil-content">
          <IonItem>
            <IonTitle>mikaiodev@gmail.com</IonTitle>
            <IonAvatar slot="end">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
            </IonAvatar>
          </IonItem>
          <IonButton className="btn-sair" routerLink={"/logout"} shape="round">
              Sair dessa conta
            </IonButton>
        </IonCard>
      </div>
  );
}

export default Account;
