import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './Courses';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const client = new ApolloClient({
  uri:'https://zr74m9z9n7.lp.gql.zone/graphql'
})


const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="">Frontend Web Developer - Courses</a>
      </nav>
      <div>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
