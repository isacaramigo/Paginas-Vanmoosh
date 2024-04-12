import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../style/home.js';

export default function Home() {
    return(
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={require('./assets/image/logoVanmooshFundoTransparente.png')}
            />
                <View style={styles.linha1}></View>
            <StatusBar style="auto"/>
            <Button style={styles.agregado}>Ana</Button>
        </View>
    );
}