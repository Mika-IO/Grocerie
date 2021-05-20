import "./styles/Orders.css";
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

function Orders(){
  return (
    <div className="cart-content">
      <IonTitle>Pedidos</IonTitle>

      <IonRow className="ion-text-center ion-margin-top">
        <IonCol size="12">
          <IonNote>Você tem 2 pedidos para atender</IonNote>
        </IonCol>
      </IonRow>
      <IonItem>
        <IonLabel>Pedidos</IonLabel>
        <IonSelect cancelText="voltar">
          <IonSelectOption value="perimental-leste">
            Perimental Leste
          </IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem className="title-label">
          <p>Supermercado Perimental Leste</p>
        </IonItem>
      <IonList>
        <IonItemSliding className="cartSlider">
          <IonItem detail={false} className="cartItem">
            <IonLabel>
              <h2>Cliente</h2>
            </IonLabel>
            <IonButton color="primary">
            <IonIcon icon={checkmarkSharp} />
              &nbsp;Ver pedido
            </IonButton>
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
            <IonLabel>
              <h2>Cliente</h2>
            </IonLabel>
            <IonButton color="primary">
            <IonIcon icon={checkmarkSharp} />
              &nbsp;Ver pedido
            </IonButton>
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
    </div>
  );
};

export default Orders;
