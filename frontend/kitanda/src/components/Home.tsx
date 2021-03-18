import Banner from '../assets/banner.png';
import { IonButton, IonSlides, IonSlide, IonContent } from '@ionic/react';
import './styles/Home.css';
import Logo from '../assets/Logo.svg';
import LogoIcon from '../assets/logo-icon.png';


export const Home: React.FC = () => (
    <IonContent fullscreen>
        <IonSlides pager={true}>
            <IonSlide>
                <div className="swiper-slide">
                    <img src={LogoIcon}/>  
                    <h2>Chega de perder tempo…</h2>
                    <p>Supermercado agora é online!!!</p>
                    <IonButton shape="round">Faça suas compras online</IonButton> 
                </div>
            </IonSlide>

            <IonSlide>
                <div className="tovendor">
                    <p>Cadastre gratuitamente seu mercado. O <img src={Logo}/>  expõe mercados de bairro, vendendo para clientes no conforto de suas casas!</p>
                    <IonButton shape="round">Cadastre seu mercado</IonButton>  
                </div>
            </IonSlide>
        
        </IonSlides>
    </IonContent>
);

export default Home;