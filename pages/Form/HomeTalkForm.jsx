import { useState } from 'react';
import { homeTalkForm } from '../../lib/api';

// Define the initial state for loading
const initState = {
  isLoading: false
};

const HomeTalkForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  // Initialize state with initState
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await homeTalkForm(formData); // Send form data
      alert('Form submitted successfully!');
      setFormData({ name: '', phone: '', email: '' }); // Clear form
      setState(initState); // Reset loading state
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="hometalkform">
      <form onSubmit={onSubmit}>
        <div className="formField">
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>

        <div className="formField">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone"
          />
        </div>

        <div className="formField">
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>

        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default HomeTalkForm;
