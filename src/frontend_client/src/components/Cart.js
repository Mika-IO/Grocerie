import React from "react";
import "./styles/ProductCard.css";
import "./styles/Cart.css";
import {
  checkmarkSharp,
  trashSharp,
  addSharp,
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
  IonTitle,
  IonBadge,
  IonList,
  IonItemSliding,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import Pro from "../assets/bed.png";

function Cart(){
  return (
    <div className="cart-content">
      <IonTitle>Carrinho</IonTitle>

      <IonRow className="ion-text-center ion-margin-top">
        <IonCol size="12">
          <IonNote>2 produtos no pedido</IonNote>
        </IonCol>
      </IonRow>
      <IonItem>
        <IonLabel>Carrinhos</IonLabel>
        <IonSelect cancelText="voltar">
          <IonSelectOption value="perimental-leste">
            Perimental Leste
          </IonSelectOption>
          <IonSelectOption value="vitória">Vitória</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonList>
        <IonItem className="title-label">
          <p>Supermercado Perimental Leste</p>
        </IonItem>

        <IonItemSliding className="cartSlider">
          <IonItem detail={false} className="cartItem">
            <IonAvatar>
              <IonImg src={Pro} />
            </IonAvatar>

            <IonLabel>
              <p>Cama</p>
            </IonLabel>
            <IonButton>
              <IonIcon icon={addSharp} />
            </IonButton>
            <div className="cartActions">
              <IonBadge color="primary">R$100,00</IonBadge>
            </div>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption
              color="primary"
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
            <IonButton>
              <IonIcon icon={addSharp} />
            </IonButton>
            <div className="cartActions">
              <IonBadge color="primary">R$100,00</IonBadge>
            </div>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption
              color="primary"
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
          &nbsp;Finalizar
        </IonButton>
      </div>
    </div>
  );
};

export default Cart;
