import {
  IonTitle,
  IonButton,
  IonCard,
  IonInput,
  IonCardContent,
} from "@ionic/react";

import "./styles/Payment.css";

function Checkout (){
  return (
    <>
      <IonCard className="checkoutcard">
        <br />
        <IonTitle>Minhas configurações de pagamento</IonTitle>
        <IonCardContent>
          <form action="/" method="post" id="payment-form">
            <div className="form-row">
              <div id="card-element">
                <div className="cell example example2" id="example-2">
                  <form>
                    
                  <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Banco"
                          data-tid="elements_examples.form.card_number_label"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Agência"
                          data-tid="elements_examples.form.card_number_label"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Conta"
                          data-tid="elements_examples.form.card_number_label"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="PIX"
                          data-tid="elements_examples.form.card_number_label"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <IonButton
                      expand="full"
                      type="submit"
                      data-tid="elements_examples.form.pay_button"
                    >
                      Salvar
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

export default Checkout;
