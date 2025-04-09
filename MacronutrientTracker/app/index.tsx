import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <View style={styles.middleContainer}>
          <Text style={styles.text}>MacroTrack</Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button}>
            <Link href="/(tabs)/about" style={styles.buttonText}>Sign Up</Link>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button}>
            <Link href="/(tabs)/about" style={styles.buttonText}>Log In</Link>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D5359',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1, // Take up all available space
    justifyContent: 'space-between', // Distribute children with space between
    padding: 20,
  },
  middleContainer: {
    flex: 1, // Take up space
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  bottomContainer: {
    width: '100%', // Full width
    alignItems: 'center', // Center horizontally
    marginBottom: 20, // Add some margin at the bottom
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
  },
  buttonText: {
    color: '#000000',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#B4CEB3',
    width: '100%', // Full width
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.30,
    shadowRadius: 10,
    elevation: 5,
  }
});