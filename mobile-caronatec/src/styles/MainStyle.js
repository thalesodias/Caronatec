import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgFundo: {
      flex: 1,
      resizeMode: "cover",
      width: "100%"
    },
    input:{
      backgroundColor: '#fff',
      width: '80%',
      marginBottom: 10,
      borderRadius: 10,
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      marginLeft: '10%',
      marginRight: '10%'
    }
  });

export default styles