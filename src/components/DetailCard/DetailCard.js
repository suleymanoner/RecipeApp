import React from "react";
import { View, Text, Image, TouchableOpacity ,Button, Linking } from "react-native";
import styles from './DetailCard.style'

const DetailCard = ({ detail }) => {
  return (
    <View>

      <View>
        <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
      </View>

      <View style={styles.bodyTitle}>
        <Text style={styles.meal}> {detail.strMeal} </Text>
        <Text style={styles.area}> {detail.strArea} </Text>
        <Text style={styles.instructions}> {detail.strInstructions} </Text>
        <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL(detail.strYoutube)}>
            <Text style={styles.button_title}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default DetailCard;