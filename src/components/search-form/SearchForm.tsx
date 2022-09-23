import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setResult } from '../../redux/actions/apis';
import { APIData } from '../../types';

const SearchForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const data: Array<APIData> = useAppSelector(state => state.apis.data);

  const [api_name, setAPIName] = useState("");

  const onSearch = () => {
    let buffer: Array<object> = [];
    let count: number = 0;

    for (let i = 0; i < data.length; i++) {
      let isExist: number = data[i].API.search(api_name);

      if (count === 5) break;
      else if (isExist !== -1 && data[i].Cors === "yes" && data[i].Description.length < 100) {
        buffer.push(data[i]);
        count++;
      }
    }

    dispatch(setResult(buffer));
  }

  const handleChange = (e: any) => {
    setAPIName(e.target.value);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div>
      <label htmlFor='api_name' className='block text-xl font-bold mb-5'>Search for a Public API</label>
      <input
        type="text"
        placeholder='Enter API name'
        name='api_name'
        className='w-full rounded-md p-2 border-2'
        value={api_name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <div className='flex justify-end'>
        <button type='button' className='py-3 px-7 bg-green-400 rounded-md mt-3' onClick={onSearch}>Search</button>
      </div>
    </div>
  )
}

export default SearchForm;