import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

export type TRootStackParamList = {
  Home: undefined;
  User: undefined;
}

export type THomeScreenNavigationProps = StackNavigationProp<TRootStackParamList, 'Home'>
export type TUserScreenNavigationProps = StackNavigationProp<TRootStackParamList, 'User'>

export type TUserScreenRouteProp = RouteProp<TRootStackParamList, 'User'>
