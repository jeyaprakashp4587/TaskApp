import { BriefcaseBusiness, Clock3, MapPin } from "lucide-react-native";
import { Pressable, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { Body, Title } from "@/shared/components/typography";

const statusStyles = {
  Completed: {
    pill: { backgroundColor: "#E7F6EC" },
    dot: { backgroundColor: COLORS.success },
    text: { color: COLORS.successDark },
  },
  Confirmed: {
    pill: { backgroundColor: "#E7F8EF" },
    dot: { backgroundColor: COLORS.successBright },
    text: { color: COLORS.successDark },
  },
  Active: {
    pill: { backgroundColor: "#EAF1FF" },
    dot: { backgroundColor: COLORS.primary },
    text: { color: COLORS.primary },
  },
  default: {
    pill: { backgroundColor: COLORS.greySoft },
    dot: { backgroundColor: COLORS.greyDark },
    text: { color: COLORS.black },
  },
};

export default function JobListCard({ job, onPress }) {
  const status = statusStyles[job.status] || statusStyles.default;

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 14,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
        margin: 2,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <View
          style={{
            width: 34,
            height: 34,
            borderRadius: 17,
            backgroundColor: "#F3F4F6",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          <BriefcaseBusiness
            size={15}
            color={COLORS.greyDark}
            strokeWidth={2}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View style={{ flex: 1, marginRight: 8 }}>
              <Title
                numberOfLines={1}
                style={{
                  fontSize: 15,
                  color: COLORS.black,
                  lineHeight: 18,
                }}
              >
                {job.jobName}
              </Title>
              <Body
                style={{
                  fontSize: 11,
                  color: COLORS.grey,
                  marginTop: 2,
                }}
              >
                {job.customer?.name} · {job.jobId}
              </Body>
            </View>

            <Title
              style={{
                fontSize: 15,
                color: COLORS.black,
                lineHeight: 18,
              }}
            >
              {job.jobValueAfterCommision}
            </Title>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              gap: 8,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <Clock3 size={12} color={COLORS.greyDark} strokeWidth={2} />
              <Body
                style={{
                  fontSize: 11,
                  color: COLORS.greyDark,
                  marginLeft: 5,
                }}
              >
                {job["Date&time"]}
              </Body>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <MapPin size={12} color={COLORS.greyDark} strokeWidth={2} />
              <Body
                style={{
                  fontSize: 11,
                  color: COLORS.greyDark,
                  marginLeft: 5,
                }}
                numberOfLines={1}
              >
                {job.location}
              </Body>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 18,
                paddingHorizontal: 10,
                paddingVertical: 6,
                ...status.pill,
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  marginRight: 7,
                  ...status.dot,
                }}
              />
              <Body
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  color: status.text.color,
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                {job.status}
              </Body>
            </View>

            <Body
              style={{
                fontSize: 12,
                color: COLORS.greyDark,
                fontFamily: "Inter_600SemiBold",
              }}
            >
              You earn {job.emtimedEarnings}
            </Body>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
