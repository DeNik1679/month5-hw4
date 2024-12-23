import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementNum, decrementNum, setText, reset, incrementNum5,decrementNum5} from './redux/reducer';

const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(setText('Hello Geeks!'))
            }}>change</button>
            <br />
            <button onClick={() => {
                dispatch(incrementNum())
            }}>+1</button>
             <button onClick={() => {
                dispatch(decrementNum())
            }}>-1</button>

<button onClick={() => {
                dispatch(incrementNum5())
            }}>+5</button>
             <button onClick={() => {
                dispatch(decrementNum5())
            }}>-5</button>

            <button onClick={() => {
                dispatch(reset())
            }}>reset</button>
        </div>
    );
}

export default Btn;
