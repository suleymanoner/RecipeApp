import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './MealsCard.style'

const MealsCard = ({meal, onPress}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: meal.strMealThumb}} />
                <View style={styles.body_container}>
                    <Text style={styles.title} >{meal.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;