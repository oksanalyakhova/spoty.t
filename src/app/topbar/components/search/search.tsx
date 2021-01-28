import React, {FunctionComponent} from 'react';
import {IoSearchOutline} from 'react-icons/io5';
import {Formik} from 'formik';
import classNames from 'classnames';

import './search.sass';

interface SearchProps {
  className?: string;
}

const Search: FunctionComponent<SearchProps> = ({
  className,
}): JSX.Element => {
  const classes = classNames(className, 'search')

  return (
    <Formik
      initialValues={{search: ''}}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <div className={classes}>
          <form className="search__form search-form" onSubmit={handleSubmit}>
            <div className="search-form__input-wrap input-wrap">
              <input
                type="text"
                name="search"
                placeholder="Search"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.search}
              />
              <button type="submit"
                      className="search-form__button button button-search"
                      disabled={isSubmitting}>
                <IoSearchOutline/>
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  )
};

export default Search;
