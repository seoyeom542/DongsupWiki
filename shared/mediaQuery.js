export const BREAK_POINT = 1150;
export default {
  mobile: `@media only screen and (max-width: ${BREAK_POINT}px)`,
  desktop: `@media only screen and (min-width: ${BREAK_POINT + 1}px)`,
  BREAK_POINT: BREAK_POINT,
};
