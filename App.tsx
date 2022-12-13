import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { RootNavigator } from "./src/navigators/Root.navigation";
import { store } from "./src/store/redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
