import { StyleSheet } from 'react-native'

const loginStyle = StyleSheet.create({
  div1: {
    marginTop: '35%',
  },
  div2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bemVindoBack: {
    marginLeft: '10%',
    marginBottom: '20%',
  },
  bemvindoText: {
    textAlign: 'left',
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
  caronatecText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginMsg: (text = 'none') => ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginTop: 5,
    marginBottom: 15,
    display: text
  }),
});

export default loginStyle