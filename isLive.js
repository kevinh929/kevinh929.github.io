async function checkIfLive(username) {
    try{
        const response = await fetch("https://twitch.tv/${username}");
        const sourcecode = await response.text();

        if (sourcecode.includes("isLiveBroadcast")) {
            console.log(`${username} is live!`);
            liveToggle();
        } else {
            console.log(`${username} is not live.`);
        }
    }  
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
let username = "broncodolphin"
checkIfLive(username);

function liveToggle() {
    const liveNow = document.getElementById("liveBanner");
    liveNow.classList.toggle("active");
}