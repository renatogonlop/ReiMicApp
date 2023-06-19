import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'

var { width } = Dimensions.get("window");

const ProductCard = (props) => {

    const { product_name, product_price, product_image, product_quantity } = props;

    return (
        <View style={styles.container}>

            <Image style={styles.image}
                resizeMode='contain'
                source={{ uri: product_image ? product_image : "" }}
            />

            <View style={styles.card} />
            <Text style={styles.title} >
                {product_name.length > 15 ? product_name.substring(0, 15 - 3)
                    + '...' : product_name
                }
            </Text>
            <Text style={styles.product_price} > R$ {product_price},00 </Text>

            {product_quantity > 0 ? (
                <View style={{ marginBottom: 60, marginTop: 10 }}>
                    <Button title={'Adiconar'} color={'green'} />
                </View>
            ) : <Text style={{ marginTop: 20 }} >Fora de Estoque</Text>}
        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 30,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 30 - 30,
        height: width / 2 - 30 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -40,
        transform: [{ rotate: '0deg' }]
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'trasparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    product_price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})


export default ProductCard;