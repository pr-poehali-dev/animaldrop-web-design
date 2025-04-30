
import { Case } from '@/components/CaseCard';

// Моковые данные для кейсов
export const mockCases: Case[] = [
  {
    id: "case-1",
    name: "Кейс Хищника",
    price: 500,
    description: "Испытай свою удачу и получи шанс обзавестись легендарными скинами!",
    image: "https://source.unsplash.com/400x300/?case,weapon",
    animal: "wolf",
    rarity: "legendary",
    content: [
      { name: "AWP | Дракон", rarity: "immortal", chance: 0.5 },
      { name: "Нож | Кровавая паутина", rarity: "ancient", chance: 2 },
      { name: "AK-47 | Вулкан", rarity: "mythical", chance: 8 },
      { name: "M4A4 | Азимов", rarity: "legendary", chance: 15 }
    ]
  },
  {
    id: "case-2",
    name: "Кейс Засады",
    price: 250,
    description: "Быстрые и смертоносные скины ждут тебя!",
    image: "https://source.unsplash.com/400x300/?case,pistol",
    animal: "fox",
    rarity: "mythical",
    content: [
      { name: "Desert Eagle | Пламя", rarity: "ancient", chance: 3 },
      { name: "Glock-18 | Градиент", rarity: "legendary", chance: 10 },
      { name: "USP-S | Убийство", rarity: "mythical", chance: 20 },
      { name: "P250 | Ядерная угроза", rarity: "rare", chance: 30 }
    ]
  },
  {
    id: "case-3",
    name: "Кейс Тяжеловеса",
    price: 750,
    description: "Мощное оружие для настоящих зверей!",
    image: "https://source.unsplash.com/400x300/?case,heavy",
    animal: "bear",
    rarity: "immortal",
    content: [
      { name: "Negev | Силовое поле", rarity: "immortal", chance: 1 },
      { name: "M249 | Изумруд", rarity: "rare", chance: 20 },
      { name: "XM1014 | Эфириум", rarity: "mythical", chance: 15 },
      { name: "Нова | Ржавый металл", rarity: "common", chance: 40 }
    ]
  },
  {
    id: "case-4",
    name: "Кейс Мудреца",
    price: 350,
    description: "Скины с мистическим прошлым и удивительной силой.",
    image: "https://source.unsplash.com/400x300/?case,mystical",
    animal: "owl",
    rarity: "rare",
    content: [
      { name: "SSG 08 | Лунный свет", rarity: "mythical", chance: 12 },
      { name: "Famas | Нейронная сеть", rarity: "rare", chance: 25 },
      { name: "Galil AR | Эхо", rarity: "uncommon", chance: 35 },
      { name: "AUG | Акаша", rarity: "legendary", chance: 5 }
    ]
  },
  {
    id: "case-5",
    name: "Кейс Скорости",
    price: 300,
    description: "Стремительные скины для быстрых побед.",
    image: "https://source.unsplash.com/400x300/?case,speed",
    animal: "cheetah",
    rarity: "ancient",
    content: [
      { name: "Mac-10 | Сталкер", rarity: "ancient", chance: 3 },
      { name: "MP9 | Звёздный штурм", rarity: "rare", chance: 20 },
      { name: "UMP-45 | Призрак", rarity: "legendary", chance: 7 },
      { name: "MP7 | Блиц", rarity: "uncommon", chance: 40 }
    ]
  },
  {
    id: "case-6",
    name: "Кейс Королевства",
    price: 600,
    description: "Королевские скины для настоящих властителей поля боя.",
    image: "https://source.unsplash.com/400x300/?case,royal",
    animal: "lion",
    rarity: "immortal",
    content: [
      { name: "Нож | Мраморный градиент", rarity: "immortal", chance: 0.8 },
      { name: "USP-S | Королевский декор", rarity: "legendary", chance: 12 },
      { name: "M4A1-S | Гипербест", rarity: "mythical", chance: 18 },
      { name: "AWP | Электрический улей", rarity: "ancient", chance: 5 }
    ]
  }
];

export default mockCases;
