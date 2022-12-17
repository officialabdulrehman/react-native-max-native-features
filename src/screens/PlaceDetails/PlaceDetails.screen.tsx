import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IconButton } from "../../components/UI/IconButton/IconButton";
import { fetchPlaceDetails } from "../../config/database";
import { Place } from "../../models/Place.model";
import { RootState } from "../../store/redux/store";
import { Screens } from "../Screens.enum";
import { styles } from "./PlaceDetails.styles";

type Props = {};

type NavProps = {
  Map: {};
};

type RouteParams = {
  AllPlaces: {
    placeId: string;
  };
};

export const PlaceDetails = (props: Props) => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const [fetchedPlace, setFetchedPlace] = useState<Place>();
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const route = useRoute<RouteProp<RouteParams, Screens.AllPlaces>>();

  function handleShowOnMap() {
    if (fetchedPlace)
      navigation.navigate(Screens.Map, {
        location: {
          lat: fetchedPlace.location.lat,
          lng: fetchedPlace.location.lng,
        },
      });
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place: Place = (await fetchPlaceDetails(selectedPlaceId)) as any;
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <IconButton
          name="map"
          color={theme.colors.primary400}
          size={24}
          onPress={handleShowOnMap}
        />
      </View>
    </ScrollView>
  );
};
