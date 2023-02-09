import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Category = (props) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.border }>
                <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={styles.gradient}
                    start={[0, 1]}
                    end={[0, 0]}
                />
                <Image source={props.imageUri} style={ styles.image }/>
                <Text style={styles.titleText}>{props.name}</Text>
                <Text style={styles.priceText}>{props.price}</Text>
                <Text style={styles.authorText}>By {props.author}</Text>
            </View>
        </View>
    );
}

export default Category;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    border: {
        height: 250,
        width: 200,
        borderWidth: 0.5,
        borderColor: '#000',
        overflow: 'hidden',
        borderColor: '#dddddd',
        borderRadius: 20,
    },
    image: {
        zIndex: 1,
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    gradient: {
        zIndex: 2,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    titleText: {
        zIndex: 3,
        position: 'absolute',
        bottom: 77,
        left: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
    },
    authorText : {
        zIndex: 3,
        position: 'absolute',
        bottom: 50,
        left: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    },
    priceText: {
        zIndex: 3,
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    },
});