import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage, TextInput, KeyboardAvoidingView, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Card } from 'react-native-shadow-cards';
import Veiculos from '../screens/Veiculos';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import styles from '../styles/MainStyle';

function Feed({ navigation }) {

  const fexibir = (valor) => {
    if (valor == 1) {
      return (
        <Text>Passageiro</Text>
      )
    } else {
      return (
        <Text>Motorista</Text>
      )
    }
  }

  const [tipo, setTipo] = useState(null);
  useEffect(() => {
    async function getTipo() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setTipo(json.profile_type);
    }
    getTipo();
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
      <Text>Seja bem vindo {user}</Text>
      {fexibir(tipo)}
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function history() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: '30%', alignItems: 'center', backgroundColor: '#7BABFF' }}>
      <TextInput
        style={styles.inputSear}
        placeholder="Pesquisar"
        autoCorrect={false}
      />
      <ScrollView>
        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/thales-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Thales Oliveira Dias</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>

        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/matheus-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Matheus Nogueira</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>

        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/marcilio-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Marcilio Farias</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>

        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/thales-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Thales Oliveira Dias</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function Carona() {

  const [tipo, setTipo] = useState(null);
  useEffect(() => {
    async function getTipo() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setTipo(json.profile_type);
    }
    getTipo();
  }, []);

  const mostraBotao = (valor) => {
    if (valor == 2) {
      return (
        <TouchableOpacity
          style={styles.btnSubmit}
        >
          <Text style={styles.txtSubmit}>
            CADASTRAR CARONA
          </Text>
        </TouchableOpacity >
      )
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: '30%', alignItems: 'center', backgroundColor: '#7BABFF' }}>
      <TextInput
        style={styles.inputSear}
        placeholder="Pesquisar"
        autoCorrect={false}
      />

      {mostraBotao(tipo)}

      <ScrollView>
        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/thales-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Thales Oliveira Dias</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>

        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/matheus-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Matheus Nogueira</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>

        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/marcilio-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Marcilio Farias</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>

        <Card style={{ padding: 10, margin: 10 }}>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 70, height: 70, marginRight: 20, marginBottom: 15 }}
                source={require('../assets/img/thales-user.png')}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Thales Oliveira Dias</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star' size={20} color='#FECC00' />
                  <Icon name='star-half' size={20} color='#FECC00' />
                </View>
              </View>
            </View>

            <Text>Destino: Vila Zélia [Lorena - SP]</Text>
            <Text>Saida: FATEC</Text>
            <Text>Sai às: 23:00     Tolerancia: 15 min</Text>
            <Text>Local de encontro: Em frente ao Homer</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <Icon name='plus' size={20} />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function veiculos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TESTE 123</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {

  const mostraVeiculos = (valor) => {
    if (valor == 2) {
      return (
        <Tab.Screen
          name="Veiculos"
          component={Veiculos}
          options={{
            tabBarLabel: 'Veiculos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="car" color={color} size={size} />
            ),
          }}
        />
      )
    }
  }

  const [tipo, setTipo] = useState(null);
  useEffect(() => {
    async function getTipo() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setTipo(json.profile_type);
    }
    getTipo();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#7BABFF',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Carona"
        component={Carona}
        options={{
          tabBarLabel: 'Caronas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={history}
        options={{
          tabBarLabel: 'Histórico',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      {mostraVeiculos(tipo)}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
