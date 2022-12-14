import { Ionicons } from "@expo/vector-icons";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { getMapPreview } from "../../../util/location";
import { Button } from "../../UI/Button/Button";
import { styles } from "./LocationPicker.styles";

type Props = {};

export const LocationPicker = (props: Props) => {
  const [pickedLocation, setPickedLocation] = useState<{
    lat: number;
    lng: number;
  }>();
  const [locationPermissionsInfo, requestlocationPermission] =
    useForegroundPermissions();

  const verifyPermission = async () => {
    if (locationPermissionsInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestlocationPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionsInfo?.status === PermissionStatus.DENIED) {
      const permissionResponse = await requestlocationPermission();
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return permissionResponse.granted;
    }
    return true;
  };

  const handleGeoLocateUser = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync({
      accuracy: LocationAccuracy.BestForNavigation,
    });
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const handlePickOnMap = () => {};

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        source={{
          uri: getMapPreview(pickedLocation?.lat, pickedLocation?.lng),
        }}
      />
    );
  }

  const locationIcon: string = (<Ionicons name="location" size={24} />) as any;
  const mapIcon: string = (<Ionicons name="map" size={24} />) as any;

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actionsContainer}>
        <Button onPress={handleGeoLocateUser}>{locationIcon}</Button>
        <Button onPress={handlePickOnMap}>{mapIcon}</Button>
      </View>
    </View>
  );
};
