import { Pressable, Text, View } from "react-native";
import { styles } from "./Button.styles";

type Props = {
  children: string;
  onPress: () => void;
};

export const Button = (props: Props) => {
  const { children, onPress } = props;
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};
