function replaceContent() {
    // Get the values from the input fields
    var myRecipientName = document.getElementById("recipientNameInput").value;
    var myHostName = document.getElementById("hostNameInput").value;

    // Replace the placeholders with the input values
    document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
}
