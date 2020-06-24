export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateChanger = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// export const randomGenerator = () => {
//   let randomNumber = Math.floor(Math.random() * Math.floor(10));
//   return randomNumber;
// };

// export gameWin = () => {
//  if p1starthealth === 0
// }  return "Player 2 wins!"
//  else {
// return "Player 1 wins!"
// }

// ^^ THIS WILL PROBABLY GO IN CLICK ^^