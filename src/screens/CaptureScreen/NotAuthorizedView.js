import React from 'react'
import { SafeAreaView, Text, } from 'react-native'

import { notAuthorizedViewStyles } from './styles'

const NotAuthorizedView = () => (
  <SafeAreaView style={notAuthorizedViewStyles.container}>
    <Text style={notAuthorizedViewStyles.title}>BFriends utilise la caméra</Text>
    <Text style={notAuthorizedViewStyles.text}>
      {`Activez l'option dans les paramètres du téléphone et relancez l'application.`}
    </Text>
  </SafeAreaView>
)

export default NotAuthorizedView
