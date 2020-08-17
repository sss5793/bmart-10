type KeyName = {
  [name: string]: string | KeyName;
};

type CategoryType = {
  [name: string]: string | KeyName | CategoryType;
};

export const KEY_NAME: any = {
  bread: {
    name: "빵 시리얼 잼",
    subCategory: {
      soup: { name: "국 탕 찌개" },
      cook: { name: "요리 반찬" },
    },
  },
  egg: {
    name: "정육 수산 계란",
    subCategory: {
      cow: { name: "소 돼지고기" },
      chicken: { name: "닭 오리 계란" },
      fish: { name: "수산 건어물 김" },
      tofu: { name: "두부 콩나물" },
      rice: { name: "쌀" },
    },
  },
  "hot-dog": { name: "분식 야식" },
  icecream: { name: "아이스크림" },
  "meal-kit": { name: "밀키트" },
  milk: { name: "우유 유제품" },
  salad: { name: "과일 샐러드" },
  snacks: { name: "과자 초콜릿" },
  soap: { name: "헤어 바디 세안" },
  "three-lines": { name: "더보기" },
};
