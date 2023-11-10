import styled from "styled-components";

export const Events = () => {
  return (
    <Wrapper>
      <h1>Events</h1>
      <div className="single-event">
        <img
          src="https://i1.sndcdn.com/artworks-wjhimmw5xCPI9CVY-AyiZEg-t500x500.jpg"
          alt="Sofia"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          similique facilis, voluptatum in cupiditate asperiores, dignissimos
          eaque impedit molestiae quisquam at, consectetur beatae minus. Tenetur
          dicta necessitatibus ad dolore cupiditate.
        </p>
      </div>
      <button className="btn">Book</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: hsl(210, 36%, 96%);
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 150px;

  .single-event {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 250px;
      width: 250px;
      border-radius: 10px;
    }
  }
  .btn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-top: 20px;
    border-color: transparent;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
