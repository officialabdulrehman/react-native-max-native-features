import { FlatList } from "react-native";
import { Place } from "../../models/Place.model";
import { PlaceItem } from "../PlaceItem/PlaceItem";

type Props = {
  places: Place[];
};

export const PlacesList = (props: Props) => {
  const { places } = props;
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};
