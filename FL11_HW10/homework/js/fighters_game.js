function Fighter (hero) {
  this.getName = () => hero.name;
  this.getDamage = () => hero.damage;
  this.getAgility = () => hero.agility;
  this.getHealth = () => hero.hp;
  const start_hp = hero.hp;
  this.wins = 0;
  this.losses = 0;
  this.getWins = () => this.wins;
  this.getLosses = () => this.losses;
 

  this.attack = function(fight) {
    const koef = 100;
    let agility_koef = parseInt( Math.random()*koef );
    if (agility_koef > fight.getAgility()) {
      fight.dealDamage(this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${fight.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }
  this.logCombatHistory = function() {
    console.log(`Name: ${hero.name}, Wins: ${this.wins}, Losses: ${this.losses}`);
  }

  this.heal = function(hp_regen) {
    hero.hp += hp_regen;
    if(hero.hp > start_hp){
      hero.hp = start_hp;
    }
  }

  this.dealDamage = function(hp_damage) {
    if(hero.hp < hp_damage){
      hero.hp = 0;
    } else{
      hero.hp -= hp_damage;
    }
  }
  this.addWin = function() {
    this.wins = this.getWins() + 1;
  }

  this.addLoss = function() {
      this.losses = this.getLosses() + 1;
  }
}

let death = 0;

function battle (hero1, hero2) {
  if(hero1.getHealth() <= death || hero2.getHealth() <= death){
    console.log('One fighter has 0 HP. Battle did not start!');
  } else{
    while (hero1.getHealth() > death && hero2.getHealth() > death) {
        hero1.attack(hero2);
        hero2.attack(hero1);

        if (hero1.getHealth() === death & hero2.getHealth() > death) {
          hero1.addLoss();
          hero2.addWin();
          console.log(`${hero2.getName()} winner`);
          console.log(`${hero1.getName()} is dead.`);

        } else if (hero2.getHealth() === death & hero1.getHealth() > death ){
          hero1.addWin();
          hero2.addLoss();
          console.log(`${hero1.getName()} winner`);
          console.log(`${hero2.getName()} is dead.`);
        }
    }
  }
}

function HP_after_battle (Hero_hp_status) {
  console.log(`Name: ${Hero_hp_status.getName()}, HP ${Hero_hp_status.getHealth()}`);
}

const Thanos = new Fighter({name: 'Thanos', damage: 25, agility: 20, hp: 100});
const Iron_man = new Fighter({name: 'Iron_man', damage: 20, agility: 40, hp: 100});
