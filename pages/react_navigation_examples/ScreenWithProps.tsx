import {Text, View} from 'react-native';

export const ScreenWithProps = ({title}: {title: string}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Here's a title: {title}</Text>
    </View>
  );
};
