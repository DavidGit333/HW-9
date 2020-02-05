var nm1, 
    nm2, 
    res;

function plus() {
  nm1 = document.getElementById('nmOne').value;
  nm1 = parseInt(nm1);
  nm2 = document.getElementById('nmTwo').value;
  nm2 = parseInt(nm2);
  res = nm1 + nm2;
  document.getElementById('result').innerHTML = res;
}

function minus() {
  nm1 = document.getElementById('nmOne').value;
  nm1 = parseInt(nm1);
  nm2 = document.getElementById('nmTwo').value;
  nm2 = parseInt(nm2);
  res = nm1 - nm2;
  document.getElementById('result').innerHTML = res;
}

function multiply() {
  nm1 = document.getElementById('nmOne').value;
  nm1 = parseInt(nm1);
  nm2 = document.getElementById('nmTwo').value;
  nm2 = parseInt(nm2);
  res = nm1 * nm2;
  document.getElementById('result').innerHTML = res;
}

function division() {
  nm1 = document.getElementById('nmOne').value;
  nm1 = parseInt(nm1);
  nm2 = document.getElementById('nmTwo').value;
  nm2 = parseInt(nm2);
  res = nm1 / nm2;
  document.getElementById('result').innerHTML = res;
}