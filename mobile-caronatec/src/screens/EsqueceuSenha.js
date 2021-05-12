import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  const esqueceuSenha = () => {
    navigation.navigate("EsqueceuSenha")
  }

  return (
    <View style={styles.container}>
      <Text h2>Bem-vindo</Text>
      <Text h5>ao CARONATEC</Text>

    </View>
  );
}
