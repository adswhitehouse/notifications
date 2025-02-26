// Variables
let successBtn = document.querySelector(".jsSuccessBtn");
let errorBtn = document.querySelector(".jsErrorBtn");
let invalidBtn = document.querySelector(".jsInvalidBtn");
let notificationsContainer = document.querySelector(
  ".jsNotificationsContainer"
);

// Create and add success notification on success button click
successBtn.addEventListener("click", () => {
  // Create elements
  let notificationDiv = document.createElement("div");
  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  let para = document.createElement("p");
  // Style elements
  notificationDiv.classList.add("success-notification");
  iconDiv.classList.add("success-icon");
  icon.classList.add("fa-solid", "fa-check");
  // Set text
  para.textContent = "Successfully submitted";
  // Append together
  iconDiv.appendChild(icon);
  notificationDiv.append(iconDiv, para);
  notificationsContainer.appendChild(notificationDiv);
  setTimeout(() => {
    notificationDiv.classList.add("visible");
  }, 10);
  // Hide notification
  hideNotification(notificationDiv);
});

// Create and add error notification on error button click
errorBtn.addEventListener("click", () => {
  // Create elements
  let notificationDiv = document.createElement("div");
  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  let para = document.createElement("p");
  // Style elements
  notificationDiv.classList.add("error-notification");
  iconDiv.classList.add("error-icon");
  icon.classList.add("fa-solid", "fa-x");
  // Set text
  para.textContent = "Please fix the error!";
  // Append together
  iconDiv.appendChild(icon);
  notificationDiv.append(iconDiv, para);
  notificationsContainer.appendChild(notificationDiv);
  setTimeout(() => {
    notificationDiv.classList.add("visible");
  }, 10);
  // Hide notification
  hideNotification(notificationDiv);
});

// Create and add invalid notification on invalid button click
invalidBtn.addEventListener("click", () => {
  // Create elements
  let notificationDiv = document.createElement("div");
  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  let para = document.createElement("p");
  // Style elements
  notificationDiv.classList.add("invalid-notification");
  iconDiv.classList.add("invalid-icon");
  icon.classList.add("fa-solid", "fa-exclamation");
  // Set text
  para.textContent = "Invalid input, check again";
  // Append together
  iconDiv.appendChild(icon);
  notificationDiv.append(iconDiv, para);
  notificationsContainer.appendChild(notificationDiv);
  setTimeout(() => {
    notificationDiv.classList.add("visible");
  }, 10);
  // Hide notification
  hideNotification(notificationDiv);
});

// Hide notification after 2 seconds
function hideNotification(div) {
  setTimeout(() => {
    div.classList.remove("visible");
  }, 2000);
}
