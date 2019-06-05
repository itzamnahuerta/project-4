const {User, Skill, Interest  } = require('./models');

const main = async () => {

    await User.destroy({
        where:{}
    })

    await Skill.destroy({
        where:{}
    })

    await Interest.destroy({
        where:{}
    })

    const test_user = await User.create({
        first_name: 'la india',
        last_name: 'maria',
        email: 'chisme101@gmail.com',
        password: 'omaiga',
        neighborhood: 'jackson heights',
        borough: 'queens',
        bio: 'I vomit in the bed in the middle of the night jumps off balcony gives owner dead mouse at present then poops',
        availability: 'Sun 10:00 - 13:00, Tue 16:00 - 19:00, Fri 14:00 - 17:00',
        occupation: 'comedian, actor, tamalera'
    });
    const test_skill = await Skill.create({
        skill: 'Illustrator, Pianist, Poet'
    })

    const test_interest = await Interest.create({
        interest: 'Cello, Herbal, Reiki'
    })

    await test_user.addSkill(test_skill)
    await test_user.addInterest(test_interest)
}

async function run() {
    try {
        await main();
    } catch (e) {
        console.error(e);
    } finally {
        await process.exit()
    }
}

run();