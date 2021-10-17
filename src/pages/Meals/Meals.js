import React from 'react'
import { SafeAreaView, Text , FlatList} from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import MealsCard from '../../components/MealsCard/MealsCard'

const Meals = ({navigation, route}) => {

    const {name} = route.params
    
    const {loading, data, error} = useFetch(`${Config.API_URL}filter.php?c=${name}`)

    const newData = data.meals

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    const onPress = (name) => {
        navigation.navigate("Detail", {name})
    }

    const renderMeals = ({item}) => <MealsCard meal={item} onPress={() => onPress(name)}/>

    return(
        <SafeAreaView>
            <FlatList data={newData} renderItem={renderMeals} /> 
        </SafeAreaView>
    )
}

export default Meals;