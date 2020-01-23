import React, { Component } from 'react';
import settings from '../settings';

const withEpisode = Content => {
  class Container extends Component {
    state = {
      episodeData: null,
    };

    componentDidMount() {
      const { match: { params } } = this.props;

      fetch(`${settings.tvMazeAPI}${settings.episodeEndpoint}${params?.episode}`)
        .then(res => res.json())
        .then(data => { this.setState({ episodeData: data }); })
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

  Container.displayName = `withEpisode(${Content.displayName || Content.name})`;

  return Container;
};

export default withEpisode;
