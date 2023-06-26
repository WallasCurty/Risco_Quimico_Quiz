import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import QuizApp from './src/QUIZ/index';
import Playground from './src/QUIZ/Playground';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="QuizApp" component={QuizApp}/>
        <Stack.Screen name="Playground" component={Playground}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


