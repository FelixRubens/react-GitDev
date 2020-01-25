import React, {useState} from 'react';
import axios from 'axios'
import { Text, TouchableOpacity, StyleSheet, TextInput, View, KeyboardAvoidingView, ProgressBarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function SearchScreen({navigation}) {
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)
  
  async function handleSearch(){
    setSearching(true)
    try{
        const userData = await axios.get(`https://api.github.com/users/${search}`)
        const userRepos = await axios.get(`https://api.github.com/users/${search}/repos`)
        const userFollower = await axios.get(`https://api.github.com/users/${search}/followers`)
        setSearching(false)
        setSearch('')
        navigation.navigate('tabs', {userData: userData.data, userFollower: userFollower.data, userRepos: userRepos.data})
        return
    }catch(e){
        console.log(e)
        setSearching(false)
        setSearch('')
        return    
    }
  }
  return (
    <>  
        <View style={searchStyles.container}>
            <KeyboardAvoidingView style={searchStyles.border} behavior='padding' enabled keyboardVerticalOffset={-150}>
                <Text style={searchStyles.logo}>GitDev</Text>
                <Icon name='code' style={searchStyles.icon} size={70} color={'#f53649'} />       
                {!searching && (
                    <View style={searchStyles.inputContainer}>
                        <Text style={searchStyles.inputText}>Buscar Dev:</Text>
                        <TextInput
                            style={searchStyles.input}
                            placeholder={'Digite o username do Github..'}
                            placeholderTextColor='rgba(255, 255, 255, 0.2)'
                            autoCapitalize='none'
                            onChangeText={setSearch}
                            value={search || ''}
                            selectionColor='#f53649'
                            numberOfLines= {1}
                        />
                        <TouchableOpacity
                            style={searchStyles.button}
                            onPress={() => {
                                handleSearch()
                            }}
                        >
                            <Text style={searchStyles.buttonText}>Buscar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                    {searching && (
                        <ProgressBarAndroid color="#f53649" style={{paddingTop: 20, marginTop: 100}}/>
                    )}
            </KeyboardAvoidingView>
        </View>      
    </>
  );
}


const searchStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f53649',
        width: '100%',    
    },

    border: {
        flex: 1,
        backgroundColor: '#232324',
        borderBottomRightRadius: 70,
        width: '100%',
        borderWidth: 2,
        borderColor: '#333'
    },
    logo: {
        fontSize: 38,
        position: 'absolute',
        top: 20,
        left: 20,
        color: '#f53649',
        fontWeight: 'bold'
    },

    icon: {
        alignSelf: 'center',
        marginTop: 120,
    },  
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -160,
    },
    inputText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#f53649',
        marginBottom: 5
    },
    input: {
        alignItems: 'center',
        height: 50,
        width: 300,
        backgroundColor: "#222",
        borderWidth: 2,
        borderColor: '#f53649',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 10,
        paddingHorizontal: 30,
        color: '#f53649',
        fontWeight: 'bold',
        fontSize: 18
    },

    button: {
        height: 35,
        width: 275,
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: '#f53649',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',

    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})