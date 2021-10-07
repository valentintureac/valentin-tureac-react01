const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 34,
  petOwner: true,
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      age: 29,
      surname: 'Carolson',
    },
  },
};

// first exercise
console.warn(
  `Folosind Object.values(), afiseaza o lista inversata cu numele complet inversat al prietenilor.`,
);
Object.values(person.friends)
  .reverse()
  .forEach(({ name, surname }) => {
    console.log(`${surname} ${name}`);
  });

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.values()`,
);
let message = Object.values(person.friends).reduce(
  (message, { name }, index, friends) => {
    const arrayLength = friends.length;
    const punctuation =
      index === arrayLength - 1
        ? '.'
        : index === arrayLength - 2
        ? ' si '
        : ', ';

    return `${message}${name}${punctuation}`;
  },
  'Prietenii mei sunt ',
);
console.log(message);

console.warn(
  `Prin aceeasi metoda, afiseaza propozitia: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…`,
);
Object.values(person.friends).forEach(({ name, age }) => {
  console.log(
    `Diferenta de varsta dintre ${name} si ${person.name} este de ${Math.abs(
      age - person.age,
    )} ani.`,
  );
});
