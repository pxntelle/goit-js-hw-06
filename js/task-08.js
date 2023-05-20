loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
  
    if (email === '' || password === '') {
      alert('Please fill in all fields');
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
      loginForm.reset();
    }
  });
  
