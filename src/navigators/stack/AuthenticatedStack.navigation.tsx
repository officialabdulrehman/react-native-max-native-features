import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";

const Stack = createNativeStackNavigator();

export const AuthenticatedStack = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.backgroundColors.primary000 },
        headerTintColor: theme.colors.primary400,
        contentStyle: { backgroundColor: theme.backgroundColors.primary100 },
      }}
    >
      <Stack.Screen name="dummy" component={() => <></>} />
    </Stack.Navigator>
  );
};
