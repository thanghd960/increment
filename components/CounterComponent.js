import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text,
    View,
    Image,
    Alert,
    Platform
} from 'react-native';
import { name as appName } from '../app.json';
export default  class CounterComponent extends Component {
    constructor(props) {
        console.log('Init Couter Component');
        super(props);        
      }
    render() {

        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
                <Text style= {{ margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20}} >
                    Redux Saga {appName}
                </Text>
                <View style={{ height: 50, margin: 10, flexDirection: 'row'}}>
                    <Button 
                        containerStyle = {{ padding: 10, height: 45, borderRadius: 15, backgroundColor: 'darkviolet'}}
                        style = {{ fontSize: 18, color: 'white'}}
                        onPress = {() => {
                            this.props.onDecrement(1);
                        }}>
                        Decrement (-)
                    </Button>
                    <Button
                      containerStyle = {{ padding: 10, height: 45, borderRadius: 15, backgroundColor: 'darkviolet', marginLeft: 30}}
                      style = {{ fontSize: 18, color: 'white'}}
                      onPress = {() => {
                            this.props.onIncrement(1);
                      }}>
                        Increment (+)
                    </Button>
                </View>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17}}>
                    Count: { this.props.times }
                </Text>
            </View>
        )
    }
}
