import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {

  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fallbackText: {
    fontSize: 16
  }
}))