export const counterActions = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',
  INCREMENT_IF_ODD: 'INCREMENT_IF_ODD',


  decrement: () => ({
    type: counterActions.DECREMENT
  }),

  increment: () => ({
    type: counterActions.INCREMENT
  }),

  incrementAsync: () => ({
    type: counterActions.INCREMENT_ASYNC
  }),

  incrementIfOdd: () => ({
    type: counterActions.INCREMENT_IF_ODD
  })
};
