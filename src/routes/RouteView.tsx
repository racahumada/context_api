import { NavigationContainer } from "@react-navigation/native"

import { Home } from "../screens/Home"
import { User } from "../screens/User"

import { createStackNavigator } from "@react-navigation/stack"
import { TRootStackParamList } from "../types/TRootStackParamList"
import { UserContextProvider } from "../contexts/userContext"

const { Navigator, Screen } = createStackNavigator<TRootStackParamList>()

const RouteView = () => {
  return (
   <NavigationContainer>
    <UserContextProvider>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="User" component={User} /> 
      </Navigator>
    </UserContextProvider>
   </NavigationContainer>
  )
}

export default RouteView