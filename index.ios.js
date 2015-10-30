/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const React = require('react-native');

const {
  AppRegistry,
  StatusBarIOS,
} = React;

StatusBarIOS.setHidden(true);

import App from "./components/App";

AppRegistry.registerComponent('GithubIssues', () => App);
