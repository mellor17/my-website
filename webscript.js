
let theme = localStorage.getItem("theme")

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for (let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode
        console.log("Option clicked:", mode)
        setTheme(mode)
    })
}



// Original Code
function setTheme(mode){
    if (mode == "light"){
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == "blue"){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if (mode == "green"){
        document.getElementById('theme-style').href = 'green.css'
    }
    if (mode == "purple"){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem("theme", mode) // sets the current localstorage item to the current mode, so basically saves the settings
}

fetch('blog-post-1.md')
    .then(response => response.text())
    .then(text => {
        // Convert Markdown to HTML using the 'marked' library
        document.getElementById('post1-content').innerHTML = marked.parse(text);
    })
    .catch(error => console.error('Error loading markdown:', error));

/* Testing new code but it doens't work with transtitions ;(
function setTheme(mode){ // takes one parameter called mode
    const validModes = ['light', 'blue', 'green', 'purple']; // creating an array for our valid themes

    if (validModes.includes(mode)) { // this checks that the mode passed to the function is actually valid and included in the valid modes array
        const cssFile = mode === 'light' ? 'default.css' : `${mode}.css`; //basically an if else statement in shorthand, if mode == light then the style will be default, else it will be -theme-css. The name of the theme is grabbed by whatever the current mode variable is so, if it was blue it woould be blue-theme.css
        document.getElementById("theme-style").href = cssFile;
    } else {
        console.warn(`Invalid theme mode: ${mode}`);
    }
}*/