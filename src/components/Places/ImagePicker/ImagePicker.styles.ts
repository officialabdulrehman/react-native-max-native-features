import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {

  },
  previewImage: {
    width: "100%",
    height: 400,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  }
}))