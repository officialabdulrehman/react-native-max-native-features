import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { PlacesList } from "../../components/Places/PlacesList/PlacesList";
import { fetchPlaces } from "../../config/database";
import { Place } from "../../models/Place.model";

type Props = {};

type RouteProps = {
  AddPlace: {
    place: Place;
  };
};

export const AllPlaces = (props: Props) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const route = useRoute<RouteProp<RouteProps>>();
  const place = route?.params?.place;

  useEffect(() => {
    const loadPlaces = async () => {
      const loadedPlaces: Place[] = (await fetchPlaces()) as any;
      setPlaces(loadedPlaces);
    };
    loadPlaces();
    // if (place) {
    //   setPlaces((curPlaces) => [...curPlaces, place]);
    // }
  }, [place]);

  return <PlacesList places={places} />;
};
