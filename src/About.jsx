import styled from "styled-components";
import {
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const URL = "https://www.barnesandnoble.com/";

export const About = () => {
  return (
    <Wrapper>
      <div className="title">About Art Books</div>
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
          commodi, repellendus qui reiciendis nihil laborum unde, id,
          dignissimos tempora corporis nulla mollitia a nisi debitis. Laboriosam
          eius possimus suscipit?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          necessitatibus esse velit obcaecati quo cumque? Vel corrupti dolor
          modi voluptates id cupiditate dolore, quod et, quas iste nobis veniam
          at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          saepe eligendi deserunt rem minima reiciendis architecto et quibusdam,
          eaque velit accusamus enim ullam sit repudiandae asperiores eum
          voluptatibus maiores nihil?
        </p>
      </div>

      <div className="icon-section">
        <a href={URL} target="_blank" rel="noreferrer">
          <FaTwitter className="icons" />
        </a>
        <a href={URL} target="_blank" rel="noreferrer">
          <FaLinkedin className="icons" />
        </a>
        <a href={URL} target="_blank" rel="noreferrer">
          <FaTiktok className="icons" />
        </a>
        <a href={URL} target="_blank" rel="noreferrer">
          <FaInstagram className="icons" />
        </a>
        <a href={URL} target="_blank" rel="noreferrer">
          <FaFacebook className="icons" />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
  letter-spacing: 0.1rem;
  line-height: 30px;

  .title {
    font-size: 25px;
    font-weight: 400;
  }
  p {
    font-size: 20px;
  }
  .about-text {
    margin-top: 50px;
    color: rgb(152, 152, 152);
  }
  .icon-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 70px;
    margin-bottom: 100px;
    margin-left: 50%;
    width: 70px;
    gap: 25px;
  }
  .icon-section a {
    color: black;
  }
`;
