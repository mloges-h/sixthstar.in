// contact us form
export const contactusForm = async (data) => {
    const response = await fetch('/api/contactus', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: 'An unknown error occurred',
      }));
      throw new Error(errorData.message || 'Something went wrong');
    }
  
    return response.json();
  };

//home talk form

  export const homeTalkForm = async (data) => {
    const response = await fetch('/api/hometalk', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: 'An unknown error occurred',
      }));
      throw new Error(errorData.message || 'Something went wrong');
    }
  
    return response.json();
  };

  //get a demo form

  export const  DemoContactForm = async (data) => {
    const response = await fetch('/api/demoform', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: 'An unknown error occurred',
      }));
      throw new Error(errorData.message || 'Something went wrong');
    }
  
    return response.json();
  };


