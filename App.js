import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Investment from './screens/Investment';
import Sells from './screens/Sells';
import Expense from './screens/Expense';
import Calculator from './screens/Calculator';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Aampur') {
            iconName = focused
              ? 'planet'
              : 'planet-outline';
          } else if (route.name === 'Investment') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }else if (route.name === 'Sells') {
            iconName = focused ? 'contract' : 'contract-outline';
          }else if (route.name === 'Expense') {
            iconName = focused ? 'attach' : 'attach-outline';
          }
          else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Aampur" component={Home} />
      <Tab.Screen name="Investment" component={Investment} />
      <Tab.Screen name="Sells" component={Sells} />
      <Tab.Screen name="Expense" component={Expense} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
