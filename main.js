console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  console.log(value);
  let length = value.split(" ").length;

  if (value){
    // COMPLETE THE LOGIC 
    wordCount.innerHTML = `Word Count: ${length}`; 
  } else {
    
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = "Please input text"; // UPDATE THIS
  }
}
// OPTIONAL CHALLENGE
const toggleMode = (btnText) => {
  // complete the function
}

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
// Connect the files
// Connect the JS file to the HTML file
// Connect the CSS file to the HTML file
// Test the code
// Start your server: run hs -o or http-server -o to start your server.
// Check your console. The message "Connected!" should be seen.
// Push your work to Github
// $ git add -A
// $ git commit -m "WRITE A DETAILED MESSAGE"
// $ git push origin add-code
// Create a Pull Request (PR) on Github
// Merge the PR into the main branch
// Go back to VS Code and checkout the main branch git checkout main
// Pull the updated code: git pull origin main
// Get Organized
// Go to your repo and click on the Issues Tab taking note of the things that need to be completed for the lab
// Screen Shot 2022-03-19 at 1 42 02 AM

// Create a project named "Word Counter" and choose "Basic Kanban"
// word-counter

// Move issue tickets into the project and work through them each
// drag

// Styling
// Screen Shot 2022-03-18 at 10 47 46 PM

// Screen Shot 2022-03-18 at 10 47 57 PM

// Screen Shot 2022-03-18 at 10 48 26 PM

// Challenge
// Add Bootstrap to your HTML elements like buttons and the form.

// NOTE: Do not remove the ID attributes from the HTML. When you copy over the Bootstrap component, make sure to add the attribute to it.
