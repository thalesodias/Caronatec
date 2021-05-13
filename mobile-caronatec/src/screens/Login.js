import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity, View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';
import loginStyle from '../styles/LoginStyle'

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

  const imgbg1 = '../assets/img/BgLogin.png'

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
          source={require(imgbg1)}
          style={styles.imgFundo}
        >
        <View style={loginStyle.div}>
          <View style={loginStyle.bemVindoBack}>
            <Text>Bem-vindo</Text>
            <Text>ao CARONATEC</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={value => setEmail(value)}
            autoCorrect={false}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            onChangeText={value => setPassword(value)}
            autoCorrect={false}
            secureTextEntry={true}
          />
          
          <Button
            title="ENTRAR"
            onPress={() => entrar()}
          />

          <TouchableOpacity onPress={() => esqueceuSenha()}>
            <Text>
                Esqueceu sua senha? Clique Aqui!
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => cadastrar()}>
            <Text>
                Não tem Cadastro? Faça agora mesmo!
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

