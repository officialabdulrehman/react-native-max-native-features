import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Button } from "../../UI/Button/Button";
import { styles } from "./LocationPicker.styles";

type Props = {};

export const LocationPicker = (props: Props) => {
  const handleLocateUser = () => {};

  const handlePickOnMap = () => {};

  const locationIcon: string = (<Ionicons name="location" size={24} />) as any;
  const mapIcon: string = (<Ionicons name="map" size={24} />) as any;

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actionsContainer}>
        <Button onPress={handleLocateUser}> {locationIcon}Locate User</Button>
        <Button onPress={handlePickOnMap}>{mapIcon} Pick on Map</Button>
      </View>
    </View>
  );
};
