import React, { useState, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"; 
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { IonContent, IonButton, IonPage, IonIcon, IonLoading, IonToast } from '@ionic/react';
import { storefrontSharp } from 'ionicons/icons';

import Leafleft from 'leaflet';
import market from "../assets/Local.svg";
import ModalStore from './ModalStore'

import "./styles/Markets.css";




interface propsMap{
    latitude: number, 
    longitude: number,
};

interface propsMarketPin{
    marketName?: string,
    latitude: number, 
    longitude: number,
};

interface LocationError {
    showError: boolean;
    message?: string;
}
const marketIcon = new Leafleft.Icon({
    iconUrl: market,
    iconRetinaUrl: 'marketIcon',
    popupAnchor:  [-0, -0],
    iconSize: [40,53],     
});


function RenderMap() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();

    const getLocalization = async () => {
        setLoading(true);
        try {
            const position = await Geolocation.getCurrentPosition();
            setPosition(position);
            setLoading(false);
            setError({ showError: false });
        } catch (e) {
            setError({ showError: true, message: e.message });
            setLoading(false);
        }
    };

    const MarketPin :React.FC<propsMarketPin> = ({ latitude, longitude }) => {
        return (
            <Marker icon={ marketIcon } position={[latitude, longitude]}>
                <Popup>
                    <span className="a-pin"><IonIcon className="icon" color="primary" src={storefrontSharp}/>
                        <br/>
                        Supermercado Perimental Leste
                        <br/>
                        <ModalStore/>
                    </span>
                </Popup>
            </Marker>
        );
    };
    
    const CenterMap :React.FC<propsMap> = ({ latitude, longitude }) => {
        const ACESS_TOKEN_MAPBOX:string = "pk.eyJ1IjoibWlrYWlvIiwiYSI6ImNrbWw1dGUzaTA0ZWgycG4zcG1mNjlndTkifQ.9FPy7-u0YmuPnjezn2kDPA"
        return (
            <MapContainer id="mapid" center={ [latitude, longitude] } zoomControl={false} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='Kitanda.SHOP'
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${ACESS_TOKEN_MAPBOX}`}/>
                <MarketPin latitude={latitude} longitude={longitude}/>
                <ZoomControl position="bottomleft"/>
            </MapContainer>
        );
    };

    const LoadLocalization :React.FC = () => {
        if(position != undefined && position.coords.latitude && position.coords.longitude){
            console.log(`${position.coords.latitude} ${position.coords.longitude}`)
            const latitude:number = Number(position.coords.latitude);
            const longitude:number = Number(position.coords.longitude);
            return <CenterMap latitude={latitude} longitude={longitude}/>
        }else {
            return (
                <>
                    <IonLoading
                        isOpen={loading}
                        onDidDismiss={() => setLoading(false)}
                        message={'Pegando sua localização...'} />
                    <IonToast
                        isOpen={error.showError}
                        onDidDismiss={() => setError({ message: "", showError: false })}
                        message={error.message}
                        duration={3000} />
                    <IonContent color="primary">{position ? `${position.coords.latitude} ${position.coords.longitude}` : "Get Location"}</IonContent>
                </>
            );
        };
    };

    useEffect(() => {
        getLocalization();
    }, []);
    return (
        <LoadLocalization/>
    );
}

const Markets: React.FC = () => {
    return (
        <div>
            <RenderMap/>
        </div>
    );
};

export default Markets;
