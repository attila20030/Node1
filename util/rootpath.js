import path from 'path'//Beimportáljuk a pathot
import { fileURLToPath } from 'url' 

//Fájl nevét határozza meg
const __filename = fileURLToPath(import.meta.url) 
//Mappát határozza meg
const __dirname = path.dirname(__filename) 
//Rootot állítunk be
const root = path.join(__dirname,'..')

export default root //Importálásnál csak egy dolgot kell berakni és akárhogy elnevezheted