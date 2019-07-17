import { Translate } from '@google-cloud/translate';
import tokenizer from 'sbd';

// Instantiates a client
const translate = new Translate(
  {
    projectId: 'translator-freq', //eg my-project-0o0o0o0o'
    keyFilename: 'Translator-0e439dbd289d.json' //eg my-project-0fwewexyz.json
  }
);
// The text to translate
const text = 'Change is hard. Changing careers while holding a 9–5 can feel down right impossible at times. It requires a great amount of discipline, motivation, inspiration, and most importantly, courage.';

// The target language
const target = 'pt-br';

const func = async () => {
  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  const sentences = tokenizer.sentences(translation, {});
  console.log(`Text: ${text}`);
  console.log('Translation:');
  console.log(sentences);
}

func();