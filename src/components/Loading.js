import React from 'react'
import Spinner from 'react-spinner-material';




const Loading = () => {
  return (
    <div className='spinner flex justify-center my-[8rem]'>
       <Spinner radius={120} color={"#ff6801"} stroke={5} visible={true}/>
    </div>
  )
}

export default Loading