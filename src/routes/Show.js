import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import pt from 'prop-types';
import withShow from '../services/withShow';

const Show = ({ showData, match: { params } }) => (
  <Fragment>
    <style
      type="text/css"
      dangerouslySetInnerHTML={{ __html: `:root{--bg-img: url('${showData?.image?.original}')}` }}
    />

    <main className="container min-h-screen relative z-10 pt-1/2-screen pb-8 lg:flex">
      <header className="mb-16 max-w-xl lg:w-1/2 pr-2">
        <Link to="/" className="mb-2 text-sm flex items-center font-thin text-white no-underline">
          <img src="/images/arrow-left.svg" alt="" height="16" width="16" className="mr-2" />
          <span>back to browse</span>
        </Link>

        <h1 className="text-4xl sm:text-left font-medium mb-8">{showData?.name}</h1>
        <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: showData?.summary }} />
      </header>

      <section className="lg:w-1/2 max-w-xl pl-2">
        <ul className="rounded-lg overflow-hidden bg-gray-900">
          {(showData?._embedded?.episodes || []).map((episode, index) => (
            <li key={episode?.id} className="even:bg-gray-800">
              <Link
                to={`/${params?.show}/${episode?.id}/`}
                className="p-4 block text-white no-underline hover:text-white hover:bg-gray-600 flex items-center"
              >
                <figure className="mr-4 w-16 h-16 block flex-none">
                  {episode?.image?.medium && (
                    <img className="object-cover rounded-full w-16 h-16" src={episode.image.medium} alt="" />
                  )}
                </figure>
                <div>
                  <div className="mb-2">
                    <span className="text-xs px-2 py-1 rounded-lg inline-block mr-2 bg-primary-500">
                      season {episode?.season}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-lg bg-gray-500 inline-block">
                      episode {episode?.number}
                    </span>
                  </div>

                  <h2>{episode?.name}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </Fragment>
);

Show.propTypes = {
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
    _embedded: pt.shape({
      episodes: pt.arrayOf(pt.shape({
        id: pt.number.isRequired,
        name: pt.string.isRequired,
        image: pt.shape({
          medium: pt.string,
        }),
      })),
    }),
  }),
};

export default withRouter(withShow(Show));
