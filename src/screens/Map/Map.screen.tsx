import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import MapView, { MapPressEvent, Marker, Region } from "react-native-maps";
import { useSelector } from "react-redux";
import { IconButton } from "../../components/UI/IconButton/IconButton";
import { Location } from "../../models/Location.model";
import { RootState } from "../../store/redux/store";
import { Screens } from "../Screens.enum";
import { styles } from "./Map.styles";

type Props = {};

type NavProps = {
  AddPlace: {
    pickedLocation: Location;
  };
};

type RouteParams = {
  AddPlace: {
    defaultLocation: Location;
  };
};

export const Map = (props: Props) => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const route = useRoute<RouteProp<RouteParams, Screens.AddPlace>>();
  const { defaultLocation } = route.params;
  const region: Region = {
    latitude: defaultLocation?.lat || 37.78,
    longitude: defaultLocation?.lng || -122.43,
    latitudeDelta: 0.9,
    longitudeDelta: 0.9,
  };
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    lat: region.latitude,
    lng: region.longitude,
  });

  const handleLocationSelection = (event: MapPressEvent) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  };

  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked", "Tap on the map to pick a location");
      return;
    }
    navigation.navigate(Screens.AddPlace, { pickedLocation: selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name="save"
          size={24}
          color={theme.colors.primary400}
          onPress={savePickedLocation}
        />
      ),
    });
  }, [navigation, savePickedLocation]);

  return (
    <MapView
      style={styles.container}
      initialRegion={region}
      onPress={handleLocationSelection}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation?.lat,
            longitude: selectedLocation?.lng,
          }}
        />
      )}
    </MapView>
  );
};
