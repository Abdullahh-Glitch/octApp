import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { router } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import "../../global.css";

const Home = ()=> {
  const features = [{id: 1, name: "Take Order"},
                    {id: 2, name: "View Invoices"},
                    {id: 3, name: "Add Customer"},
                    {id: 4, name: "Add Expense"}
                  ];

    const onPressHandler = (feature) => {
      if (feature.name === "Take Order")  router.push({
        pathname: '/screens/orderTaking',
        params: {
          title: "Take Order"
        }
      });
      if (feature.name === "Add Customer")  router.push({
        pathname: '/screens/addCustomerScreen',
        params: {
          title: "Add Customer",
        },
      });
    };
    return (
      <View className={"flex-1 h-full w-full justify-center items-center bg-blue-300"}>
        <FlatList
        data={features}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        className="w-full"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
          marginBottom: 20,
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => onPressHandler(item)}
            className="bg-white rounded-2xl p-4 items-center justify-center shadow-md w-36 h-36"
            activeOpacity={0.8}
          >
            <View className= "p-1">
              {item.name === "Take Order" && <FontAwesome5 name="file-invoice" size={50} color="black" />}
              {item.name === "View Invoices" && <MaterialIcons name="preview" size={50} color="black" />}
              {item.name === "Add Customer" && <MaterialCommunityIcons name="account-box-plus-outline" size={50} color="black" />}
              {item.name === "Add Expense" && <MaterialIcons name="attach-money" size={50} color="black" />}
            </View>

            <Text className="mt-3 text-base font-semibold text-gray-800 text-center">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        />
      </View>
    )
}

export default Home;