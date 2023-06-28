import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const Name = () => {
    const [text, onChangeText] = React.useState('');
    const [text1, onChangeText1] = React.useState('');
    const onPressButton = (text, text1) => {
        const nombre="Hola"+" "+text+" "+text1;
        return nombre;

    }
    const [view, setView]=useState(false);
    const toggleView=()=>{
       
        setView(!view);
      
    }
    return (
        <SafeAreaView>
            <View>
                <TextInput style={styles.texto} onChangeText={onChangeText} value={text} placeholder="Nombre" />


                <TextInput style={styles.apellido} onChangeText={onChangeText1} value={text1} placeholder="Apellido" />
                <Button
                    style={styles.boton}
                    title="Saludar"
                   color="pink"
                    onPress={toggleView}>
                </Button>
                {view &&(
                    <View>
                        <Text>{onPressButton(text,text1)}</Text>
                    </View>
            
            )}
            </View>
        </SafeAreaView>
       


    )
}


const styles = StyleSheet.create({
    texto: {
        justifyContent: "center",
        height: 20,
        width: "50%",
        margin: 12,
        borderWidth: 2
    },
    apellido: {
        height: 20,
        width: "50%",
        margin: 12,
        borderWidth: 2
    },
    boton: {
       
    }
})

export default Name;