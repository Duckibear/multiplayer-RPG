
class Character {
     constructor(name, health, strength) {
          this.name = name;
          this.health = health;
          this.strength = strength;
          this.xp = 0;
          this.gold = 10;
          this.key = 1;
     }

     attack(target) {
          if (this.health > 0) {
               const damage = this.strength;
               console.log(`${this.name} attacks ${target.name}! Inflicts ${damage} damage.\n `);
               target.health -= damage;
               if(target.health > 0) {
                    console.log(`${target.name} has ${target.health} HP remaining.\n `);
               } else {
                    target.health = 0;
                    const bonusXP = 15;
                    this.xp += bonusXP;
                    this.gold += 5;
                    this.key += 1;
                    console.log(`${this.name} eliminated ${target.name}. Gained ${bonusXP} bonus XP, ${this.gold} gold, and ${this.key} key(s)!\n `);
                    
                  
               }
          } else {
               console.log(`${this.name} is unable to attack!\n `);
          }
     }

     describe() {
          console.log(`${this.name} has ${this.health} HP, ${this.strength} STR, ${this.xp} XP, ${this.gold} gold, and ${this.key} key(s).\n `);
     }
}


class Enemy {
     constructor(name, health, strength, damage) {
          this.name = name;
          this.health = health;
          this.strength = strength;
          this.damage = damage;
     }

     attack(target) {
          if (this.health > 0) {
               const damage = this.strength;
               console.log(`${this.name} attacks ${target.name}! Inflicts ${damage} damage.\n `);
               target.health -= damage;
               if(target.health > 0) {
                    console.log(`${target.name} has ${target.health} HP remaining.\n `);
               } else {
                    target.health = 0;
                    const bonusXP = 15;
                    this.xp += bonusXP;
                    this.gold += 5;
                    this.key += 1;
                    console.log(`${this.name} eliminated ${target.name}. Gained ${bonusXP} bonus XP, ${this.gold} gold, and ${this.key} key(s)!\n `);
               }
          } else {
               console.log(`${this.name} is unable to attack!\n `);
          }
     }

     defend() {
        
     }
}

     
function describe() {
     return `${this.name} has ${this.health} HP, ${this.strength} STR, ${this.xp} XP, ${this.gold} gold, and ${this.key} key(s).\n `;
}

const aestra = new Character ("Aestra", 500, 50, 30);
const chips = new Character("Chips", 750, 75, 45);

//console.log(aestra.describe());
//console.log(chips.describe());

let monster1 = new Enemy("Giantee", 100, 15, 10);
console.log(`A wild monster has appeared: Are you prepared to fight ${monster1.name}?\n `);
monster1.attack(aestra);
monster1.attack(chips);
aestra.attack(monster1);
chips.attack(monster1);

//console.log(aestra.describe());
//console.log(chips.describe());

let monster2 = new Enemy('Stomper', 150, 25, 10);
console.log(`A wild monster has appeared: Are you prepared to fight ${monster2.name}?\n `);
aestra.attack(monster2);
chips.attack(monster2);
aestra.attack(monster2);


//console.log(aestra.describe());
//console.log(chips.describe());

