type HSActions = {
  type: 'hs/setJSON';
  json: Record<string, any>;
};

type HSState = {
  json: Record<string, any>;
};

const initialState: HSState = {
  json: {},
};

const authReducer = (state = initialState, action: HSActions) => {
  switch (action.type) {
    case 'hs/setJSON': {
      return {
        ...state,
        json: action.json,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
