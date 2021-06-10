import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Veiculos from '../screens/Veiculos';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History!</Text>
    </View>
  );
}

function Carona() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Carona AREA!</Text>
    </View>
  );
}

function veiculos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TESTE 123</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile AREA!</Text>
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
