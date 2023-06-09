import { StyleSheet, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import ProductList from './src/ProductList/ProductList'
import products from './data/market.json';
import SearchBar from './src/Searchbar';
import Header from './src/Header';

const App = () => {
  const [query, setQuery] = useState("")

  const data = products.filter(product => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.searchBar}>
        <SearchBar setQuery={setQuery}/>
      </View>
      <View style={styles.productList}>
        <ProductList data={data}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
  },
  searchBar: {
    flex:1,
    justifyContent: 'center',
  },
  productList: {
    flex: 10,
    margin: 10,
  }
})

export default App
