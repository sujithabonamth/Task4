function browseResume() {
    // Trigger the click event of the hidden file input
    document.getElementById("hiddenResumeInput").click();
  }
 
 
  document.getElementById("hiddenResumeInput").addEventListener("change", function() {
    // Update the text field with the selected file name
    var fileName = this.value.split("\\").pop();
    document.getElementById("resume").value = fileName;
  });
   