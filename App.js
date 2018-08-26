import React from 'react';
import { Image ,Button, View, Text,StyleSheet,Dimensions,ImageBackground,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height;


const VIDEOS =  
['https://storage.googleapis.com/avengervideo/spiderman.mp4',
'' ]
const VIDEOS2 =  
['https://storage.googleapis.com/avengervideo/Black_Panther___Marvels_Avengers__Secret_Wars___Disney_XD.mp4']

const VIDEOS3 =  
['https://storage.googleapis.com/avengervideo/Avengers_Age_Of_Ultron_-_Hulk_VS_Iron_Man_HD.mp4'
 ]


class HomeScreen extends React.Component {
  render() {
    return(
    <View>
 <ImageBackground source={{uri: 'https://lumiere-a.akamaihd.net/v1/images/usa_avengers_sb_bkgd8_1024_0ae5b001.jpeg?region=0%2C0%2C1024%2C576'}}
    style={{width: width, height: height,}}>
    <View>
  <TouchableOpacity style={styles.spiderman}onPress={() => this.props.navigation.navigate('Details')} >
   <Image source={{uri:
      'http://www.pngmart.com/files/2/Spider-Man-Transparent-Background.png'}}
   style={{width: 200, height:260,}} />
    </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={styles.panther}onPress={() => this.props.navigation.navigate('Details2')}>
      <Image source={{uri:
'https://vignette.wikia.nocookie.net/avengers-assemble/images/a/a0/Usa_avengers_herochi_blackpanther_r_e1954416.png/revision/latest?cb=20170417131405'}}
   style={{width: 180, height:270,}} />
    </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={styles.hulk}onPress={() => this.props.navigation.navigate('Details3')}>
      <Image source={{uri: 'https://i.pinimg.com/originals/56/b5/c3/56b5c311d7092f536d103e90024e1611.png'}}
   style={{width: 220, height: 360}} />
    </TouchableOpacity>
    </View>

  </ImageBackground>
  </View>
  );
 }
}

class spidermanscreen extends React.Component {
  state = {
		currentVideo: 0,
      mute: false,
      shouldPlay: true,
	}
 	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}
 	handleVolume = () => {
		this.setState(prevState => ({ 
			mute: !prevState.mute,
		}));
  }
  
  forwardButton = () => {
    if (this.state.currentVideo != VIDEOS.length-1) {
       this.setState({currentVideo: this.state.currentVideo + 1});
    } else {
       this.setState({currentVideo: 0});
    }
 }
 backButton = () => {
    if (this.state.currentVideo != 0) {
       this.setState({currentVideo: this.state.currentVideo - 1});
    } else {
       this.setState({currentVideo: VIDEOS.length-1});
    }
 }
  render() {
    const { width } = Dimensions.get('window');


    return (
      <ImageBackground
  source={{uri:'https://www.50-best.com/images/spiderman_wallpapers/blue_background.jpg'}}
	style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
           <View >
              <Text style={{ textAlign: 'center', fontSize: 18, 
                  fontWeight: 'bold' }}>welcome Spiderman</Text>
              <Video
                source= {{uri: VIDEOS[this.state.currentVideo]}}
                shouldPlay={this.state.shouldPlay}
                resizeMode="cover"
                style={{ width, height: 300 }}
                isMuted={this.state.mute}
              />
           <View style={styles.controlBar}>
             <MaterialIcons
               name={this.state.mute ? "volume-mute" : 
                    "volume-up"}
               size={45}
               color="white"
               onPress={this.handleVolume}
             />
             <MaterialIcons
               name={this.state.shouldPlay ? "pause" : 
                    "play-arrow"}
               size={45}
               color="white"
               onPress={this.handlePlayAndPause}
             />
          </View>
       </View>
       <View style={{flex: .25, flexDirection: 'row', 
            alignItems: 'center'}}>
         <MaterialIcons
            name={"navigate-before"}
            size={45}
            color="black"
            onPress={this.backButton}
         />
         <Text>Next Video</Text>
         <MaterialIcons
            name={"navigate-next"}
            size={45}
            color="black"
            onPress={this.forwardButton}
         />
      </View>
    </View>
    </ImageBackground>
  );
  }
}


