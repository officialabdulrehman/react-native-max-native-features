import { FlatList, Text, View } from "react-native";
import { Place } from "../../../models/Place.model";
import { PlaceItem } from "../PlaceItem/PlaceItem";
import { styles } from "./PlacesList.styles";

type Props = {
  places: Place[];
};

export const PlacesList = (props: Props) => {
  const { places } = props;

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
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={() => {}} />}
    />
  );
};
