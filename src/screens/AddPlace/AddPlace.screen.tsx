import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlaceForm } from "../../components/Places/PlaceForm/PlaceForm";
import { insertPlace } from "../../config/database";
import { Place } from "../../models/Place.model";
import { Screens } from "../Screens.enum";

type Props = {};

type NavProps = {
  AllPlaces: {
    place: Place;
  };
};

export const AddPlace = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();
  const handleNewPlace = async (place: Place) => {
    await insertPlace(place);
    navigation.navigate(Screens.AllPlaces, {
      place,
    });
  };

  return <PlaceForm onNewPlace={handleNewPlace} />;
};
