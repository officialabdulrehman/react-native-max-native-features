import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: props.colors.primary600,
    alignItems: "center"
  },
  text: {
    // color: props.colors.primary400,
    color: props.backgroundColors.primary000
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 6,
    backgroundColor: props.backgroundColors.primary000,
  },
}))