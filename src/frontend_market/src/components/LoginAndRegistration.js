import {
  IonButton,
  IonSlides,
  IonSlide,
  IonInput,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./styles/LoginRegister.css";
import { personSharp, personAddSharp } from "ionicons/icons";
import api from "../services/API";
import { Login } from "../services/Auth";

function LoginAndRegistration() {
  const [LoginEmail, setLoginEmail] = useState();
  const [LoginPassword, setLoginPassword] = useState();
  const [RegisterEmail, setRegisterEmail] = useState();
  const [RegisterPassword, setRegisterPassword] = useState();
  const [errLogin, setLoginError] = useState();
  const [errRegister, setRegisterError] = useState();

  const [redirect, setRedirect] = useState(false);

  const makeRegister = async (RegisterEmail, RegisterPassword) => {
    if (!RegisterEmail || !RegisterPassword) {
      setRegisterError("Preencha todos os dados para se cadastrar");
    } else {
      try {
        const response = await api.post("/register/", {
          email: RegisterEmail,
          password: RegisterPassword,
        });
        if (response.status == 201 && response.statusText == "Created") {
          setRegisterError("Usuário criado com sucesso");
          makeLogin(RegisterEmail, RegisterPassword);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const makeLogin = async (LoginEmail, LoginPassword) => {
    if (!LoginEmail || !LoginPassword) {
      setLoginError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/login/", {
          email: LoginEmail,
          password: LoginPassword,
        });
        Login(response.data);
        setRedirect(true);
      } catch (err) {
        console.log(err);
        setLoginError("Erro ao logar, verifique suas credenciais");
      }
    }
  };

  return (
    <IonSlides id="Account" pager={true}>
      {redirect ? <Redirect push to="/mymarket" /> : null}
      <IonSlide>
        <div className="swiper-slide-m">
          <IonIcon className="icon" ios={personSharp} />
          <p>Login</p>
          <IonItem>
            <IonInput
              onIonChange={(e) => setLoginEmail(e.detail.value)}
              placeholder="Email"
              type="email"
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              onIonChange={(e) => setLoginPassword(e.detail.value)}
              placeholder="Senha"
              type="password"
              required
            ></IonInput>
          </IonItem>
          <IonLabel>{errLogin}</IonLabel>
        </div>
        <IonButton
          type="submit"
          onClick={() => {
            makeLogin(LoginEmail, LoginPassword);
          }}
          className="marg"
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
            <IonInput
              onIonChange={(e) => setRegisterEmail(e.detail.value)}
              placeholder="Email"
              type="email"
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              onIonChange={(e) => setRegisterPassword(e.detail.value)}
              placeholder="Senha"
              type="password"
              required
            ></IonInput>
          </IonItem>
          <IonLabel>{errRegister}</IonLabel>
        </div>
        <IonButton
          type="submit"
          onClick={() => {
            makeRegister(RegisterEmail, RegisterPassword);
          }}
          className="marg"
          shape="round"
        >
          Continue
        </IonButton>
      </IonSlide>
    </IonSlides>
  );
}

export default LoginAndRegistration;
