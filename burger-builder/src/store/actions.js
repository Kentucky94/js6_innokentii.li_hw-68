import axiosOrders from "../axios-orders";

export const INCREMENT = 'INCREMENTS';
export const DECREMENT = 'DECREMENTS';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const fetchCounterRequest = () => {
  return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = counter => {
  return {type: FETCH_COUNTER_SUCCESS, counter};
};

export const fetchCounterError = error => {
  return {type: FETCH_COUNTER_ERROR, error};
};

// export const incrementCounter = () => {
//   return async dispatch => {
//     let currentCounter = 0;
//
//     await axiosOrders.get('/counter.json').then(response => {
//       currentCounter = response.data;
//     });
//
//     const renewedCounter = currentCounter + 1;
//
//     await axiosOrders.put('/counter.json', renewedCounter).then(response => {
//       dispatch(fetchCounterSuccess(response.data))
//     });
//   }
// };

export const incrementCounter = () => {
  return dispatch => {
    axiosOrders.get('/counter.json').then(response => {
      axiosOrders.put('/counter.json', response.data + 1).then(result => {
        dispatch(fetchCounterSuccess(result.data))
      });
    });
  }
};

export const decrementCounter = () => {
  return async dispatch => {
    let currentCounter = 0;

    await axiosOrders.get('/counter.json').then(response => {
      currentCounter = response.data;
    });

    const renewedCounter = currentCounter - 1;

    await axiosOrders.put('/counter.json', renewedCounter).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    });
  }
};

export const addCounter = amount => {
  return async dispatch => {
    let currentCounter = 0;

    await axiosOrders.get('/counter.json').then(response => {
      currentCounter = response.data;
    });

    const renewedCounter = currentCounter + amount;

    await axiosOrders.put('/counter.json', renewedCounter).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    });
  }
};

export const subtractCounter = amount => {
  return async dispatch => {
    let currentCounter = 0;

    await axiosOrders.get('/counter.json').then(response => {
      currentCounter = response.data;
    });

    const renewedCounter = currentCounter - amount;

    await axiosOrders.put('/counter.json', renewedCounter).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    });
  }
};

export const fetchCounter = () => {
  return dispatch => {
    dispatch(fetchCounterRequest());

    axiosOrders.get('/counter.json').then(response => {
      dispatch(fetchCounterSuccess(response.data))
    }, error => {
      dispatch(fetchCounterError(error))
    })
  }
};



export const postCounter = (currentCounter) => {
  return dispatch => {
    dispatch(fetchCounterRequest());

    axiosOrders.patch('./counter.json', currentCounter).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    })
  }
};

