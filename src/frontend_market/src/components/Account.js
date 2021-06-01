import "./styles/Account.css";
import { useState } from "react";
import { IonTitle, IonButton, IonAvatar, IonItem, IonCard } from "@ionic/react";
import api from "../services/API";
import { getUserId } from "../services/Auth";

   
function Account() {
  const [email, setEmail] = useState("...")
  const [avatar, setAvatar] = useState("/static/media/logo-icon.2528e4fe.png")

  async function getProfile(){
    const userId = getUserId()
    const response = await api.get("/profile/",  { params: {"user_id": userId}});
    const profile = response.data[0];
    if (profile){
      setEmail(response.data[0]["email"])
      //setAvatar(response.data[0]["avatar"])
    }
  }
  return (
      <div onLoad={getProfile} className="aa-content">
        <IonCard className="perfil-content">
          <IonItem>
            <IonTitle>{email}</IonTitle>
            <IonAvatar slot="end">
              <img src={avatar}/>
            </IonAvatar>
          </IonItem>
          <IonButton className="btn-sair" routerLink={"/logout"} shape="round">
              Sair dessa conta
            </IonButton>
        </IonCard>
      </div>
  );
}

export default Account;
