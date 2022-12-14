import { Image, Pressable, Text, View } from "react-native";
import { Place } from "../../../models/Place.model";
import { styles } from "./PlaceItem.styles";

type Props = {
  place: Place;
  onSelect: (id: string) => void;
};

export const PlaceItem = (props: Props) => {
  const {
    place: { id, title, address, imageUri },
    onSelect,
  } = props;
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => onSelect(id as string)}
    >
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </Pressable>
  );
};
