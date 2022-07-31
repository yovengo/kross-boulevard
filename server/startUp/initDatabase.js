const chalk = require("chalk");

const Brand = require('../models/Brand')
const Material = require('../models/Material')
const Sneakers = require('../models/Sneakers')

const brandMock = require('../mock/brands.json')
const materialsMock = require('../mock/materials.json')
const sneakersMock = require('../mock/sneakers.json')


const findBrand = (brandId, brands) => {
    const brand = brandMock.find((b) => b._id === brandId)
    return brands.find((b) => b.name === brand.name)._id
}

const findMaterials = (materialsIds, materials) => {
    const mater = []
    for (const mat of materialsMock) {
        for (const materialId of materialsIds) {
            if (materialId === mat._id) {
                for (const material of materials) {
                    if (material.name === mat.name) mater.push(material._id)
                }
            }
        }
    }
    return mater
}

module.exports = async () => {
    const brands = await Brand.find()
    if (brands.length !== brandMock.length) {
        await createInitialEntity(Brand, brandMock)
    }
    if (brands && brands.length > 0) {
        console.log(`Brands in DB ${chalk.green('✓')}`)
    } else {
        console.log(`Brands error ${chalk.red('x')}`)
    }

    const materials = await Material.find()
    if (materials.length !== materialsMock.length) {
        await createInitialEntity(Material, materialsMock)
    }
    if (materials && materials.length > 0) {
        console.log(`Materials in DB ${chalk.green('✓')}`)
    }else {
        console.log(`Materials error ${chalk.red('x')}`)
    }

    const sneakers = await Sneakers.find()
    // if (sneakers.length !== sneakersMock.length) {
    //     await Sneakers.collection.drop()
    //     return Promise.all(
    //         sneakersMock.map(async item => {
    //             try {
    //                 delete item._id
    //                 item.brand = findBrand(item.brand, brands)
    //                 item.materials = findMaterials(item.materials, materials)
    //                 const newItem = new Sneakers(item)
    //                 await newItem.save()
    //                 return newItem
    //             } catch (error) {
    //                 return error
    //             }
    //         })
    //     )
    // }
    if (sneakers && sneakers.length > 0) {
        console.log(`Sneakers in DB ${chalk.green('✓')}`)
    }else {
        console.log(`Sneakers error ${chalk.red('x')}`)
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
            } catch (error) {
                return error
            }
        })
    )
}