document.addEventListener('DOMContentLoaded', function() {
    const levelRadioButtons = document.querySelectorAll('input[name="level-type"]');
    const degreeSelect = document.querySelector('select[name="degree"]');
    const degreeQuestion = document.querySelector('.question:nth-child(5)');
  
    // Initially disable the degree question and its inputs
    degreeQuestion.classList.add('disabled');
    const inputsToDisable = degreeQuestion.querySelectorAll('input, select');
    inputsToDisable.forEach(input => {
        input.disabled = true;
      });
  
    levelRadioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.value === 'None') {
          // Enable the degree question and its inputs if "None" is selected
          degreeQuestion.classList.remove('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = false;
          });
        } else {
          // Disable the degree question and its inputs for other level selections
          degreeQuestion.classList.add('disabled');
          inputsToDisable.forEach(input => {
            input.disabled = true;
          });
        }
      });
    });
  });
  