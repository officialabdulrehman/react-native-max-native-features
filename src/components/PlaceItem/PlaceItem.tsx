import { View } from "react-native";
import { Place } from "../../models/Place.model";

type Props = {
  place: Place;
};

export const PlaceItem = (props: Props) => {
  const { place } = props;
  return <View></View>;
};
