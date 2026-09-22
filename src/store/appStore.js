import { create } from "zustand";

export const useAppStore = create((set) => ({
  activeTab: "home",
  isReady: false,
  selectedJob: null,
  selectedChat: null,
  jobBadgeCount: 3,
  messageBadgeCount: 2,
  setActiveTab: (tab) => set({ activeTab: tab }),
  setReady: (value) => set({ isReady: value }),
  setSelectedJob: (job) => set({ selectedJob: job }),
  setSelectedChat: (chat) => set({ selectedChat: chat }),
  setJobBadgeCount: (count) => set({ jobBadgeCount: count }),
  setMessageBadgeCount: (count) => set({ messageBadgeCount: count }),
}));
