let darkMode = localStorage.getItem('darkMode'); 

<script>
/*<![CDATA[*/
const darkModeToggle = document.querySelector('#chk');

const enableDarkMode = () => {

  document.body.classList.add('darkmode');

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('darkmode');

  localStorage.setItem('darkMode', null);
}
 

if (darkMode === 'enabled') {
  enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
 
  if (darkMode !== 'enabled') {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});
/*]]>*/
</script>
