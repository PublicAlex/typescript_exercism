export class DnDCharacter {

  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  constructor() {

    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();


    const constitutionModifier = DnDCharacter.getModifierFor(this.constitution);
    this.hitpoints = 10 + constitutionModifier;
  }


  public static generateAbilityScore(): number {
    const rollDie = (): number => Math.floor(Math.random() * 6) + 1;
    const rolls = [rollDie(), rollDie(), rollDie(), rollDie()];
    rolls.sort((a, b) => a - b);
    return rolls.slice(1).reduce((acc, value) => acc + value, 0);
  }


  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
