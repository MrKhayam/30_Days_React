import React, {useState} from 'react';
import Button from './components/Button';

const App = () => {
  const [inpVal, setInpVal] = useState('');
  // const [num, setNum] = useState(null);
  const handleChange = (e) => {
    setInpVal(e.target.value)
  }
  const btn = [
    'C',
    1,
    2,
    '+',
    3,
    4,
    '-',
    5,
    6,
    '*',
    7,
    8,
    '/',
    '=',
    9,
    0,
    '.'
  ];
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
        <div className="calc gap-5 rounded h-auto p-5 flex flex-col justify-center w-80 bg-[#dadada] shadow-sm">
        <input type="text"
        readOnly
        value={inpVal}
        onChange={handleChange}
          className='rounded h-10 p-2' />
        <div className="btns justify-center items-center w-[90%] m-auto h-auto flex flex-wrap gap-4">
        {btn.map((button,index) => <Button val = {inpVal} setFn={setInpVal} txt = {button} key={index}/>)}
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
