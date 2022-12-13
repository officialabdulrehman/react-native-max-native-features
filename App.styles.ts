import { DynamicStyleSheet } from "./src/styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    flex: 1,
    backgroundColor: props.backgroundColors.primary000,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
