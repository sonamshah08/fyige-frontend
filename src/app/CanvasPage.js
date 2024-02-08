import React, { useState } from 'react';

const FormWithDragAndDrop = () => {
  const [formData, setFormData] = useState({});
  const [draggedComponent, setDraggedComponent] = useState(null);

  const handleDragStart = (componentType, componentLabel) => (e) => {
    e.dataTransfer.setData('componentType', componentType);
    e.dataTransfer.setData('componentLabel', componentLabel);
  };

  const optionsRadioButton = ['Option 1', 'Option 2', 'Option 3'];

  const handleDrop = (e) => {
    e.preventDefault(); // Prevent default behavior of dropping outside the area
    const componentType = e.dataTransfer.getData('componentType');
    const componentLabel = e.dataTransfer.getData('componentLabel');
    
    setFormData({ ...formData, [componentLabel]: { type: componentType, value: '', options: [] } });

  };

  const handleChange = (e, componentName) => {
    setFormData({
      ...formData,
      [componentName]: { ...formData[componentName], value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

    //     fetch('http://127.0.0.1:8000/store-form-data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ formData }),
//   })
     
//     .catch(error => {
//       console.error('Error:', error.message);
//     });

  };

  return (
    <div>
      <h2>Form with Drag and Drop</h2>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        style={{ border: '1px solid black', minHeight: '350px' }}
      >
        {/* Drag-and-drop area */}
        {Object.keys(formData).map((componentName) => (
          <div key={componentName}>
            <label htmlFor={componentName}>{formData[componentName].label}</label>
            {/* Render form fields based on the dropped components */}
            {formData[componentName].type === 'input' && (
              <input
                type="text"
                id={componentName}
            />
            )}
            {formData[componentName].type === 'textarea' && (
              <textarea
                id={componentName}
                // value={formData[componentName].value}
                // onChange={(e) => handleChange(e, componentName)}
              />
            )}
            {formData[componentName].type === 'select' && (
              <select
                id={componentName}
                // value={formData[componentName].value}
                // onChange={(e) => handleChange(e, componentName)}
              >
                <option value="">Select option</option>
                 
              </select>
            )}
            {formData[componentName].type === 'radio' && (
              <div>
               
                  {optionsRadioButton.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
               
              onChange={handleChange}
            />
            {option}
          </label>
        ))}


                
              </div>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {/* Draggable components */}
      <div
        draggable
        onDragStart={handleDragStart('input', 'Text Input')}
        style={{ cursor: 'move' }}
      >
        Drag Text Input
      </div>
      <div
        draggable
        onDragStart={handleDragStart('textarea', 'Textarea')}
        style={{ cursor: 'move' }}
      >
        Drag Textarea
      </div>
      <div
        draggable
        onDragStart={handleDragStart('select', 'Select')}
        style={{ cursor: 'move' }}
      >
        Drag Select
      </div>
      <div
        draggable
        onDragStart={handleDragStart('radio', 'Radio Buttons')}
        style={{ cursor: 'move' }}
      >
        Drag Radio Buttons
      </div>
      {/* Add more draggable components as needed */}
    </div>
  );
};

export default FormWithDragAndDrop;
