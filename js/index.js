const title = document.querySelector('.title')
const text = 'Have Something for U'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 1; // Menghasilkan delay acak antara 0 hingga 1.5 detik
  element.style.animationDelay = `${randomDelay}s`;
});
