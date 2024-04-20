import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapComponentProps {
    lat: number;
    lng: number;
}

const containerStyle = {
    width: '400px',
    height: '400px'
};

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null); // Create a ref for the map container

    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Ensure your API key is correctly configured
            version: "weekly",
        });

        loader.load().then(() => {
            if (mapContainerRef.current) { // Ensure the container ref is not null
                const map = new google.maps.Map(mapContainerRef.current, {
                    center: { lat, lng },
                    zoom: 8,
                });

                // Add a marker to the map at the same center position
                new google.maps.Marker({
                    position: { lat, lng },
                    map: map,
                });
            }
        }).catch(e => {
            console.error("Error loading the Google Maps script", e);
        });

    }, [lat, lng]); // Dependencies array includes lat and lng to reload map if these props change

    return <div ref={mapContainerRef} style={containerStyle} />;
}

export default React.memo(MapComponent);






































// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// // Define the type for the component props
// interface MapComponentProps {
//     lat: number;
//     lng: number;
// }

// // Styles for the container of the map
// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

// const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
//     // Center of the map using props
//     const center = {
//         lat: lat,
//         lng: lng
//     };

//     return (
//         <LoadScript
//             googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyC0qO_hLYNHpbLqeguPaBI1_wh-NtDvvlo'}
//         >
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//             >
//                 <Marker position={center} />
//             </GoogleMap>
//         </LoadScript>
//     );
// }

// export default React.memo(MapComponent);
