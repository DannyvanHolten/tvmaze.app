import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import pt from 'prop-types';
import UIInput from '../ui/Input';
import UIButton from '../ui/Button';
import slugify from '../utils/slugify';

const Home = ({ history: { push } }) => {
  const [term, setTerm] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    push(`/${slugify(term)}/`);
  };

  return (
    <main
      className="container min-h-screen relative z-10 flex flex-col justify-end align-middle md:justify-center max-w-2xl"
    >
      <aside className="mb-2 text-sm md:order-last md:ml-4 md:mb-0">
        example searches: <Link to="/powerpuff-girls/">powerpuff girls</Link>, <Link to="/stranger-things/">stranger
        things</Link>, <Link to="/big-bang-theory">big bang theory</Link>
      </aside>

      <form
        onSubmit={onSubmit}
        className="mb-8 md:mb-2 flex flex-col md:flex-row"
      >
        <UIInput
          onChange={setTerm}
          autoFocus
          className="mb-2 md:mb-0 md:mr-4"
          name="term"
          placeholder="Search for series by name"
        />

        <UIButton to={`/${slugify(term)}/`} className="flex items-center flex-none justify-center">
          <img alt="" src="/images/search.svg" height="16" width="16" className="mr-2" />
          <span>search</span>
        </UIButton>
      </form>

    </main>
  );
};

Home.propTypes = {
  history: pt.shape({
    push: pt.func.isRequired,
  }).isRequired,
};

export default withRouter(Home);
