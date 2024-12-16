
import { View, Text, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { THomeScreenNavigationProps } from '../../types/TRootStackParamList'
import { UserContext } from '../../contexts/userContext'


const HomeView = () => {

  const userContext = useContext(UserContext)
  const navigation = useNavigation<THomeScreenNavigationProps>()

  const [inputText, setInputText] = useState<string>("")

  const navigateToUserScreen = () => {
    userContext?.saveLoginUserToCache(inputText)
    navigation.navigate('User')
  }

  return (
    <View>
      <TextInput placeholder='Digite seu nome...' value={inputText} onChangeText={(text) => setInputText(text)} />
      <Button title='Logar' onPress={navigateToUserScreen}  />
    </View>
  )
}

export default HomeView