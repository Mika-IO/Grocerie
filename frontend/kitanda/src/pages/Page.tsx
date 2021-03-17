import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, IonTitle, 
  IonToolbar} from '@ionic/react';
import { useParams } from 'react-router';
import ContentContainer from '../components/ContentContainer';
import './Page.css';
import Logo from '../assets/Logo.svg';

function Page() {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class="ion-text-center">
              <img alt="logo" id="header_logo" height="25" width="250" float-center src={Logo}/><br/>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ContentContainer name={name} />
      </IonContent>
    </IonPage>
  );
}

export default Page;
