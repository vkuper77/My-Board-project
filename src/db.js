import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('post.db')

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS wineBoard (id INTEGER PRIMARY KEY NOT NULL, date TEXT, wino TEXT NOT NULL, vintage INTEGER NOT NULL, country TEXT NOT NULL, grade TEXT NOT NULL, color TEXT NOT NULL, dryness TEXT NOT NULL, text TEXT NOT NULL, img TEXT,  stars INTEGER NOT NULL, taste1 INTEGER NOT NULL, taste2 INTEGER NOT NULL, taste3 INTEGER NOT NULL, booked INT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM wineBoard',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        )
      })
    })
  }

  static createPost({
    date,
    wino,
    vintage,
    country,
    grade,
    color,
    dryness,
    text,
    img,
    stars,
    taste1,
    taste2,
    taste3,
    booked,
  }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO wineBoard (date, wino, vintage, country, grade, color, dryness, text, img, stars, taste1, taste2, taste3, booked) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            date,
            wino,
            vintage,
            country,
            grade,
            color,
            dryness,
            text,
            img,
            stars,
            taste1,
            taste2,
            taste3,
            0,
          ],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

  static updatePost(post) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE wineBoard SET booked = ? WHERE id = ?',
          [post.booked ? 0 : 1, post.id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static removePost(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM wineBoard WHERE id = ?',
          [id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}
