import LoginAndRegistration from "./LoginAndRegistration.js";
import "./styles/Account.css";
import React, { useState } from "react";
import { IonItem, IonButton, IonIcon, IonItemOptions, IonItemOption, IonCardContent, IonGrid, IonRow, IonCol, IonCard, IonLabel } from "@ionic/react";
import {
    checkmarkSharp,
    trashSharp,
  } from "ionicons/icons";

function Orders() {
    return (
    <div className="aa-content">
        <IonCard  className="checkoutcard">

          <IonCardContent >
            
        
            <IonGrid>
                <IonItem detail={false} className="cartItem">
                    <IonLabel>
                    <h2>Supermercado Perimental</h2>
                    </IonLabel>
                    <IonButton color="primary">
                    <IonIcon icon={checkmarkSharp} />
                    &nbsp;Ver pedido
                    </IonButton>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <div> 
                        <IonLabel>Total R$ 19,00</IonLabel>
                        </div>
                    </IonCol>
                    <br/>
                    <IonCol>
                        <div>
                        <IonLabel>STATUS: Em andamento</IonLabel>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
    </div>
    );
  }
  
  export default Orders;