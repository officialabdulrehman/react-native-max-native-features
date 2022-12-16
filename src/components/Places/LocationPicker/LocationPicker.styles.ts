import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {

  },
  mapPreview: {
    width: "100%",
    height: 400,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: props.backgroundColors.primary100,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 400,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: props.backgroundColors.primary100
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    marginBottom: 15
  },
  button: {
    width: "40%"
  }
}))