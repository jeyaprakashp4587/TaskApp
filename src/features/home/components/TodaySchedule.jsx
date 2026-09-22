import { router } from "expo-router";
import { Pressable, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { Body, Title } from "@/shared/components/typography";
import { useAppStore } from "@/store/appStore";

const jobs = require("@/features/jobs/JobData.json");

const statusStyles = {
  Completed: {
    pill: { backgroundColor: COLORS.greyLight },
    dot: { backgroundColor: COLORS.greyDark },
    text: { color: COLORS.black },
    line: { backgroundColor: COLORS.greyLight },
  },
  Confirmed: {
    pill: { backgroundColor: COLORS.successSurface },
    dot: { backgroundColor: COLORS.success },
    text: { color: COLORS.successDark },
    line: { backgroundColor: COLORS.successLight },
  },
  Pending: {
    pill: { backgroundColor: "#FDE7C8" },
    dot: { backgroundColor: COLORS.warning },
    text: { color: "#9A5B00" },
    line: { backgroundColor: "#F7C978" },
  },
};

const formatScheduleTime = (dateTime) => {
  if (!dateTime) return { time: "--", period: "" };

  const value = dateTime.replace("Today, ", "");
  const timeMatch = value.match(/^(\d{1,2}:\d{2})\s*(AM|PM)?$/i);

  if (!timeMatch) {
    return { time: value, period: "" };
  }

  const [, time, period = ""] = timeMatch;
  return { time, period };
};

const getDurationText = (job) => {
  return job.EstimatedDuration || job.duration || "45 min";
};

const getPriceText = (job) => {
  return job.jobValueAfterCommision || job.amount || "₹0";
};

const getLocationText = (job) => {
  return job.location || job.customer?.address || "Location";
};

export default function TodaySchedule() {
  const scheduleJobs = jobs
    .filter((job) => job.status !== "Pending")
    .slice(0, 4);
  const setSelectedJob = useAppStore((state) => state.setSelectedJob);

  const handleJobPress = (job) => {
    setSelectedJob(job);
    router.push("/job-details");
  };

  return (
    <View style={{ marginVertical: 12 }}>
      <Title
        style={{
          //   fontSize: 20,
          lineHeight: 26,
          color: "#111111",
          marginBottom: 1,
          marginLeft: 6,
          fontFamily: "Inter_700Bold",
        }}
      >
        Today&apos;s schedule
      </Title>

      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#F4F4F4",
          paddingVertical: 6,
          overflow: "hidden",
        }}
      >
        {scheduleJobs.map((job, index) => {
          const { time, period } = formatScheduleTime(job["Date&time"]);
          const duration = getDurationText(job);
          const status = statusStyles[job.status] || statusStyles.Completed;

          return (
            <Pressable
              key={`${job.jobId || job.jobName}-${index}`}
              onPress={() => handleJobPress(job)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 14,
                paddingVertical: 12,
                backgroundColor: index === 0 ? "#EAEAEA" : "#F4F4F4",
              }}
            >
              <View
                style={{
                  width: 84,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Body
                  style={{
                    fontSize: 14,
                    lineHeight: 18,
                    color: "#111111",
                    fontFamily: "Inter_700Bold",
                  }}
                >
                  {time}
                </Body>
                <Body
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "#111111",
                    fontFamily: "Inter_400Regular",
                    marginTop: 2,
                  }}
                >
                  {period}
                </Body>
                <Body
                  style={{
                    fontSize: 11,
                    lineHeight: 15,
                    color: "#666666",
                    marginTop: 4,
                  }}
                >
                  {duration}
                </Body>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  //   marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    width: 2,
                    height: 54,
                    borderRadius: 2,
                    marginRight: 12,
                    ...status.line,
                  }}
                />

                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Body
                      style={{
                        fontSize: 14,
                        lineHeight: 18,
                        color: "#111111",
                        fontFamily: "Inter_700Bold",
                        maxWidth: 150,
                      }}
                      numberOfLines={1}
                    >
                      {job.jobName}
                    </Body>

                    <Body
                      style={{
                        fontSize: 12,
                        lineHeight: 16,
                        color: "#111111",
                        fontFamily: "Inter_500Medium",
                      }}
                    ></Body>
                  </View>

                  <Body
                    style={{
                      fontSize: 12,
                      lineHeight: 16,
                      color: "#4B5563",
                      marginTop: 2,
                    }}
                  >
                    {getLocationText(job)} . {getPriceText(job)}
                  </Body>
                </View>
              </View>

              <View
                style={{
                  minWidth: 112,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  ...status.pill,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      marginRight: 8,
                      ...status.dot,
                    }}
                  />
                  <Body
                    style={{
                      fontSize: 12,
                      lineHeight: 16,
                      fontFamily: "Inter_600SemiBold",
                      ...status.text,
                    }}
                  >
                    {job.status}
                  </Body>
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
