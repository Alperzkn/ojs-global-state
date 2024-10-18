import { create } from "zustand";

interface UserState {
  firstName: string;
  lastName: string;
  birthDate?: Date;
  height?: number | null;
  weight?: number | null;
  score: number;
  // aksyionlar
  setFirstName: (payload: string) => void;
  setLastName: (payload: string) => void;
  setBirthDate: (payload: Date) => void;
  setHeight: (payload?: number) => void;
  setWeight: (payload?: number) => void;
  setBmi: (payload?: number) => void;
  clearLastName: () => void;
  clearFirstName: () => void;
  clearHeight: () => void;
  clearWeight: () => void;

  //hesaplanmış değerler
  getAge: () => number | undefined;
  getBmi: () => number | undefined;
  getBmiResult: () =>
    | "Underweight"
    | "Normal"
    | "Overweight"
    | "Obese" 
}

const calculateBmiScore = (height: number, weight: number) => {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  return bmi;
};

export const useUserStore = create<UserState>()((set, get) => ({
  firstName: "Alper",
  lastName: "Özkan",
  setFirstName: (payload) => set({ firstName: payload }),
  setLastName: (payload) => set({ lastName: payload }),
  setBirthDate: (payload) => set({ birthDate: payload }),
  setHeight: (payload) => set({ height: payload }),
  setWeight: (payload) => set({ weight: payload }),
  setBmi: (payload) => set({ score: payload }),
  clearLastName: () => set({ lastName: "" }),
  clearFirstName: () => set({ firstName: "" }),
  clearHeight: () => set({ height: null }),
  clearWeight: () => set({ weight: null }),

  getAge: () => {
    const birthDate = get().birthDate;
    if (!birthDate) return;

    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },

  getBmi: () => {
    const height = get().height;
    const weight = get().weight;
    if (!height || !weight) return undefined;

    const score = +calculateBmiScore(height, weight);
    console.log(score);

    return score;
  },
  getBmiResult: () => {
    const bmi = get().getBmi();
console.log(bmi)

    if (!bmi) return undefined;

    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25.0) return "Normal";
    if (bmi <= 30.0) return "Overweight";
    if (bmi > 30) return "Obese";
  },
}));
