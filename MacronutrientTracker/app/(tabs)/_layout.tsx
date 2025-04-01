import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    // return <Stack />;
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#e91e63",
            }}
        >
        <Tabs.Screen 
            name="index" 
            options={{
                headerTitle: "MacroTracker",
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color="#e91e63" />
                ),
            }}
        />
        <Tabs.Screen 
            name="about" 
            options={{
                headerTitle: "About",
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={24} color="#e91e63" />
                ),
            }}
        />
        </Tabs>
    )
}
