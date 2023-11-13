import { Quotes } from "./Quotes";
import styled from "styled-components";

const quotLength = Quotes.length;
const randNum = Math.floor(Math.random() * quotLength);

const quoteById = Quotes.find((q) => q.id === randNum);
const quoteText = `"${quoteById.quote}"`;
const quoteAuthor = quoteById.author;
console.log(quoteText, quoteAuthor);

export const Quote = () => {
  return (
    <Wrapper>
      <div className="quote-section">
        <p className="quote-text">{quoteText}</p>
        <p className="quote-text">{quoteAuthor}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .quote-text {
    font-style: italic;
    margin-right: 120px;
    text-align: end;
  }
  .quote-section {
    background-color: hsl(19, 15%, 28%);
    color: white;
    height: 70px;
    padding: 5px;
    margin-top: 80px;
    padding: 20px;
    opacity: 0.7;
    font-size: 17px;
    letter-spacing: 0.07em;
  }

  @media (max-width: 675px) {
    .quote-section {
      height: 100px;
    }
    .quote-text {
      margin-right: 2em;
      margin-bottom: 1.5em;
    }
  }
`;
