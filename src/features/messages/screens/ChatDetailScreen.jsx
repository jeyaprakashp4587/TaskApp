import { COLORS } from "@/constants/colors";
import ChatHeader from "@/features/messages/components/ChatHeader";
import ChatThread from "@/features/messages/components/ChatThread";
import { Body, Caption, Title } from "@/shared/components/typography";
import { useAppStore } from "@/store/appStore";
import { useRouter } from "expo-router";
import { MessageSquareText, Send } from "lucide-react-native";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const imageFallback =
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80";

export default function ChatDetailScreen() {
  const router = useRouter();
  const selectedChat = useAppStore((state) => state.selectedChat);

  if (!selectedChat || typeof selectedChat !== "object") {
    return (
      <View style={styles.emptyState}>
        <Title>No chat selected</Title>
      </View>
    );
  }

  const chatId = selectedChat?.id ?? "";
  const chatName = selectedChat?.name ?? "Chat";
  const chatType = selectedChat?.type ?? "customer";
  const jobName = selectedChat?.jobName ?? "Job";
  const jobId = selectedChat?.jobId ?? "";
  const status = selectedChat?.status ?? "";
  const avatar = selectedChat?.avatar ?? "A";
  const avatarColor = selectedChat?.avatarColor ?? "#D9E7F7";

  const messages = Array.isArray(selectedChat.messages)
    ? selectedChat.messages
    : [];
  const displayMessages = [...messages];

  if (chatId === "karthick-1" && displayMessages.length > 0) {
    displayMessages.splice(1, 0, {
      id: "photo-1",
      sender: "customer",
      type: "image",
      image: imageFallback,
      time: "12:29 PM",
    });
  }

  return (
    <View style={styles.screen}>
      <ChatHeader
        name={chatName}
        subtitle={
          chatType === "customer"
            ? "Customer · masked contact"
            : "Support conversation"
        }
        avatar={avatar}
        avatarColor={avatarColor}
        onBack={() => router.back()}
        onCall={() => {}}
        onMore={() => {}}
      />

      <View style={styles.jobHeaderWrap}>
        <View style={styles.jobHeaderRow}>
          <View>
            <Body style={styles.jobTitle}>{jobName}</Body>
            <Caption style={styles.jobMeta} color="#6B7280">
              {jobId} · {status}
            </Caption>
          </View>

          <Pressable style={styles.detailsButton}>
            <Body style={styles.detailsText}>Job details</Body>
          </Pressable>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.chatContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
      >
        <View style={styles.chatScrollWrap}>
          <ChatThread
            messages={displayMessages.map((item) => {
              if (item.type === "image") {
                return {
                  id: item.id,
                  sender: item.sender,
                  text: "",
                  time: item.time,
                  image: item.image,
                  kind: "image",
                };
              }

              return {
                ...item,
                kind: "text",
              };
            })}
          />
        </View>

        <View style={styles.inputBar}>
          <View style={styles.inputWrapper}>
            <Pressable style={styles.iconButton}>
              <MessageSquareText size={18} color="#8A8A8A" strokeWidth={2.2} />
            </Pressable>
            <TextInput
              placeholder="Message"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>

          <Pressable style={styles.sendButton}>
            <Send size={18} color="#FFFFFF" strokeWidth={2.4} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  emptyState: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  jobHeaderWrap: {
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 10,
  },
  jobHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 2,
  },
  jobMeta: {
    fontSize: 10,
  },
  detailsButton: {
    backgroundColor: "#FFF0E7",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  detailsText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "700",
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  chatScrollWrap: {
    flex: 1,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EFEFEF",
    gap: 10,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  iconButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
    paddingVertical: 0,
  },
  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
});
