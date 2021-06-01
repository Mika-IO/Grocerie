import React, { useState, useEffect } from 'react';
import './styles/Payments.css';
import {
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel, 
  IonTitle,
  IonButton,
  IonCard,
  IonInput,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
} from "@ionic/react";
import { listSharp, addSharp, saveSharp } from 'ionicons/icons';


function Payments(){
  return(
    <>
      <IonCard className="m-pay">
        <p className="inline">Saldo de vendas</p>
        <br/>
        <IonTitle  className="inline">R$ 0,00</IonTitle>
      </IonCard>
      
      <IonCard className="m-pay">
        <p className="inline">Pedidos entregues</p>
        <br/>
        <IonTitle className="inline">0</IonTitle>
      </IonCard>
    </>
  );
};

export default Payments;