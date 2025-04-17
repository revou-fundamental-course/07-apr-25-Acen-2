console.log('Javascript is working');

// Function to validate the form
function validateform() {
  console.log('Form validation started');
  const name = document.getElementById('name').addEventListener('click', validateForm).value;
  console.log('Nama :', name);
}

let indexBanner = 0;

function nextBanner() {
  indexBanner += 1;
  showBanner();
}

function showBanner() {
  console.log('Banner function started');
  const bannerList = document.getElementsByClassName('banner-card');
  console.log('Banner list:', bannerList);

  if (indexBanner > bannerList.length - 1) {
    indexBanner = 0;
  }

  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style = 'display: none';
  }

  bannerList[indexBanner].style = 'display: block';
}

showBanner();

setInterval(() => {
  nextBanner();
}, 3000);
