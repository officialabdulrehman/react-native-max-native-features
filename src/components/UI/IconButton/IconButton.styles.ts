import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    borderRadius: 10,
    padding: 6,
    marginHorizontal: 10,
    marginVertical: 2
  },
  pressed: {
    opacity: 0.75
  },
}))