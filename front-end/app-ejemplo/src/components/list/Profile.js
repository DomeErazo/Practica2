import React from "react";
import { View, StyleSheet, Image, Linking, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const instagram_username = <Icon name="instagram" size={30} color="black" />;

const portfolio_url = <Icon name="globe" size={30} color="black" />;

const Profile = ({ task, closeProfile }) => {
    const { item } = task
    return (
        <View style={styles.items}>
            <View style={styles.supimage}>
                <View style={styles.leftSide}>
                    <Image style={styles.image} source={{ uri: item.urls.raw }} />
                </View>

                <View style={styles.rightside}>
                    <Text style={{ color: "blue" }} onPress={() => {
                        Linking.openUrl(item.user.portfolio_url)
                    }
                    }>
                        {item.user.name}
                    </Text>

                    <View style={styles.redes}>

                        <Text style={{ color: "blue" }} onPress={() => {
                            Linking.openUrl(item.user.social.instagram_username);

                        }}>
                            {instagram_username}
                        </Text>

                        <Text style={{ color: "blue" }} onPress={() => {
                            Linking.openUrl(item.user.portfolio_url);

                        }}>
                            {portfolio_url}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerkpi}>
                <View style={styles.kpiR}>
                    <Image style={styles.image2} source={require('../../../assets/link.png')} />
                </View>

            </View>
            <a onClick={closeProfile}>
                Cerrar
            </a>

        </View >
    )
}
const styles = StyleSheet.create(
    {
        items: {
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            boderRadius: "20",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        supimage: {
            width: "100%",
            height: "100%",
            flexBasis: "70%",
            display: "flex",
            flexDirection: "row"
        },
        leftSide: {
            flexBasis: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 50


        },
        rightside: {
            flexBasis: "50%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly"
        },
        redes: {
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row"

        },
        containerkpi: {
            width: 100,
            display: "flex",
            justifyContent: "space-around"
        },
        kpiR: {
            width: 20
        },
        image2: {
            width: 20,
            height: 20

        }
    }
)
export default Profile;
