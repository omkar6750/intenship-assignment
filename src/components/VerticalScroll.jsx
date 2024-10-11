import React, { useState, useEffect } from 'react';
import GroceryList from './GroceryList';
import History from './History';
import Media from './Media';

export default function VerticalScroll() {
  return (
    <>
      
      <div className='mt-[80vh] w-full rounded-t-lg h-[600vh] '>
            <History></History>
            <Media></Media>
      </div>

        
        

    </>
  )
}



