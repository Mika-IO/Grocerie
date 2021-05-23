import React, { useState, useEffect } from 'react';
import './styles/StockControl.css';
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

function ListProducts(){
  return (
    <>
      <IonCard  className="checkoutcard">
        <IonTitle>Lista de produtos</IonTitle>
      </IonCard>
      <IonCard  className="checkoutcard">
        <IonCardContent >
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>
              <IonAvatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
              </div>
            </IonCol>
            <IonCol>
              <div> 
                <p>Arroz R$ 19,00</p>
              </div>
            </IonCol>
            <br/>
            <IonCol>
              <div>
                <IonButton>Editar produto</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  )
}

function AddProduct(){
  return(
    <>
      <IonCard className="checkoutcard">
        <br />
        <IonTitle>Adicionar produto</IonTitle>
        <IonCardContent>
          <form action="/" method="post" id="payment-form">
            <div className="form-row">
              <div id="card-element">
                <div className="cell example example2" id="example-2">
                  <form>
                    
                  <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Nome"
                          type="text"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Descrição"
                          type="text"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Preço"
                          type="number"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Preço promocional"
                          type="number"
                        />
                        <div className="baseline"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field">
                        <IonInput
                          placeholder="Image"
                          type="file"
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
  )
}

function ImportProdutcs(){
  return (
    <>
      <p>Importar tabela de produtos</p>
    </>
  )
}

function EditProduct(){
  return(
    <>
      <IonCard className="checkoutcard">
        <br />
        <IonTitle>Editar produto</IonTitle>
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
  )
}

function StockControl(){
  const [stockContent, setStockContent] = useState(ListProducts())
  return(
    <>
    <IonTabBar slot="top">
      <IonTabButton onclick={() => setStockContent(ListProducts())} tab="list-products">
        <IonIcon icon={listSharp} />
        <IonLabel>Produtos</IonLabel>
      </IonTabButton>

      <IonTabButton onclick={() => setStockContent(AddProduct())} tab="add-product">
        <IonIcon icon={addSharp} />
        <IonLabel>Adicionar Produto</IonLabel>
      </IonTabButton>

      <IonTabButton onclick={() => setStockContent(ImportProdutcs())} tab="add-product">
        <IonIcon icon={saveSharp} />
        <IonLabel>Importar tabela</IonLabel>
      </IonTabButton>
    </IonTabBar>
    <div className="stock-content">{stockContent}</div>
    </>
  );
};

export default StockControl;