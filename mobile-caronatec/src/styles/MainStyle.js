import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    imgFundo: {
      flex: 1,
      resizeMode: "cover",
      width: "100%"
    },
    input:{
      backgroundColor: '#fff',
      width: '80%',
      marginBottom: 20,
      borderRadius: 15,
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      marginLeft: '10%',
      marginRight: '10%'
    },
    inputSear:{
      backgroundColor: '#fff',
      width: '80%',
      marginBottom: 20,
      borderRadius: 15,
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '10%'
    },
    switch:{
      width: '80%',
      marginBottom: 20,
      borderRadius: 15,
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      marginLeft: '10%',
      marginRight: '10%'
    },
    btnSubmit:{
      backgroundColor: '#005DFF',
      width: '80%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginBottom: 10,
    },
    txtSubmit:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    txtEsqueceu:{
      color: 'white'
    },
    picker:{
      height: 150,
      color: 'white',
      marginLeft: '2%',
      marginRight: '2%',
    }
  });

export default styles