// Dark Mode

// check for saved &#39;darkMode&#39; in localStorage
let darkMode = localStorage.getItem(&#39;darkMode&#39;); 

const darkModeToggle = document.querySelector(&#39;#chk&#39;);

const enableDarkMode = () =&gt; {
  // 1. Add the class to the body
  document.body.classList.add(&#39;darkmode&#39;);
  // 2. Update darkMode in localStorage
  localStorage.setItem(&#39;darkMode&#39;, &#39;enabled&#39;);
}

const disableDarkMode = () =&gt; {
  // 1. Remove the class from the body
  document.body.classList.remove(&#39;darkmode&#39;);
  // 2. Update darkMode in localStorage 
  localStorage.setItem(&#39;darkMode&#39;, null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === &#39;enabled&#39;) {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener(&#39;click&#39;, () =&gt; {
  // get their darkMode setting
  darkMode = localStorage.getItem(&#39;darkMode&#39;); 
  
  // if it not current enabled, enable it
  if (darkMode !== &#39;enabled&#39;) {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

// Dark Mode
