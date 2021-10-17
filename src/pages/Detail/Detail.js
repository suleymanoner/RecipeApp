import React from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'
import DetailCard from '../../components/DetailCard/DetailCard'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const Detail = ({route}) => {

    const {idMeal} = route.params

    const {error, loading, data} = useFetch(`${Config.API_URL}lookup.php?i=${idMeal}`)

    const newData = data.meals

    console.log(data)

    const renderDetail = ({item}) =>  <DetailCard detail={item} />

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return(
        <SafeAreaView>
            <FlatList data={data.meals} renderItem={renderDetail} />
        </SafeAreaView>
    )
}


export default Detail;