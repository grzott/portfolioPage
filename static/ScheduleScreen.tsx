import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
//components
import Schedule from './Schedule';
import {RootStackParamList} from 'index';

const Stack = createStackNavigator();

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Ramówka'>;

const ScheduleScreen: React.FC<{
  route: ProfileScreenRouteProp;
}> = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialParams={{antena: route.params.antena}}
        name="Ramówka"
        options={{
          headerShown: false,
        }}
        component={Schedule}
      />
    </Stack.Navigator>
  );
};

export default ScheduleScreen;
