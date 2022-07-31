const Brand = require('../models/Brand')
const Material = require('../models/Material')
const Sneakers = require('../models/Sneakers')

const brandMock = require('../mock/brands.json')
const materialsMock = require('../mock/materials.json')
const sneakersMock = require('../mock/sneakers.json')

module.exports = async () => {
    const brands = await Brand.find()
    if (brands.length !== brandMock.lenght) {
        await createInitialEntity(Brand, brandMock)
    }
}

module.exports = async () => {
    const materials = await Material.find()
    if (materials.length !== materialsMock.length) {
        await createInitialEntity(Material, materialsMock)
    }
}

module.exports = async () => {
    const sneakers = await Sneakers.find()
    if (sneakers.length !== sneakersMock.length) {
        await createInitialEntity(Sneakers, sneakersMock)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            }catch (error) {
                return error
            }
        })
    )
}