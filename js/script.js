const magnetsContainer = document.getElementById("magnets");
const treeImagesContainer = document.getElementById("tree-images");

// Example magnets representing words of a poem
let words = ["Trees", "on", "street", "yellow", "red", "leaves", "falling", "in","drops","sunlight","specks","fire","autumn",
"breeze","branches","sway","natural","colorful","symphony","carpeting","path"];


let lines = [
  words.slice(0, 3),   // First line with 3 words
  words.slice(3, 5),   // Second line with 2 words
  words.slice(5, 8)    // Third line with 3 words
];

function displayWords() {
  magnetsContainer.innerHTML = "";
  lines.forEach((line, lineIndex) => {
    const lineHeight = 60; // Adjust as needed
    const marginTop = 10; // Adjust as needed

    line.forEach((word, wordIndex) => {
      const magnet = document.createElement("div");
      magnet.classList.add("magnet","word-magnet");
      magnet.textContent = word;
      const x = 10 + (wordIndex % 3) * 110;
      const y = (lineIndex * (lineHeight + marginTop)) + 60;
      magnet.style.left = x + "px";
      magnet.style.top = y + "px";
      magnetsContainer.appendChild(magnet);
    });
  });
}

// Shuffle function
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function shuffleWords() {
  words = shuffleArray(words);
  lines = [
    words.slice(0, 3),   // First line with 3 words
    words.slice(3, 5),   // Second line with 2 words
    words.slice(5, 8)    // Third line with 3 words
  ];
  displayWords();
}

// Display words initially
displayWords();

// Shuffle button
const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Shuffle Words";
shuffleButton.addEventListener("click", shuffleWords);
shuffleButton.classList.add("button-container");

// Division between words and images
const divider = document.querySelector(".divider");
divider.insertAdjacentElement("afterend", shuffleButton); // Insert after the divider

const greenTree = document.createElement("img");
greenTree.src = "images/green_tree.png";
greenTree.classList.add("magnet", "tree", "green-tree","tree-magnet");
greenTree.addEventListener("click", () => {
  greenTree.style.transform = "translate(0, -20px)";
});
treeImagesContainer.appendChild(greenTree);

const yellowTree = document.createElement("img");
yellowTree.src = "images/yellow_tree.png";
yellowTree.classList.add("magnet", "tree", "yellow-tree","tree-magnet");
yellowTree.addEventListener("click", () => {
  yellowTree.style.transform = "translate(0, -20px)";
});
treeImagesContainer.appendChild(yellowTree);

const redTree = document.createElement("img");
redTree.src = "images/red_tree.png";
redTree.classList.add("magnet", "tree", "red-tree","tree-magnet");
redTree.addEventListener("click", () => {
  redTree.style.transform = "translate(0, -20px)";
});
treeImagesContainer.appendChild(redTree);