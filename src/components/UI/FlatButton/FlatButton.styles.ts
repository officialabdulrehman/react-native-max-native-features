import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: props.backgroundColors.primary000,
    alignItems: "center"
  },
  text: {
    color: props.colors.primary400
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 6,
    backgroundColor: props.backgroundColors.primary100,
  },
}))