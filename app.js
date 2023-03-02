const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
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

function bossAttacksHeroes() {
    let heroSlate = heroes.find(s => s.name == 'Slate Slabrock')
    let heroFlint = heroes.find(f => f.name == 'Flint Ironstag')
    
    let bossDamage = boss.damage
    
}

function updateBossHealth() {

}

function drawBossHealth() {
    let smaug = document.getElementById('health-bar')
    smaug.innerText = boss.maxHealth
}