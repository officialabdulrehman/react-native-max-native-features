import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { styles } from "./Input.styles";

type Props = {
  label: string;
  config?: TextInputProps;
  invalid?: boolean;
  style?: StyleProp<TextStyle>;
};

export const Input = (props: Props) => {
  const { label, config, style, invalid } = props;

  const inputStyles: Partial<TextInputProps>["style"][] = [styles.textInput];

  if (config?.multiline) {
    inputStyles.push(styles.textInputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...config} />
    </View>
  );
};
