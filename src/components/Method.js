import React from 'react';

const Method = ({ title, method, setMethod}) => {
  
  const handleChange = e => {
    setMethod({
      ...method,
      [e.target.name] : e.target.value
    })
  };

  return (
    <div className="row card orange col s12" style={{ borderRadius: 10 }}>
      <h5 className="center">{title}</h5>
        <div className="card col s12">
          <textarea name="method" value={method} onChange={handleChange} data-length="120" style={{height:150, border: 'none'}}></textarea>
        </div>
    </div>
  )
}

export default Method;