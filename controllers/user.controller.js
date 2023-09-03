import { User } from '../models/User.model.js'
//import bcrypt from 'bcrypt'


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

export const updateUser = async (req, res) => {
    try {
        const userRut = req.params.rut
        const updateData = req.body

        const updateUser = await User.findOneAndUpdate({ rut: userRut }, updateData, { new: true })

        if (!updateUser) {
            return res.status(404).json({ message: 'Usuario no encontrado.' })
        }
        res.status(202).json({ message: `Usuario ${updateUser.nombre} ${updateUser.apellido} actualizado.` })

    } catch (error) {
        res.status(500).json({ message: 'No se actualizo el usuario' })
    }
}

export const deleteUserByRut = async (req, res) => {
    try {
        const userRut = req.params.rut
        const removeUser = await User.findOneAndDelete({ rut: userRut })
        if (!removeUser) {
            return res.status(404).json({ message: 'Usuario no encontrado para eliminar' })
        }

        res.status(202).json({ message: `Usuario ${removeUser.nombre} ${removeUser.apellido} fue eliminado.` })
    } catch (error) {
        res.status(500).json({ message: 'Usuario no eliminado' })
    }
}

