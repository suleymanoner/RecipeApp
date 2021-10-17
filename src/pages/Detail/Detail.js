import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'

const Detail = ({route}) => {

    const {name} = route.params

    //https://www.themealdb.com/api/json/v1/1/search.php?s=Ayam Percik
    const {error, loading, data} = useFetch(`${Config.API_URL}search.php?s=${name}`)

    //const newData = data?.meals[0]

    //console.log(newData)


    return(
        <SafeAreaView>
            <Text>{data?.meals[0]?.strMeal}</Text>
            <Text>{}</Text>
        </SafeAreaView>
    )
}


export default Detail;