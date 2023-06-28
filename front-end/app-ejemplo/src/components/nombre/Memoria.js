import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Formik } from 'formik';
import { isEmpty } from 'lodash';

const Memoria = () => {
    const [name, setName] = useState("");
    const [ape, setApe] = useState('');

    // const onPressButton = (text, text1) => {
    //     const nombre = "Hola" + " " + name + " " + ape;
    //     return nombre;

    // }
    const addName = (e) => {
        e.preventDefault()
        if (isEmpty(name)) {
            console.log("Nombre vacío")
            return
        }
        console.log("ok")
        setName("")
    }
    const [view, setView] = useState(false);
    const toggleView = () => {

        setView(!view);

    }
    return (
        <View style={styles.container}>
            <View style={styles.box1}>

            </View>
            <View style={styles.box2}>
                <TextInput style={styles.texto} placeholder="Nombre" onChange={(text) => setName(text.target.value)} value={name} />

                <TextInput style={styles.apellido} onChange={(text) => setApe(text.target.value)} value={ape} placeholder="Apellido" />

                <Formik onSubmit={addName}>

                    <Button
                        style={styles.boton}
                        title="Saludar"
                        color="pink"
                    >
                    </Button>
                </Formik>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    box1: {
        backgroundColor: "red"
    },
    box2: {
        backgroundColor: "pink"
    }
})
export default Memoria;