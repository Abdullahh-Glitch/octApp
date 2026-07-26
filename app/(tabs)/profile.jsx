import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const MenuItem = ({ icon, title, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between bg-white rounded-2xl px-5 py-4 mb-4"
    >
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center">
          <Ionicons name={icon} size={20} color="#2563EB" />
        </View>

        <Text className="ml-4 text-base font-semibold text-gray-800">
          {title}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );

  const StatCard = ({ icon, value, title, color }) => (
    <View className="bg-white w-[48%] rounded-2xl p-5 mb-4">
      <View
        className="w-12 h-12 rounded-full items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <Ionicons name={icon} size={24} color={color} />
      </View>

      <Text className="text-2xl font-bold mt-4">{value}</Text>

      <Text className="text-gray-500 mt-1">{title}</Text>
    </View>
  );

  return (
    <ScrollView
      className="flex-1 bg-gray-100"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <View className="px-6 pt-16">
        <Text className="text-3xl font-bold text-gray-900">
          Profile
        </Text>
      </View>

      {/* User Card */}

      <View className="mx-5 mt-6 bg-blue-600 rounded-3xl p-6">

        <View className="flex-row items-center">

          <Image
            source={{
              uri: "https://i.pravatar.cc/300",
            }}
            className="w-20 h-20 rounded-full border-2 border-white"
          />

          <View className="ml-5 flex-1">

            <Text className="text-white text-2xl font-bold">
              Muhammad Abdullah
            </Text>

            <Text className="text-blue-100 mt-1">
              Sales Representative
            </Text>

            <Text className="text-blue-200 mt-1">
              Employee ID : EMP-1023
            </Text>

          </View>

        </View>

      </View>

      {/* Performance */}

      <View className="mx-5 mt-7">

        <Text className="text-lg font-bold mb-4">
          Today's Performance
        </Text>

        <View className="flex-row flex-wrap justify-between">

          <StatCard
            icon="cart"
            value="18"
            title="Orders"
            color="#2563EB"
          />

          <StatCard
            icon="people"
            value="12"
            title="Customers"
            color="#16A34A"
          />

          <StatCard
            icon="cash"
            value="Rs 52K"
            title="Sales"
            color="#F97316"
          />

          <StatCard
            icon="sync"
            value="3"
            title="Pending Sync"
            color="#DC2626"
          />

        </View>

      </View>

      {/* Menu */}

      <View className="mx-5 mt-2">

        <Text className="text-lg font-bold mb-4">
          Account
        </Text>

        <MenuItem
          icon="person-outline"
          title="Personal Information"
        />

        <MenuItem
          icon="business-outline"
          title="Company Information"
        />

        <MenuItem
          icon="location-outline"
          title="Assigned Area"
        />

        <MenuItem
          icon="document-text-outline"
          title="Order History"
        />

        <MenuItem
          icon="cloud-upload-outline"
          title="Sync Orders"
        />

        <MenuItem
          icon="lock-closed-outline"
          title="Change Password"
        />

        {/* Logout */}

        <TouchableOpacity className="bg-red-500 rounded-2xl py-4 mt-4 mb-10">

          <View className="flex-row justify-center items-center">

            <Ionicons
              name="log-out-outline"
              size={22}
              color="white"
            />

            <Text className="text-white text-lg font-semibold ml-3">
              Logout
            </Text>

          </View>

        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}