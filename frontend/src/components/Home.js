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
          <p>Nós te ajudamos a vender para clientes no conforto de suas casa</p>
          <p>Fature mais! Comece hoje, gratuitamente!</p>
          <IonButton
            className="btn"
            routerLink={"/market-manager"}
            shape="round"
          >
            Seu mercado
          </IonButton>
        </div>
      </IonSlide>
    </IonSlides>
  </IonContent>
)};

export default Home;
