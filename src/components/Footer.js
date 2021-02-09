import styled from "styled-components";

const FooterItem = styled.div`
  ul {
    display: inline-grid;
    grid-auto-flow: row;
    grid-gap: 24px;
    justify-items: center;
    margin: auto;
    list-style: none;
    p {
      margin: 0;
    }
  }

  @media (min-width: 500px) {
    ul {
      grid-auto-flow: column;
    }
  }

  a {
    color: white;
    text-decoration: none;
    box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
  }

  a:hover {
    box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
  }

  li:last-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  li:hover ~ li p {
    animation: wave-animation 0.3s infinite;
  }

  div {
    display: flex;
    height: 10vh;
    width: 100%;
    background-color: #8b9168;
    line-height: 1.3;
    font-family: "Montserrat", sans-serif;
  }

  @keyframes wave-animation {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-15deg);
    }
  }
`;

const Footer = () => {
  return (
    <FooterItem>
      <div>
        <ul>
          <li>
            <a href="https://www.google.com/">Front-end Github</a>
          </li>
          <li>
            <a href="https://www.google.com/">Back-end Github</a>
          </li>
          <li>
            <p>👋</p>
          </li>
        </ul>
      </div>
    </FooterItem>
  );
};

export default Footer;
