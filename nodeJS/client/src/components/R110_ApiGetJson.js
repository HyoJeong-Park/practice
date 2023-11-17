import React, { Component } from 'react';
// const axios = require('axios'); 메서드 에러
import axios from 'axios';

class R110_ApiGetJson extends Component {
  componentDidMount() {
    axios.get('/users', {
    })
    .then( response => {
      console.log("response.data.message :" + response.data.message);
    })
    // const body = await response.json();
    // console.log(body);
  }

  render() {
    return (
      <><h1>Call Node Api Post</h1></>
    )
  }
}

export default R110_ApiGetJson;