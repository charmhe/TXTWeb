import React, {Component} from 'react';
import SendSMS from 'react-native-sms';
import Communications from 'react-native-communications';
import * as SMS from 'expo-sms'
import {Text,StyleSheet, View, Button, TextInput, TouchableOpacity, Linking} from 'react-native';

class ReviewScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      restaurant: '',
      location: ''
    };
  }

  render() {
	return (<View>
      <TextInput
          style = {styles.input}
          placeholder = "Enter your restaurant"
          returnKeyType = {"next"}
          onChangeText = {(text) => this.setState({restaurant:text})}
          value={this.state.word}
        />
        <TextInput
          style = {styles.input}
          placeholder = "Enter your location"
          returnKeyType = {"next"}
          onChangeText = {(text) => this.setState({location:text})}
          value={this.state.word}
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
    Linking.openURL("sms:18678770189&body="+'yelp,'+this.state.restaurant+', '+this.state.location);

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

export default ReviewScreen;