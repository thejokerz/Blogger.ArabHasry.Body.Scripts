/*<![CDATA[*/
let darkMode = localStorage.getItem(&#39;darkMode&#39;); 

const darkModeToggle = document.querySelector(&#39;#chk&#39;);

const enableDarkMode = () =&gt; {

  document.body.classList.add(&#39;darkmode&#39;);

  localStorage.setItem(&#39;darkMode&#39;, &#39;enabled&#39;);
}

const disableDarkMode = () =&gt; {

  document.body.classList.remove(&#39;darkmode&#39;);

  localStorage.setItem(&#39;darkMode&#39;, null);
}
 

if (darkMode === &#39;enabled&#39;) {
  enableDarkMode();
}


darkModeToggle.addEventListener(&#39;click&#39;, () =&gt; {
  // get their darkMode setting
  darkMode = localStorage.getItem(&#39;darkMode&#39;); 
  
 
  if (darkMode !== &#39;enabled&#39;) {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});
/*]]>*/
