import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView, KeyboardToolbar } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import {Stack, useLocalSearchParams} from "expo-router";
import { User, Smartphone, Phone, CreditCard, Building2, Landmark, Wallet, MapPin, FileText, Users, Mail } from "lucide-react-native";
import { GetCustomerCategories, GetCountries, AddCustomer } from "../../hooks/customerHook";

export default function AddCustomerScreen() {
  const { title } = useLocalSearchParams();

  const {data: categoriesData} = GetCustomerCategories();
  const {data: countriesData} = GetCountries();
  const {mutateAsync: addCustomer} = AddCustomer();

  const[selectedCategory, setSelectedCategory] = useState(null);
  const[selectedCountry, setSelectedCountry] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    phoneNo: "",
    CNICNo: "",
    customerCategoryId: 0,
    NTNNo: "",
    STRNNo: "",
    countryId: 0,
    creditLimit: "",
    address: "",
    remarks: "",
    contactPersonName: "",
    contactPersonContactNo: "",
    contactPersonEmail: "",
  })

  const handleChange = (field, value) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePressSave = async()=>{
    try {
    const response = await addCustomer(formData);

    console.log(response);

    Alert.alert("Success", "Customer added successfully.");
  } catch (error) {
    Alert.alert("Error", error.message);
  }
  };


  return (
    <>
      <Stack.Screen options={{ title: title || "Add Customer" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#918585"}}>
        <KeyboardAwareScrollView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          bottomOffset={62}
          style={{ flex: 1, marginBottom: 15 }}
        >
          <View style={{gap: 12, padding: 2}}>
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
                  value={formData.name}
                  onChangeText={(text)=> handleChange('name',text)}
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
                    value={formData.mobileNo}
                    onChangeText={(text)=> handleChange('mobileNo',text)}
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
                    value={formData.PhoneNo}
                    onChangeText={(text)=> handleChange('phoneNo',text)}
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
                    value={formData.CNIC}
                    onChangeText={(text)=> handleChange('CNICNo',text)}
                  />
                </View>
              </View>

              <View style={{ width: "48%" }}>
                <Text>Customer Category</Text>
                <View style={{padding: 4, borderWidth: 1, borderColor: "#d1d5db", borderRadius: 8, backgroundColor: "white", height: 40, justifyContent: "center"}}>
                  <Dropdown
                    data={categoriesData ? categoriesData?.data : [{ id:"", name: "No categories available" }]}
                    labelField="name"
                    valueField="id"
                    placeholder="Select Category"
                    value={formData.customerCategoryId}
                    onChange={(item) => handleChange('customerCategoryId',item.id)}
                    style={{height: 38}}
                    itemContainerStyle={{borderBottomWidth: 1, borderBottomColor: "black", borderRadius: 20}}
                    containerStyle={{backgroundColor: "lightgrey", borderRadius: 20, height: 200, paddingHorizontal: 5}}
                    renderLeftIcon={() => (
                      <Building2 size={20} color="#6b7280" style={{ marginRight: 8 }} />
                    )}
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
                    value={formData.NTNNo}
                    onChangeText={(text)=> handleChange('NTNNo',text)}
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
                    value={formData.STRNNO}
                    onChangeText={(text)=> handleChange('STRNNO',text)}
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
                <View style={{padding: 4, borderWidth: 1, borderColor: "#d1d5db", borderRadius: 8, backgroundColor: "white", height: 40, justifyContent: "center"}}>
                  <Dropdown
                    data={countriesData ? countriesData?.data : [{ id:"", name: "No categories available" }]}
                    labelField="name"
                    valueField="id"
                    placeholder="Select Country"
                    value={formData.countryId}
                    onChange={(item) => handleChange('countryId',item.id)}
                    style={{borderRadius: 20, height: 40, paddingHorizontal: 8}}
                    itemContainerStyle={{borderBottomWidth: 1, borderBottomColor: "black"}}
                    containerStyle={{backgroundColor: "lightgrey", borderRadius: 20, height: 200, paddingHorizontal: 5}}
                    renderLeftIcon={() => (
                      <MapPin size={20} color="#6b7280" style={{ marginRight: 8 }} />
                    )}
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
                    value={formData.creditLimit}
                    onChangeText={(text)=> handleChange('creditLimit',text)}
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
                  value={formData.address}
                  onChangeText={(text)=> handleChange('address',text)}
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
                  value={formData.remarks}
                  onChangeText={(text)=> handleChange('remarks',text)}
                />
              </View>
            </View>

            <View style={{gap: 8, marginTop: 10}}>
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

              <View>
              <Text className="text-gray-700 font-medium">
                Contact Person Name
              </Text>

              <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12 bg-white">
                <Users size={20} color="#6b7280" />

                <TextInput
                  placeholder="Enter contact person name"
                  className="flex-1 ml-3 text-base"
                  placeholderTextColor="#9ca3af"
                  value={formData.contactPersonName}
                  onChangeText={(text)=> handleChange('contactPersonName',text)}
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
                    value={formData.contactPersonContactNo}
                    onChangeText={(text)=> handleChange('contactPersonContactNo',text)}
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
                    value={formData.contactPersonEmail}
                    onChangeText={(text)=> handleChange('contactPersonEmail',text)}
                  />
                </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20, alignItems: "center", justifyContent: "center", width: "100%"}}>
              <TouchableOpacity onPress={handlePressSave} style={{border: "solid", backgroundColor: "white", width: "50%", alignItems:"center", borderRadius: 20, backgroundColor: "lightblue"}}>
                <Text style={{paddingVertical: 4, fontWeight: "bold", fontSize: 18}}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}