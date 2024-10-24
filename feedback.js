document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        
        document.getElementById("feedbackForm").classList.add("hidden"); 
        document.getElementById("userName").innerText = name;
        document.getElementById("feedbackResponse").classList.remove("hidden"); 
    }
});