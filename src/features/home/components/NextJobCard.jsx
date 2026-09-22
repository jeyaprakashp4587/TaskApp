import { router } from "expo-router";
import { ArrowRight, Clock3, MapPin, Zap } from "lucide-react-native";
import { Pressable, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { Body, Title } from "@/shared/components/typography";
import { useAppStore } from "@/store/appStore";

const jobData = require("../../jobs/JobData.json");

export default function NextJobCard() {
  const job = jobData[0];
  const setSelectedJob = useAppStore((state) => state.setSelectedJob);

  const handleViewJob = () => {
    setSelectedJob(job);
    router.push("/job-details");
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Title>Next job</Title>
        <Pressable>
          <Body
            style={{ color: COLORS.primary, fontSize: 12, fontWeight: "700" }}
          >
            All jobs
          </Body>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: COLORS.darkSurface,
          borderRadius: 23,
          overflow: "hidden",
          shadowColor: COLORS.black,
          shadowOpacity: 0.18,
          shadowRadius: 12,
          shadowOffset: {
            width: 0,
            height: 6,
          },
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingHorizontal: 18,
            paddingTop: 26,
          }}
        >
          <View
            style={{
              height: 39,
              paddingHorizontal: 16,
              borderRadius: 20,
              backgroundColor: COLORS.successDeep,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 9,
                height: 9,
                borderRadius: 5,
                backgroundColor: COLORS.successBright,
                marginRight: 8,
              }}
            />

            <Body
              style={{
                fontSize: 13,
                color: COLORS.successBright,
              }}
            >
              {job.status}
            </Body>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Title
              style={{
                fontSize: 29,
                lineHeight: 34,
                color: COLORS.white,
                fontFamily: "Inter_700Bold",
              }}
            >
              {job.jobValueAfterCommision}
            </Title>

            <Body
              style={{
                fontSize: 12,
                color: COLORS.darkTextMuted,
                marginTop: 5,
              }}
            >
              You earn
            </Body>

            <Body
              style={{
                fontSize: 15,
                color: COLORS.darkTextSoft,
                marginTop: 1,
              }}
            >
              {job.emtimedEarnings}
            </Body>
          </View>
        </View>

        <Title
          style={{
            paddingHorizontal: 18,
            fontSize: 25,
            lineHeight: 29,
            color: COLORS.white,
            fontFamily: "Inter_700Bold",
            width: 250,
          }}
        >
          {job.jobName}
        </Title>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            paddingHorizontal: 18,
            marginTop: 10,
            columnGap: 8,
            rowGap: 7,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Clock3 size={17} color={COLORS.darkText} strokeWidth={2} />

            <Body
              style={{
                fontSize: 12,
                color: COLORS.darkText,
              }}
            >
              {job["Date&time"]}
            </Body>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <MapPin size={17} color={COLORS.darkText} strokeWidth={2} />

            <Body
              style={{
                fontSize: 12,
                color: COLORS.darkText,
              }}
            >
              {job.location}
            </Body>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 18,
            marginTop: 12,
            marginBottom: 12,
            gap: 13,
          }}
        >
          <Pressable
            onPress={handleViewJob}
            style={{
              flex: 2,
              height: 59,
              borderRadius: 17,
              backgroundColor: COLORS.primary,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: COLORS.primary,
              shadowOpacity: 0.45,
              shadowRadius: 13,
              shadowOffset: {
                width: 0,
                height: 5,
              },
              elevation: 7,
            }}
          >
            <ArrowRight size={21} color={COLORS.white} strokeWidth={2.7} />

            <Body
              style={{
                fontSize: 14,
                color: COLORS.white,
                fontFamily: "Inter_600SemiBold",
                marginLeft: 8,
              }}
            >
              View Job
            </Body>
          </Pressable>

          <Pressable
            style={{
              flex: 1,
              height: 59,
              borderRadius: 17,
              backgroundColor: COLORS.darkButton,
              borderWidth: 1,
              borderColor: COLORS.darkBorderStrong,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Body
              style={{
                fontSize: 14,
                color: COLORS.white,
                marginLeft: 7,
              }}
            >
              Navigate
            </Body>
          </Pressable>
        </View>

        <View
          style={{
            minHeight: 73,
            borderTopWidth: 1,
            borderTopColor: COLORS.darkBorder,
            backgroundColor: COLORS.darkStrip,
            paddingHorizontal: 35,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Zap size={17} color={COLORS.primary} fill={COLORS.primary} />

          <Body
            style={{
              flex: 1,
              fontSize: 13,
              lineHeight: 19,
              color: COLORS.darkTextMuted,
              marginLeft: 10,
            }}
          >
            Starts in 18 minutes — leave by 1:50 PM to arrive on time.
          </Body>
        </View>
      </View>
    </View>
  );
}
