//function hideCookie() {
//    const cookieContainer = document.querySelector(".p-cookie");
//    cookieContainer.style.display = "none";
//}
//
//document.querySelector(".p-cookie__btn").addEventListener("click", hideCookie);

function hideCookie() {
    // Get the cookie container element.
    const cookieContainer = document.querySelector(".p-cookie");
    // Set the display property of the element to none.
    cookieContainer.style.display = "none";
    // Set a cookie to indicate that the cookie container should be hidden.
    document.cookie = "p-cookie-hidden=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    // Remove the event listener to prevent further clicks on .p-cookie__btn.
    document.querySelector(".p-cookie__btn").removeEventListener("click", hideCookie);
}

// Check if the p-cookie-hidden cookie is set to true and hide the cookie container if it is.
window.addEventListener("DOMContentLoaded", () => {
    const isCookieHidden = document.cookie.includes("p-cookie-hidden=true");
    if (isCookieHidden) {
        const cookieContainer = document.querySelector(".p-cookie");
        cookieContainer.style.display = "none";
    }
});

// Add an event listener to the button.
document.querySelector(".p-cookie__btn").addEventListener("click", hideCookie);







