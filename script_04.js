document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your form was submitted successfully!");
    });
});