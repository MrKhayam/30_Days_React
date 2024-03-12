import React from 'react';

const Button = ({txt,setFn,val}) => {
    const handleClick = (e) => {
        e.target.innerHTML != 'C' && e.target.innerHTML != '=' ? setFn((prev) => prev + txt ) : null
        e.target.innerHTML === 'C' ? setFn('') : null
        e.target.innerHTML === '=' ? setFn(eval(val)) : null
    }
  return (
    <>
      <button
      onClick={handleClick}
       className="btn py-4 px-6 rounded shadow-md bg-white">{txt}</button>
    </>
  );
}

export default Button;
