import { COLORS } from "@/constants/colors";
import { Body, Caption } from "@/shared/components/typography";
import { Image, StyleSheet, View } from "react-native";

export default function ChatThread({ messages }) {
  return (
    <View style={styles.chatArea}>
      <Caption color="#7C7C7C" style={styles.dayLabel}>
        Today
      </Caption>

      {messages.map((item) => {
        const isOwn = item.sender === "support";

        if (item.kind === "image") {
          return (
            <View key={item.id} style={[styles.wrap, isOwn && styles.ownWrap]}>
              <View style={[styles.imageCard, isOwn && styles.ownImageCard]}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Caption
                  color={isOwn ? "rgba(255,255,255,0.8)" : "#8B8B8B"}
                  style={styles.timeText}
                >
                  {item.time}
                </Caption>
              </View>
            </View>
          );
        }

        return (
          <View key={item.id} style={[styles.wrap, isOwn && styles.ownWrap]}>
            <View style={[styles.bubble, isOwn && styles.ownBubble]}>
              <Body
                color={isOwn ? "#FFFFFF" : "#1F2937"}
                style={styles.messageText}
              >
                {item.text}
              </Body>
              <Caption
                color={isOwn ? "rgba(255,255,255,0.8)" : "#8B8B8B"}
                style={styles.timeText}
              >
                {item.time}
              </Caption>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  chatArea: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 16,
  },
  dayLabel: {
    textAlign: "center",
    marginBottom: 12,
  },
  wrap: {
    width: "100%",
    marginBottom: 14,
    alignItems: "flex-start",
  },
  ownWrap: {
    alignItems: "flex-end",
  },
  bubble: {
    maxWidth: "78%",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
    borderBottomLeftRadius: 6,
  },
  ownBubble: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 6,
  },
  messageText: {
    lineHeight: 20,
  },
  timeText: {
    marginTop: 6,
    alignSelf: "flex-end",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  imageCard: {
    width: "74%",
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    borderBottomLeftRadius: 6,
    overflow: "hidden",
  },
  ownImageCard: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 6,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 18,
  },
});
