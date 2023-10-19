import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';
import Icon from 'react-native-vector-icons/FontAwesome'; // Você pode escolher diferentes conjuntos de ícones

export default function App() {

  const [value] = React.useState();

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.tittle, {marginTop: 10}]}>
        Novo projeto
      </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          alignSelf: 'stretch',
        }}
      />
      <Text style={[styles.div, {marginTop: 10}]}>
        Materiais
      </Text>
      <View style={styles.box1}>
      <View style={styles.box2}>
      <TextInput
        editable
        maxLength={40}
        value={value}
        style={styles.input}
        placeholder='Nome do material'
      />
      <TextInput
        editable
        maxLength={40}
        value={value}
        style={styles.input}
        placeholder='Quantidade'
        
      />
      <TextInput
        editable
        maxLength={40}
        value={value}
        style={styles.input}
        placeholder='Valor'
        
      />
      <TextInput
        editable
        maxLength={40}
        value={value}
        style={styles.input}
        placeholder='Notas e observações'
        
      />
      </View>
      <View style={styles.buttonContainer}>
      <Pressable style={styles.button}>
        +
      </Pressable>
      <Pressable style={styles.button}>
        Salvar
      </Pressable>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 5
  },
  button: {
    backgroundColor: '#50555C',
    borderRadius: 10,
    padding: 5,
    textAlign: 'center',
    fontFamily: 'Comfortaa_700Bold',
    margin: 5
  },
  tittle:{
    fontSize: 25,
    marginTop: 20,
    fontFamily: 'Comfortaa_300Light',
    paddingBottom: 30
  },
  div:{
    fontFamily: 'Comfortaa_300Light',
    backgroundColor: '#E5E5E5'
    },
  input:{
    fontFamily: 'Comfortaa_300Light',
    backgroundColor: '#E5E5E5',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 5,
    width: 274,
    height: 38, 
    marginBottom: 10
  },
  box1: {
    backgroundColor: '#E5E5E5',
    width: 305,
    height: 327,
    borderRadius: 20,
    marginTop: 10
  },
  box2: {
    backgroundColor: '#C4C4C482',
    width: 305,
    height: 177,
    marginTop: 50,
    padding: 10
  },
  footer: {
    borderTopColor: 'black'
  }
});
