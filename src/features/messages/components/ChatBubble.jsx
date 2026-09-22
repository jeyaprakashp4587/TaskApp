import { Body, Caption } from "@/shared/components/typography";
import { StyleSheet, View } from "react-native";

export function ChatBubble({
  message,
  time,
  isOwn = false,
  variant = "default",
}) {
  return (
    <View style={[styles.wrap, isOwn && styles.ownWrap]}>
      <View
        style={[
          styles.bubble,
          isOwn && styles.ownBubble,
          variant === "soft" && styles.softBubble,
        ]}
      >
        <Body color={isOwn ? "#FFFFFF" : "#1F2937"} style={styles.messageText}>
          {message}
        </Body>
        <Caption
          color={isOwn ? "rgba(255,255,255,0.8)" : "#8B8B8B"}
          style={styles.timeText}
        >
          {time}
        </Caption>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#F96A0D",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 6,
  },
  softBubble: {
    backgroundColor: "#F8F8F8",
  },
  messageText: {
    lineHeight: 20,
  },
  timeText: {
    marginTop: 6,
    alignSelf: "flex-end",
  },
});
