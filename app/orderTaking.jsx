import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import {sendData} from '../apis/OrderTaker'

const orderTaking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderName, setOrderName] = useState('');
  const [orderItems, setOrderItems] = useState('');

  const fetchHello = async () => {
    const data = {
      id: orderId,
      name: orderName,
      items: orderItems
    };
    await sendData(data);
  };
    

  return (
    <View style={{flex: 1,width: '100%', height: '100%', justifyContent: 'center', backgroundColor: 'lightyellow', alignItems: 'center'}}>
      <View style={{width: '70%', height: '55'}}>
        <Text style={{paddingLeft: 5}}>Order Id:</Text>
        <TextInput
          placeholder="Enter Order Id"
          value={orderId}
          onChangeText={setOrderId}
          style={{flex: 1, textSize: 16, fontWeight: 'bold', height: '45', color: 'gray', borderWidth: 1, borderColor: 'blue', borderRadius: 8, padding: 8}}
        />
      </View>
      <View style={{width: '70%', height: '55'}}>
        <Text style={{paddingLeft: 5}}>Order Name:</Text>
        <TextInput
          placeholder="Enter Order Name"
          value={orderName}
          onChangeText={setOrderName}
          style={{flex: 1, textSize: 16, fontWeight: 'bold', height: '45', color: 'gray', borderWidth: 1, borderColor: 'blue', borderRadius: 8, padding: 8}}
        />
      </View>
      <View style={{width: '70%', height: '55'}}>
        <Text style={{paddingLeft: 5}}>Order Items:</Text>
        <TextInput
          placeholder="Enter Order Items"
          value={orderItems}
          onChangeText={setOrderItems}
          style={{flex: 1, textSize: 16, fontWeight: 'bold', height: '45', color: 'gray', borderWidth: 1, borderColor: 'blue', borderRadius: 8, padding: 8}}
        />
      </View>
      <View style={{width: '70%', height: '55', marginTop: 20}}>
        <Text style={{paddingLeft: 5}}>Fetch Data from API:</Text>
        <Button title="Fetch Data" onPress={fetchHello} />
      </View>
    </View>
  )
}

export default orderTaking

const styles = StyleSheet.create({})