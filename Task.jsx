import React, { useState } from 'react';

const Task = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='p-4'>
      <label className="flex items-center justify-start space-x-2 w-250">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 hover:text-blue-700"
        />
        <span className="text-gray font-meduim">{label}</span>
      </label>
      <hr />
    </div>
  );
};

export default Task;