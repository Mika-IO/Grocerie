import React from "react";
import "./styles/ProductCard.css";
import "./styles/Cart.css";
import {
  addSharp,
  checkmarkSharp,
  trashSharp,
} from "ionicons/icons";
import {
  IonIcon,
  IonCardSubtitle,
  IonAvatar,
  IonItemOption,
  IonItemOptions,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonNote,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonBadge,
  IonList,
  IonItemSliding,
  IonInput,
} from "@ionic/react";
import Pro from "../assets/bed.png";

const Cart: React.FC = () => {
  return (
    <>

        <IonTitle>Cart</IonTitle>

        <IonRow className="ion-text-center ion-margin-top">
          <IonCol size="12">
            <IonNote>2 products found</IonNote>
          </IonCol>
        </IonRow>
        
        <IonList>
          <IonItem>
            <IonLabel>Selecione os mercados que fará pedidos</IonLabel>
            <IonSelect multiple={true} placeholder="Quais pedidos quer fazer?">
              <IonSelectOption value="perimental_leste">Perimental Leste</IonSelectOption>
              <IonSelectOption value="turmalina">Turmalina</IonSelectOption>
            </IonSelect>
          </IonItem>
          
          <IonItemSliding className="cartSlider">
            <IonItem detail={false} className="cartItem">
              <IonAvatar>
                <IonImg src={Pro} />
              </IonAvatar>
              <IonLabel>
                <p>Cama</p>
              </IonLabel>     
              <IonItem className="qtd">
                <IonLabel>Qtd 1&nbsp;</IonLabel>
                <IonButton>
                  <IonIcon icon={addSharp} />
                </IonButton>
              </IonItem>
              <div className="cartActions">
                <IonBadge color="primary">und. R$50,00</IonBadge>
              </div>
              <div className="cartActions">
                <IonBadge color="primary">total. R$100,00</IonBadge>
              </div>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption
                color="danger"
                style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                onClick={() => console.log("remove item")}
              >
                <IonIcon icon={trashSharp} />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          
          <IonItemSliding className="cartSlider">
            <IonItem detail={false} className="cartItem">
              <IonAvatar>
                <IonImg src={Pro} />
              </IonAvatar>
              <IonLabel>
                <p>Cama</p>
              </IonLabel>     
              <IonItem className="qtd">
                <IonLabel>Qtd 1&nbsp;</IonLabel>
                <IonButton>
                  <IonIcon icon={addSharp} />
                </IonButton>
              </IonItem>
              <div className="cartActions">
                <IonBadge color="primary">und. R$50,00</IonBadge>
              </div>
              <div className="cartActions">
                <IonBadge color="primary">total. R$100,00</IonBadge>
              </div>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption
                color="danger"
                style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                onClick={() => console.log("remove item")}
              >
                <IonIcon icon={trashSharp} />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

        </IonList>

        <div className="cartCheckout">
          <IonCardSubtitle>R$200,00</IonCardSubtitle>

          <IonButton color="primary">
            <IonIcon icon={checkmarkSharp} />
            &nbsp;Checkout
          </IonButton>
        </div>

  </>
  );
};

export default Cart;
