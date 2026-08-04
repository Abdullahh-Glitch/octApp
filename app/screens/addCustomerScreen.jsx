import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView, KeyboardToolbar } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import {Stack, useLocalSearchParams} from "expo-router";
import { Picker } from "@react-native-picker/picker";
import {
  User,
  Smartphone,
  Phone,
  CreditCard,
  Building2,
  Landmark,
  Wallet,
  MapPin,
  FileText,
  Users,
  Mail,
} from "lucide-react-native";

export default function AddCustomerScreen() {
  const { title } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: title || "Add Customer" }} />
      <SafeAreaView className="flex-1 bg-white">
        <KeyboardAwareScrollView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          bottomOffset={62}
          style={{ flex: 1, marginBottom: 62 }}
        >
          <View className="p-2 flex gap-5" style={{backgroundColor: "#918585"}}>
            <View
              style={{
                paddingLeft: "5",
                paddingVertical: "3",
                backgroundColor: "#4a6347",
                borderRadius: 6,
              }}
            >
              <Text style={{color: "white", fontWeight: "bold"}}>Customer Details</Text>
            </View>

            <View className="mb-4">
              <Text className="mb-2 text-gray-700 font-medium">
                Customer Name
              </Text>

              <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                <User size={20} color="#6b7280" />

                <TextInput
                  placeholder="Enter customer name"
                  className="flex-1 ml-3 text-base"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <View style={{ width: "48%" }}>
                <View>
                  <Text>Mobile No.</Text>
                </View>

                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <Smartphone size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter mobile number"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              <View style={{ width: "48%" }}>
                <Text>Phone No.</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <Phone size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter phone number"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <View style={{ width: "48%" }}>
                <Text>CNIC No.</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <Users size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter CNIC number"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              <View style={{ width: "48%" }}>
                <Text>Customer Category</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <Landmark size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Select Category"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <View style={{ width: "48%" }}>
                <Text>NTN No.</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <CreditCard size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter NTN number"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              <View style={{ width: "48%" }}>
                <Text>STRN No.</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <Wallet size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter STRN number"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <View style={{ width: "68%" }}>
                <Text>Country</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <MapPin size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Select Country"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              <View style={{ width: "30%" }}>
                <Text>Credit Limit</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <CreditCard size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter credit limit"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>

            <View className="mb-4">
              <Text>Address</Text>

              <View className="flex-row items-start border border-gray-300 rounded-xl px-3 py-3 bg-white">
                <MapPin size={20} color="#6b7280" style={{ marginTop: 9 }} />

                <TextInput
                  multiline
                  placeholder="Enter address"
                  className="flex-1 ml-2 text-base"
                  style={{ height: 80, textAlignVertical: "top" }}
                />
              </View>
            </View>

            <View>
              <View>
                <Text>Remarks</Text>
              </View>

              <View className="flex-row items-start border border-gray-300 rounded-xl px-3 py-3 bg-white">
                <FileText size={20} color="#6b7280" style={{ marginTop: 9 }} />
                <TextInput
                  multiline
                  placeholder="Enter Remarks"
                  className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                  style={{ height: 80, textAlignVertical: "top" }}
                />
              </View>
            </View>

            <View className="flex-1 gap-5">
              <View
                style={{
                  paddingLeft: "5",
                  paddingVertical: "3",
                  backgroundColor: "#4a6347",
                  borderRadius: 6,
                }}
              >
                <Text style={{color: "white", fontWeight: "bold"}}>Contact Person Detail</Text>
              </View>

              <View className="mb-4">
              <Text className="mb-2 text-gray-700 font-medium">
                Contact Person Name
              </Text>

              <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                <Users size={20} color="#6b7280" />

                <TextInput
                  placeholder="Enter contact person name"
                  className="flex-1 ml-3 text-base"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <View style={{ width: "48%" }}>
                  <View>
                  <Text>Contact#</Text>
                  </View>

                  <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <Phone size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter contact number"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="phone-pad"
                  />
                </View>
                </View>

                <View style={{ width: "48%" }}>
                  <View>
                  <Text>Email Address</Text>
                  </View>

                  <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                  <Mail size={20} color="#6b7280" />
                  <TextInput
                    placeholder="Enter email address"
                    className="flex-1 text-base bg-white rounded-lg p-2 shadow w-[100%]"
                    keyboardType="email-address"
                  />
                </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}