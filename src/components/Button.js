import React from 'react'

const Button = ({clickFunction, custom, content, buttonType}) => {
  return (
       <button onClick={clickFunction}
       className={`flex mx-auto border-2 border-[#ff6801] rounded-2xl px-2 py-1 hover:bg-[#ff6801] ${custom}`}>
            {content}
        </button> 
  )
}

export default Button