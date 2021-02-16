import { Testando } from '@src/outro';
import * as dotenv from 'dotenv';
dotenv.config();

const {url} = process.env;

const tt = new Testando('michel');
console.log(`${tt.getTeste()} /n ${url}`)

