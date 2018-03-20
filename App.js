import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
//import MenuItem from '.src/comp/MenuItem';
export default class App extends React.Component {
  render() {
      return(
        <ImageBackground
          source={require('./src/comp/Dino.jpg')}
          style={styles.container}>

          <View style={styles.overlayContainer}>

              <View style={styles.header}>
                  <Text style={styles.textHeader}>H I M E</Text>
              </View>
              <View style={styles.sleding}>
              <Image
                    source={require('./src/images/rem2.jpg')}
                  style={styles.g1} />
              </View>
                <View style={styles.menuContainer}>

                      <View style={styles.menuItem}>
                          <Image
                                source={require('./src/images/t1.png')}
                              style={styles.Image} />
                      </View>
                      <View style={styles.menuItem}>
                          <Image
                                source={require('./src/images/t2.png')}
                              style={styles.Image} />
                      </View>
                      <View style={styles.menuItem}>
                          <Image
                                source={require('./src/images/t3.png')}
                              style={styles.Image} />
                      </View>
                      <View style={styles.menuItem}>
                          <Image
                                source={require('./src/images/t4.png')}
                              style={styles.Image} />
                      </View>
                      <View style={styles.menuItem}>
                          <Image
                                source={require('./src/images/t5.png')}
                              style={styles.Image} />
                      </View>
                      <View style={styles.menuItem}>
                          <Image
                                source={require('./src/images/t6.png')}
                              style={styles.Image} />
                      </View>

                </View>


          </View>
          <View style={styles.footer}>
              <Text style={styles.textFooter}>F O T E R</Text>
          </View>

        </ImageBackground>
      );

  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%',
  },
  overlayContainer: {
      flex: 1,
      backgroundColor: 'rgba(1,1,1, .35)'
  },
  header:{
//    backgroundColor: 'rgba(255, 255, 255, .100)',
      height: '15%',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },
  textHeader: {
      fontSize: 28 ,
      color: '#fff',
      borderWidth: 2,
      borderColor: '#fff',
      padding: 20,
      paddingLeft: 80,
      paddingRight: 80,
      backgroundColor: 'rgba(255, 255, 255, .1)'
  },
  footer:{
    backgroundColor:'black',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },
  textFooter: {
    fontSize: 28 ,
    color: '#fff',
  },
  menuContainer: {
      margin: 30,
      height: '30%',
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  menuItem: {
    width: '33.333333%',
    height: '60%',
    padding: 30,
    //backgroundColor: '#ccc',
    //borderColor: '#000',
    //borderWidth: 2,
  },
  Image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    borderColor: '#fff',
    //borderWidth: 1,
  },
  sleding: {
      marginTop: 30,

  },
  g1: {
    width: '100%',
    height: 250,
    opacity: 0.9,
    borderColor: '#fff',
    borderWidth: 3,
  }
});
