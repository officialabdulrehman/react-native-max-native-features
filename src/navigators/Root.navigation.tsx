import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./stack/MainStack.navigation";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
