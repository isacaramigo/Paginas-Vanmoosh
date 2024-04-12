import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, Pressable} from 'react-native';
import { styles } from './style/home.js';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('./assets/image/logoVanmooshFundoTransparente.png')}
        />
        <View style={styles.linha1}></View>
          <StatusBar style="auto" />
            <Pressable><Text style={styles.botao}> > Ana</Text></Pressable>
            <View style={styles.linha2}></View>
            <Pressable><Text style={styles.botao}> > João</Text></Pressable>
    </View>
    
  );
}