class pantherscreen extends React.Component {
  state = {
		currentVideo: 0,
      mute: false,
      shouldPlay: true,
	}
 	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}
 	handleVolume = () => {
		this.setState(prevState => ({ 
			mute: !prevState.mute,
		}));
  }
  
  forwardButton = () => {
    if (this.state.currentVideo != VIDEOS.length-1) {
       this.setState({currentVideo: this.state.currentVideo + 1});
    } else {
       this.setState({currentVideo: 0});
    }
 }
 backButton = () => {
    if (this.state.currentVideo != 0) {
       this.setState({currentVideo: this.state.currentVideo - 1});
    } else {
       this.setState({currentVideo: VIDEOS.length-1});
    }
 }
  render() {
    const { width } = Dimensions.get('window');


    return (
      <ImageBackground
  source={{uri:'http://hdqwalls.com/wallpapers/black-panther-minimalism-4k-qk.jpg'}}
	style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
           <View >
              <Text style={{ textAlign: 'center', fontSize: 18, 
                  fontWeight: 'bold' }}>welcome BlackPanther</Text>
              <Video
                source= {{uri: VIDEOS2[this.state.currentVideo]}}
                shouldPlay={this.state.shouldPlay}
                resizeMode="cover"
                style={{ width, height: 300 }}
                isMuted={this.state.mute}
              />
           <View style={styles.controlBar}>
             <MaterialIcons
               name={this.state.mute ? "volume-mute" : 
                    "volume-up"}
               size={45}
               color="white"
               onPress={this.handleVolume}
             />
             <MaterialIcons
               name={this.state.shouldPlay ? "pause" : 
                    "play-arrow"}
               size={45}
               color="white"
               onPress={this.handlePlayAndPause}
             />
          </View>
       </View>
       <View style={{flex: .25, flexDirection: 'row', 
            alignItems: 'center'}}>
         <MaterialIcons
            name={"navigate-before"}
            size={45}
            color="black"
            onPress={this.backButton}
         />
         <Text>Next Video</Text>
         <MaterialIcons
            name={"navigate-next"}
            size={45}
            color="black"
            onPress={this.forwardButton}
         />
      </View>
    </View>
    </ImageBackground>
  );
  }
}


class hulkscreen extends React.Component {
  state = {
		currentVideo: 0,
      mute: false,
      shouldPlay: true,
	}
 	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}
 	handleVolume = () => {
		this.setState(prevState => ({ 
			mute: !prevState.mute,
		}));
  }
  
  forwardButton = () => {
    if (this.state.currentVideo != VIDEOS.length-1) {
       this.setState({currentVideo: this.state.currentVideo + 1});
    } else {
       this.setState({currentVideo: 0});
    }
 }
 backButton = () => {
    if (this.state.currentVideo != 0) {
       this.setState({currentVideo: this.state.currentVideo - 1});
    } else {
       this.setState({currentVideo: VIDEOS.length-1});
    }
 }
  render() {
    const { width } = Dimensions.get('window');


    return (
      <ImageBackground
  source={{uri:'http://getdrawings.com/image/hulk-logo-drawing-64.jpg'}}
	style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
           <View >
              <Text style={{ textAlign: 'center', fontSize: 18, 
                  fontWeight: 'bold' }}>welcome Spiderman</Text>
              <Video
                source= {{uri: VIDEOS3[this.state.currentVideo]}}
                shouldPlay={this.state.shouldPlay}
                resizeMode="cover"
                style={{ width, height: 300 }}
                isMuted={this.state.mute}
              />
           <View style={styles.controlBar}>
             <MaterialIcons
               name={this.state.mute ? "volume-mute" : 
                    "volume-up"}
               size={45}
               color="white"
               onPress={this.handleVolume}
             />
             <MaterialIcons
               name={this.state.shouldPlay ? "pause" : 
                    "play-arrow"}
               size={45}
               color="white"
               onPress={this.handlePlayAndPause}
             />
          </View>
       </View>
       <View style={{flex: .25, flexDirection: 'row', 
            alignItems: 'center'}}>
         <MaterialIcons
            name={"navigate-before"}
            size={45}
            color="black"
            onPress={this.backButton}
         />
         <Text>Next Video</Text>
         <MaterialIcons
            name={"navigate-next"}
            size={45}
            color="black"
            onPress={this.forwardButton}
         />
      </View>
    </View>
    </ImageBackground>
  );
  }
}




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: spidermanscreen,
    Details2: pantherscreen,
    Details3: hulkscreen,


  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
	},
	controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
		height: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  Spiderman: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 50,
    height: 100,
    bottom: -150,
    left: Dimensions.get('window').width -70,
    zIndex: 20,
    left:100,
    
    
    
  },
  panther: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 18,
    height: 250,
    bottom: 160,
    left: Dimensions.get('window').width -200,
    zIndex: 10,
  },
  hulk:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 50,
    height: 100,
    bottom: -100,
    left: Dimensions.get('window').width -70,
    zIndex: 20,
    left:100}
});