import React, {Component} from 'react';
import SendSMS from 'react-native-sms';
import Communications from 'react-native-communications';
import * as SMS from 'expo-sms'
import {Text,StyleSheet, View, Button, TextInput, TouchableOpacity, Linking} from 'react-native';

class NewsScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      keyword: '',
      category: '',
      country: ''
    };
  }

  render() {
	return (<View>
      <TextInput
          style = {styles.input}
          placeholder = "Enter your keyword"
          returnKeyType = {"next"}
          onChangeText = {(text) => this.setState({keyword:text})}
          value={this.state.keyword}
        />
     <TextInput
          style = {styles.input}
          placeholder = "Enter your news category"
          returnKeyType = {"next"}
          onChangeText = {(text) => this.setState({category:text})}
          value={this.state.category}
        />
       <TextInput
          style = {styles.input}
          placeholder = "Enter your country"
          returnKeyType = {"next"}
          onChangeText = {(text) => this.setState({country:text})}
          value={this.state.country}
        />
        <TouchableOpacity style = {styles.countContainer}
          onPress={() => this.send()}>
        <Text style = {styles.text}>
        Send
      </Text>

      </TouchableOpacity>
      
    </View>);
}


  // SendSMS.send({
  //   body: "aaa",
  //   recipients: ['18678770189'],
  //   successTypes: ['sent', 'queued'],
  //   allowSendWithoutReadPermission: true
  // }, (completed, cancelled, error) => {

  //   console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

  // });


async send () {
    Linking.openURL("sms:18678770189&body="+'news, '+this.state.keyword+', '+this.state.category+', '+this.state.country);
    // const status = await SMS.sendSMSAsync(
    //   '18678770189', 
    //   'news,'+this.state.keyword+', '+this.state.country+', '+this.state.country
    // );

    // console.log(status);
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

export default NewsScreen;