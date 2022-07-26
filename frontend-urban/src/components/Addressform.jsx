import React, { useState } from 'react';

const Addressform = ({ next }) => {
  const getaddr = JSON.parse(localStorage.getItem('address'));
  const [addr, setAddr] = useState(getaddr || { address: '', city: '', state: '' });
  const [dynamic, setDynamic] = useState(getaddr?.landmark ? [{ name: 'landmark' }] : []);
  const [error, setError] = useState('');
  const cityObj = {
    ahmedabad: 'gujrat',
    surat: 'gujrat',
    jaypur: 'rajasthan',
  };
  const handleChange = (e, name) => {
    const { value } = e.target;
    if (name === 'city') {
      addr.state = cityObj[value];
    }
    addr[name] = value;
    console.log(addr);
    setAddr({ ...addr });
  };
  const removefield = index => {
    console.log(index, dynamic);
    dynamic.splice(index, 1);
    setDynamic([...dynamic]);
  };
  const addField = () => {
    setDynamic([...dynamic, { name: 'landmark' }]);
    addr.landmark = '';
    setAddr({ ...addr });
  };
  const handleSubmit = () => {
    const err = [];
    Object.keys(addr).forEach(i => {
      if (!addr[i]) {
        err.push(i);
      }
    });
    if (!err[0]) {
      next(addr);
      localStorage.setItem('address', JSON.stringify(addr));
    } else {
      setError(`field ${err} required`);
    }
  };
  return (
    <div className="addressform">
      Addressform
      <div>
        <label>address</label>
        <input type="textarea" onChange={e => handleChange(e, 'address')} value={addr.address} />
      </div>
      <div>
        <label>City</label>
        <select name="city" onChange={e => handleChange(e, 'city')} value={addr.city}>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="surat">Surat</option>
          <option value="jaypur">Jaypur</option>
        </select>
      </div>
      <div>
        <label>State</label>
        <select value={addr.state} readOnly>
          <option value="gujrat">Gujrat</option>
          <option value="rajasthan">Rajasthan</option>
        </select>
      </div>
      {dynamic.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`key${index}`}>
          <label>landmark</label>
          <input type="text" onChange={e => handleChange(e, item.name)} value={addr[item.name]} />
          <button type="button" onClick={() => removefield(index)}>
            Remove
          </button>
        </div>
      ))}
      {error}
      <button type="button" onClick={addField}>
        Add Landmark
      </button>
      <div>
        <button type="button" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Addressform;
