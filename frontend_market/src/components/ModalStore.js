import React, { useState } from "react";

import { IonModal, IonButton, IonContent } from "@ionic/react";

import "./styles/ModalStore.css";

export function MaketConfig(){
  return <p>Configurações do mercado</p>;
};

export function ModalStore(){
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonButton
        className="btn-open-modal"
        expand="block"
        onClick={() => setShowModal(true)}
      >
        GERENCIE
      </IonButton>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="modal-custom">
          <IonContent>
            <MaketConfig />
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
};

export default ModalStore;
