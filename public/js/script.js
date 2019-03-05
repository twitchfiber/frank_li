document.addEventListener("DOMContentLoaded", bindButtons());

function bindButtons() {
    document.getElementById("submit_button").addEventListener("click", function(event) {
        console.log("hi");
        var xhr = new XMLHttpRequest();
        var payload = {};
        payload.name = document.getElementById("name").value;
        payload.email = document.getElementById("email").value;
        payload.message = document.getElementById("message").value;
        xhr.open("POST", "https://httpbin.org/post", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener("load", function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var response = JSON.parse(xhr.responseText);
                var sendback = "We'll be in touch soon, " + response.json.name;
                document.getElementById("res").textContent = sendback;
            }
            else {console.log("Error!" + xhr.statusText)};
        });
        xhr.send(JSON.stringify(payload));
        event.preventDefault();
    });
};