setTimeout(() => {
  const btn = document.querySelector("#seeWordsBtn");
  const mainDiv = document.querySelector("#mainDiv");
  const wordDiv = document.querySelector("#wordDiv");
  const key = document.querySelector("#key");
  btn.onclick = function() {
    if (key.value === "lxr&gz") {
      mainDiv.style.display = "none";
      wordDiv.innerHTML = `
    <p>My dear Sherry:</p>
      <p>I love you!</p>
      <p>I can't be happier to be trusted, cared, </p>
      <p>and being and will always been loved by you.</p>
        <p>过去的这一个月，是我迄今为止最快乐且难忘的岁月，
      以至于我常有这在梦中的怀疑，如果这是梦，那我不想醒来。
      我很感谢与你相遇，相识（很长一段时间可能是单识），相知，相爱，
      从我表白的那一刻起，我便决心陪你，爱你，呵护你一辈子。</p>
        <p>读完你的信，我更加确信你就是我的另一半，
      我也大概能想象你一路走来，想必栉风沐雨，
      而第一次在我眼前出现时，依然神采奕奕，
      你内在的强大超过我之前的设想，我佩服的同时，
      也深觉相见恨晚，不过在以后的日子里，你的身后永远有我。</p>
        <p>事，应有前缘，初逢如故；</p>
        <p>情，不知所起，一往而深。</p>
        <p></p>
                                        <p>爱你直至行星停转的</p>
                                        <p>  Gorden</p>
    `;
      wordDiv.style.display = "block";
    }
  };
}, 0);
