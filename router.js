import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//  Pages
import Cardapio from "./Pages/Cardapio";
import Comanda from "./Pages/Comanda";
import Pagamento from "./Pages/Pagamento";

const Tab = createBottomTabNavigator();
export default function Router() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarItemStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          borderTopColor: "transparent",
        },
        tabBarStyle: [
          {
            backgroundColor: "#E26C21",
            display: "flex",
          },
        ],
      }}
    >
      <Tab.Screen
        name="Cardápio"
        component={Cardapio}
        options={{
          tabBarIcon: ({ size, color }) => <h1>+</h1>,
        }}
      />
      <Tab.Screen
        name="Comanda"
        component={Comanda}
        options={{
          tabBarIcon: ({ size, color }) => <h1>+</h1>,
        }}
      />
      <Tab.Screen
        name="Pagamento"
        component={Pagamento}
        options={{
          tabBarIcon: ({ size, color }) => <h1>+</h1>,
        }}
      />
    </Tab.Navigator>
  );
}
