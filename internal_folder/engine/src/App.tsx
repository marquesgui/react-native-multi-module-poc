import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarItem from 'react-native-ui-lib/generatedTypes/src/components/tabController/TabBarItem';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Foo!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabScreens = [];
export { TabScreens };

TabScreens.push(
  ...[
    { id: 'root.home', label: 'Home', component: HomeScreen },
    { id: 'root.foo', label: 'Foo', component: SettingsScreen },
  ],
);

export default function App() {
  const tabScreens = TabScreens.map(screen => <Tab.Screen key={screen.id} name={screen.label} component={screen.component} />);
  return (
    <NavigationContainer>
      <Tab.Navigator>{tabScreens}</Tab.Navigator>
    </NavigationContainer>
  );
}
