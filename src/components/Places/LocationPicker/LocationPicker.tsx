import { Ionicons } from "@expo/vector-icons";
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { Location } from "../../../models/Location.model";
import { Screens } from "../../../screens/Screens.enum";
import { Button } from "../../UI/Button/Button";
import { styles } from "./LocationPicker.styles";

type Props = {};

type LocObject = {
  lat: number;
  lng: number;
};

type NavProps = {
  Map: {};
};

type RouteParams = {
  Map: {
    pickedLocation: Location;
  };
};

export const LocationPicker = (props: Props) => {
  const [pickedLocation, setPickedLocation] = useState<LocObject>();
  const [locationPermissionsInfo, requestlocationPermission] =
    useForegroundPermissions();
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const route = useRoute<RouteProp<RouteParams, Screens.Map>>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setPickedLocation(route.params.pickedLocation);
    }
  }, [isFocused, route]);

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

  const handlePickOnMap = () => {
    navigation.navigate(Screens.Map, { defaultLocation: pickedLocation });
  };

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    // locationPreview = (
    //   <Image
    //     source={{
    //       uri: getMapPreview(pickedLocation?.lat, pickedLocation?.lng),
    //     }}
    //   />
    // );
    const region: Region = {
      latitude: pickedLocation?.lat,
      longitude: pickedLocation?.lng,
      latitudeDelta: 0.095,
      longitudeDelta: 0.05,
    };
    locationPreview = (
      <MapView style={styles.mapPreview} initialRegion={region}>
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: pickedLocation?.lat,
            longitude: pickedLocation?.lng,
          }}
        />
      </MapView>
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
