import { APP_COLORS, COLORS } from "@/constants/colors";
import { Body, Caption, Title } from "@/shared/components/typography";
import { StyleSheet, View } from "react-native";

export function MetricCard({ label, value, accent = false }) {
  return (
    <View style={[styles.card, accent && styles.accentCard]}>
      <Caption color={accent ? COLORS.white : APP_COLORS.muted}>
        {label}
      </Caption>
      <Title
        color={accent ? COLORS.white : COLORS.black}
        style={styles.valueText}
      >
        {value}
      </Title>
      <Body color={accent ? COLORS.white : APP_COLORS.muted}>
        Updated today
      </Body>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: APP_COLORS.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: APP_COLORS.border,
    minHeight: 110,
    justifyContent: "space-between",
  },
  accentCard: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  valueText: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 28,
  },
});
