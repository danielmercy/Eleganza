import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Container} from "./components";
import Authentication from "./screens/Authenticationon";
import Navigation from './navigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  // handleResourcesAsync = async () => {
  //   // we're caching all the images
  //   // for better performance on the app

  //   const cacheImages = images.map(image => {
  //     return Asset.fromModule(image).downloadAsync();
  //   });

  //   return Promise.all(cacheImages);
  // }

  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this.handleResourcesAsync}
    //       onError={error => console.warn(error)}
    //       onFinish={() => this.setState({ isLoadingComplete: true })}
    //     />
    //   )
    // }

    return (
      <View>
        <Authentication></Authentication>
      </View>
    );
  }
}
