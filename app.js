const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        // maxHealth: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        // maxHealth: 50
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function slateAttacksBoss(name) {
    let hero = heroes.find(h => h.name == 'Slate Slabrock')
    let slateDamage = hero.damage
    if (boss.maxHealth <= 100) {
        boss.maxHealth -= slateDamage
        console.log(boss);
    }
    
    drawBossHealth()
}

function flintAttacksBoss(name) {
    let hero = heroes.find(h => h.name == 'Flint Ironstag')
    let flintDamage = hero.damage
    if (boss.maxHealth <= 100) {
        boss.maxHealth -= flintDamage
        console.log(boss);
    }
    drawBossHealth()
}

// function bossAttacksHeroes(heroes) {
//     let damage = 0
//     heroes.filter(hero => hero.name = hero) {

//     }
    
// }

function letsKillSlater() {
    heroes.find(hero => hero.name === 'Slater Slabrock')
    
}

// function updateSlateStatus(heroes) {
//     heroes.forEach(hero => hero.name === 'Slate Slabrock')
//     for (hero.maxHealth = 100; hero.maxHealth <= 100; hero.maxHealth--) {
//         if(hero.maxHealth <= 0) {
//             hero.maxHealth === 0
//         }
//     }
// }

function drawHeroesHealth() {
    let template = ''
    heroes.forEach(hero => {
        template += `${heroes.name}`
    });
    document.getElementById('hero-1').innerHTML = template
    document.getElementById('hero-2').innerHTML = template
}

// drawHeroesHealth() {

// }

function drawBossHealth() {
    let smaug = document.getElementById('health-bar')
    smaug.innerText = boss.maxHealth
}

setInterval(bossAttacksHeroes, 5000)