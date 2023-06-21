import {Button, Text, View} from 'react-native';
import React from 'react';
import {NavDemoTypes} from './navdemotypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<NavDemoTypes, 'HomeScreen'>;
};
export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const screens: Array<keyof NavDemoTypes> = [
    'DetailsScreen',
    'HeaderModifiedScreen',
  ];

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {screens.map(id => (
        <View key={id}>
          <Button
            title={'Go to ' + id}
            onPress={() => {
              // @ts-ignore
              navigation.navigate(id);
            }}
          />
        </View>
      ))}
    </View>
  );
};
