import { useAppStore } from "@/store/appStore";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const chats = require("@/features/messages/data/chatData.json");

const tabs = ["All", "Customers", "ProFix Support"];

export default function MessagesScreen() {
  const [activeTab, setActiveTab] = useState("All");
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);

  const visibleChats = useMemo(() => {
    if (activeTab === "Customers") {
      return chats.filter((chat) => chat.type === "customer");
    }

    if (activeTab === "ProFix Support") {
      return chats.filter((chat) => chat.type === "support");
    }

    return chats;
  }, [activeTab]);

  const handleChatPress = (chat) => {
    setSelectedChat(chat);
    router.push("/chat-details");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <Text style={styles.title}>Messages</Text>

        {/* TABS */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => {
            const active = activeTab === tab;

            return (
              <Pressable
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[styles.tab, active && styles.activeTab]}
              >
                <Text style={[styles.tabText, active && styles.activeTabText]}>
                  {tab}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* CHAT LIST */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.chatList}>
            {visibleChats.map((chat, index) => (
              <Pressable
                key={chat.id}
                onPress={() => handleChatPress(chat)}
                style={[
                  styles.chatItem,
                  index !== visibleChats.length - 1 && styles.chatItemBorder,
                ]}
              >
                {/* AVATAR */}
                <View style={styles.avatarContainer}>
                  {chat.avatarImage ? (
                    <Image
                      source={{ uri: chat.avatarImage }}
                      style={styles.avatarImage}
                    />
                  ) : (
                    <View
                      style={[
                        styles.avatar,
                        {
                          backgroundColor: chat.avatarBackground || "#E7E7E9",
                        },
                      ]}
                    >
                      {chat.type === "support" ? (
                        <Text style={styles.supportIcon}>♧</Text>
                      ) : (
                        <Text style={styles.avatarLetter}>{chat.avatar}</Text>
                      )}
                    </View>
                  )}
                </View>

                {/* CONTENT */}
                <View style={styles.chatContent}>
                  {/* NAME + TIME */}
                  <View style={styles.nameRow}>
                    <Text style={styles.name} numberOfLines={1}>
                      {chat.name}
                    </Text>

                    <Text style={styles.time}>{chat.lastMessageTime}</Text>
                  </View>

                  {/* JOB */}
                  <Text
                    style={[
                      styles.jobText,
                      chat.type === "support" && styles.supportJobText,
                    ]}
                    numberOfLines={1}
                  >
                    {chat.jobName} · {chat.jobTime}
                  </Text>

                  {/* MESSAGE + BADGE */}
                  <View style={styles.messageRow}>
                    <Text style={styles.message} numberOfLines={1}>
                      {chat.lastMessage}
                    </Text>

                    {chat.unreadCount ? (
                      <View style={styles.unreadBadge}>
                        <Text style={styles.unreadText}>
                          {chat.unreadCount}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Chats stay open until 24 hours after a job is completed.
            </Text>

            <Text style={styles.footerText}>
              Customer phone numbers are always masked.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F6F4",
    padding: 8,
  },

  container: {
    flex: 1,
    paddingHorizontal: 9,
    paddingTop: 0,
    padding: 20,
  },

  /* ---------------- HEADER ---------------- */

  title: {
    fontSize: 21,
    lineHeight: 25,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 13,
  },

  /* ---------------- TABS ---------------- */

  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 11,
  },

  tab: {
    height: 32,
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#D2D2D5",
    alignItems: "center",
    justifyContent: "center",
  },

  activeTab: {
    backgroundColor: "#171717",
    borderColor: "#171717",
  },

  tabText: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "500",
    color: "#222222",
  },

  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  /* ---------------- SCROLL ---------------- */

  scrollContent: {
    paddingBottom: 20,
  },

  /* ---------------- CHAT LIST ---------------- */

  chatList: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#E1E1E3",
    overflow: "hidden",
  },

  chatItem: {
    minHeight: 82,
    paddingHorizontal: 13,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },

  chatItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
  },

  /* ---------------- AVATAR ---------------- */

  avatarContainer: {
    width: 38,
    height: 38,
    marginRight: 11,
    marginTop: 1,
  },

  avatarImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarLetter: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "500",
    color: "#59616A",
  },

  supportIcon: {
    fontSize: 22,
    color: "#F46B20",
    lineHeight: 25,
  },

  /* ---------------- CONTENT ---------------- */

  chatContent: {
    flex: 1,
    minWidth: 0,
  },

  nameRow: {
    height: 19,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  name: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700",
    color: "#111111",
    marginRight: 8,
  },

  time: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "400",
    color: "#777E87",
    marginTop: 1,
  },

  jobText: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "500",
    color: "#F15F21",
  },

  supportJobText: {
    color: "#F15F21",
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },

  message: {
    flex: 1,
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "400",
    color: "#69717A",
  },

  /* ---------------- UNREAD ---------------- */

  unreadBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#F56A19",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
  },

  unreadText: {
    color: "#FFFFFF",
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "700",
  },

  /* ---------------- FOOTER ---------------- */

  footer: {
    paddingTop: 16,
    paddingHorizontal: 2,
  },

  footerText: {
    fontSize: 10,
    lineHeight: 17,
    color: "#7D8790",
    fontWeight: "400",
  },
});
