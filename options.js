let page = document.getElementById("settingDiv");
let selectedClassName = "current";
let stime = $( "#starttime" ).val();
let etime = $( "#endtime" ).val();
let btime = $( "#breaktime" ).val();

// Reacts to a button click by marking marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function init(stime, etime, btime) {
 console.log('Value is  ' + stime);
  chrome.storage.sync.set({starttime: stime, endtime:etime, breaktime:btime}, function() {
  console.log('Value is set to ' + stime);
  });


}

// Initialize the page by constructing the color options
init(stime, etime, btime);
