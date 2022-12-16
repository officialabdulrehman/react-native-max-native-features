import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { IconButton } from "../../components/UI/IconButton/IconButton";
import { AddPlace } from "../../screens/AddPlace/AddPlace.screen";
import { AllPlaces } from "../../screens/AllPlaces/AllPlaces.screen";
import { Map } from "../../screens/Map/Map.screen";
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
      <Stack.Screen
        name={Screens.AllPlaces}
        component={AllPlaces}
        options={({ navigation }) => ({
          title: "Your Favorite Places",
          headerRight: () => (
            <IconButton
              name="add"
              color={theme.colors.primary400}
              size={26}
              onPress={() => navigation.navigate(Screens.AddPlace)}
            />
          ),
        })}
      />
      <Stack.Screen
        name={Screens.AddPlace}
        component={AddPlace}
        options={() => ({
          title: "Add a new Place",
        })}
      />
      <Stack.Screen
        name={Screens.Map}
        component={Map}
        options={() => ({
          title: "Pick a location",
        })}
      />
    </Stack.Navigator>
  );
};
