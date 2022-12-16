import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: props.backgroundColors.primary000,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 6,
    borderRadius: 10,
    color: props.colors.primary400,
    letterSpacing: 0.5
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: props.backgroundColors.primary100
  },
  buttonContainer: {
    marginBottom: 50
  }
}))