const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const dialog = document.querySelector(".project-dialog");
const closeButton = document.querySelector(".dialog-close");
const paperDialog = document.querySelector(".paper-dialog");
const paperCloseButton = document.querySelector(".paper-dialog-close");
const awardDialog = document.querySelector(".award-dialog");
const awardCloseButton = document.querySelector(".award-dialog-close");

const projects = {
  portfolio: {
    category: "Web",
    title: "개인 포트폴리오 웹사이트",
    summary:
      "채용 담당자가 경력, 프로젝트, 연구, 기술 스택을 빠르게 훑어볼 수 있도록 설계한 정적 웹 자기소개서입니다.",
    problem:
      "문서형 자기소개서는 강점과 결과가 한눈에 들어오지 않아, 지원자의 작업물을 직접 확인하기 어렵다는 문제가 있었습니다.",
    features: [
      "다크 모드와 화이트 모드 전환",
      "반응형 레이아웃과 접근성 고려",
      "프로젝트 상세 내용을 dialog 패널로 제공",
    ],
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    impact:
      "별도 서버 없이 배포할 수 있고, 지원 직무에 맞춰 내용을 빠르게 수정할 수 있는 포트폴리오 기반을 만들었습니다.",
  },
  dashboard: {
    category: "Dashboard",
    title: "데이터 분석 대시보드",
    summary:
      "운영 지표를 빠르게 파악할 수 있도록 핵심 수치를 카드, 차트, 필터로 정리한 화면입니다.",
    problem:
      "분산된 데이터를 수동으로 확인해야 해서 의사결정에 시간이 오래 걸리고, 반복 보고 작업이 많았습니다.",
    features: [
      "핵심 KPI 카드와 기간 필터 구성",
      "차트 기반 추세 확인 화면 구현",
      "API 응답 상태에 따른 로딩, 빈 화면, 오류 상태 처리",
    ],
    stack: ["React", "TypeScript", "REST API", "Chart"],
    impact:
      "주요 지표 확인 시간을 줄이고, 팀원이 동일한 기준으로 데이터를 해석할 수 있도록 화면을 표준화했습니다.",
  },
  automation: {
    category: "Automation",
    title: "업무 자동화 도구",
    summary:
      "반복되는 파일 정리, 데이터 변환, 리포트 생성을 자동화해 업무 시간을 줄인 도구입니다.",
    problem:
      "매주 동일한 형식의 자료를 취합하고 정리하는 과정에서 실수가 발생하고 시간이 많이 소요되었습니다.",
    features: [
      "입력 파일 검증과 예외 처리",
      "정형 리포트 자동 생성",
      "사용자별 설정값을 반영한 출력 파일 생성",
    ],
    stack: ["Python", "Pandas", "Excel", "Automation"],
    impact:
      "반복 작업을 자동화해 처리 시간을 단축하고, 수작업 오류 가능성을 낮췄습니다.",
  },
};

