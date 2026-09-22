import { COLORS } from "@/constants/colors";
import { useAppStore } from "@/store/appStore";
import { Tabs } from "expo-router";
import {
  BriefcaseBusiness,
  CircleUserRound,
  Coins,
  House,
  MessageSquareText,
} from "lucide-react-native";
import { Text, View } from "react-native";

const TabBadge = ({ count, color = COLORS.primary }) => {
  if (!count || count <= 0) return null;

  return (
    <View
      style={{
        position: "absolute",
        top: -6,
        right: -8,
        minWidth: 18,
        height: 18,
        borderRadius: 10,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 10,
          fontWeight: "700",
          lineHeight: 12,
        }}
      >
        {count}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  const jobBadgeCount = useAppStore((state) => state.jobBadgeCount);
  const messageBadgeCount = useAppStore((state) => state.messageBadgeCount);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#8A8A8A",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          height: 76,
          paddingBottom: 12,
          paddingTop: 10,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: -4 },
          elevation: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              <House size={size} color={color} strokeWidth={2.2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              <BriefcaseBusiness size={size} color={color} strokeWidth={2.2} />
              <TabBadge count={jobBadgeCount} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              <Coins size={size} color={color} strokeWidth={2.2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              <MessageSquareText size={size} color={color} strokeWidth={2.2} />
              <TabBadge count={messageBadgeCount} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              <CircleUserRound size={size} color={color} strokeWidth={2.2} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
