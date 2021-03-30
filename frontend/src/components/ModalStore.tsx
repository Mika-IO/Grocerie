import React, { useState } from 'react';

import { IonThumbnail, IonTitle, IonModal, IonButton, IonContent, IonHeader, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { cart, cartSharp, cardSharp } from 'ionicons/icons';

import Banner from '../assets/banner.png';

import "./styles/ModalStore.css";

export const Products: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Supermercado Perimental Leste</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="cards">
      <IonCard>
            <IonItem href="cart" className="ion-activated">
                <IonIcon icon={cartSharp} slot="start" />
                <IonLabel>Carrinho</IonLabel>
            </IonItem>
            <IonItem href="checkout" className="ion-activated">
                <IonIcon icon={cardSharp} slot="start"/>
                <IonLabel>Finalizar compra</IonLabel>
            </IonItem>
        </IonCard>
        <IonCard>
        </IonCard>
        <IonCard className="product-card">
            <IonCardHeader>
                <IonThumbnail css-class="product-img">
                    <img src={Banner} />
                </IonThumbnail>
                <IonCardTitle>R$ 17,00</IonCardTitle>
                <h4>Arroz São Bernardo</h4>
                <IonButton expand="block"><IonIcon icon={cart}/></IonButton>
            </IonCardHeader>
        </IonCard>
        <IonCard className="product-card">
            <IonCardHeader>
                <IonCardTitle>R$ 17,00</IonCardTitle>
                <IonCardSubtitle>Arroz São Bernardo</IonCardSubtitle>
                <IonButton expand="block"><IonIcon icon={cart}/></IonButton>
            </IonCardHeader>
        </IonCard>
        <IonCard className="product-card">
            <IonCardHeader>
                <IonCardTitle>R$ 17,00</IonCardTitle>
                <IonCardSubtitle>Arroz São Bernardo</IonCardSubtitle>
                <IonButton expand="block"><IonIcon icon={cart}/></IonButton>
            </IonCardHeader>
        </IonCard>
      </IonContent>
    </>
  );
};


export const ModalStore: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <IonButton className="btn-open-modal" expand="block" onClick={() => setShowModal(true)}>Começar a comprar</IonButton>
        <IonContent>
            <IonModal isOpen={showModal} cssClass="modal-custom">
                <Products/>
                <IonButton onClick={() => setShowModal(false)}>Voltar</IonButton>
            </IonModal>
        </IonContent>
    </>
  );
};

export default ModalStore;
