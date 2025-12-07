import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Dewey from "./screens/Dewey";
import Generi from "./screens/Generi";
import Detail from "./screens/Detail";

// ⭐ Import del font
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold
} from "@expo-google-fonts/merriweather";

const Stack = createNativeStackNavigator();

export default function App() {

  // ⭐ Caricamento del font
  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold
  });

  // ⭐ Finché il font non è pronto, non renderizziamo nulla
  if (!fontsLoaded) {
    return null;
  }

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

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "Dettaglio" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
