import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
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

  const imgbg1 = '../assets/img/BgLogin.png'

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(imgbg1)}
        style={styles.imgFundo}
      >
        <Text h2>Bem-vindo</Text>
        <Text h5>ao CARONATEC</Text>

        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />

        <Input
          placeholder="Sua senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        
        <Button
          title="ENTRAR"
          onPress={() => entrar()}
        />

        <Text>
            Esqueceu sua senha? Clique Aqui!
        </Text>

        <Button
          title="Cadastrar"
          onPress={() => cadastrar()}
        />

        <Text>
            Não tem Cadastro? Faça agora mesmo!
        </Text>
      </ImageBackground>
    </View>
  );
}
