import React from "react";
import {Image, Linking, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name="twitter" size={30} color="black"/>
const facebook = <Icon name="facebook" size={30} color="black"/>
const instagram = <Icon name="instagram" size={30} color="black"/>
const linkedin = <Icon name="linkedin" size={30} color="black"/>

const ProfileCard = () =>{
    const user = {
        avatar: "https://borealos.com/dynamic/img/3-como-crear-memoji.jpg",
        coverPhoto: "https://i.pinimg.com/originals/9f/80/49/9f80493827eba399a095cf26cb906f90.jpg",
        name: "Doménica Erazo"
    }
return (
    <View style={styles.container}>
       <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
       <View style={styles.avatarContainer}>
        <Image source={{uri: user.avatar}} style={styles.avatar}/>
        <Text style={styles.name}>
        {user.name}
        </Text>
        <View style={styles.buttonContainer}>

            <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://twitter.com")}>
            {twitter}
            </Text>
            <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://facebook.com")}>
            {facebook}
            </Text>
            <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://instagram.com")}>
            {instagram}
            </Text>
            <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://linkedin.com")}>
            {linkedin}
            </Text>
           
        </View>

       </View>
    </View>
)
}
const styles = StyleSheet.create(
    {
        container:{
            //height sin comillas ni medidas
            width: "50%",
            alignItems: "center"
        },
        coverPhoto:{
            width: "100%",
            height: 200,
            resizeMode: "cover"

        },
        avatarContainer:{
            alignItems: "center",
            marginTop: -75
        }, 
        avatar:{
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: "white"
        },
        name:{
            marginTop: 15,
            fontSize: 20,
            fontWeight: "bold"
        },
        buttonContainer:{
            flexDirection: "row",
            marginTop: 20,
            width: "60%",
            justifyContent: "space-between"
            
        }
    }
)
export default ProfileCard;
