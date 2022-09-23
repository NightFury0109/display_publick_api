import React from 'react';

import { useAppSelector } from '../redux/hooks';

import SearchForm from '../components/search-form/SearchForm';
import ResultItem from '../components/result-item/ResultItem';

const SearchAPI: React.FC = () => {
  const result = useAppSelector(state => state.apis.result);

  return (
    <div className='flex justify-center'>
      <div className='w-full sm:w-1/3'>
        <div>
          <SearchForm />

          <p className='text-lg font-medium block my-3'>Results</p>

          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </div>
      </div>
    </div>
  )
}

export default SearchAPI;