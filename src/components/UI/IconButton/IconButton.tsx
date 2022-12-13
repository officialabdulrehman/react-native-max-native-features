import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { styles } from "./IconButton.styles";

type Props = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  size: number;
  color: string;
  onPress: () => void;
};

export const IconButton = (props: Props) => {
  const { name, size, color, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};
