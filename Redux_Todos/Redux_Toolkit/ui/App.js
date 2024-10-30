import React from 'react';
import { AppProvider } from './context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen_01, Screen_02, Screen_03 } from './screen/Ex_01';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
};

const screens = [
  { name: 'Screen_01', component: Screen_01 },
  { name: 'Screen_02', component: Screen_02 },
  { name: 'Screen_03', component: Screen_03 },
];

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          {screens.map(({ name, component }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
