import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle,
  IonToolbar, IonRouterLink} from '@ionic/react';
import { useParams } from 'react-router';
import ContentContainer from './ContentContainer';
import Logo from './assets/Logo.svg';
import { IsAuthenticated } from "./services/Auth.js";

function PrivateRoute(props: any){
  const isAuthenticated = IsAuthenticated();
  const name = props.name
  
  if (isAuthenticated){
    return <ContentContainer name={name} />
  }
  else{
    return <ContentContainer name="login" />
  } 
}

function Router() {
  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">
            <IonRouterLink href="/"><img alt="logo" id="header_logo" height="25" width="250" float-center src={Logo}/><br/></IonRouterLink>
          </IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PrivateRoute name={name} />
      </IonContent>
    </IonPage>
  );
}

export default Router;
