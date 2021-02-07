import React from 'react';

const Loading = () => (
    <div
        style={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <div className='loader'></div>
    </div>
)

export default Loading;