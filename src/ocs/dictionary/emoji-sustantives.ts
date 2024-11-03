import Sustantive from "../wordTypes/Sustantive.js";

const emoji_sustantives = [
    '🪐|m',
    '🍕|f',
    '🎁|m',
    '🚗|m',
    '👄|f',
    '🕷|f',
    '🍋|f',
    '🐖|m',
    '🎀|m',
    '🚁|m',
    '🍔|f',
    '👟|f',
    '🐟|m',
    '👼|m',
    '🍬|m',
    '👁|m',
    '🌝|f'
].map(s => new Sustantive(
    s.split('|')[0],
    s.split('|')[1],
    's'
))

export {
    emoji_sustantives,
}