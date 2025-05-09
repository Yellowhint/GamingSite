function checkCode() {
  const code = document.getElementById('codeInput').value;
  if (code === '5968') {
    document.getElementById('gate').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  } else {
    document.getElementById('error').innerText = 'Incorrect code.';
  }
}
