import MapView, { Region } from "react-native-maps";
import { styles } from "./Map.styles";

type Props = {};

export const Map = (props: Props) => {
  const region: Region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.9,
    longitudeDelta: 0.9,
  };
  return <MapView style={styles.container} initialRegion={region}></MapView>;
};
