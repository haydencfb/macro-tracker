
import { Link, Stack } from 'expo-router';
import { Text, StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: 'Oops!' }} />
        <View style={styles.container}>
            <Text style={styles.title}>Page Not Found</Text>
            <Text style={styles.subtitle}>This screen doesn't exist.</Text>
            
            <View style={styles.separator} />
            
            <Link href="/" style={styles.link}>
            <Text style={styles.linkText}>Go back to home screen</Text>
            </Link>
        </View>
        </>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#25292e',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        color: '#661',
    },
    separator: {
        marginVertical: 20,
        height: 1,
        width: '80%',
        backgroundColor: '#eee',
    },
    link: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 5,
        backgroundColor: '#2e78b7',
    },
    linkText: {
        fontSize: 16,
        color: 'white',
    },
});