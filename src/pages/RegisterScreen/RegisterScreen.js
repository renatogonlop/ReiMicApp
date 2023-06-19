import React, { useCallback, useState } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import logoImage from '../../assets/logo.png'
import axios from 'axios';
import localhost from 'react-native-localhost'


const RegisterScreen = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = async () => {

    // let userPost = `http://${localhost}:7000/api/users/`
    let userPost = `http://192.168.1.13:7000/api/users/`

    let data = {
      user_name: name,
      user_email: email,
      user_password: password
    };

    // console.log(data)
    // console.log(userPost)

    axios.post(userPost, data)
      .then(function (response) {
        console.log(response)
        alert("Registrado")
      })
      .catch(function (error) {
        console.log(error)
        alert("error")
      })

  }


  return (

    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>
        <Image
          source={logoImage}
          style={styles.logo}
        />


        <TextInput
          style={styles.input}
          placeholder='Nome'
          autoCorrect={false}
          name={"name"}
          id={"name"}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          name={"email"}
          id={"email"}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          name={"password"}
          id={"password"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity>
          <Text style={styles.textLogCad}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => register()}
        >
          <Text style={styles.textLogCad}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%'
  },

  input: {
    backgroundColor: '#fff',
    width: '85%',
    height: '12%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
  },

  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textLogCad: {
    color: '#ffff',
    marginBottom: 30,
    fontSize: 15,
    fontWeight: 'bold'
  },

})