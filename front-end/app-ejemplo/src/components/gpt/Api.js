import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Recuperar la clave de API almacenada al cargar la aplicación
  //   getApiKey();
  // }, []);

  // const getApiKey = async () => {
  //   try {
  //     const storedApiKey = await AsyncStorage.getItem('apiKey');
  //     if (storedApiKey) {
  //       setApiKey(storedApiKey);
  //     }
  //   } catch (error) {
  //     console.error('Error al obtener la clave de API:', error);
  //   }
  // };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const requestBody = {
      prompt: inputMessage,
      max_tokens: 50, // Número máximo de tokens de respuesta
    };

    try {
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body:{
          model:"gpt-3.5-turbo"
        }
      });

      const newMessage = response.data.choices[0].text.trim();
      setData([...data, { type: 'user', text: inputMessage }, { type: 'bot', text: newMessage }]);
      setMessages([...messages, { content: newMessage, sender: 'bot' }]);
      setInputMessage('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error.response);

      if (error.response && error.response.status === 401) {
        console.error('Error de autenticación: La clave de API es inválida o no está autorizada.');
      } else {
        console.error('Ocurrió un error al procesar la solicitud. Por favor, inténtalo nuevamente más tarde.');
      }
    }
  };

  return (
    <View>
      <FlatList

        data={data}

        keyExtractor={(item, index) => index.toString()}

        style={styles.body}

        renderItem={({ item }) => (

          <View style={{ flexDirection: 'row', padding: 10 }}>

            <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'blue' : 'black' }}>

              {item.type === 'user' ? 'Tu: ' : 'ChatGPT: '}

            </Text>

            <Text style={styles.bot}>{item.text}</Text>

          </View>

        )}

      />

      <View>
        <TextInput
        style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder='Ingresa tu pregunta'
        />
        <Button title="Enviar" onPress={sendMessage} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create(
  {
    body: {

      flex: 1,

      width: '100%',

    },

    bot: {

      flex: 1,

    }
  })


export default ChatComponent;
