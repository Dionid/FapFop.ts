export type WaitGroup = {
  value: () => number;
  set: (value: number) => void;
  add: (value?: number) => void;
  done: (value?: number) => void;
  subscribe: (fn: (newVal: number, oldVal: number) => unknown) => void;
  wait: (value?: number) => Promise<true>;
  waitUntilOrLess: (value: number) => Promise<true>;
};

const newWaitGroup = (
  initialValue = 0,
  zeroAndGreater = true
): WaitGroup => {
  let value = initialValue;
  const subscribers: ((newVal: number, oldVal: number) => unknown)[] = [];

  const set = (newValue: number) => {
    if (zeroAndGreater && newValue < 0) {
      return;
    }

    const oldVal = value;
    value = newValue;

    for (const subscriber of subscribers) {
      subscriber(newValue, oldVal);
    }
  };

  const subscribe = (fn: (newVal: number, oldVal: number) => unknown) => {
    subscribers.push(fn);
  };

  return {
    value: () => value,
    subscribe,
    set,
    add: (addVal: number = 1) => {
      set(value + addVal);
    },
    done: (doneVal: number = 1) => {
      set(value - doneVal);
    },
    wait: async (valBecame: number = 0): Promise<true> => {
      if (value === valBecame) {
        return true;
      }

      return new Promise((resolve) => {
        subscribe((newVal) => {
          if (newVal === valBecame) {
            resolve(true);
          }
        });
      });
    },
    waitUntilOrLess: async (valBecame: number): Promise<true> => {
      if (value <= valBecame) {
        return true;
      }

      return new Promise((resolve) => {
        subscribe((newVal) => {
          if (newVal <= valBecame) {
            resolve(true);
          }
        });
      });
    },
  };
};

export const WaitGroup = {
  new: newWaitGroup,
};
