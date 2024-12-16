import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import { TUserScreenRouteProp } from '../../types/TRootStackParamList'
import { UserContext } from '../../contexts/userContext'

const UserView = () => {

  const userContextValue = useContext(UserContext) 
  const route = useRoute<TUserScreenRouteProp>()

  const nome = userContextValue?.username

  return (
    <View>
      <Text>Olá Context, {nome}</Text>
    </View>
  )
}

export default UserView