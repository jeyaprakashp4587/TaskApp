import { Caption, Title } from "@/shared/components/typography";
import { ArrowLeft, MoreHorizontal, Phone } from "lucide-react-native";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function ChatHeader({
  name,
  subtitle,
  avatar,
  avatarColor = "#D9E7F7",
  onBack,
  onCall,
  onMore,
}) {
  const hasImageUrl =
    typeof avatar === "string" && /^(https?:)?\/\//i.test(avatar);

  return (
    <View style={styles.header}>
      <View style={styles.leftWrap}>
        <Pressable onPress={onBack} style={styles.iconButton}>
          <ArrowLeft size={18} color="#111111" strokeWidth={2.5} />
        </Pressable>

        <View style={styles.userWrap}>
          {hasImageUrl ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
              <Title style={styles.avatarText}>{avatar || "A"}</Title>
            </View>
          )}
          <View>
            <Title style={styles.name}>{name}</Title>
            <Caption color="#7C7C7C">{subtitle}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.actionWrap}>
        <Pressable onPress={onCall} style={styles.actionButton}>
          <Phone size={15} color="#111111" strokeWidth={2.2} />
        </Pressable>
        <Pressable onPress={onMore} style={styles.actionButton}>
          <MoreHorizontal size={15} color="#111111" strokeWidth={2.2} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  leftWrap: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  userWrap: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatarText: {
    fontSize: 13,
    lineHeight: 15,
    color: "#111111",
  },
  name: {
    fontSize: 15,
    lineHeight: 18,
  },
  actionWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
});
