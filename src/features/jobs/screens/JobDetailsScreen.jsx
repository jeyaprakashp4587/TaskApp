import { COLORS } from "@/constants/colors";
import { Body, Caption, Title } from "@/shared/components/typography";
import { useAppStore } from "@/store/appStore";
import { useRouter } from "expo-router";
import {
  ChevronLeft,
  Locate,
  MessageCircle,
  Navigation,
  Newspaper,
  PhoneCall,
  Timer,
  ToolCase,
  Verified,
} from "lucide-react-native";
import {
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

export default function JobDetailsScreen() {
  const router = useRouter();
  const selectedJob = useAppStore((state) => state.selectedJob);

  if (!selectedJob) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F7F7F7",
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <Title>No job selected</Title>
      </View>
    );
  }

  const isCompleted = selectedJob.status === "Completed";
  const statusDotColor = isCompleted ? "#22C55E" : "#9CA3AF";
  const statusChipColor = isCompleted ? "#EAFBF1" : "#F3F4F6";
  const statusTextColor = isCompleted ? "#166534" : "#111827";

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
      <View
        style={{
          paddingHorizontal: 18,
          paddingTop: 18,
          paddingBottom: 12,
          backgroundColor: "#F7F7F7",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(17, 17, 17, 0.06)",
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ChevronLeft size={30} color={COLORS.black} />
          <View style={{ marginLeft: 8 }}>
            <Body
              style={{ fontSize: 15, fontWeight: "700", color: COLORS.black }}
            >
              {selectedJob.jobName}
            </Body>
            <Caption color="#9CA3AF">
              {selectedJob.jobId} · {selectedJob["Date&time"]?.split(",")[0]}
            </Caption>
          </View>
        </Pressable>
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: "#F7F7F7" }}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: 14,
          paddingBottom: 110,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 18,
            padding: 16,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 4 },
            elevation: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 8,
                backgroundColor: "#F3F4F6",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <ToolCase />
            </View>

            <View style={{ flex: 1, rowGap: 8 }}>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: statusChipColor,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  // marginBottom: 18,
                }}
              >
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: statusDotColor,
                    marginRight: 6,
                  }}
                />
                <Body
                  style={{
                    fontSize: 12,
                    color: statusTextColor,
                    fontWeight: "700",
                  }}
                >
                  {selectedJob.status}
                </Body>
              </View>
              <Title style={{ fontSize: 18, color: COLORS.black }}>
                {selectedJob.jobName}
              </Title>
              <Caption color="#7A7A7A">
                {selectedJob.customer?.name} · {selectedJob.customer?.address}
              </Caption>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: "#73767b13" }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <View style={{ flex: 1, marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <Timer color="#6B7280" size={12} />

                <Caption color="#6B7280">Date & time</Caption>
              </View>
              <Body
                style={{ fontSize: 13, fontWeight: "700", color: COLORS.black }}
              >
                {selectedJob["Date&time"]}
              </Body>
            </View>

            <View style={{ flex: 1, marginTop: 10, alignItems: "flex-end" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <Timer color="#6B7280" size={12} />

                <Caption color="#6B7280">Estimated duration</Caption>
              </View>
              <Body
                style={{ fontSize: 13, fontWeight: "700", color: COLORS.black }}
              >
                {selectedJob.EstimatedDuration}
              </Body>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <Locate color="#6B7280" size={12} />
                <Caption color="#6B7280">Location</Caption>
              </View>
              <Body
                style={{ fontSize: 13, fontWeight: "700", color: COLORS.black }}
              >
                {selectedJob.location}
              </Body>
            </View>

            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <Newspaper color="#6B7280" size={12} />
                <Caption>Job ID</Caption>
              </View>
              <Body
                style={{ fontSize: 13, fontWeight: "700", color: COLORS.black }}
              >
                {selectedJob.jobId}
              </Body>
            </View>
          </View>

          {/* estimated earnings */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#F9FAFB",
              borderRadius: 14,
              padding: 14,
              marginBottom: 20,
            }}
          >
            <View>
              <Caption
                style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 5 }}
              >
                Estimated earning
              </Caption>
              <Title style={{ fontSize: 20, color: COLORS.black }}>
                {selectedJob.emtimedEarnings}
              </Title>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Body style={{ fontSize: 12, color: "#9CA3AF" }}>
                Job value {selectedJob.jobValueAfterCommision}
              </Body>
              <Body style={{ fontSize: 12, color: "#9CA3AF" }}>
                after ProFix commission
              </Body>
            </View>
          </View>
        </View>
        {/* des */}
        <View
          style={{
            marginBottom: selectedJob.image?.length ? 18 : 0,
            marginTop: 10,
            elevation: 2,
          }}
        >
          <Title style={{ fontSize: 15, color: COLORS.black, marginBottom: 8 }}>
            What the customer reported
          </Title>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: 12,
            }}
          >
            <Body
              style={{
                fontSize: 13,
                color: "#202327",
                lineHeight: 20,
              }}
            >
              "{selectedJob.customerReport}"
            </Body>
          </View>
        </View>

        {selectedJob.image && selectedJob.image.length > 0 && (
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            {selectedJob.image.map((img, index) => (
              <Image
                key={`${img}-${index}`}
                source={{ uri: img }}
                style={{
                  width: 130,
                  height: 100,
                  borderRadius: 12,
                  backgroundColor: "#E5E7EB",
                }}
              />
            ))}
          </View>
        )}
        {/* customer */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            padding: 12,
            rowGap: 10,
            borderRadius: 15,
          }}
        >
          {/* header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 5,
              gap: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(50, 65, 80, 0.38)",
                width: 40,
                height: 40,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Title>
                {selectedJob.customer?.name?.[0]?.charAt(0).toUpperCase()}
              </Title>
            </View>
            <View>
              <Title>{selectedJob.customer?.name}</Title>
            </View>
          </View>
          {/* links */}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                rowGap: 10,
                columnGap: 5,
                borderColor: "rgba(87, 91, 93, 0.33)",
              }}
            >
              <Navigation size={10} strokeWidth={2} />
              <Body style={{ fontWeight: "500" }}>Navigate</Body>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                columnGap: 5,
                borderColor: "rgba(87, 91, 93, 0.33)",
              }}
            >
              <MessageCircle size={10} strokeWidth={2} />
              <Body style={{ fontWeight: "500" }}>Navigate</Body>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                columnGap: 5,
                borderColor: "rgba(87, 91, 93, 0.33)",
              }}
            >
              <PhoneCall size={10} strokeWidth={2} />
              <Body style={{ fontWeight: "500" }}>Navigate</Body>
            </TouchableOpacity>
          </View>
          {/*  */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Verified strokeWidth={1} color={"rgba(94, 96, 98, 0.5)"} />
            <Body style={{ color: "rgba(94, 96, 98, 0.5)" }}>
              The full address is unlocked when you start travelling.
            </Body>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          paddingHorizontal: 18,
          paddingTop: 12,
          paddingBottom: 18,
          backgroundColor: "#F7F7F7",
          borderTopWidth: 1,
          borderTopColor: "rgba(17, 17, 17, 0.06)",
        }}
      >
        <Pressable
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 14,
            height: 52,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: COLORS.primary,
            shadowOpacity: 0.25,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 5 },
            elevation: 4,
          }}
        >
          <Navigation size={15} color={COLORS.white} strokeWidth={2.2} />
          <Body
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontFamily: "Inter_600SemiBold",
              marginLeft: 8,
            }}
          >
            Navigate to customer
          </Body>
        </Pressable>
      </View>
    </View>
  );
}
