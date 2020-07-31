function pressKey(key) {
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: key,
      keyCode: 69, // example values.
      code: "KeyE", // put everything you need in this object.
      which: 69,
      shiftKey: false, // you don't need to include values
      ctrlKey: false, // if you aren't going to use them.
      metaKey: false, // these are here for example's sake.
    })
  );
}

function getNowInput() {
  const element = document.querySelector(".mtjGmSc-roma .mtjNowInput");
  return element.textContent;
}

function type() {
  const nowInput = getNowInput();
  pressKey(nowInput);
}

for (let i = 0; i < 2000; i++) {
  setTimeout(type, 100);
}
