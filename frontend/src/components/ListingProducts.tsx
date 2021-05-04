import React, { useState } from "react";
import "./styles/ListingProducts.css";
import { cartSharp, cardSharp, searchOutline } from "ionicons/icons";
import {
  IonIcon,
  IonGrid,
  IonSearchbar,
  IonToolbar,
  IonRow,
  IonCol,
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonBadge,
} from "@ionic/react";
import ProductCard from "./ProductCard";

const ListingProducts: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  // Esse componente é a tela de listagem de produtos
  return (
    <div>
      <IonHeader className="list-header">
        <IonToolbar>
          <IonButtons className="header-icons">
            <IonBackButton defaultHref="home"></IonBackButton>
            <p>Supermercado Perimental Leste</p>
            <IonButtons slot="start">
              <IonBadge color="primary">0</IonBadge>
              <IonButton>
                <IonIcon
                  className="header-icon"
                  color="primary"
                  icon={cartSharp}
                />
              </IonButton>
              <IonButton>
                <IonIcon
                  className="header-icon"
                  color="primary"
                  icon={cardSharp}
                />
              </IonButton>
            </IonButtons>

            <IonButtons slot="end"></IonButtons>
          </IonButtons>

          <IonSearchbar
            placeholder="Pesquisar produtos..."
            searchIcon={searchOutline}
            animated={true}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow className="ion-text-center">
          <IonCol size="12">
            {/* <IonNote>{ searchResults && searchResults.length } { (searchResults.length > 1 || searchResults.length === 0) ? " products" : " product" } found</IonNote> */}
          </IonCol>
        </IonRow>

        <IonRow>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ListingProducts;
