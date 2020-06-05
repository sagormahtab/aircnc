import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


const Map = () => {
    return (
        <div>
            <LeafletMap
                center={[23.777176, 90.399452]}
                zoom={10}
                maxZoom={50}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={[23.777176, 90.399452]}>
                <Popup>
                    Popup for any custom information.
                </Popup>
                </Marker>
            </LeafletMap>
        </div>
    );
};

export default Map;