const papers = {
  "auto-labeling": {
    category: "논문",
    title: "게임 엔진 기반 가상 환경을 이용한 자동 레이블링 및 랜딩 패드 인식 기술 연구",
    summary:
      "게임 엔진 기반 가상 도심 환경에서 자동 레이블링 데이터셋을 구축하고 랜딩 패드 인식 알고리즘을 검증한 연구입니다.",
    abstract:
      "심층 신경망 학습에는 레이블링된 데이터셋이 필요하지만, 수천 장에서 수만 장 규모의 데이터를 수작업으로 레이블링하는 데에는 한계가 있습니다. 이를 극복하기 위해 실제 도심과 유사한 가상 도심에서 랜딩 패드 자동 레이블링 기술을 바탕으로 데이터셋을 생성하고, 학습된 알고리즘을 가상 환경 비행 과정에서 검증했습니다.",
    contribution: [
      "가상 도심 환경 기반 데이터셋 생성 흐름 구성",
      "랜딩 패드 자동 레이블링 방식 정리",
      "학습 알고리즘의 가상 환경 비행 검증 과정 분석",
    ],
    keywords: ["Game Engine", "Auto Labeling", "Landing Pad", "Deep Learning"],
    publication: "2024년 7월 · 논문 및 연구",
    url: "assets/papers/auto-labeling-landing-pad.pdf",
  },
  "virtual-dataset": {
    category: "논문",
    title: "가상 환경 데이터셋 기반 심층 신경망을 이용한 랜딩 패드 인식 실험",
    summary:
      "가상 환경에서 획득한 데이터셋으로 학습된 객체 인식 알고리즘의 실제 환경 적용 가능성을 비교 분석한 연구입니다.",
    abstract:
      "가상 환경에서 획득된 데이터셋을 바탕으로 학습된 심층 신경망 기반 객체 인식 알고리즘이 실제 환경에서도 동일한 성능을 발휘하는지 데이터셋 구성마다 비교 분석했습니다. 실제 UAM 축소기의 착륙 과정에서도 최적의 인식 성능을 발휘할 수 있는지 검증했습니다.",
    contribution: [
      "가상 환경 데이터셋 구성별 실험 조건 정리",
      "심층 신경망 기반 랜딩 패드 인식 성능 비교",
      "실제 UAM 축소기 착륙 과정에서의 적용성 검토",
    ],
    keywords: ["Virtual Dataset", "DNN", "Landing Pad", "UAM"],
    publication: "2024년 11월 · 논문 및 연구",
    url: "assets/papers/virtual-dataset-landing-pad.pdf",
  },
  "distance-estimation": {
    category: "논문",
    title: "딥러닝 기반 객체 인식을 활용한 랜딩 패드 주변 객체 상대 거리 추정",
    summary:
      "UAM의 안전한 착륙을 위해 랜딩 패드 주변 객체의 상대 거리를 추정하는 모델을 구현한 연구입니다.",
    abstract:
      "UAM의 안전한 착륙을 위해서는 랜딩 패드뿐만 아니라 주변 객체의 위치와 상대 거리를 함께 인식해야 합니다. 본 연구에서는 딥러닝 기반 객체 인식 결과를 활용해 랜딩 패드 주변 객체에 대한 상대 거리 추정 모델을 구현했습니다.",
    contribution: [
      "랜딩 패드 주변 객체 인식 문제 정의",
      "객체 인식 결과와 상대 거리 추정 흐름 연결",
      "UAM 착륙 안전성 관점의 활용 가능성 정리",
    ],
    keywords: ["Object Detection", "Distance Estimation", "Landing Pad", "UAM"],
    publication: "2025년 4월 · 논문 및 연구",
    url: "assets/papers/distance-estimation-landing-pad.pdf",
  },
  "tensorrt-yolo": {
    category: "논문",
    title: "Jetson Orin Nano에서 TensorRT로 최적화된 YOLOv11 객체 탐지 모델의 성능 분석",
    summary:
      "Jetson Orin Nano 환경에서 TensorRT 최적화를 적용한 YOLOv11 객체 탐지 모델의 성능을 분석한 연구입니다.",
    abstract:
      "임베디드 환경에서 객체 탐지 모델을 안정적으로 운용하기 위해서는 정확도뿐 아니라 추론 속도와 최적화 효율이 중요합니다. 본 연구에서는 Jetson Orin Nano에서 YOLOv11 객체 탐지 모델을 TensorRT로 최적화하고, 적용 전후 성능 변화를 분석했습니다.",
    contribution: [
      "Jetson Orin Nano 기반 실험 환경 구성",
      "YOLOv11 모델의 TensorRT 최적화 적용",
      "추론 성능 비교와 임베디드 활용 가능성 분석",
    ],
    keywords: ["Jetson Orin Nano", "TensorRT", "YOLOv11", "Object Detection"],
    publication: "2025년 11월 · 논문 및 연구",
    url: "assets/papers/tensorrt-yolov11-jetson.pdf",
  },
};

