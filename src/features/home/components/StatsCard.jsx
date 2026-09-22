import { View } from "react-native";

import { APP_COLORS, COLORS } from "@/constants/colors";
import { Body, Title } from "@/shared/components/typography";

const stats = [
  { label: "Jobs", value: "1" },
  { label: "Earnings", value: "₹1,500" },
  { label: "Hours", value: "2.8h" },
];

export default function StatsCard() {
  return (
    <View
      style={{
        height: 102,
        borderRadius: 22,
        backgroundColor: APP_COLORS.card,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        marginBottom: 17,
      }}
    >
      {stats.map((stat, index) => (
        <View key={stat.label} style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 14,
              justifyContent: "center",
            }}
          >
            <Body
              style={{
                fontSize: 14,
                color: APP_COLORS.muted,
                marginBottom: 7,
              }}
            >
              {stat.label}
            </Body>
            <Title
              style={{
                fontSize: 22,
                lineHeight: 27,
                color: APP_COLORS.text,
                fontFamily: "Inter_700Bold",
              }}
            >
              {stat.value}
            </Title>
          </View>

          {index < stats.length - 1 && (
            <View
              style={{
                width: 1,
                height: 72,
                backgroundColor: COLORS.greyLight,
                alignSelf: "center",
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
}
