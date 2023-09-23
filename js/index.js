const 타이틀바꿈 = (document.title = "시계디이");
const 일번시계 = document.querySelector(".time");
const 이번시계 = document.getElementById("time");

const 일번시계버튼 = {
  색바꿈: () => {
    if (일번시계.style.color === "green") {
      일번시계.style.color = "yellow";
    } else if (일번시계.style.color === "yellow") {
      일번시계.style.color = "black";
    } else {
      일번시계.style.color = "green";
    }
  },
  배경색: () => {
    if (일번시계.style.backgroundColor === "yellow") {
      일번시계.style.backgroundColor = "green";
    } else if (일번시계.style.backgroundColor === "green") {
      일번시계.style.backgroundColor = "black";
    } else {
      일번시계.style.backgroundColor = "yellow";
    }
  },
};
const 이번시계버튼 = {
  색바꿈: () => {
    if (이번시계.style.color === "black") {
      이번시계.style.color = "green";
    } else if (이번시계.style.color === "green") {
      이번시계.style.color = "yellow";
    } else {
      이번시계.style.color = "black";
    }
  },
  배경색: () => {
    if (이번시계.style.backgroundColor === "black") {
      이번시계.style.backgroundColor = "green";
    } else if (이번시계.style.backgroundColor === "green") {
      이번시계.style.backgroundColor = "yellow";
    } else {
      이번시계.style.backgroundColor = "black";
    }
  },
};
const 진짜시계 = () => {
  const 실시간 = new Date();
  const 년 = 실시간.getFullYear().toString();
  const 월틀림 = 실시간.getMonth();
  const 월 = [월틀림 + 1].toString().padStart(2, "0");
  const 일 = 실시간.getDate().toString().padStart(2, "0");
  const 시 = 실시간.getHours().toString().padStart(2, "0");
  const 분 = 실시간.getMinutes().toString().padStart(2, "0");
  const 초 = 실시간.getSeconds().toString().padStart(2, "0");
  const 년월일 = `${년}년${월}월${일}일`;
  const 시분초 = `${시}시${분}분${초}초`;
  const 위쪽 = document.querySelector(".time");
  const 아래쪽 = document.querySelector("#time");
  위쪽.innerText = 년월일;
  아래쪽.innerText = 시분초;
};
const 초기화 = () => {
  일번시계.style.color = "black";
  일번시계.style.backgroundColor = "white";
  이번시계.style.color = "black";
  이번시계.style.backgroundColor = "white";
};
addEventListener("keydown", 초기화);
일번시계.addEventListener("click", 일번시계버튼.색바꿈);
이번시계.addEventListener("click", 이번시계버튼.색바꿈);
setInterval(진짜시계, 1000);
