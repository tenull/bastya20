import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

const locations = [
  {
    title: "Bástya Idősek Otthona",
    address: "4450 Tiszalök, Hősök tere 7/a",
    position: { lat: 48.02211, lng: 21.38163 },
  },
  {
    title: "Forrás Idősek Otthona",
    address: "4450 Tiszalök, Kossuth utca 41.",
    position: { lat: 48.02047, lng: 21.37912 },
  },
  {
    title: "Nappali Ellátás",
    address: "4450 Tiszalök, Damjanich utca 24.",
    position: { lat: 48.01792, lng: 21.37485 },
  },
];

function GoogleMapOption() {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: 'AIzaSyDNcItqWtFb_GcDCK6JHdBFMPRqoYUz_QA',
    libraries: ["marker"], 
  });

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const bounds = new window.google.maps.LatLngBounds();

    locations.forEach((loc) => {
      bounds.extend(loc.position);

      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position: loc.position,
        title: loc.title,
      });

      const info = new window.google.maps.InfoWindow({
        content: `
          <div style="font-size:14px">
            <strong>${loc.title}</strong><br/>
            ${loc.address}
          </div>
        `,
      });

      marker.addListener("click", () => {
        info.open({
          map: mapRef.current,
          anchor: marker,
        });
      });
    });

    mapRef.current.fitBounds(bounds);
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={locations[0].position}
      zoom={15}
      onLoad={(map) => (mapRef.current = map)}
      options={{ disableDefaultUI: true, zoomControl: true }}
    />
  );
}

export default GoogleMapOption;
