import { Bell } from "lucide-react-native";
import { Image, Pressable, View } from "react-native";

import { APP_COLORS, COLORS } from "@/constants/colors";
import { Body, Title } from "@/shared/components/typography";

export default function HomeHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
        marginBottom: 26,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 34,
            overflow: "hidden",
            backgroundColor: COLORS.greyLight,
          }}
        >
          <Image
            // source={require("@/assets/images/favicon.png")}
            source={{
              uri: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
            }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>

        <View style={{ marginLeft: 13 }}>
          <Body
            style={{
              fontSize: 15,
              lineHeight: 19,
              color: APP_COLORS.muted,
              fontFamily: "Inter_400Regular",
            }}
          >
            Good morning
          </Body>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Title
              style={{
                fontSize: 22,
                lineHeight: 27,
                fontFamily: "Inter_700Bold",
                color: APP_COLORS.text,
              }}
            >
              JP
            </Title>
            <Body
              style={{
                fontSize: 20,
                marginLeft: 5,
              }}
            >
              👋
            </Body>
          </View>
        </View>
      </View>

      <Pressable
        style={{
          width: 43,
          height: 43,
          borderRadius: 27,
          backgroundColor: COLORS.white,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: COLORS.black,
          shadowOpacity: 0.05,
          shadowRadius: 8,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          elevation: 2,
        }}
      >
        <Bell size={20} color={COLORS.black} strokeWidth={2.2} />

        <View
          style={{
            position: "absolute",
            top: 10,
            right: 11,
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: COLORS.primary,
          }}
        />
      </Pressable>
    </View>
  );
}
