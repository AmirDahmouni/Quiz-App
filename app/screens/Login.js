import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated , TextInput} from 'react-native'
import { COLORS, SIZES } from '../constants';
import React, {Component, useState} from 'react';
import GlobalContext from '../GlobalContext';
import axios from "axios"
 const Login = ({navigation}) => {  

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [showErrorLogin,setshowErrorLogin]=useState(false)

    const context = React.useContext(GlobalContext)

    const handleSigin = (navigation) => {
        if(email!==""  && password!=="")
        {
              
          axios.post("http://localhost:3900/api/users/signin",{email,password}).
          then((response)=>
          {
              if(response.status==200) 
              {
                context.setUser(response.data)
                navigation.navigate("Quiz") 
              }
          })
          .catch(err=>{
            setshowErrorLogin(true)
          })
          
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
                }}>SingIn</Text>
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
            onChangeText={(text)=>setEmail(text)}
             
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
           onChangeText={(text)=>setPassword(text)}
           value={password}
           placeholder="password"
           keyboardType="default"
            />
               
 
 
                
               <TouchableOpacity
                onPress={()=>handleSigin(navigation)}
                style={{
                    alignSelf:"center",
                    marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 10
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>SingIn</Text>
                </TouchableOpacity>

            
                <TouchableOpacity
            onPress={() => navigation.navigate('Singup')}
            style={{
                alignSelf:"center",
                marginTop: 20, width: '100%', backgroundColor: COLORS.error, padding: 20, borderRadius: 10
            }}>
                <Text style={{fontSize: 18, color: COLORS.white, textAlign: 'center'}}>SingUp</Text>
            </TouchableOpacity>
              
              

            <Modal
               animationType="slide"
               transparent={true}
               visible={showErrorLogin}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 40, fontWeight: 'bold',textAlign:"center"}}>Oops erreur!</Text>
                           <TouchableOpacity
                           onPress={()=>setshowErrorLogin(false)}
                           style={{backgroundColor: COLORS.accent,padding: 20, width: '100%', borderRadius: 20}}>
                               <Text style={{textAlign: 'center', color: COLORS.white, fontSize: 20}}>Retry</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </Modal>
 
               
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
export default Login