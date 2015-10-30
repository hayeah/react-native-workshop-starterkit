/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

import Hello from "./native/Hello";

var GithubIssues = React.createClass({
  render: function() {
    return (
      <Hello/>
    );
  }
});

AppRegistry.registerComponent('GithubIssues', () => GithubIssues);
