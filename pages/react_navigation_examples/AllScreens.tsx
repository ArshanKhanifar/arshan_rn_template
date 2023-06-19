import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import {DetailsScreen} from './DetailsScreen';
import {ScreenWithProps} from './ScreenWithProps';
import {
  HeaderModifiedScreen,
  HeaderParamsPassedIn,
} from './HeaderModifiedScreens';

export const getExampleScreens = (
  Stack: ReturnType<typeof createNativeStackNavigator>,
) => (
  <>
    <Stack.Screen
      name={'HomeScreen'}
      // @ts-ignore
      component={HomeScreen}
      options={{title: 'Overview'}}
    />
    <Stack.Screen
      name={'DetailsScreen'}
      // @ts-ignore
      component={DetailsScreen}
      initialParams={{
        itemId: 69,
      }}
    />
    <Stack.Screen name={'ScreenWithProps'}>
      {() => <ScreenWithProps title={'I was passed in!'} />}
    </Stack.Screen>
    <Stack.Screen
      name={'HeaderModifiedScreen'}
      component={HeaderModifiedScreen}
      options={{
        title: 'I set this! 🙈',
      }}
    />
    <Stack.Screen
      name={'HeaderParamsPassedIn'}
      component={HeaderParamsPassedIn}
      options={({route}) => ({title: route?.params?.name || 'hello'})}
    />
  </>
);
