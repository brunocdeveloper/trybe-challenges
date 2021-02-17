import React, { Component } from 'react';

export default class Solution extends Component {
  render() {
    const { match: { params: { contentDay } } } = this.props;
    return (
    <h1>
        Solução do exercício do dia
        { contentDay }
    </h1>
    );
  }
}