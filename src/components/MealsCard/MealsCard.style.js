import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        flexDirection: "column",
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        minWidth: deviceSize.width * 0.95,
        height: 150,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    title: {
        fontSize : 20,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        paddingHorizontal: 2,
        paddingVertical: 2
    },
    body_container: {
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        width: "100%",
        opacity: 0.7,
        alignItems: "flex-end",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})