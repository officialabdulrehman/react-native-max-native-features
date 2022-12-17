import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, Text, View } from "react-native";
import { Place } from "../../../models/Place.model";
import { Screens } from "../../../screens/Screens.enum";
import { PlaceItem } from "../PlaceItem/PlaceItem";
import { styles } from "./PlacesList.styles";

type Props = {
  places: Place[];
};

type NavProps = {
  PlaceDetails: {};
};

export const PlacesList = (props: Props) => {
  const { places } = props;
  const navigation = useNavigation<NativeStackNavigationProp<NavProps>>();

  const handleSelectPlace = (id: string) => {
    navigation.navigate(Screens.PlaceDetails, {
      placeId: id,
    });
  };

  if (!places.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id as string}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={handleSelectPlace} />
      )}
      style={styles.container}
    />
  );
};
