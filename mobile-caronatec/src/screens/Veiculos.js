import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/MainStyle';

export default function Veiculos({ navigation }) {

    const [user, setUser] = useState(null);

    const [marca, setMarca] = useState(null)
    const [modelo, setModelo] = useState(null)
    const [placa, setPlaca] = useState(null)
    const [cor, setCor] = useState(null)
    const [ano, setAno] = useState(null)
    const [info, setInfo] = useState(null)

    useEffect(() => {
        getUser();
    }, []);

    //Pegar o id do usuário
    async function getUser() {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUser(json.id);
        setInfo(json.Vehicles[0]);
    }

    async function sendForm() {
        Alert.alert(
            "Sucesso",
            "Veículo cadastrado com sucesso",
            [
                {
                    text: "Fechar",
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );
        let response = await fetch('http://192.168.1.110:3000/veiculos/cadastro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                placa: placa,
                cor: cor,
                ano: ano,
                userId: user,
            })
        });
    }    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Meu veículo</Text>

            <TextInput
                style={styles.input}
                placeholder="Marca"
                onChangeText={value => setMarca(value)}
                autoCorrect={false}                
            />

            <TextInput
                style={styles.input}
                placeholder="Modelo"
                onChangeText={value => setModelo(value)}
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Placa"
                onChangeText={value => setPlaca(value)}
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Cor"
                onChangeText={value => setCor(value)}
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Ano"
                onChangeText={value => setAno(value)}
                autoCorrect={false}
            />

            <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => sendForm()}>
                <Text style={styles.txtSubmit}>
                    SALVAR
            </Text>
            </TouchableOpacity>

        </View>
    );
}