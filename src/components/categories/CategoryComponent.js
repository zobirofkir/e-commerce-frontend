import React from 'react';

const CategoryComponent = () => {
  const categories = [
    { id: 'category1', name: 'Category 1' },
    { id: 'category2', name: 'Category 2' },
    { id: 'category3', name: 'Category 3' },
    { id: 'category4', name: 'Category 4' },
    { id: 'category5', name: 'Category 5' },
    { id: 'category6', name: 'Category 6' },
    { id: 'category7', name: 'Category 7' },
    { id: 'category8', name: 'Category 8' },
    { id: 'category9', name: 'Category 9' },
    { id: 'category10', name: 'Category 10' },
    { id: 'category11', name: 'Category 11' },
    { id: 'category12', name: 'Category 12' },
    { id: 'category13', name: 'Category 13' },
    { id: 'category14', name: 'Category 14' },
    { id: 'category15', name: 'Category 15' },
    { id: 'category16', name: 'Category 16' },
    { id: 'category17', name: 'Category 17' },
    { id: 'category18', name: 'Category 18' },
    { id: 'category19', name: 'Category 19' },
    { id: 'category20', name: 'Category 20' },
  ];

  return (
    <div className='bg-white text-black mt-20 hidden md:block rounded-md'>
      <div className='flex overflow-x-auto p-2'>
        {categories.map(category => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className='px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white whitespace-nowrap'
            aria-label={category.name}
          >
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
