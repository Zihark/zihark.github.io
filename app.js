let counter = () => {
    let value = 0;
    return {
      get_value : () => value,
      increment_value : () => value += 1
    }
  };