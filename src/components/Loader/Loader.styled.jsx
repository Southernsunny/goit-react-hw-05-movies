import styled from '@emotion/styled';

export const LoaderIcon = styled.div`
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;

  & span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #b3cae0;
    border-radius: 50%;
    animation: up-down 0.5s ease-in infinite alternate;
  }

  & span:nth-of-type(2) {
    background: #759acb;
    animation-delay: 0.16s;
  }

  & span:nth-of-type(3) {
    background: #4c8b89;
    animation-delay: 0.32s;
  }

  & span:nth-of-type(4) {
    background: #c19651;
    animation-delay: 0.48s;
  }

  @keyframes up-down {
    0% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(10px);
    }
  }
`;