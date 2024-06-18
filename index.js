function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

  // Define the introduction function
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Define the introductionWithLanguage function
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Define the introductionWithLanguageOptional function
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example usage
  console.log(introduction("Alice"));
  // Output: "Hi, my name is Alice."
  
  console.log(introductionWithLanguage("Alice", "JavaScript"));
  // Output: "Hi, my name is Alice and I am learning to program in JavaScript."
  
  console.log(introductionWithLanguageOptional("Alice"));
  // Output: "Hi, my name is Alice and I am learning to program in JavaScript."
  
  console.log(introductionWithLanguageOptional("Alice", "Python"));
  // Output: "Hi, my name is Alice and I am learning to program in Python."
  