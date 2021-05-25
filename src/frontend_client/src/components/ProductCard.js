import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonIcon,
} from "@ionic/react";
import { cart, cartSharp } from "ionicons/icons";
import "./styles/ProductCard.css";
import Pro from "../assets/bed.png";

function ProductCard(){
  return (
    <IonCol size="6">
      <IonCard className="categoryCard">
        <IonCardHeader className="productCardHeader">
          <div className="productCardActions">
            <p className="ion-text-wrap">Cama</p>
          </div>
          <img src={Pro} alt="product pic" />
        </IonCardHeader>

        <IonCardContent className="categoryCardContent">
          <div className="productPrice">
            <IonButton style={{ width: "100%" }} color="light">
              R$100
            </IonButton>
            <IonButton color="primary">
              <IonIcon icon={cartSharp} />
            </IonButton>

            <IonIcon
              icon={cart}
              color="dark"
              style={{
                position: "absolute",
                display: "none",
                fontSize: "3rem",
              }}
              className="animate__animated"
            />
          </div>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};

export default ProductCard;
