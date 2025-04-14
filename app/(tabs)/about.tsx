import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <TouchableOpacity>
                <Link href="/" style={styles.text}>Back to Home</Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
});