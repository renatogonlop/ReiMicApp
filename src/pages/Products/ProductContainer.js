import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ScrollView, Box, VStack, Icon, Input, Text } from 'native-base';
import { Ionicons } from "@expo/vector-icons"

import Header from "../../Shared/Header";

import baseURL from "../../assets/common/baseUrl";
import axios from "axios";


import ProductList from './ProductList'
import SearchedProduct from "./SearchProducts";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter"

const prodCategories = require('../../assets/data/categories.json')


const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState([]);
    const [inicialState, setInicialState] = useState([]);

    useEffect(() => {
        setFocus(false);
        // setCategories(prodCategories)
        setActive(-1)


        axios.get(`${baseURL}products`)
            .then((res) => {
                setProducts(res.data);
                setProductsFiltered(res.data);
                setInicialState(res.data);
                setProductsCtg(res.data)
            })

        return () => {
            setProducts([])
            setProductsFiltered([])
            setFocus([])
            setCategories([])
            setActive([])
            setInicialState([])
        }
    }, [])

    //Product Method
    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.product_name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }


    //Categories
    const ChangeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(inicialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i._id === ctg),
                        setActive(true)
                    ),
                ]
        }
    }




    return (


        <Box>
            <View>

                <Header />

            </View>

            <VStack alignSelf="center">
                <Input
                    placeholder="Busca"
                    variant="filled"
                    width="95%"
                    borderRadius="20"
                    py="1"
                    px="2"
                    marginBottom={2}
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                    InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
                    InputRightElement={focus == true ? (
                        <Icon onPress={onBlur} mr="2" size="4" color="gray.400" as={<Ionicons name="ios-close" />} />
                    ) : null}
                />
            </VStack>
            {focus == true ? (
                <SearchedProduct
                    productsFiltered={productsFiltered}
                />
            ) : (
                <ScrollView style={{marginBottom: '40%'}}>
                    < View >

                        <View>
                            <Banner />
                        </View>

                        {/* <View>
                            <CategoryFilter
                                categories={categories}
                                CategoryFilter={ChangeCtg}
                                productsCtg={productsCtg}
                                active={active}
                                setActive={setActive}
                            />
                        </View> */}
                        {productsCtg.length > 0 ? (
                            <View style={styles.listContainer} >
                                {productsCtg.map((item) => {
                                    return (
                                        <ProductList
                                            key={item._id}
                                            item={item}
                                        />
                                    )
                                })}
                            </View>
                        ) : (
                            <View style={[styles.center, { height: '40%' }]}>
                                <Text>Sem produtos Disponiveis.</Text>
                            </View >

                        )}

                    </View >
                </ScrollView>
            )}
        </Box>


    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro',
    },
    listContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro'

    }
})

export default ProductContainer