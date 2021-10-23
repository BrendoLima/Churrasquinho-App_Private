import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//  Pages
import Comanda from "./Pages/Comanda";
import Homepage from "./Pages/HomePage";
import Payment from "./Pages/Payment";

const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#E26C21",
          borderTopColor: "transparent",
        },
        activeTintColor: "#9A3731",
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen name="inicio" component={Homepage} />
      <Tab.Screen name="Comanda" component={Comanda} />
      <Tab.Screen name="Pagamento" component={Payment} />
    </Tab.Navigator>
  );
}
