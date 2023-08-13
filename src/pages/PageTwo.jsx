import React, { useState } from 'react'
const PageTwo = () => {
  const list = [{
    "city": "khushab",
    "logo": "😍"
  },
  {
    "city": "Lahore",
    "logo": "😎"
  },
  {
    "city": "Lahore",
    "logo": "😉"
  },
  {
    "city": "Lahore",
    "logo": "👀"
  },
  {
    "city": "Lahore",
    "logo": "🐱‍🏍"
  },
  {
    "city": "Lahore",
    "logo": "🚇"
  },
  ]
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className='grid lg:grid-cols-2 gap-1 m-2'>
        <div className='bg-blue-300 p-4 h-96 mt-5 rounded-lg shadow-lg'>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
          <input type="text" id="first_name" className="py-10 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discription" required />
        </div>
        <div className='relative flex flex-col justify-start item-center bg-blue-300 p-4 mt-5 rounded-lg shadow-lg'>
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dropdown</label>
          <button onClick={() => setIsOpen(prev => !prev)} className='bg-blue-400 p-4 w-full flex items-centerjustify-btween font-bold text-lg rounded-lg tracking-wider'>
            Dropdown {!isOpen ? (<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 mt-1 font-bold">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            )}
          </button>
          {isOpen && (<div className="bg-blue-400 absolute rounded-lg bottom-4 p-2 w-50 flex flex-col items-start px-2 w-96">
            {list.map((item, i) => (
              <div className='flex w-full justify-between hover:bg-blue-300 hover:rounded-md p-2'>
                <h3>{item.city}</h3> <h3>{item.logo}</h3>
                {/* <p className='w-full p-1 m-1 gap-1 hover:bg-blue-300 '>{item.city}<span>{item.logo}</span></p> */}
              </div>
            ))}
          </div>)}
        </div>

      </div>
    </div>
  )
}

export default PageTwo