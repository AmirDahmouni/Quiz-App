
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated , TextInput} from 'react-native'
import { COLORS, SIZES } from '../constants';
import React, {Component, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios"


 const Singup = ({ navigation }) => {  

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [repassword,setrepassword]=useState("")

    const handleSignup = (navigation) => {
        
       if(name!=="" && email!==""   && password===repassword && password.length>=8)
       {
         axios.post("http://localhost:3900/api/users/register",{name,email,password,repassword}).
         then(navigation.navigate("Login")).catch(err=>console.log(err.message)) 
       }
    }

    

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: COLORS.background,
               position:'relative'
           }}>
               <View style={{marginVertical: 40}}>
                <Text style={{
                    color: COLORS.accent,
                    fontSize: 40,
                    textAlign:"center"
                }}>SingUp</Text>
            </View>
            
            
        
            <TextInput style={{
            borderWidth: 3, 
            borderColor: COLORS.secondary+'40',
            backgroundColor: COLORS.secondary+'20',
            height: 60, borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10,
            fontSize: 20, 
            color:COLORS.white
            
            }}
            
            onChangeText={(text)=>setName(text)}
             
             placeholder="name"
             keyboardType="default"/>


            <TextInput style={{
            borderWidth: 3, 
            borderColor: COLORS.secondary+'40',
            backgroundColor: COLORS.secondary+'20',
            height: 60, borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10,
            fontSize: 20, 
            color:COLORS.white
            
            }}
            onChangeText={(text)=>setEmail(text)}
             value={email}
             placeholder="email"
             keyboardType="email-address"/>


            <TextInput style={{
          borderWidth: 3, 
          borderColor: COLORS.secondary+'40',
          backgroundColor: COLORS.secondary+'20',
          height: 60, borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 10,
          fontSize: 20, 
          color:COLORS.white
          
          }}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
           value={password}
           placeholder="password"
           keyboardType="default"
            />


        <TextInput style={{
          borderWidth: 3, 
          borderColor: COLORS.secondary+'40',
          backgroundColor: COLORS.secondary+'20',
          height: 60, borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 10,
          fontSize: 20, 
          color:COLORS.white
          
          }}
          secureTextEntry={true}
          onChangeText={text => setrepassword(text)}
           value={repassword}
           placeholder="confirm password"
           keyboardType="default"
        />      
                
        <TouchableOpacity
            onPress={()=>handleSignup(navigation)}
            style={{marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 10}}>
            <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Singup</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>navigation.navigate("Login")}
            style={{marginTop: 20, width: '100%', backgroundColor: COLORS.error, padding: 20, borderRadius: 10}}>
            <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Singin</Text>
        </TouchableOpacity>
 
    
        <Image
            source={require('../assets/images/DottedBG.png')}
                 style={{
                     width: SIZES.width,
                     height: 130,
                     zIndex: -1,
                     position: 'absolute',
                     bottom: 0,
                     left: 0,
                     right: 0,
                     opacity: 0.5
                 }}
            resizeMode={'contain'}
           />
 
           </View>
        </SafeAreaView>
    )


}
export default Singup