const awards = {
  "ip-mobility": {
    title: "2024년 IP & 모빌리티 융합 디자인 경진대회 최우수상",
    summary:
      "협소 골목길을 빠르게 돌파해 다양한 장비를 전달하고 전개를 돕는 무인 로봇 아이디어로 수상했습니다.",
    images: [
      {
        src: "assets/awards/ip-mobility-award.jpg",
        alt: "IP & 모빌리티 융합 디자인 경진대회 최우수상 사진",
        caption: "최우수상 관련 사진",
      },
    ],
  },
  "industry-challenge": {
    title: "산학프로젝트챌린지 본선 참가 경험",
    summary: "산학프로젝트챌린지 본선 참가 활동 증명 자료입니다.",
    images: [
      {
        src: "assets/awards/industry-project-challenge.jpg",
        alt: "산학프로젝트챌린지 활동 증명서",
        caption: "산학프로젝트챌린지 활동 증명서",
      },
    ],
  },
  "excellent-paper": {
    title: "항공우주시스템공학회 추계학술대회 우수발표 논문 수상",
    summary: "2025년 항공우주시스템공학회 추계학술대회 우수발표 논문 수상 및 발표 사진입니다.",
    images: [
      {
        src: "assets/awards/excellent-paper-award.jpg",
        alt: "우수발표 논문상 사진",
        caption: "우수발표 논문상",
      },
      {
        src: "assets/awards/excellent-paper-presentation.jpg",
        alt: "우수발표 논문 발표 사진",
        caption: "학술대회 발표 사진",
      },
    ],
  },
  aiaa: {
    title: "AIAA Scitech 구두 발표",
    summary: "AIAA Scitech 2026 구두 발표 관련 사진과 발표 자료입니다.",
    images: [
      {
        src: "assets/awards/aiaa-presentation-photo.jpg",
        alt: "AIAA Scitech 구두 발표 사진",
        caption: "AIAA 발표 사진",
      },
      {
        src: "assets/awards/aiaa-presentation-slide.png",
        alt: "AIAA Scitech 발표 자료",
        caption: "AIAA 발표 자료",
      },
    ],
  },
};

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem("portfolio-theme", theme);
}

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeButton.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

function setDialogText(parent, selector, value) {
  parent.querySelector(selector).textContent = value;
}

function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  setDialogText(dialog, ".dialog-category", project.category);
  setDialogText(dialog, "#dialog-title", project.title);
  setDialogText(dialog, ".dialog-summary", project.summary);
  setDialogText(dialog, ".dialog-problem", project.problem);
  setDialogText(dialog, ".dialog-impact", project.impact);

  const featureList = dialog.querySelector(".dialog-features");
  featureList.replaceChildren(
    ...project.features.map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }),
  );

  const stackList = dialog.querySelector(".dialog-stack");
  stackList.replaceChildren(
    ...project.stack.map((skill) => {
      const item = document.createElement("span");
      item.textContent = skill;
      return item;
    }),
  );

  dialog.showModal();
}

function openPaper(paperId) {
  const paper = papers[paperId];
  if (!paper) return;

  setDialogText(paperDialog, ".paper-dialog-category", paper.category);
  setDialogText(paperDialog, "#paper-dialog-title", paper.title);
  setDialogText(paperDialog, ".paper-dialog-summary", paper.summary);
  setDialogText(paperDialog, ".paper-dialog-abstract", paper.abstract);
  setDialogText(paperDialog, ".paper-dialog-publication", paper.publication);

  const contributionList = paperDialog.querySelector(".paper-dialog-contribution");
  contributionList.replaceChildren(
    ...paper.contribution.map((itemText) => {
      const item = document.createElement("li");
      item.textContent = itemText;
      return item;
    }),
  );

  const keywordList = paperDialog.querySelector(".paper-dialog-keywords");
  keywordList.replaceChildren(
    ...paper.keywords.map((keyword) => {
      const item = document.createElement("span");
      item.textContent = keyword;
      return item;
    }),
  );

  const paperLink = paperDialog.querySelector(".paper-link");
  if (paper.url) {
    paperLink.href = paper.url;
    paperLink.hidden = false;
  } else {
    paperLink.hidden = true;
  }

  paperDialog.showModal();
}

function openAward(awardId) {
  const award = awards[awardId];
  if (!award) return;

  setDialogText(awardDialog, "#award-dialog-title", award.title);
  setDialogText(awardDialog, ".award-dialog-summary", award.summary);

  const gallery = awardDialog.querySelector(".award-gallery");
  gallery.replaceChildren(
    ...award.images.map((image) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const caption = document.createElement("figcaption");

      img.src = image.src;
      img.alt = image.alt;
      caption.textContent = image.caption;

      figure.append(img, caption);
      return figure;
    }),
  );

  awardDialog.showModal();
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
});

document.querySelectorAll(".paper-entry").forEach((item) => {
  item.addEventListener("click", () => openPaper(item.dataset.paper));
});

document.querySelectorAll(".award-trigger").forEach((item) => {
  item.addEventListener("click", () => openAward(item.dataset.award));
});

closeButton.addEventListener("click", () => dialog.close());
paperCloseButton.addEventListener("click", () => paperDialog.close());
awardCloseButton.addEventListener("click", () => awardDialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

paperDialog.addEventListener("click", (event) => {
  if (event.target === paperDialog) {
    paperDialog.close();
  }
});

awardDialog.addEventListener("click", (event) => {
  if (event.target === awardDialog) {
    awardDialog.close();
  }
});
