import React, {Component} from 'react';
import SendSMS from 'react-native-sms';
import Communications from 'react-native-communications';
import * as SMS from 'expo-sms'
import {Text,StyleSheet, View, Button, TextInput, TouchableOpacity, Linking} from 'react-native';

class WeatherScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      city: '',
      code: ''
    };
  }

  render() {
	return (<View>
      <TextInput
          style = {styles.input}
          placeholder = "Enter your city"
          returnKeyType = {"next"}
          onChangeText = {(text) => this.setState({city:text})}
          value={this.state.city}
        />
     <TextInput
          style = {styles.input}
          placeholder = "Enter your country code (i.e. Canada = Ca)"
          returnKeyType = {"next"}
          onChangeText = {(text) => this.setState({code:text})}
          value={this.state.code}
        />
        <TouchableOpacity style = {styles.countContainer}
          onPress={() => this.send()}>
        <Text style = {styles.text}>
        Send
      </Text>

      </TouchableOpacity>
      
    </View>);
}

  message() {

  SendSMS.send({
    body: "aaa",
    recipients: ['18678770189'],
    successTypes: ['sent', 'queued'],
    allowSendWithoutReadPermission: true
  }, (completed, cancelled, error) => {

    console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

  });
}

async send () {
    Linking.openURL("sms:18678770189&body="+'weather,'+this.state.city+', '+this.state.code);

};

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#33cc33'
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  input: {
    height: 50, 
    fontSize: 24,
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 10, 
    marginVertical: 10,
    marginHorizontal: 5
  }
});

export default WeatherScreen;