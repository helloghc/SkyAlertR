/* Libraries */
import styled from 'styled-components';
import { device } from "utils/media";

const GroupCheck = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: center;
  @media ${device.mobileS} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media ${device.tablet} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media ${device.laptop} {
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
  }
  @media ${device.laptopL} {
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
  }
  @media ${device.desktop} {
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
  }
`;

export default GroupCheck;
