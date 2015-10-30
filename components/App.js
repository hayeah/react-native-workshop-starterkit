import React from "react-native";
import Hello from "./Hello";

const {
  View,
  StyleSheet,
} = React;

export default React.createClass({
  render: function() {

    return (
      <View style={styles.container}>
        <Hello/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});


