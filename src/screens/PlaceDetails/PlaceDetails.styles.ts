import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {

  },
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: props.colors.primary400,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
}))