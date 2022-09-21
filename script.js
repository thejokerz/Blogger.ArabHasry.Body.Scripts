let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#chk');

const enableDarkMode = () =&gt; {

  document.body.classList.add('darkmode');

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () =&gt; {

  document.body.classList.remove('darkmode');

  localStorage.setItem('darkMode', null);
}
 

if (darkMode === 'enabled') {
  enableDarkMode();
}


darkModeToggle.addEventListener('click', () =&gt; {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
 
  if (darkMode !== 'enabled') {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});
