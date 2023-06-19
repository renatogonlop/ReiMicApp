import React from "react";
import { View, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { HStack, VStack, Box, Text, Avatar, Spacer } from 'native-base'

var { width } = Dimensions.get("window")


const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    return (
        <Box style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                <FlatList
                    data={productsFiltered}
                    renderItem={({ item }) => (
                        <Box
                            borderBottomWidth={1}
                            _dark={{ borderColor: 'muted.50' }}
                            borderColor={'muted.800'}
                            pl={['0', '4']}
                            pr={['0', '5']}
                            py='2'
                            marginLeft={5}
                            marginRight={5}
                        >
                            <HStack space={[2, 3]} >
                                <Avatar
                                    size="48px"
                                    backgroundColor="white"
                                    resizeMode='contain'
                                    source={{ uri: item.product_image ? item.product_image : "" }}
                                />
                                <VStack>
                                    <HStack width={250}>
                                        <Text
                                            _dark={{
                                                color: 'warmGray.50'
                                            }}
                                            color={'coolGray.800'}
                                            flexWrap={'wrap'}
                                            width={'70%'}
                                            bold
                                        >
                                            {item.product_name}
                                        </Text>

                                        <Text
                                            marginLeft={3}
                                            alignSelf={'flex-start'}
                                        >
                                            R$ {item.product_price},00
                                        </Text>
                                    </HStack>
                                    <Text
                                        _dark={{
                                            color: 'warmGray.200'
                                        }}
                                        color={'coolGray.600'}
                                        flexWrap={'wrap'}
                                        width={250}
                                        style={{ textAlign: 'justify', marginTop: 5 }}
                                    >
                                        {item.product_description}
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                    )}
                    keyExtractor={item => item._id}
                    style={{ height: "90%" }}

                />
            ) : (
                <View style={{ height: "90%" }}>
                    <Text style={{ alignSelf: 'center' }} >
                        Sem produtos compativeis, com a busca.
                    </Text>
                </View>
            )}
        </Box>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchedProduct;