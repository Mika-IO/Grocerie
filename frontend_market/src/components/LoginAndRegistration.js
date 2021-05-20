import {
  IonButton,
  IonSlides,
  IonSlide,
  IonInput,
  IonIcon,
  IonItem,
} from "@ionic/react";
import "./styles/LoginRegister.css";
import { personSharp, personAddSharp } from "ionicons/icons";

function LoginAndRegistration(){
  return (
    <IonSlides id="Account" pager={true}>
      <IonSlide>
        <div className="swiper-slide-m">
          <IonIcon className="icon" ios={personSharp} />
          <p>Login</p>
          <IonItem>
            <IonInput placeholder="Email" type="email" required></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Senha" type="password" required></IonInput>
          </IonItem>
        </div>
        <IonButton
          type="submit"
          className="marg"
          routerLink={"/markets"}
          shape="round"
        >
          Login
        </IonButton>
      </IonSlide>

      <IonSlide>
        <div className="swiper-slide-m">
          <IonIcon className="icon" ios={personAddSharp} />
          <p>Registro</p>
          <IonItem>
            <IonInput placeholder="Email" type="email" required></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Senha" type="password" required></IonInput>
          </IonItem>
        </div>
        <IonButton
          type="submit"
          className="marg"
          routerLink={"/markets"}
          shape="round"
        >
          Continue
        </IonButton>
      </IonSlide>
    </IonSlides>
  );
};

export default LoginAndRegistration;
