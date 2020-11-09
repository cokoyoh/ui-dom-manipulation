// alert(location);

// if (confirm('Go to Wikipedia')) {
//   location = 'https://wikipedia.org'; 
// } 

document.body.style.background = 'red';

// clear after 3 seconds
setTimeout(() => document.body.style.background = '', 5000);

/**
 * Notes
 *  the last selected DOM element is available at $0, the previously selected is $1
 */
$0.style.background = 'red'; //changes the last element's background to red