import React from 'react';
import './styles.css';

function Loader() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', width: 100, height: 100 }}>
        <div
          style={{
            overflow: 'hidden',
            height: 8,
            width: 100,
            position: 'relative',
            animationName: 'updown',
            animationDuration: '2s',
            animationIterationCount: 'infinite',
          }}
        >
          <div className="round-circle" style={{ left: 7, borderColor: 'green' }} />
          <div className="round-circle" style={{ left: 20, borderColor: 'yellow' }} />
          <div className="round-circle" style={{ left: 27, borderColor: 'red' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            borderTop: 'solid 2px black',
            width: 80,
          }}
        />
        <div
          style={{
            animation: 'hot',
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            position: 'absolute',
            height: 10,
            width: 50,
            border: 'solid 1px black',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
          }}
        />
      </div>
    </div>
  );
}

export default Loader;
