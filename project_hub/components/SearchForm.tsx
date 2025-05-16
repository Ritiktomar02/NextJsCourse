import React from 'react'
import Form from  'next/form';
import { Search } from 'lucide-react';

const SearchForm = ({query} : {query?: string}) => {
  return (
<Form
action="/"
scroll= {true}
className='search-form relative'
>

    <input type="text" name='query'  defaultValue="" className='search-input' placeholder='Search Projects'/>

    <div className='flex gap-2'>

        {query && (
            <p>Reset</p>
        )}

<button type='submit' className='search-btn text-white'>

    <Search className='size-5'/>
</button>

    </div>
    </Form>
  )
}

export default SearchForm