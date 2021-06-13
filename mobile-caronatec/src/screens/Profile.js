import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/MainStyle';
import { renderNode } from 'react-native-elements/dist/helpers';

export default function Profile({ navigation }) {

    const [user, setUser] = useState(null);

    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [senha, setPassword] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [cnh, setCnh] = useState(null)
    const [type, setType] = useState(null)

    const fexibir = (valor) => {
        if (valor == 2) {
            return (
                <TextInput
                    style={styles.input}
                    placeholder="CNH"
                    onChangeText={value => setCnh(value)}
                    autoCorrect={false}
                    value={cnh}
                />
            )
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    //Pegar o id do usuário
    async function getUser() {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUser(json.id);
        setEmail(json.email)
        setNome(json.name)
        setType(json.profile_type)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7BABFF' }}>
            <Text style={styles.title}>Meu perfil</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={value => setEmail(value)}
                autoCorrect={false}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={value => setNome(value)}
                autoCorrect={false}
                value={nome}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={value => setPassword(value)}
                autoCorrect={false}
                value={senha}
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                onChangeText={value => setCpf(value)}
                autoCorrect={false}
                value={cpf}
            />

            {fexibir(type)}

            <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => sendForm()}>
                <Text style={styles.txtSubmit}>
                    SALVAR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btnSubmit, { backgroundColor: '#d40000' }]}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txtSubmit}>
                    SAIR
                </Text>
            </TouchableOpacity>

        </View>
    );
}