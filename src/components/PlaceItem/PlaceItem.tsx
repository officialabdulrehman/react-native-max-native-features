import { Image, Pressable, Text, View } from "react-native";
import { Place } from "../../models/Place.model";

type Props = {
  place: Place;
  onSelect: () => void;
};

export const PlaceItem = (props: Props) => {
  const {
    place: { title, address, imageUri },
    onSelect,
  } = props;
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Image source={{ uri: imageUri }} />
        <View>
          <Text>{title}</Text>
          <Text>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};
