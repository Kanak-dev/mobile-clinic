const outputBox = document.getElementById('emptyBox') || document.createElement('div');
outputBox.id = 'emptyBox';
const emptyBox = document.querySelector(".emptyBox");

const allButtons = document.querySelectorAll('button');

function toggleColor(buttonId) {
  const clickedButton = document.getElementById(buttonId);
  clickedButton.classList.toggle('selected');

  // Update the output in the empty box based on the selected buttons
  updateOutput();

  // Show the Cancel button after any button click
  document.getElementById('buttonCancel').classList.remove('hidden');
}

function toggleVisibility(buttonId) {
  const clickedButton = document.getElementById(buttonId);
  clickedButton.classList.toggle('selected');

  // Hide or show buttons based on the pressed button
  toggleButtonsVisibility(buttonId);

  // Update the output in the empty box based on the selected buttons
  updateOutput();

  // Show the Cancel button after any button click
  document.getElementById('buttonCancel').classList.remove('hidden');
}

function toggleButtonsVisibility(buttonId) {
  allButtons.forEach(button => {
    if (
      (button.id === 'buttonA' || button.id === 'buttonB' || button.id === 'buttonC') && buttonId === 'buttonX' ||
      (button.id === 'buttonD' || button.id === 'buttonE') && buttonId === 'buttonY' ||
      (button.id === 'buttonA' || button.id === 'buttonC') && buttonId === 'buttonZ'
    ) {
      button.classList.toggle('hidden', false);
    } else {
      button.classList.toggle('hidden', true);
    }
  });
}

function updateOutput() {
  const selectedButtons = document.querySelectorAll('.selected');
  const selectedButtonIds = Array.from(selectedButtons).map(button => button.id);

  let outputText = ``;

  if (selectedButtonIds.includes('buttonA') && selectedButtonIds.includes('buttonB') && selectedButtonIds.includes('buttonC') && selectedButtonIds.includes('buttonD')&& selectedButtonIds.includes('buttonE') && selectedButtonIds.includes('buttonF')) {
    const defaultText = `<div class="default-text">
    <a href="https://en.wikipedia.org/wiki/Malaria"><h1>Malaria</h1></a>
    <p>medicine:</p>
    
   </div>`;

  emptyBox.innerHTML =defaultText;
  }else if( selectedButtonIds.includes('buttonA')){
    const defaultText = `<div class="default-text">
<h2>Cold and Flu</h2>
<p> (if more than one day)</p>
<p>medicine:Paracetamol</p>
    
    <h3>Explore the power of <br>Your chat will be displayed here.</h3>
</div>`;

emptyBox.innerHTML =defaultText;

}else if( selectedButtonIds.includes('buttonB')){
  const defaultText = `<div class="default-text">
<h2>Migrane ,Hypertension</h2>
<p> (Can prescribe a doctor)</p>
<p>medicine:Sumatriptan</p>
  
  <h3>Explore the power of <br>Your chat will be displayed here.</h3>
</div>`;

emptyBox.innerHTML =defaultText;

}else if( selectedButtonIds.includes('buttonC')){
  const defaultText = `<div class="default-text">
<h2>Chances of malaria and Food poisoning</h2>
<p> (Can prescribe a doctor)</p>
<p>medicine:Prochlorperazine,<br>Electrolytes</p>

</div>`;

emptyBox.innerHTML =defaultText;
}else if( selectedButtonIds.includes('buttonC')){
  const defaultText = `<div class="default-text">
<h2>Chances of malaria and Food poisoning</h2>
<p> (Can prescribe a doctor)</p>
<p>medicine:Prochlorperazine,<br>Electrolytes</p>

</div>`;

emptyBox.innerHTML =defaultText;

  } else if (selectedButtonIds.includes('buttonA') && selectedButtonIds.includes('buttonC')) {
     //outputText=`Line 1 of the multiline text.` +
       //        `Line 2 of the multiline text.` +
         //      `Line 3 of the multiline text.` +
           //    `Malaria`;
     const defaultText = `<div class="default-text">
               <a href="https://en.wikipedia.org/wiki/Malaria"><h1>Malaria</h1></a>
               
               <h3>Explore the power of <br>Your chat will be displayed here.</h3>
           </div>`;

   emptyBox.innerHTML =defaultText;
  }

   else if (selectedButtonIds.includes('buttonA') && selectedButtonIds.includes('buttonD')) {
    outputText = 'Adore';
  } else if (selectedButtonIds.includes('buttonA') && selectedButtonIds.includes('buttonE')) {
    outputText = 'Aein';
  }
  else if(selectedButtonIds.includes('buttonA') && selectedButtonIds.includes('buttonB') ){
    outputText="good";
  } 
  else {
    // Handle individual button presses
    outputText = getOutputText(selectedButtonIds[0]);
  }

  // Update the content of the empty box
  outputBox.textContent = outputText;
}

function getOutputText(buttonId) {
  switch (buttonId) {
    case 'buttonA':
      return 'Apple';
    case 'buttonB':
      return 'Bat';
    case 'buttonC':
      return 'Cat';
    case 'buttonD':
      return 'Doll';
    case 'buttonE':
      return 'Elephant';
    default:
      return '';
  }
}

function resetButtons() {
  allButtons.forEach(button => {
    button.classList.remove('selected', 'hidden');
  });

  // Update the output in the empty box
  updateOutput();

  // Hide the Cancel button after resetting
  document.getElementById('buttonCancel').classList.add('hidden');
}
