import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants';

const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
    dangerouslyAllowBrowser: true // Enable usage in browser (not recommended for production)
});

export default openai;