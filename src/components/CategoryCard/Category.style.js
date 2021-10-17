import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: "#FFFA65",
    },
    background: {
        flexDirection: "row",
        borderWidth: 5,
        borderColor: "#FF6565"
    },
    body_container: {
        
        justifyContent: "space-between"
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
        resizeMode: 'contain'
    },
    title: {
        flex:1,
        fontSize: 20,
        marginTop: 45
    }
})