import { atom } from 'recoil';

export const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const myTasteState = atom({
  key: 'myTasteState', // unique ID (with respect to other atoms/selectors)
  default: {
    isTaste: false,
    isOnboarding: false,
    myTastes: [],
  }, // default value (aka initial value)
  effects: [localStorageEffect('myPlan')],
});
