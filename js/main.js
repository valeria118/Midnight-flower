
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const line1 = 'Полночный цветок';
    const line2 = 'для твоих ночных грёз';
    const star = '🎴';
    const total = line1.length + line2.length + star.length;
    const titleElement = document.getElementById('title');
    let index = 0;

    function render() {
      const l1 = line1.slice(0, Math.min(index, line1.length));
      const l2 = line2.slice(0, Math.max(0, Math.min(index - line1.length, line2.length)));
      const st = index > line1.length + line2.length ? star : '';
      let html = `<span class="title-main">${l1}</span>`;
      if (l2 || st) {
        html += `<br><span class="title-sub">${l2}${st ? `<span class="title-star">${st}</span>` : ''}</span>`;
      }
      titleElement.innerHTML = html;
    }

    function appendTitle() {
      if (index < total) {
        index++;
        render();
        setTimeout(appendTitle, 45); // 45ms delay per character
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 600);
};