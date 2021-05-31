import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import FileUpload from './FileUpload';
import Home from './Home';
import Generate from './Generate';




export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route exact path='/Home' component={Home} /> 
            <Route exact path='/FileUpload' component={FileUpload} /> 
            <Route exact path='/Generate' component={Generate} /> 

        </Layout>
    );
  }
}
