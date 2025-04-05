// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    const countDisplay = document.getElementById("countDisplay");
    const clickButton = document.getElementById("clickButton");

    let count = 0;

    // Add click event listener to the button
    clickButton.addEventListener("click", () => {
        count++;
        countDisplay.textContent = `Count: ${count}`;
    });
});