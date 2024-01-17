import React from 'react'


import undoIcon from '/undo.svg';

export default function UndoAndRedo() {
    return (
        <div className='space-x-2 m-2' style={{ position: 'absolute', top: 0, left: 0 }}>
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1.5 px-4 border border-red-700  hover:border-transparent rounded-xl">
                Undo
            </button>
            <button className="bg-transparent hover:bg-lime-300 text-lime-500 font-semibold hover:text-white py-1.5 px-4 border border-lime-500 hover:border-transparent rounded-xl">
                Redo
            </button>
        </div>
    );
}
