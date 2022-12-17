import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 10,
    marginBottom: 12,
    // padding: 12,
    backgroundColor: props.backgroundColors.primary000
  },
  pressed: {
    opacity: 0.9
  },
  image: {
    flex: 1,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  infoContainer: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontFamily: "sans-serif-thin",
    fontSize: 18,
    fontWeight: "bold",
    color: props.colors.primary600
  },
  address: {
    fontFamily: "sans-serif",
    fontSize: 14,
    color: props.textColors.primary600
  }
}))