import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabScreens = [];
export { TabScreens };

TabScreens.push(...[{ id: 'root.home', label: 'Home', component: HomeScreen }]);

export default function App() {
  const tabScreens = TabScreens.map(screen => {
    return <Tab.Screen key={screen.id} name={screen.label} children={() => <screen.component {...screen.componentProps} />} />;
  });
  return (
    <NavigationContainer>
      <Tab.Navigator>{tabScreens}</Tab.Navigator>
    </NavigationContainer>
  );
}
