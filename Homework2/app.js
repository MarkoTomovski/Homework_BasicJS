let year = prompt("Enter a year:");

if (!isNaN(year)) {
  let zodiacIndex = (year - 4) % 12;
  let zodiacSigns = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
  ];

  let zodiac = zodiacSigns[zodiacIndex];
  console.log(`The Chinese Zodiac sign for the year ${year} is ${zodiac}.`);
} else {
  console.log("Please enter a valid year.");
}
