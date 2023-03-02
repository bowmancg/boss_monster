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



function flintAttacksBoss() {
    let hero = heroes.find(h => h.name == 'Flint Ironstag')
    let flintDamage = hero.damage
    if (boss.maxHealth <= 100) {
        boss.maxHealth -= flintDamage
        console.log(boss);
    }

}

function updateBossHealth(boss) {

}

function drawBossHealth() {
    //NOTE - grab maxHealth
    let smaug = document.getElementById("health-bar")
    // @ts-ignore
    smaug.innerText = boss.maxHealth

    //NOTE - attack the boss
    console.log(maxHealth);
    flintAttacksBoss()
    slateAttacksBoss()
}