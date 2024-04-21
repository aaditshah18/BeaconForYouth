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






































// // Styles for the container of the map

// import React, { useEffect, useRef } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';

// interface MapComponentProps {
//     origin: { lat: number; lng: number }; // Starting point coordinates
//     destination: { lat: number; lng: number }; // Ending point coordinates
// }

// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };


// const MapComponent: React.FC<MapComponentProps> = ({ origin, destination }) => {
//     const mapContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const loader = new Loader({
//             apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Use environment variable for API key
//             version: "weekly",
//         });

//         loader.load().then(() => {
//             if (mapContainerRef.current) {
//                 const google = window.google;
//                 const map = new google.maps.Map(mapContainerRef.current, {
//                     center: origin,
//                     zoom: 8,
//                 });

//                 const directionsService = new google.maps.DirectionsService();
//                 const directionsRenderer = new google.maps.DirectionsRenderer();
//                 directionsRenderer.setMap(map); // Bind the directionsRenderer to the map

//                 directionsService.route({
//                     origin: origin, // Use state or props for dynamic origin
//                     destination: destination, // Use state or props for dynamic destination
//                     travelMode: google.maps.TravelMode.DRIVING, // Or walking, biking, etc.
//                 }, (result, status) => {
//                     if (status === google.maps.DirectionsStatus.OK) {
//                         directionsRenderer.setDirections(result);
//                     } else {
//                         console.error(`Failed to load directions: ${status}`);
//                     }
//                 });
//             }
//         }).catch(e => {
//             console.error("Error loading the Google Maps script", e);
//         });

//     }, [origin, destination]); // React to changes in origin or destination

//     return <div ref={mapContainerRef} style={containerStyle} />;
// }

// export default React.memo(MapComponent);


