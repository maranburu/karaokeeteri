import Adjective from "../wordTypes/Adjective.js";

const adjectives = [
    'indomable|indomable',
    'indòmit|indòmita',
    'eteri|etérea',
    'gaseòs|gaseosa',
    'enigmàtic|enigmatica',
    'liminal|liminal',
    'geològic|geologica',
    'afable|afable',
    'letàrgic|letargica',
    'llànguid|llanguida',
    'macarrònic|macarrònica',
    'lloable|lloable',
    'meravellòs|meravellosa',
    'etern|eterna',
    'antic|antiga',
    'petit|petita',
    'esbelt|esbelta',
    'letal|letal',
    'elegant|elegante',
    'nyigui nyogui|nyigui nyogui',
    'feréstec|feréstega',
    'estimat|estimada',
    'bomba|bomba',
    'simfònic|simfònica',
    'sincrètic|sincrètica',
    'sinàptic|sinàptica',
    'semàntic|semàntica',
    'cromàtic|cromàtica',
    'logarìtmic|logarìtmica',
    'botànic|botànica',
    'farcit|farcida'
].map(a => new Adjective(a))

export {
    adjectives,
}