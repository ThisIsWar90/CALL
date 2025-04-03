document.getElementById("prankButton").addEventListener("click", function() {
    // Show the fake call screen
    document.getElementById("callScreen").classList.remove("hidden");

    // Set a random name for the caller
    const names = ["John Doe", "Jane Smith", "Mom", "Dad", "Boss"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById("callerName").textContent = randomName;

    // Auto answer the call after 3 seconds (optional)
    setTimeout(() => {
        document.getElementById("answerButton").click();
    }, 3000);
});

document.getElementById("answerButton").addEventListener("click", function() {
    alert("You answered the fake call!");
    document.getElementById("callScreen").classList.add("hidden");
});

document.getElementById("declineButton").addEventListener("click", function() {
    alert("You declined the fake call!");
    document.getElementById("callScreen").classList.add("hidden");
});
