import styled, { css } from 'styled-components';

const StyledOrdersFilter = styled.div`
  ${(props) => {
    const {
      theme: { palette },
    } = props;
    return css`
      min-height: 100vh;
      position: relative;
      display: flex;
      justify-content: center;

      &:before {
        display: block;
        height: 100%;
        width: 100%;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(91, 0, 209, 0.6);
        z-index: -9;
      }

      .background {
        height: 100vh;
        position: fixed;
        transform-origin: top left;
        z-index: -10;

        svg {
          min-height: 100vh;
        }
      }

      .dashboard__content {
        width: 85vw;
        height: fit-content;
        display: grid;
        grid-template-rows: auto 1fr;
        margin-top: 28vh;
        border-radius: 15px;
        overflow: hidden;
        /* animation: doctorsDashboard__expand 0.6s ease-in forwards 0.2s; */

        .content__wrapper {
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          overflow: hidden;

          .dashboard__list,
          .dashboard__details,
          .dashboard__add,
          .dashboard__edit {
            height: 100%;
            background: #f5f6fa;
          }
        }
      }

      /* ANIMATIONS*/
      @keyframes ordersDashboard__expand {
        from {
          width: 0%;
        }
        to {
          width: 85%;
        }
      }
    `;
  }}
`;

StyledOrdersFilter.displayName = 'StyledOrdersFilter';

export default StyledOrdersFilter;
