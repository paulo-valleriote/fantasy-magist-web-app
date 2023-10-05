import { CharacterProps } from "@/contexts/CharacterContext";


export const characters: CharacterProps[] = [
  {
    id: 1,
    name: 'Alastor',
    level: 2,
    armorClass: 14,
    background: 'Charlatan',
    class: 'Rogue',
    healthPoints: 24,
    hitDice: 6,
    race: 'Human',
    height: '1.70m',
    weight: '72kg',
    attributes: {
      strenght: 10,
      dexterity: 18,
      constitution: 12,
      intelligence: 12,
      wisdom: 13,
      charisma: 14
    }
  },
  {
    id: 2,
    name: 'Boris',
    level: 4,
    armorClass: 16,
    background: 'Folkhero',
    class: 'Druid',
    healthPoints: 48,
    hitDice: 6,
    race: 'Elf',
    height: '1.78m',
    weight: '67kg',
    attributes: {
      strenght: 10,
      dexterity: 12,
      constitution: 14,
      intelligence: 12,
      wisdom: 18,
      charisma: 14
    }
  },
  {
    id: 3,
    name: 'Xerxes',
    level: 1,
    armorClass: 16,
    background: 'Soldier',
    class: 'Fighter',
    healthPoints: 16,
    hitDice: 8,
    race: 'Human',
    height: '1.80m',
    weight: '83kg',
    attributes: {
      strenght: 18,
      dexterity: 12,
      constitution: 14,
      intelligence: 10,
      wisdom: 12,
      charisma: 11
    }
  }
]