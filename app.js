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

const bossInterval = setInterval(bossAttacksSlate, 5000)

const bossInterval2 = setInterval(bossAttacksFlint, 5000)


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

function bossAttacksSlate() {
    let hero = heroes.find(h => h.name === 'Slate Slabrock')
    if (hero.health <= 0) {
        clearInterval(bossInterval)
    } else {
        hero.health -= 5
    }
    console.log('slate');
    drawHeroesHealth()
}

function bossAttacksFlint() {
    let hero = heroes.find(h => h.name === 'Flint Ironstag')
    if (hero.health <= 0) {
        clearInterval(bossInterval2)
    } else {
        hero.health -= 5
    }
    console.log('flint');
    drawHeroesHealth()
}

// function updateSlateStatus(heroes) {
//     heroes.forEach(hero => hero.name === 'Slate Slabrock')
//     for (hero.maxHealth = 100; hero.maxHealth <= 100; hero.maxHealth--) {
//         if(hero.maxHealth <= 0) {
//             hero.maxHealth == 0
//         }
//     }
// }



function drawHeroesHealth() {
    let template = ''
    heroes.forEach(hero => {
        switch (hero.name) {
            case 'Slate Slabrock':
                document.getElementById('hero-1').innerHTML = hero.health
                break
            case 'Flint Ironstag':
                document.getElementById('hero-2').innerHTML = hero.health
                break
        }
    });
}

// drawHeroesHealth() {

// }

function drawBossHealth() {
    let smaug = document.getElementById('health-bar')
    smaug.innerText = boss.maxHealth
}

