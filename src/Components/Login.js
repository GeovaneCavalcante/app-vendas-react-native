import React, { Component } from 'react';
import { 
    TextInput,
    View, 
    TouchableOpacity, 
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
        
            <View style={styles.container}>
                <KeyboardAwareScrollView >
                    <View style={styles.row}>
                        <Text  style={styles.textTitle}>
                            Sing in
                        </Text>
                        <TextInput
                            placeholder = "Usuário"
                            style={styles.input}
                            onChangeText={(text) => this.setState({text})}
                        />
                        <TextInput
                            placeholder = "Senha"
                            style={styles.input}
                            onChangeText={(text) => this.setState({text})}
                        />

                        <TouchableOpacity 
                            style={styles.buttonLogin}
                        >
                            <Text  style={styles.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>   
                </KeyboardAwareScrollView>
            </View>
   
         
    );
  }
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eeeeee',
        flex: 1,
    },
    row:{
        width: 360, height: 450,
        padding: 20,
        marginTop: 100
    },
    input:{
        height: 40,
        borderColor: '#d5d4da',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    buttonLogin:{
        marginTop: 30,
        height: 50,
        backgroundColor: '#2d3647',
        borderRadius: 47,
        borderColor: '#d6d7da'
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        paddingTop: 12,
        fontSize: 15,
    },
    textTitle:{
        color: '#282828',
        fontSize: 22,
        marginBottom: 40
    }
})