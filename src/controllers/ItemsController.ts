import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsController{
    async list(request: Request, response: Response){
        const items = await knex('items').select('*')
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://127.0.0.1:8888/uploads/${item.image}`
            }
        })
        return response.status(200).json(serializedItems)
    }
}

export default ItemsController