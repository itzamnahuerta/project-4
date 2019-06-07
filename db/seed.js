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

    const user_1 = await User.create({
        first_name: 'Itzamna',
        last_name: 'Huerta',
        email: 'test@gmail.com',
        password: 'test',
        neighborhood: 'Jackson Heights',
        borough: 'Queens',
        bio: 'I vomit in the bed in the middle of the night jumps off balcony gives owner dead mouse at present then poops',
        availability: 'Sun 10:00 - 13:00, Tue 16:00 - 19:00, Fri 14:00 - 17:00',
        occupation: 'comedian, actor, tamalera'
    });
    const user_1_skill = await Skill.create({
        skill: 'Illustrator, Pianist, Poet'
    })

    const user_1_interest = await Interest.create({
        interest: 'Cello, Herbal, Reiki'
    })

    const user_2 = await User.create({
        first_name: 'Tiglman',
        last_name: 'Goodman',
        email: 'test2@gmail.com',
        password: 'test2',
        neighborhood: 'Bed-Sty',
        borough: 'Brooklyn',
        bio: 'I vomit in the bed in the middle of the night jumps off balcony gives owner dead mouse at present then poops',
        availability: 'Sun 10:00 - 13:00, Tue 16:00 - 19:00, Fri 14:00 - 17:00',
        occupation: 'Poet, English Teacher'
    });
    const user_2_skill = await Skill.create({
        skill: 'DJ, Florist, Rapper'
    })

    const user_2_interest = await Interest.create({
        interest: 'Life Drawing,  D3.js, Data Analytics'
    })

    await user_1.addSkill(user_1_skill)
    await user_1.addInterest(user_1_interest)

    await user_2.addSkill(user_2_skill)
    await user_2.addInterest(user_2_interest)
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