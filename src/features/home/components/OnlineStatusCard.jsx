import { Power } from "lucide-react-native";
import { Pressable, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { Body, Title } from "@/shared/components/typography";

export default function OnlineStatusCard() {
  return (
    <View
      style={{
        minHeight: 112,
        borderRadius: 20,
        backgroundColor: COLORS.successSurface,
        borderWidth: 1,
        borderColor: COLORS.successBorder,
        paddingHorizontal: 18,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 19,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 18,
            backgroundColor: COLORS.successLight,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 13,
              height: 13,
              borderRadius: 7,
              backgroundColor: COLORS.successBright,
            }}
          />
        </View>

        <View style={{ marginLeft: 14 }}>
          <Title
            style={{
              fontSize: 14,
              lineHeight: 22,
              color: COLORS.successDark,
              fontFamily: "Inter_700Bold",
            }}
          >
            You're Online
          </Title>

          <Body
            style={{
              fontSize: 12,
              lineHeight: 20,
              color: COLORS.successMuted,
              marginTop: 3,
            }}
          >
            ProFix can assign new
            {"\n"}
            jobs to you.
          </Body>
        </View>
      </View>

      <Pressable
        style={{
          height: 41,
          paddingHorizontal: 8,
          borderRadius: 28,
          backgroundColor: COLORS.white,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: COLORS.black,
          shadowOpacity: 0.08,
          shadowRadius: 12,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 3,
        }}
      >
        <Power size={19} color={COLORS.black} strokeWidth={2.4} />

        <Body
          style={{
            fontSize: 12,
            color: COLORS.black,
            fontFamily: "Inter_700Bold",
            marginLeft: 7,
          }}
        >
          Go Offline
        </Body>
      </Pressable>
    </View>
  );
}
