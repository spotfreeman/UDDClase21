import mongoose from 'mongoose'

export const db = async () => {
    try {
        await mongoose.connect(process.env.DB_NAME, {

        })
        console.log(`Connected to DB!!!!!!!!!`)
    } catch (error) {
        console.log(`Error en archivo db.config`)
    }
}