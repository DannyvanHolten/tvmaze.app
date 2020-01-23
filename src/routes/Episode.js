import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import withEpisode from '../services/withEpisode';
import UIButton from '../ui/Button';
import pt from 'prop-types';

const Episode = ({ episodeData, match: { params } }) => (
  <Fragment>
    <style
      type="text/css"
      dangerouslySetInnerHTML={{ __html: `:root{--bg-img: url('${episodeData?.image?.original}')}` }}
    />

    <main className="container min-h-screen relative z-10 pt-1/2-screen pb-8 lg:flex">
      <header className="mb-16 max-w-xl lg:w-1/2 pr-2">
        <Link to={`/${params?.show}/`} className="mb-2 text-sm flex items-center font-thin text-white no-underline">
          <img src="/images/arrow-left.svg" alt="" height="16" width="16" className="mr-2" />
          <span>back to stranger things</span>
        </Link>

        <h1 className="text-4xl sm:text-left font-medium mb-8">{episodeData?.name}</h1>
        <div className="leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: episodeData?.summary }} />
        <UIButton>play episode</UIButton>
      </header>
    </main>
  </Fragment>
);

Episode.propTypes = {
  match: pt.shape({
    params: pt.shape({
      show: pt.string,
      episode: pt.string,
    }).isRequired,
  }).isRequired,
  episodeData: pt.shape({
    name: pt.string.isRequired,
    summary: pt.string.isRequired,
    image: pt.shape({
      original: pt.string,
    }),
  }),
};

export default withRouter(withEpisode(Episode));
