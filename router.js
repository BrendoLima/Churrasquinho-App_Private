import React from "react";
//import { Entypo, Feather } from "@expo/vector-icons";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//  Pages
//import Comanda from "./Pages/Comanda";
//import Homepage from "./Pages/HomePage";
//import Payment from "./Pages/Payment";

const Tab = createBottomTabNavigator();
export default function Routes() {
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
          null,
        ],
      }}
    >
      <Tab.Screen name="Cardápio" component={Homepage} />
      <Tab.Screen name="Minha Comanda" component={Comanda} />
      <Tab.Screen name="Pagamento" component={Payment} />
    </Tab.Navigator>
  );
}
