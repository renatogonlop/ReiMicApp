import React from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FlatList, Badge, Text } from "native-base";

const CategoryFilter = (props) => {

    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            style={{ backgroundColor: "#ececec" }}
        >

            <TouchableOpacity
                key={1}
                onPress={() => {
                    props.categoryFilter('all'),props.setActive(-1)
                }}
            >
                <Badge
                    style={[styles.center, { margin: 10 },
                    props.active == -1 ? styles.active : styles.inactive
                    ]} 

                >
                    <Text style={{ color: 'white' }}>All</Text>
                </Badge>
            </TouchableOpacity>


            {props.categories.map((item) => (
                <TouchableOpacity
                    key={item._id}
                    onPress={() => {
                        props.categoryFilter(item._id),
                            props.setActive(props.categories.indexOf(item))
                    }}
                >
                    <Badge
                        style={[styles.center, { margin: 10 },
                        props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                        ]}

                    >
                        <Text style={{ color: 'white' }}>{item.name}</Text>
                    </Badge>
                </TouchableOpacity>
            ))}


        </ScrollView >
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    active: {
        backgroundColor: '#4573f5',
    },
    inactive: {
        backgroundColor: '#4574f5bd',
    }

})

export default CategoryFilter;