import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 40,
    min: 8
  },
  wordsPerSentence: {
    max: 25,
    min: 4
  }
});


export default lorem