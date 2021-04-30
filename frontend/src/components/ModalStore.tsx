import React, { useState } from "react";

import ListingProducts from "./ListingProducts";

import { IonModal, IonButton, IonContent } from "@ionic/react";

import "./styles/ModalStore.css";

export const Products: React.FC = () => {
  return <ListingProducts />;
};

export const ModalStore: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonButton
        className="btn-open-modal"
        expand="block"
        onClick={() => setShowModal(true)}
      >
        Começar a comprar
      </IonButton>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="modal-custom">
          <IonContent>
            <Products />
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
};

export default ModalStore;
