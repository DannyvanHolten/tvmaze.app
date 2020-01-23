import React, { Component } from 'react';
import settings from '../settings';

const withShow = Content => {
  class Container extends Component {
    state = {
      showData: null,
    };

    componentDidMount() {
      const { match: { params } } = this.props;

      fetch(`${settings.tvMazeAPI}${settings.showsEndpoint}${params?.show}`)
        .then(res => res.json())
        .then(data => { this.setState({ showData: data }); })
        .catch(err => { console.error(err); });
    }

    render() {
      return (
        <Content
          {...{
            ...this.props,
            ...this.state,
          }}
        />
      );
    };
  }

  Container.displayName = `withShow(${Content.displayName || Content.name})`;

  return Container;
};

export default withShow;
