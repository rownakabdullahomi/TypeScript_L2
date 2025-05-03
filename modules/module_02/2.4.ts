{
  // generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Rownak",
    computer: {
      brand: "HP",
      model: "Envy",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "oled",
    },
  };

  interface OneplusWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface BajajBike {
    model: string;
    cc: number;
  }

  const richDeveloper: Developer<OneplusWatch, BajajBike> = {
    name: "Rownak",
    computer: {
      brand: "ASUS",
      model: "S551",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Oneplus",
      model: "33",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "bajaj",
      cc: 160,
    },
  };
}
