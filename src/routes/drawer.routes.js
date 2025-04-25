import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DiversityPage from "../screens/DiversityPage";
import Home from "../screens/Home";
import SustentabilityPage from "../screens/SustentabilityPage";
import MovieDetailsPage from "../screens/MovieDetailsPage";
import TabRoutes from "./tab.routes";
import MentalHealthPage from "../screens/MentalHealthPage";
import ThemesPage from "../screens/ThemesPage";
const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "🎬 CineTransforma",
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
        drawerActiveTintColor: "red",
        drawerInactiveTintColor: "white",
        drawerLabelStyle: {
          color: "white",
          fontWeight: "bold",
        },
        drawerStyle: {
          backgroundColor: "#000",
        },
        headerStyle: {
          backgroundColor: "#1a1a1a",
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "red",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        initialParams={{ inicialRouteName: "tabLogin" }}
        options={{
          drawerIcon: () => <Ionicons name="home" size={20} color="white" />,
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="Diversidade"
        component={DiversityPage}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="diversity-1" size={20} color="white" />
          ),
          drawerLabel: "Diversidade",
        }}
      />
      <Drawer.Screen
        name="Sustentabilidade"
        component={SustentabilityPage}
        options={{
          drawerIcon: () => <Ionicons name="earth" size={20} color="white" />,
          drawerLabel: "Sustentabilidade",
        }}
      />
      <Drawer.Screen
  name="Descrição Filme"
  component={MovieDetailsPage} 
  options={{
    drawerIcon: () => (
      <FontAwesome5 name="hand-holding-heart" size={20} color="white" />
    ),
    drawerLabel: "Descrição Filme",
  }}
/>
<Drawer.Screen
  name="Temas"
  component={ThemesPage}
  options={{
    drawerIcon: () => <Ionicons name="film-outline" size={20} color="white" />,
    drawerLabel: "Temas",
  }}
/>
<Drawer.Screen
  name="Saúde Mental"
  component={MentalHealthPage}
  options={{
    drawerIcon: () => (
      <FontAwesome5 name="hand-holding-heart" size={20} color="white" />
    ),
    drawerLabel: "Saúde Mental",
  }}
/>
    </Drawer.Navigator>
  );
}
