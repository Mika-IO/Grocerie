import React, { useState } from "react";

import { IonModal, IonCard, IonCardContent, IonTitle, IonInput, IonButton, IonContent } from "@ionic/react";

import "./styles/ModalStore.css";

export function MaketConfig(){
  return (
    <>
      <IonCard className="checkoutcard">
        <br />
        <IonTitle>Minhas configurações de localização</IonTitle>
        <IonCardContent>
          <form action="/" method="post" id="payment-form">
            <div className="form-row">
              <div id="card-element">
                <div className="cell example example2" id="example-2">
                  <form>
                    <div data-locale-reversible>
                      <div className="row">
                        <div className="field">
                          <IonInput
                            placeholder="Rua"
                            data-tid="elements_examples.form.address_label"
                          />
                          <div className="baseline"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="field">
                          <IonInput
                            placeholder="Bairro"
                            data-tid="elements_examples.form.address_label"
                          />
                          <div className="baseline"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="field">
                          <IonInput
                            placeholder="Número"
                            data-tid="elements_examples.form.address_label"
                          />
                          <div className="baseline"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="field half-width">
                          <IonInput
                            placeholder="Cidade"
                            data-tid="elements_examples.form.city_label"
                          />
                          <div className="baseline"></div>
                        </div>
                        <div className="field half-width">
                          <IonInput
                            placeholder="Estado"
                            data-tid="elements_examples.form.statelabel"
                          />
                          <div className="baseline"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Coordenadas"
                          type="text"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    
                    <p>Essa coordenada sera salva como sua localização</p>
                    <IonButton
                      expand="full"
                      type="submit"
                      data-tid="elements_examples.form.pay_button"
                    >
                      Salvar localização
                    </IonButton>
                  </form>
                  <div className="message">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </IonCardContent>
      </IonCard>
    </>
  );
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
