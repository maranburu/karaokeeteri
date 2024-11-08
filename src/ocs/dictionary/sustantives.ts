import Sustantive from "../wordTypes/Sustantive.js";

const sustantives = [
    'gas|m',
    'jofre|m',
    'funkopop|m',
    'manglar|m',
    'comboi|m',
    'obelisc|m',
    'gabufa|f', 
    'gabufa ranupi|m', 
    'ñocla|f',
    'flow|m',
    'piti|m',
    'vaper|m',
    'swing|m',
    'superilla|f',
    'budellin|m',
    'mami|f',
    'skibidi|m',
    'humà|m',
    'clec clec boing|m',
    'golem|m',
    'kefta|f',
    'mambo|m',
    'plic ploc|m',
    'boing|m',
    'herba|f',
    'blon|m',
    'monster|m',
    'catarsi|f',
    'jumanji|m',
    'hominid|m',
    'fibló|m',
    'mosca|f',
    'babu gorman|m',
    'babu nyepi|m',
    'maragda|f',
    'manicura|f',
    'prisma|m',
    'tetrahedre|m',
    'piràmide|f',
    'mandolina|f',
    'gòndola|f',
    'semen|m',
    'casa|f',
    'closca|f',
    'mandarina|f',
    'crisàlida|f',
    'esfera|f',
    'cúpula|f',
    'membrana|f',
    'batuta|f',
    'fruita|f',
    'amistat|f',
    'ànima|f',
    'catifa|f',
    'meritxell|f',
    'grasa|f',
    'joguina|f',
    'tulipa|f',
    'carrousel|m',
    'gofre|m',
    'mantega|f',
    'galibo|m',
    'Micralax|m',
    'dreamtime|m',
    'Benadryl|m',
    'bitter kas|m',
    'marbre|m',
    'talaiot|m',
    'motoret|m',
    'melindro|m',
    'melindret|m',
    'popola|f',
    'dongle|m',
    'gamba|f',
    'sémola|f',
    'civada|f',
    'molsa|f',
    'dogma|m',
    'catedral|f'
].map(s => new Sustantive(
    s.split('|')[0],
    s.split('|')[1],
    's'
))

export {
    sustantives,
}