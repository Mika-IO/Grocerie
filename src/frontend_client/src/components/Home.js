import { IonButton, IonSlides, IonSlide, IonContent } from "@ionic/react";
import "./styles/Home.css";
import Logo from "../assets/Logo.svg";
import LogoIcon from "../assets/logo-icon.png";
import "@ionic/react/css/core.css";

function Home(){
  return (
  <IonContent fullscreen>
    <IonSlides pager={true}>
      <IonSlide>
        <div className="swiper-slide">
          <img alt="logo_icon" src={LogoIcon} />
          <p>Chega de perder tempo…</p>
          <p>Supermercado agora é online!!!</p>
          <IonButton className="btn" routerLink={"/markets"} shape="round">
            Faça suas compras online
          </IonButton>
        </div>
      </IonSlide>

      <IonSlide>
        <div className="swiper-slide">
          <img alt="logo" src={Logo} />
          <p>Nós te ajudamos a comprar no conforto de sua casa</p>
          <p>Pare de aglomerar no supermercado! Compre online agora!</p>
          <IonButton
            className="btn"
            routerLink={"/market-manager"}
            shape="round"
          >
            Faça suas compras
          </IonButton>
        </div>
      </IonSlide>
    </IonSlides>
  </IonContent>
)};

export default Home;
