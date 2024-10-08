let counters = document.querySelectorAll(".counter");
const maxValues = [12000, 5000, 7500];

counters.forEach((counter, idx) => {
  let count = 0; // 카운트 초기화
  const increment = Math.ceil(maxValues[idx] / 200); // 매 프레임 증가 값 설정

  const updateCounter = () => {
    if (count < maxValues[idx]) {
      count += increment;
      console.log(count);
      if (count > maxValues[idx]) {
        count = maxValues[idx];
      }
      counter.textContent = count;
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});
