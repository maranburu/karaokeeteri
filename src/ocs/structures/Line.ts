import { getRandom, multiplyVocals } from "@/ocs/shared/utils";
import Lenigmatic from '@/ocs/structures/Lenigmatic';
import Mamimou from '@/ocs/structures/Mamimou';
import Nofollo from '@/ocs/structures/Nofollo';
import Fumo from '@/ocs/structures/Fumo';
import Paraula from '@/ocs/structures/Paraula';
import Lenigmaticdeldr from '@/ocs/structures/Lenigmaticdeldr';
import Vivimalaera from '@/ocs/structures/Vivimalaera';
import Miro from "@/ocs/structures/Miro";
import Cami from "@/ocs/structures/Cami";

export default class Line {
    static get(emojis: number, vocals: number): string {
        const type = getRandom([
            'enigm',
            'enigmdr',
            'fumo',
            'mamimou',
            'nofollo',
            'vivimalaera',
            'paraula',
            'paraula', // +prob 
            'miro',
            'cami'
        ]);
        let newLine = '';
        switch(type) {
            case 'enigm':
                newLine = new Lenigmatic(emojis).print();
                break;
            case 'enigmdr':
                newLine = new Lenigmaticdeldr(emojis).print();
                break;
            case 'fumo':
                newLine = new Fumo(emojis).print();
                break;
            case 'mamimou':
                newLine = new Mamimou(emojis).print();
                break;
            case 'nofollo':
                newLine = new Nofollo(emojis).print();
                break;
            case 'paraula':
                newLine = new Paraula().print();
                break;
            case 'vivimalaera':
                newLine = new Vivimalaera().print();
                break;
            case 'miro':
                newLine = new Miro().print();
                break;
            case 'cami':
                newLine = new Cami().print();
                break;
            default:
                break;
        }

        newLine = multiplyVocals(newLine, vocals);
        newLine = newLine.replace("l\' ", "l\'");
        newLine = newLine.replace("L\' ", "L\'");

        return newLine;
    }
}