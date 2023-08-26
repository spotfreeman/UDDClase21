import { User } from '../models/User.model.js'


// Ver lista de usuarios
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({ message: 'no se encontraron los usuarios' })
    }
}
// Crear nuevo usuario
export const createUser = async (req, res) => {
    try {
        const newUser = req.body

        const user = new User(newUser)
        const saveUser = await user.save()
        res.status(201).json({ message: `El usuario ${saveUser.nombre} , ${saveUser.apellido} se crearon` })

    } catch (error) {
        res.status(500).json({ message: 'no se creo usuario' })
    }
}