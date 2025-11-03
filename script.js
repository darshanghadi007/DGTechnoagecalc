document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const birthDateInput = document.getElementById("birthDate").value;
  if (!birthDateInput) {
    alert("Please select your date of birth!");
    return;
  }

  const birthDate = new Date(birthDateInput);
  const now = new Date();

  if (birthDate > now) {
    alert("Birth date cannot be in the future!");
    return;
  }

  const diffMs = now - birthDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p><strong>Years:</strong> ${years}</p>
    <p><strong>Months:</strong> ${months}</p>
    <p><strong>Days:</strong> ${days}</p>
    <p><strong>Total Days:</strong> ${diffDays}</p>
    <p><strong>Total Hours:</strong> ${diffHours}</p>
  `;

  // Smooth fade-in animation
  resultDiv.style.opacity = "0";
  setTimeout(() => {
    resultDiv.style.transition = "opacity 0.6s ease-in";
    resultDiv.style.opacity = "1";
  }, 100);
});
