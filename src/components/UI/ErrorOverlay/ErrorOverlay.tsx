import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/store";
import { Button } from "../Button/Button";
import { styles } from "./ErrorOverlay.styles";

type Props = {
  message: string;
  onConfirm: () => void;
};

export const ErrorOverlay = (props: Props) => {
  const { message, onConfirm } = props;
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Something went wrong</Text>
      <Text style={[styles.text, styles.error]}> {message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};
