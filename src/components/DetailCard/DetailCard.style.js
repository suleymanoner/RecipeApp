import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    image: {
      width: "100%",
      aspectRatio: 16 / 9,
    },
    bodyTitle: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    meal: {
      fontSize: 22,
      color: "#a52b2a",
      fontWeight: "bold",
      paddingBottom: 5,
    },
    area: {
      borderBottomWidth: 1,
      borderColor: "#e6e6e7",
      paddingBottom: 5,
      fontSize: 18,
      color: "#a52b2a",
      fontWeight: "bold",
    },
    instructions: {
      paddingTop: 10,
      paddingBottom:10,
      fontSize: 16,
    },
    button:{
      backgroundColor:'#FF6565',
      alignItems: "center",
      padding: 10,
      borderRadius: 10
    },
    button_title: {
        fontSize: 17,
        color: "white",
    }
})