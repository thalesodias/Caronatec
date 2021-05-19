import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity, View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';
import esqueceuSenhaStyle from '../styles/EsqueceuSenhaStyle';

export default function Login({navigation}) {

  const imgbg1 = '../assets/img/BgLogin.png'

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
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
          source={require(imgbg1)}
          style={styles.imgFundo}
        >
        <View style={esqueceuSenhaStyle.div1}>
          <View style={esqueceuSenhaStyle.bemVindoBack}>
            <Text style={esqueceuSenhaStyle.bemvindoText}>CARONATEC</Text>
            <Text style={esqueceuSenhaStyle.caronatecText}>Esqueceu a senha?{"\n"}
            Confirme seu e-mail que{"\n"}
            manderemos as instruções</Text>
          </View>
        </View>

        <View style={esqueceuSenhaStyle.div2}>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={value => setEmail(value)}
            autoCorrect={false}
            keyboardType="email-address"
          />
          
          <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={() => entrar()}>
            <Text style={styles.txtSubmit}>
                Enviar
            </Text>
          </TouchableOpacity>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 30,
            marginLeft: '5%',}}>
            <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center', color: 'white', fontWeight:'bold'}}>OU</Text>
            </View>
            <View style={{
              flex: 1,
              height: 2,
              backgroundColor: 'white',
              marginRight: '5%'}} />
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
