import { useJsApiLoader } from "@react-google-maps/api";

export default function GoogleMapsProvider({ children }) {


const { isLoaded } = useJsApiLoader({
  id: "google-map-script",
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  libraries: ["marker"],
});
  if (!isLoaded) return null;

  return children;
}
