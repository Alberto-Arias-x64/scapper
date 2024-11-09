import {writeFile, readFile} from "fs/promises"

const rawData = JSON.parse(await readFile('./usersList.json'))
const cleanData = rawData.map(user => {
  const name = JSON.stringify(user.name).replace(/\\n\s+/gm,'').replace(/\"/gm,'')
  const bio = JSON.stringify(user.bio).replace(/\\n\s+/gm,'').replace(/\"/gm,'')
  const url = user.url
  const message = `Hola ${name.split(" ")[0]}!

Soy Jennyfer Amariles, de Amariles UX, una plataforma enfocada en mujeres que quieren aprender y crecer en el mundo del diseño UX. 💡

Ya somos más de 100 mujeres apasionadas por Ux, y estamos creando contenido en formato video para YouTube. Creemos que tu experiencia podría inspirar a muchas más a unirse a esta comunidad. 🚀 Nos encantaría contar con tu historia y perspectiva en nuestro canal para seguir aprendiendo y creciendo juntas.

¿Te gustaría ser parte de este proyecto increíble? ¡Esperamos tu respuesta con muchas ganas! 🙌

Saludos,`
  return {name, bio, url, message}
})

const filterData = cleanData.filter(user => user.bio.toLowerCase().includes('ux'))
const sortedData = filterData.sort((a, b) => a.name.localeCompare(b.name))

await writeFile('./filterList.json', JSON.stringify(sortedData, null, 2))