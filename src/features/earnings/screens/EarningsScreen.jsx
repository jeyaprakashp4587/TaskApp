import { APP_COLORS, COLORS } from "@/constants/colors";
import { Body, Title } from "@/shared/components/typography";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function EarningsScreen() {
  const setActiveTab = useAppStore((state) => state.setActiveTab);

  useEffect(() => {
    setActiveTab("earnings");
  }, [setActiveTab]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Title color={COLORS.black}>Earnings</Title>
        <Body color={APP_COLORS.muted}>Track your income and payouts.</Body>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.background,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: APP_COLORS.card,
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
});
