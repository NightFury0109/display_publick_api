import React from 'react';

import { APIData } from '../../types';

interface RProps {
  item: APIData
}

const ResultItem: React.FC<RProps> = ({ item }: RProps) => {
  return (
    <div className='mb-3'>
      <a href={item.Link} target="_blank" rel="noreferrer" className='text-sm font-medium'>{item.API}</a>
      <p className='text-sm my-2'>{item.Description}</p>
      <hr className=' text-black' />
    </div>
  )
}

export default ResultItem;