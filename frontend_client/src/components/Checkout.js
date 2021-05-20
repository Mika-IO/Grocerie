import {
  IonTitle,
  IonButton,
  IonCard,
  IonInput,
  IonCardContent,
} from "@ionic/react";

import "./styles/Checkout.css";

function Checkout (){
  return (
    <>
      <IonCard className="checkoutcard">
        <br />
        <IonTitle>Finalizar Compra</IonTitle>
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
                      <div className="row" data-locale-reversible>
                        <div className="field">
                          <IonInput
                            placeholder="Cidade"
                            data-tid="elements_examples.form.city_label"
                          />
                          <div className="baseline"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="field half-width">
                          <IonInput
                            placeholder="Estado"
                            data-tid="elements_examples.form.state_label"
                          />
                          <div className="baseline"></div>
                        </div>
                        <div className="field half-width">
                          <IonInput
                            placeholder="CEP"
                            data-tid="elements_examples.form.postal_code_label"
                          />
                          <div className="baseline"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Número do cartão"
                          data-tid="elements_examples.form.card_number_label"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field half-width">
                        <div
                          id="example2-card-expiry"
                          className="input empty"
                        ></div>
                        <IonInput
                          placeholder="Expiração"
                          data-tid="elements_examples.form.card_expiry_label"
                        />
                        <div className="baseline"></div>
                      </div>
                      <div className="field half-width">
                        <div
                          id="example2-card-cvc"
                          className="input empty"
                        ></div>
                        <label
                          placeholder="CVC"
                          data-tid="elements_examples.form.card_cvc_label"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <IonButton
                      expand="full"
                      type="submit"
                      data-tid="elements_examples.form.pay_button"
                    >
                      Pagar R$100
                    </IonButton>
                  </form>
                  <div className="message">
                    <span>Falha no pagamento!</span>
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
