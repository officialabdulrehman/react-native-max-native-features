import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { AddPlace } from "../../screens/AddPlace/AddPlace.screen";
import { AllPlaces } from "../../screens/AllPlaces/AllPlaces.screen";
import { Screens } from "../../screens/Screens.enum";
import { RootState } from "../../store/redux/store";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.backgroundColors.primary000 },
        headerTintColor: theme.colors.primary400,
        contentStyle: { backgroundColor: theme.backgroundColors.primary100 },
      }}
    >
      <Stack.Screen name={Screens.AllPlaces} component={AllPlaces} />
      <Stack.Screen name={Screens.AddPlace} component={AddPlace} />
    </Stack.Navigator>
  );
};
