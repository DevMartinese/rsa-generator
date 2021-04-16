import React from 'react';

const Method = ({ title }) => {
  return (
    <div className="row card orange col s12" style={{ borderRadius: 10 }}>
      <h5 className="center">{title}</h5>
        <div className="card white col s12">
          <p style={{height: 200, textAlign: 'left'}}>ENCRIPTACION</p>
        </div>
    </div>
  )
}

export default Method;