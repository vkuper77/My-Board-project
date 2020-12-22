import { DB } from './db'

export async function dbReady() {
  try {
    await DB.init()
    console.log('Database started...')
  } catch (e) {
    console.log('Error: ', e)
  }
}
