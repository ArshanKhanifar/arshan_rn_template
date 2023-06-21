import {Button, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NavDemoTypes} from './navdemotypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<NavDemoTypes, 'DetailsScreen'>;
  route: RouteProp<NavDemoTypes, 'DetailsScreen'>;
};

export const DetailsScreen: React.FC<DetailsScreenProps> = ({
  navigation,
  route: {
    params: {itemId},
  },
}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('DetailsScreen', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go Home" onPress={() => navigation.push('HomeScreen')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
