document.getElementById("calculateBtn").addEventListener("click", function() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const loanTenure = parseInt(document.getElementById("loanTenure").value) * 12;
    const downPayment = parseFloat(document.getElementById("downPayment").value) || 0;
    const errorMessage = document.getElementById("errorMessage");
  
    if (isNaN(loanAmount) || loanAmount <= 0 || isNaN(interestRate) || isNaN(loanTenure)) {
      errorMessage.textContent = "Please fill in all required fields with valid numbers.";
      document.getElementById("monthlyPayment").textContent = "0.00";
      document.getElementById("totalInterest").textContent = "0.00";
      document.getElementById("totalPayment").textContent = "0.00";
      return;
    } else {
      errorMessage.textContent = "";
    }
  
    const principal = loanAmount - downPayment;
  
    // Mortgage formula to calculate monthly payment
    const monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -loanTenure));
  
    if (isNaN(monthlyPayment) || monthlyPayment <= 0) {
      document.getElementById("monthlyPayment").textContent = "Invalid input";
    } else {
      document.getElementById("monthlyPayment").textContent = monthlyPayment.toFixed(2);
  
      // Calculate total interest and total payment
      const totalPayment = monthlyPayment * loanTenure;
      const totalInterest = totalPayment - principal;
  
      document.getElementById("totalInterest").textContent = totalInterest.toFixed(2);
      document.getElementById("totalPayment").textContent = totalPayment.toFixed(2);
    }
  });
  