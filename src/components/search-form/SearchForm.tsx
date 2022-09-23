import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const SearchForm: React.FC = () => {
  const [api_name, setAPIName] = useState();

  const onSearch = () => {

  }

  const handleChange = (e: any) => {
    setAPIName(e.target.value);
  }

  return (
    <form className='' onSubmit={onSearch}>
      <label htmlFor='api_name' className='block text-xl font-bold mb-5'>Search for a Public API</label>
      <input
        type="text"
        placeholder='Enter API name'
        name='api_name'
        className='w-full rounded-md p-2 border-2'
        value={api_name}
        onChange={handleChange}
      />

      <div className='flex justify-end'>
        <button type='submit' className='py-3 px-7 bg-green-400 rounded-md mt-3'>Search</button>
      </div>
    </form>
  )
}

export default SearchForm;