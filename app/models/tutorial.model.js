module.exports = (sequilze, Sequelize) =>{
    const Tutorial = sequilze.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })

    return Tutorial
}