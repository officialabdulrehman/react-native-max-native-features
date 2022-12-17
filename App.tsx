import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { init } from "./src/config/database";
import { RootNavigator } from "./src/navigators/Root.navigation";
import { store } from "./src/store/redux/store";

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const initializeDb = async () => {
      try {
        const db = await init();
        console.log("DB Initialized => ", db);
      } catch (e) {
        console.log("DB failed => ", e);
      }
      setDbInitialized(true);
    };
    initializeDb();
  }, []);
  if (!dbInitialized) {
    <AppLoading />;
  }

  return (
    <>
      <Provider store={store}>
        <RootNavigator />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
