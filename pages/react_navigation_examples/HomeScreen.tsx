import {Button, Text, View} from 'react-native';
import {NavigationScreenProps} from '../../types/Navigation';

export const HomeScreen = ({navigation}: NavigationScreenProps) => {
  const screens = ['DetailsScreen', 'HeaderModifiedScreen'];

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {screens.map(id => (
        <View key={id}>
          <Button
            title={'Go to ' + id}
            onPress={() => {
              navigation.navigate(id);
            }}
          />
        </View>
      ))}
    </View>
  );
};
