import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux/store";
import { styles } from "./LoadingOverlay.styles";

type Props = {};

export const LoadingOverlay = (props: Props) => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary400} />
    </View>
  );
};
