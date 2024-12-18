// Character sets
const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}<>?,."
  };
  
  // Generate password
  function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
  
    // Build character pool
    let charPool = "";
    if (includeUppercase) charPool += charSets.uppercase;
    if (includeLowercase) charPool += charSets.lowercase;
    if (includeNumbers) charPool += charSets.numbers;
    if (includeSymbols) charPool += charSets.symbols;
  
    // Validate inputs
    if (charPool === "") {
      alert("Please select at least one character type!");
      return "";
    }
  
    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
    return password;
  }
  
  // Handle Generate button click
  document.getElementById("generate").addEventListener("click", () => {
    const password = generatePassword();
    document.getElementById("output").value = password;
  });
  
  // Handle Copy button click
  document.getElementById("copy").addEventListener("click", () => {
    const output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  });
  