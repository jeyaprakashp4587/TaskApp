import { ScrollView, View } from "react-native";

import { APP_COLORS } from "@/constants/colors";
import HomeHeader from "@/features/home/components/HomeHeader";
import NextJobCard from "@/features/home/components/NextJobCard";
import OnlineStatusCard from "@/features/home/components/OnlineStatusCard";
import StatsCard from "@/features/home/components/StatsCard";
import TodaySchedule from "@/features/home/components/TodaySchedule";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: APP_COLORS.background,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingTop: 25,
          paddingBottom: 25,
        }}
      >
        <HomeHeader />
        <OnlineStatusCard />
        <StatsCard />
        <NextJobCard />
        <View />
        <TodaySchedule />
      </ScrollView>
    </View>
  );
}
