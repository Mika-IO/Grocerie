import "./styles/Orders.css";
import {
  checkmarkSharp,
  trashSharp,
} from "ionicons/icons";
import {
  IonIcon,
  IonItemOption,
  IonItemOptions,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonNote,
  IonButton,
  IonTitle,
  IonList,
  IonItemSliding,
} from "@ionic/react";

function Orders(){
  return (
    <div className="cart-content">
      <IonTitle>Supermercado Perimental Leste</IonTitle>

      <IonRow className="ion-text-center ion-margin-top">
        <IonCol size="12">
          <IonNote>Você tem 2 pedidos para atender</IonNote>
        </IonCol>
      </IonRow>
      <IonItem className="title-label">
          <p>Pedidos</p>
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
