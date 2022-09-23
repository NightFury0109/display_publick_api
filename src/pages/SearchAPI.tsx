import React from 'react';

import { useAppSelector } from '../redux/hooks';
import { APIData } from '../types';

import SearchForm from '../components/search-form/SearchForm';
import ResultItem from '../components/result-item/ResultItem';

const SearchAPI: React.FC = () => {
  const result: Array<APIData> = useAppSelector(state => state.apis.result);

  const search_result: any = result.map((item, index) => (
    <ResultItem key={index} item={item} />
  ));

  return (
    <div className='flex justify-center'>
      <div className='max-w-[500px] w-full sm:w-[40%] min-w-[300px]'>
        <div>
          <SearchForm />

          <p className='text-lg font-medium block my-3'>Results</p>

          {result && search_result}
        </div>
      </div>
    </div>
  )
}

export default SearchAPI;