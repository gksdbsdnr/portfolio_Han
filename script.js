const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const dialog = document.querySelector(".project-dialog");
const closeButton = document.querySelector(".dialog-close");
const paperDialog = document.querySelector(".paper-dialog");
const paperCloseButton = document.querySelector(".paper-dialog-close");
const awardDialog = document.querySelector(".award-dialog");
const awardCloseButton = document.querySelector(".award-dialog-close");
const skillDialog = document.querySelector(".skill-dialog");
const skillCloseButton = document.querySelector(".skill-dialog-close");

const projects = {
  "drone-coder": {
    category: "충청북도 교육청",
    title: "드론코더300",
    summary:
      "드론과 코딩 교육을 연결해 학생들이 무인항공기 구조와 제어 개념을 실습할 수 있도록 구성한 교육 과제입니다.",
    problem:
      "드론 교육은 하드웨어 조립, 센서 이해, 코딩 제어가 함께 필요해 초심자가 단계적으로 접근하기 어렵습니다.",
    features: [
      "아두이노 기반 드론 실습 구성",
      "드론 동작 원리와 코딩 교육 흐름 정리",
      "교육 현장에서 활용 가능한 실습 중심 콘텐츠 구성",
    ],
    stack: ["Arduino", "Drone", "Education", "UAV"],
    impact: "무인항공기와 코딩을 함께 경험할 수 있는 교육형 프로젝트 수행 경험을 쌓았습니다.",
  },
  "ligdna-swarm": {
    category: "LIGDNA",
    title: "군집 무인기 표적인식",
    summary:
      "군집 무인기 환경에서 표적 인식 기술을 연구하고, 임무 수행에 필요한 인식 흐름을 검토한 과제입니다.",
    problem:
      "군집 무인기는 여러 기체가 동시에 운용되기 때문에 표적을 안정적으로 인식하고 정보를 활용하는 구조가 중요합니다.",
    features: [
      "군집 무인기 기반 표적인식 시나리오 검토",
      "객체 인식 기술의 무인기 임무 적용 가능성 분석",
      "인식 결과를 임무 수행 흐름과 연결하는 구조 정리",
    ],
    stack: ["UAV Swarm", "Target Recognition", "Computer Vision", "AI"],
    impact: "방산 분야 무인 시스템에서 객체 인식 기술이 활용되는 방향을 이해하고 연구 경험을 확장했습니다.",
  },
  "etri-aam": {
    category: "ETRI",
    title: "GNSS-denied 환경에서 지능형 AAM 영상 항법 기술조사 및 구현",
    summary:
      "GNSS 사용이 제한된 환경에서 AAM이 영상 기반으로 항법 정보를 확보할 수 있는 기술을 조사하고 구현한 과제입니다.",
    problem:
      "도심 환경에서는 GNSS 신호가 불안정하거나 제한될 수 있어 영상 기반 항법과 가상 환경 검증이 필요합니다.",
    features: [
      "GNSS-denied 환경의 AAM 영상 항법 기술 조사",
      "가상 환경 구현 및 영상 기반 항법 흐름 검토",
      "PX4, Python, Unreal Engine 기반 구현 경험",
    ],
    stack: ["PX4", "Python", "Unreal Engine", "AAM"],
    impact: "AAM 영상 항법 기술의 구현 흐름과 가상 환경 기반 검증 경험을 확보했습니다.",
  },
  "defense-sw": {
    category: "산자부",
    title: "항공방산SW인력양성사업",
    summary:
      "항공방산 소프트웨어 분야에서 요구되는 개발, 시뮬레이션, 시스템 이해 역량을 강화한 인력양성 과제입니다.",
    problem:
      "항공방산 분야는 비행 제어, 인식, 시뮬레이션, 소프트웨어 안전성을 함께 이해하는 융합형 역량이 필요합니다.",
    features: [
      "항공방산 소프트웨어 관련 교육 및 실습 참여",
      "무인항공기와 방산 SW 적용 분야 이해",
      "연구 과제와 발표 경험을 통한 실무형 역량 강화",
    ],
    stack: ["Aerospace", "Defense SW", "Simulation", "UAV"],
    impact: "항공방산 SW 분야로 확장 가능한 연구 경험과 실무형 문제 해결 역량을 정리했습니다.",
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

const skills = {
  matlab: {
    title: "MATLAB / Simulink",
    summary:
      "비행 동역학 해석, 제어기 설계, 시뮬레이션 검증에 활용한 핵심 도구입니다.",
    experience: [
      "비행 동역학 및 제어 과목에서 항공기 모델링과 제어기 설계 수행",
      "Simulink 기반 블록 다이어그램으로 시스템 응답 확인",
      "실험 결과를 그래프와 수치로 정리해 성능 비교",
    ],
    tags: ["Flight Dynamics", "Control", "Simulation", "Modeling"],
    video: "",
    videoCaption: "MATLAB / Simulink 시뮬레이션 영상",
  },
  python: {
    title: "Python",
    summary:
      "실험 데이터 정리, 결과 분석, 자동화 스크립트 작성에 활용합니다.",
    experience: [
      "객체 탐지 실험 결과 정리와 데이터 처리",
      "반복 실험 파일 관리 및 분석 자동화",
      "시각화와 리포트 작성 보조 도구로 활용",
    ],
    tags: ["Data Processing", "Automation", "Analysis"],
    video: "",
    videoCaption: "Python 기반 실험 자동화 영상",
  },
  ardupilot: {
    title: "Ardupilot",
    summary:
      "무인항공기 제어 시스템과 오픈소스 비행 제어 구조를 이해하고 운용하는 데 활용했습니다.",
    experience: [
      "드론 및 무인 시스템 프로젝트에서 비행 제어 구조 학습",
      "미션 수행 흐름과 파라미터 기반 제어 개념 정리",
      "PX4와 함께 UAV 제어 시스템 비교 경험",
    ],
    tags: ["UAV", "Autopilot", "Mission", "Flight Control"],
    video: "",
    videoCaption: "Ardupilot 운용 또는 비행 테스트 영상",
  },
  px4: {
    title: "PX4",
    summary:
      "UAV/AAM 영상 항법 구현과 가상 환경 연동 과정에서 활용한 비행 제어 플랫폼입니다.",
    experience: [
      "GNSS-denied 환경에서 영상 항법 기술 조사 및 구현 경험",
      "가상 환경과 비행 제어 시스템 연동 흐름 이해",
      "시뮬레이션 기반 비행 검증 과정 수행",
    ],
    tags: ["PX4", "AAM", "Simulation", "Navigation"],
    video: "",
    videoCaption: "PX4 시뮬레이션 또는 비행 연동 영상",
  },
  "data-analysis": {
    title: "데이터 분석",
    summary:
      "가상 환경 데이터셋, 객체 인식 결과, 모델 성능을 비교 분석하는 데 활용했습니다.",
    experience: [
      "가상 환경 데이터셋 구성별 객체 인식 성능 비교",
      "YOLOv11 및 TensorRT 최적화 결과 분석",
      "실험 결과를 논문과 발표 자료 형태로 정리",
    ],
    tags: ["Dataset", "Object Detection", "TensorRT", "Performance"],
    video: "",
    videoCaption: "객체 탐지 또는 성능 분석 결과 영상",
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

const modalDialogs = [dialog, paperDialog, awardDialog, skillDialog];

function openModal(modal) {
  if (!modal.open) {
    history.pushState({ portfolioModal: true }, "");
    modal.showModal();
  }
}

function closeModal(modal, updateHistory = true) {
  if (modal.open) {
    modal.close();
  }

  if (updateHistory && history.state?.portfolioModal) {
    history.back();
  }
}

function closeOpenModals(updateHistory = true) {
  modalDialogs.forEach((modal) => {
    if (modal.open) {
      modal.close();
    }
  });

  if (updateHistory && history.state?.portfolioModal) {
    history.back();
  }
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

  openModal(dialog);
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

  openModal(paperDialog);
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

  openModal(awardDialog);
}

function openSkill(skillId) {
  const skill = skills[skillId];
  if (!skill) return;

  setDialogText(skillDialog, "#skill-dialog-title", skill.title);
  setDialogText(skillDialog, ".skill-dialog-summary", skill.summary);

  const experienceList = skillDialog.querySelector(".skill-dialog-experience");
  experienceList.replaceChildren(
    ...skill.experience.map((itemText) => {
      const item = document.createElement("li");
      item.textContent = itemText;
      return item;
    }),
  );

  const tagList = skillDialog.querySelector(".skill-dialog-tags");
  tagList.replaceChildren(
    ...skill.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    }),
  );

  const videoWrap = skillDialog.querySelector(".skill-video-wrap");
  const video = skillDialog.querySelector(".skill-dialog-video");
  const caption = skillDialog.querySelector(".skill-video-caption");

  video.pause();
  video.removeAttribute("src");
  video.load();

  if (skill.video) {
    video.src = skill.video;
    caption.textContent = skill.videoCaption;
    videoWrap.hidden = false;
  } else {
    videoWrap.hidden = true;
  }

  openModal(skillDialog);
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

document.querySelectorAll(".skill-row").forEach((item) => {
  item.addEventListener("click", () => openSkill(item.dataset.skill));
});

closeButton.addEventListener("click", () => closeModal(dialog));
paperCloseButton.addEventListener("click", () => closeModal(paperDialog));
awardCloseButton.addEventListener("click", () => closeModal(awardDialog));
skillCloseButton.addEventListener("click", () => closeModal(skillDialog));

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeModal(dialog);
  }
});

paperDialog.addEventListener("click", (event) => {
  if (event.target === paperDialog) {
    closeModal(paperDialog);
  }
});

awardDialog.addEventListener("click", (event) => {
  if (event.target === awardDialog) {
    closeModal(awardDialog);
  }
});

skillDialog.addEventListener("click", (event) => {
  if (event.target === skillDialog) {
    closeModal(skillDialog);
  }
});

skillDialog.addEventListener("close", () => {
  const video = skillDialog.querySelector(".skill-dialog-video");
  video.pause();
});

window.addEventListener("popstate", () => {
  closeOpenModals(false);
});
