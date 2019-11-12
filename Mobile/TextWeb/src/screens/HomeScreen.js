import React, {Component} from 'react';
import {Text,StyleSheet, View, Button, TouchableOpacity, Image} from 'react-native'; 
class HomeScreen extends Component {
	render() {
		return (
			<View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Maps')} style={styles.button}>
					    <Image
					     style = {styles.image}
					     source={require('../../assets/maps.jpg')}
					    />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Review')} style={styles.button}>
    <Image
     style = {styles.image}
     source={require('../../assets/Yelp.png')}
    />
	</TouchableOpacity>
    
	<TouchableOpacity onPress={() => this.props.navigation.navigate('News')} style={styles.button}>
    <Image
     style = {styles.image}
     source={require('../../assets/Unknown.jpeg')}
    />
	</TouchableOpacity>
	
	</View>

	<View style= {styles.buttonContainer}>
	<TouchableOpacity onPress={() => this.props.navigation.navigate('Weather')} style={styles.button}>
    <Image
     style = {styles.image}
     source={require('../../assets/cloud.png')}
    />
	</TouchableOpacity>
	<TouchableOpacity onPress={() => this.props.navigation.navigate('Dictionary')} style={styles.button}>
    <Image
     style = {styles.image}
     source={require('../../assets/book.png')}
    />
	</TouchableOpacity>

	<TouchableOpacity onPress={() => this.props.navigation.navigate('Wiki')} style={styles.button}>
    <Image
     style = {styles.image}
     source={require('../../assets/wiki.png')}
    />
	</TouchableOpacity>

	</View>

	</View>
		);
	}
}


const styles = StyleSheet.create({
	buttonContainer: {
		
		height: 100,
		flexDirection: 'row',
		justifyContent: 'space-around'

	},
	button: {
		width: 100,
		height: 100,
		margin: 5
	},
  text: {
    fontSize: 30
  },
  image: {
  	width:100,
  	height:100,
  	
  },
  container: {
    position: 'absolute',
        bottom: -150,
    width: 230,
    height: 100,
    alignItems: 'center'
  }
  
});

export default HomeScreen;