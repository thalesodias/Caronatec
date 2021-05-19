import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [confSenha, setConfSenha] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [curso, setCurso] = useState(null)
  const [isSelected, setSelected] = useState(false)


  const salvar = () => {
      console.log("Salvou")
  }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container, specificStyle.specificContainer}
    keyboardVerticalOffset={100}>
        <ScrollView style={{width: "90%"}}>
        <Text h2>Bem-vindo</Text>
        <Text h5>ao CARONATEC</Text>

        <Input
            placeholder="E-mail"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
        />

        <Input
            placeholder="Senha"
            onChangeText={value => setSenha(value)}
            secureTextEntry={true}
        />

        <Input
            placeholder="Confirmar Senha"
            onChangeText={value => setConfSenha(value)}
            secureTextEntry={true}
        />

        <Input
            placeholder="Nome Completo"
            onChangeText={value => setEmail(value)}
        />

        <Input
            placeholder="CPF"
            onChangeText={value => setEmail(value)}
            keyboardType="number-pad"
            returnKeyType="done"
        />

        <CheckBox
            title="Eu aceito os termos de uso"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="red"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
        />

        <Button
            title="Salvar"
            onPress={() => salvar()}
        />
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
    specificContainer:{
        padding: 10
    }
})
