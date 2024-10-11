import React from 'react';
import VerticalScroll from './VerticalScroll';

const DrawerScrollComponent = () => {
  return (
    <>
    
      <div className=' w-full h-screen bg-cover bg-center bg-transparent flex justify-center items-end'>
        
        <div className='z-10 w-[80%] h-[120vh]  overflow-auto bg-transparent rounded-[10px]'>
          <div className='h-[600vh] w-full mt-[80vh] bg-white'>
            <VerticalScroll></VerticalScroll>
          </div>
        </div>
      </div>
    
    </>
    
  );
};

export default DrawerScrollComponent;


// {/* <div
//       className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-screen overflow-y-auto p-4"
//       style={{ top: '15vh' }}
//     >
//       <div className="flex flex-col h-full justify-center">
//         <div className="overflow-y-auto h-full">
//           {/* Your scrollable content here */}
//           <p>Scrollable content...</p>
//           <p>Scrollable content...</p>
//           <p>Scrollable content...</p>
//           {/* ... */}
//         </div>
//         <div className="h-6vh bg-gray-200" />
//       </div>
//     </div> */}