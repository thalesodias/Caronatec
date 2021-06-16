import React, { useState, useEffect } from 'react';
import { Text,
   View,
   AsyncStorage,
   TextInput,
   KeyboardAvoidingView,
   SafeAreaView,
   ScrollView,
   Image,
   TouchableOpacity,
   Alert,
   Modal,
   StyleSheet,
   TouchableHighlight
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Card } from 'react-native-shadow-cards';
import Veiculos from '../screens/Veiculos';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import config from '../../config/config.json'

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7BABFF' }}>
      <View style={{ height: '60%', width: '100%', backgroundColor: '#9dc1ff' }}>
        <SafeAreaView>
          <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 10, marginLeft: 20 }}>
            <Icon name='car' size={30} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5, marginTop: 3 }}>
              Minhas Caronas:
            </Text>
          </View>
          <ScrollView style={{ marginBottom: '20%' }}>
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
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={{ height: '40%', width: '100%', marginTop: '2%', backgroundColor: '#9dc1ff' }}>
        <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 10, marginLeft: 20 }}>
          <Icon name='history' size={30} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5, marginTop: 3 }}>
            Histórico:
          </Text>
        </View>
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
                    <TouchableOpacity>
                      <Text style={{ color: 'blue', marginTop: 5, textDecorationLine: 'underline' }}>
                        Clique aqui para avaliar o motorista!
                      </Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity>
                      <Text style={{ color: 'blue', marginTop: 5, textDecorationLine: 'underline' }}>
                        Clique aqui para avaliar o motorista!
                      </Text>
                    </TouchableOpacity>
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
        </ScrollView>
      </View>
    </View>
  );
}

function history() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: '30%', alignItems: 'center', backgroundColor: '#7BABFF' }}>
      <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
        <Icon name='history' size={30} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5, marginTop: 3 }}>
          Histórico
        </Text>
      </View>
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
                  <TouchableOpacity>
                    <Text style={{ color: 'blue', marginTop: 5, textDecorationLine: 'underline' }}>
                      Clique aqui para avaliar o motorista!
                    </Text>
                  </TouchableOpacity>
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
                  <TouchableOpacity>
                    <Text style={{ color: 'blue', marginTop: 5, textDecorationLine: 'underline' }}>
                      Clique aqui para avaliar o motorista!
                    </Text>
                  </TouchableOpacity>
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
  
  const [modalVisible, setModalVisible] = useState(false);
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
          onPress={() => {
          setModalVisible(!modalVisible);
          }}
          style={[styles.btnSubmit, {marginTop: 20}]}
        >
          <Text style={styles.txtSubmit}>
            CADASTRAR CARONA
          </Text>
        </TouchableOpacity >
      )
    } else {
      return (
        <TextInput
          style={styles.inputSear}
          placeholder="Pesquisar"
          autoCorrect={false}
        />
      )
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: '30%', alignItems: 'center', backgroundColor: '#7BABFF' }}>

      {mostraBotao(tipo)}

      <View style={estilos.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={estilos.centeredView}>
          <View style={estilos.modalView}>
            <View style={{width:'100%'}}>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center',}}>
                <Icon name='car' size={30} style={{marginTop:20}} />
                <Text style={estilos.modalText}>  Cadastrar Carona:  </Text>
              </View>
              <View>
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor='#939393'
                  placeholder="Data"
                  autoCorrect={false}
                  keyboardType='number-pad'
                  returnKeyType="done"
                />
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor='#939393'
                  placeholder="Local de partida"
                  autoCorrect={false}
                  returnKeyType="done"
                />
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor='#939393'
                  placeholder="Local de chegada"
                  autoCorrect={false}
                  returnKeyType="done"
                />
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor='#939393'
                  placeholder="Vagas"
                  autoCorrect={false}
                  keyboardType='number-pad'
                  returnKeyType="done"
                />
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor='#939393'
                  placeholder="Valor por pessoa"
                  autoCorrect={false}
                  keyboardType='numeric'
                  returnKeyType="done"
                />
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor='#939393'
                  placeholder="Descrição"
                  autoCorrect={false}
                  returnKeyType="done"
                />
              </View>
            </View>

            <TouchableHighlight
              style={styles.btnSubmit}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={[estilos.textStyle, {fontSize: 20}]}>Cadastrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>

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

const Tab = createBottomTabNavigator();

const estilos = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: '#7BABFF',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 20,
    width: '95%',
    height: '75%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

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
