import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './components/screens/WelcomeScreen';
import NoteDetail from './components/screens/NoteDetail';
import ViewTheMap from './components/screens/ViewTheMap';



export default function App() {
  
 const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{title: 'Welcome'}}
        />
         <Stack.Screen name="NoteDetail" component={NoteDetail} />
        <Stack.Screen name="ViewTheMap" component={ViewTheMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}