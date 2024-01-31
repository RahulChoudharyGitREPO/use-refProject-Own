
import React, {useRef } from 'react';

function App() {


const videoRef = useRef()

  
 const handlePlay =() =>
 {
      videoRef.current.play()
 }

 const handlePause =() =>
 {
  videoRef.current.pause()
 }

  return (
    <>
      <div className='flex justify-center m-20 space-x-10'>
        <button className='p-5 bg-red-500 rounded-md'onClick={handlePlay} >
          play
        </button>
     
        <button  className='p-5 bg-green-500 rounded-md'onClick={handlePause}>Pause</button>

        
      </div>
      <div  className='flex justify-center m-20 space-x-10 '>
     
      <video width='520' height='260' ref={videoRef} >
    <source src='/video (2160p).mp4' type='video/mp4' />
    Your browser does not support the video tag.
  </video>

      </div>


    </>
  );
}

export default App;
