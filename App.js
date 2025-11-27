import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Dewey from "./screens/Dewey";
import Generi from "./screens/Generi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Biblioteca Calicantus" }}
        />
        <Stack.Screen
          name="Dewey"
          component={Dewey}
          options={{ title: "Classi di Dewey" }}
        />
        <Stack.Screen
          name="Generi"
          component={Generi}
          options={{ title: "Generi" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
