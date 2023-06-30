import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ChatComponent = () => {
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const apiKey = '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'
  const configuration = new Configuration({
    apiKey
  })

  const openai = new OpenAIApi(configuration);


  const sendMessage = async () => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${inputMessage}`,
        temperature: 0.1,
        max_tokens: 150,
        n: 1,
      })
      const respuesta = response?.data?.choices[0]?.text?.trim();
      setMessages([...messages, { content: respuesta, sender: 'bot' }]);

      setInputMessage('');
    } catch (error) {
      
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
