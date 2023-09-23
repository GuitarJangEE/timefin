const 타이틀바꿈 = (document.title = "시계디이");
const 일번시계 = document.querySelector(".time");
const 이번시계 = document.getElementById("time");
const 시계아님 = document.getElementById("stop");
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
  const 요일숫자 = 실시간.getDay();
  const 시 = 실시간.getHours().toString().padStart(2, "0");
  const 분 = 실시간.getMinutes().toString().padStart(2, "0");
  const 초 = 실시간.getSeconds().toString().padStart(2, "0");
  const 요일 = ["일", "월", "화", "수", "목", "금", "토"];
  const 년월일 = `${년}년 ${월}월 ${일}일 ${요일[요일숫자]}요일`;
  const 시분초 = `${시}시 ${분}분 ${초}초`;
  const 위쪽 = 일번시계;
  const 아래쪽 = 이번시계;
  위쪽.innerText = 년월일;
  아래쪽.innerText = 시분초;
};
const 시작시간 = new Date();
const 타이머 = () => {
  const 현재시간 = new Date();
  const 스탑워치 = new Date(현재시간 - 시작시간);
  const 시간 = 스탑워치.getHours();
  const 시간고침 = [시간 - 9].toString().padStart(2, "0");
  const 분 = 스탑워치.getMinutes().toString().padStart(2, "0");
  const 초 = 스탑워치.getSeconds().toString().padStart(2, "0");
  const 위쪽 = 시계아님;
  위쪽.innerText = `　　지난시간
  ${시간고침}시간 ${분}분 ${초}초`;
  //   Object.keys(스탑워치정리).forEach((a) => {
  //     console.log(`${a}: ${스탑워치정리[a]}`);
  //   });
};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// // 여러 속성을 호출하는 방법 1: for...in 반복문 사용
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// // 여러 속성을 호출하는 방법 2: Object.keys와 forEach 사용
// Object.keys(person).forEach((key) => {
//   console.log(`${key}: ${person[key]}`);
// });
setInterval(타이머, 1000);
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
