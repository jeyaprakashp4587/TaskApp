import { Search } from "lucide-react-native";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import { APP_COLORS, COLORS } from "@/constants/colors";
import JobListCard from "@/features/jobs/components/JobListCard";
import { Body, Title } from "@/shared/components/typography";
import { useAppStore } from "@/store/appStore";

const jobData = require("@/features/jobs/JobData.json");

export default function JobsScreen() {
  const setActiveTab = useAppStore((state) => state.setActiveTab);
  const setSelectedJob = useAppStore((state) => state.setSelectedJob);
  const [selectedFilter, setSelectedFilter] = useState("Upcoming");

  useEffect(() => {
    setActiveTab("jobs");
  }, [setActiveTab]);

  const filterMeta = useMemo(
    () => [
      {
        key: "Upcoming",
        label: `Upcoming ${
          jobData.filter((job) => job.status !== "Completed").length
        }`,
        items: jobData.filter((job) => job.status !== "Completed"),
      },
      {
        key: "Active",
        label: `Active ${
          jobData.filter((job) => job.status === "Confirmed").length
        }`,
        items: jobData.filter((job) => job.status === "Confirmed"),
      },
      {
        key: "Completed",
        label: `Completed ${
          jobData.filter((job) => job.status === "Completed").length
        }`,
        items: jobData.filter((job) => job.status === "Completed"),
      },
    ],
    []
  );

  const jobs = useMemo(() => {
    const activeFilter = filterMeta.find(
      (filter) => filter.key === selectedFilter
    );
    return activeFilter ? activeFilter.items : filterMeta[0].items;
  }, [selectedFilter, filterMeta]);

  const handleOpenJob = (job) => {
    setSelectedJob(job);
    require("expo-router").router.push("/job-details");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Title style={styles.title}>Jobs</Title>
        <Pressable style={styles.searchButton}>
          <Search size={18} color={COLORS.black} strokeWidth={2.2} />
        </Pressable>
      </View>

      <View style={styles.filterRow}>
        {filterMeta.map((filter) => {
          const isActive = filter.key === selectedFilter;

          return (
            <Pressable
              key={filter.key}
              onPress={() => setSelectedFilter(filter.key)}
              style={[styles.filterChip, isActive && styles.filterChipActive]}
            >
              <Body
                style={[styles.filterText, isActive && styles.filterTextActive]}
              >
                {filter.label}
              </Body>
            </Pressable>
          );
        })}
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listWrap}>
          {jobs.map((job) => (
            <JobListCard
              key={job.jobId}
              job={job}
              onPress={() => handleOpenJob(job)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.background,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  title: {
    fontSize: 22,
    lineHeight: 26,
    color: COLORS.black,
    fontFamily: "Inter_700Bold",
  },
  searchButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 18,
  },
  filterChip: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D9DCE1",
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterChipActive: {
    backgroundColor: COLORS.white,
    borderColor: "#D9DCE1",
  },
  filterText: {
    fontSize: 12,
    color: COLORS.grey,
    fontFamily: "Inter_500Medium",
  },
  filterTextActive: {
    color: COLORS.black,
    fontFamily: "Inter_600SemiBold",
  },
  listWrap: {
    gap: 12,
  },
});
