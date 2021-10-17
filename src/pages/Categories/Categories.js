import React from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const Categories = ({navigation}) => {

    const {loading, error, data} = useFetch(`${Config.API_URL}categories.php`)
    const newData = data.categories

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    const handleSelect = (name) => {
        navigation.navigate("Meals", {name})
    }

    const renderCategories = ({item}) => <CategoryCard category={item} onSelect={() => handleSelect(item.strCategory)}/>

    return(
        <SafeAreaView>
            
            <FlatList data={newData} renderItem={renderCategories} />
            
        </SafeAreaView>
    )
}

export default Categories;