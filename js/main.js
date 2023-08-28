let cartArray = [];

function addToCart(el){
  if(cartArray.length > 4){
    alert('already added five players no more permission');
    return;
  }
 
  const playerName = el.parentNode.children[1].innerText;
  el.disabled = true;

  getPlayerName = {
    name : playerName,
  }

  cartArray.push(getPlayerName);
  
  const slectedPlayerCount = document.getElementById('playerAchived');
  slectedPlayerCount.innerText = cartArray.length;

  displayPlayer(cartArray);
}

function displayPlayer(cartArray){
  const slectedPlayerList = document.getElementById('playerList');
  slectedPlayerList.innerHTML = '';
  
  for (let i = 0; i < cartArray.length; i++) {
    const name = cartArray[i].name;

     const li = document.createElement('li');
    li.innerHTML = `
    <li><span>${i + 1}</span> <small>${name}</small></li>
    `;
    slectedPlayerList.appendChild(li);
  }

}

function getInputFildValueById(inputId){
  const inputFildElement = document.getElementById(inputId);
  const inputFildElementStr = inputFildElement.value;
  const getPlayerPrice = parseFloat(inputFildElementStr);

  inputFildElement.value = '';
  return getPlayerPrice;
}

function setElementExpenseTotal(elmentId, value){
  const setTotalExpense = document.getElementById(elmentId);
  setTotalExpense.innerText = value;
}

document.getElementById('calCulate').addEventListener('click', function(){
  const playerPrice = getInputFildValueById('perPlayer');
  if(isNaN(playerPrice)){
    alert('please provide valide number');
    return;
  }

  const sumTotalPlayerPrice = playerPrice * cartArray.length;
  setElementExpenseTotal('tottalExpenses', sumTotalPlayerPrice);
  
});

document.getElementById('calCulateTotal').addEventListener('click', function(){

  const managerPrice = getInputFildValueById('managerCost');
  const coachPrice = getInputFildValueById('CoachCost');
  //set previous value
  const previousPlayerExpence = document.getElementById('tottalExpenses');
  const previousPlayerExpenceStr = previousPlayerExpence.innerText;
  const getPreviousPlayerExpence = parseFloat(previousPlayerExpenceStr)

  const getTotal = managerPrice + coachPrice + getPreviousPlayerExpence;
  setElementExpenseTotal('Total', getTotal);

})