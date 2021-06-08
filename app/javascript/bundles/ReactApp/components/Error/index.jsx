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
      <div
        style={{ position: 'relative', width: 100, height: 100 }}
      >
        <div style={{ height: 20 }}>
          <div style={{
            position: 'absolute', borderLeft: 'solid 1px black', height: 10, marginLeft: 40,
          }}
          />
          <div style={{
            position: 'absolute', borderLeft: 'solid 1px black', height: 10, marginLeft: 50,
          }}
          />
          <div style={{
            position: 'absolute', borderLeft: 'solid 1px black', height: 10, marginLeft: 60,
          }}
          />
        </div>
        <div style={{
          border: 'solid 1px black',
          height: 20,
          width: 60,
          marginLeft: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomWidth: 0,
          backgroundColor: 'black',
        }}
        />
        <div style={{
          border: 'solid 1px black',
          height: 60,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          OOOPS!
        </div>
      </div>
    </div>
  );
}

export default Loader;
