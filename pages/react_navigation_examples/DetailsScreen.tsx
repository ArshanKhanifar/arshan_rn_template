import {Button, Text, View} from 'react-native';
import {NavigationScreenProps} from '../../types/Navigation';

export const DetailsScreen = ({
  navigation,
  route: {
    params: {itemId},
  },
}: NavigationScreenProps) => {
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
