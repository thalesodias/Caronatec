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
        <View style={loginStyle.div1}>
          <View style={loginStyle.bemVindoBack}>
            <Text style={loginStyle.bemvindoText}>Bem-vindo</Text>
            <Text style={loginStyle.caronatecText}>ao CARONATEC</Text>
          </View>
        </View>

        <View style={loginStyle.div2}>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={value => setEmail(value)}
            autoCorrect={false}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={value => setPassword(value)}
            autoCorrect={false}
            secureTextEntry={true}
          />
          
          <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={() => entrar()}>
            <Text style={styles.txtSubmit}>
                ENTRAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnEsqueceu}
            onPress={() => esqueceuSenha()}>
            <Text style={styles.txtEsqueceu}>
                Esqueceu sua senha? Clique Aqui!
            </Text>
          </TouchableOpacity>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
            marginLeft: '5%',}}>
            <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center', color: 'white', fontWeight:'bold'}}>OU</Text>
            </View>
            <View style={{
              flex: 1,
              height: 2,
              backgroundColor: 'white',
              marginRight: '5%',}} />
          </View>
          
          <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={() => cadastrar()}>
            <Text style={styles.txtSubmit}>
                CADASTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

