import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/MainStyle';
import cadastroStyle from '../styles/CadastroStyle';
import color from 'color';

export default function Cadastro({ navigation }) {

    async function sendForm() {
        Alert.alert(
            "Sucesso",
            "Usuário cadastrado com sucesso",
            [
                {
                    text: "Fechar",
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );
        let response = await fetch('http://192.168.15.86:3000/cadastro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nome,
                email: email,
                password: senha,
                tipo: tipo,
                cpf: cpf,
                cnh: cnh,
            })
        });
    }

    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confSenha, setConfSenha] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [cnh, setCnh] = useState(null)
    const [tipo, setTipo] = useState(null)
    const [curso, setCurso] = useState(null)
    const [isSelected, setSelected] = useState(false)


    const salvar = () => {
        console.log("Salvou")
    }

    const imgbg1 = '../assets/img/BgLogin.png'

    const [selectedCurso, setSelectedCurso] = useState('');

    const cadastrar = () => {
        navigation.navigate("Login")
    }

    const options = [
        { label: "Passageiro", value: "1" },
        { label: "Motorista", value: "2" }
    ];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container, specificStyle.specificContainer}
            keyboardVerticalOffset={120}>
            <ScrollView style={{ width: "100%" }}>
                <View style={cadastroStyle.div1}>
                    <View style={cadastroStyle.bemVindoBack}>
                        <Text style={cadastroStyle.bemvindoText}>Bem-vindo</Text>
                        <Text style={cadastroStyle.caronatecText}>ao CARONATEC</Text>
                    </View>
                </View>

                <View style={styles.switch}>
                    <SwitchSelector
                        options={options}
                        initial={0}
                        // onPress={value => console.log(`Call onPress with value: ${value}`)}
                        onPress={value => setTipo(value)}
                        buttonColor='#005DFF'
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={value => setEmail(value)}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={value => setSenha(value)}
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    onChangeText={value => setConfSenha(value)}
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    onChangeText={value => setNome(value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    onChangeText={value => setCpf(value)}
                    keyboardType="number-pad"
                    returnKeyType="done"
                />

                {tipo == 2 ? (
                    <TextInput
                    style={styles.input}
                    placeholder="CNH"
                    onChangeText={value => setCnh(value)}
                    keyboardType="number-pad"
                    returnKeyType="done"
                />
                ) : null}

                <Picker
                    itemStyle={styles.picker}
                    selectedValue={selectedCurso}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCurso(itemValue)
                    }>
                    <Picker.Item label="Análise e Desenvolvimento de Sistemas" value="ads" />
                    <Picker.Item label="Gestão Empresarial" value="ge" />
                    <Picker.Item label="Gestão Comercial" value="gc" />
                    <Picker.Item label="Gestão da Tecnologia da Informação " value="gti" />
                    <Picker.Item label="Logística" value="log" />
                </Picker>

                <View style={cadastroStyle.div2}>
                    <TouchableOpacity
                        style={styles.btnSubmit}
                        onPress={() => sendForm()}>
                        <Text style={styles.txtSubmit}>
                            CADASTRAR
                </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        padding: 10,
        backgroundColor: '#7BABFF',
    }
})
