const resultsEasy = [
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The Windows ME operating system was released in the year 2000.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What does LTS stand for in the software market?`,
    correct_answer: `Long Term Support`,
    incorrect_answers: [
      `Long Taco Service`,
      `Ludicrous Transfer Speed`,
      `Ludicrous Turbo Speed`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In any programming language, what is the most common way to iterate through an array?`,
    correct_answer: `'For' loops`,
    incorrect_answers: [`'If' Statements`, `'Do-while' loops`, `'While' loops`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `How long is an IPv6 address?`,
    correct_answer: `128 bits`,
    incorrect_answers: [`32 bits`, `64 bits`, `128 bytes`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `How many values can a single byte represent?`,
    correct_answer: `256`,
    incorrect_answers: [`8`, `1`, `1024`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?`,
    correct_answer: `Final`,
    incorrect_answers: [`Static`, `Private`, `Public`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `According to the International System of Units, how many bytes are in a kilobyte of RAM?`,
    correct_answer: `1000`,
    incorrect_answers: [`512`, `1024`, `500`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:`,
    correct_answer: `HD Graphics 500`,
    incorrect_answers: [
      `HD Graphics 700 `,
      `HD Graphics 600`,
      `HD Graphics 7000`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What does CPU stand for?`,
    correct_answer: `Central Processing Unit`,
    incorrect_answers: [
      `Central Process Unit`,
      `Computer Personal Unit`,
      `Central Processor Unit`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In "Hexadecimal", what color would be displayed from the color code? "#00FF00"?`,
    correct_answer: `Green`,
    incorrect_answers: [`Red`, `Blue`, `Yellow`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The logo for Snapchat is a Bell.`,
    correct_answer: `False`,
    incorrect_answers: [`True`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In web design, what does CSS stand for?`,
    correct_answer: `Cascading Style Sheet`,
    incorrect_answers: [
      `Counter Strike: Source`,
      `Corrective Style Sheet`,
      `Computer Style Sheet`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `How many kilobytes in one gigabyte (in decimal)?`,
    correct_answer: `1000000`,
    incorrect_answers: [`1024`, `1000`, `1048576`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The numbering system with a radix of 16 is more commonly referred to as `,
    correct_answer: `Hexidecimal`,
    incorrect_answers: [`Binary`, `Duodecimal`, `Octal`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Ada Lovelace is often considered the first computer programmer.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The Windows 7 operating system has six main editions.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `HTML is what type of language?`,
    correct_answer: `Markup Language`,
    incorrect_answers: [
      `Macro Language`,
      `Programming Language`,
      `Scripting Language`,
    ],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The Python programming language gets its name from the British comedy group "Monty Python."`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `If you were to code software in this language you'd only be able to type 0's and 1's.`,
    correct_answer: `Binary`,
    incorrect_answers: [`JavaScript`, `C++`, `Python`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What does the "MP" stand for in MP3?`,
    correct_answer: `Moving Picture`,
    incorrect_answers: [`Music Player`, `Multi Pass`, `Micro Point`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Linus Torvalds created Linux and Git.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Pointers were not used in the original C programming language; they were added later on in C++.`,
    correct_answer: `False`,
    incorrect_answers: [`True`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In computing, what does MIDI stand for?`,
    correct_answer: `Musical Instrument Digital Interface`,
    incorrect_answers: [
      `Musical Interface of Digital Instruments`,
      `Modular Interface of Digital Instruments`,
      `Musical Instrument Data Interface`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What is the code name for the mobile operating system Android 7.0?`,
    correct_answer: `Nougat`,
    incorrect_answers: [`Ice Cream Sandwich`, `Jelly Bean`, `Marshmallow`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In most programming languages, the operator ++ is equivalent to the statement "+= 1".`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What is the domain name for the country Tuvalu?`,
    correct_answer: `.tv`,
    incorrect_answers: [`.tu`, `.tt`, `.tl`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The programming language 'Swift' was created to replace what other programming language?`,
    correct_answer: `Objective-C`,
    incorrect_answers: [`C#`, `Ruby`, `C++`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In computing, what does LAN stand for?`,
    correct_answer: `Local Area Network`,
    incorrect_answers: [
      `Long Antenna Node`,
      `Light Access Node`,
      `Land Address Navigation`,
    ],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.`,
    correct_answer: `False`,
    incorrect_answers: [`True`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `On Twitter, what was the original character limit for a Tweet?`,
    correct_answer: `140`,
    incorrect_answers: [`120`, `160`, `100`],
  },
];

const resultsMedium = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: [
      "Internet as a Service",
      "Internet and a Server",
      "Infrastructure as a Server",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which programming language was developed by Sun Microsystems in 1995?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Solaris OS", "C++"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "&quot;Windows NT&quot; is a monolithic kernel.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    incorrect_answers: [
      "&lt;scroll&gt;&lt;/scroll&gt;",
      "&lt;move&gt;&lt;/move&gt;",
      "&lt;slide&gt;&lt;/slide&gt;",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The name of technology company HP stands for what?",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: [
      "Common Language Input",
      "Control Line Interface",
      "Common Language Interface",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
    correct_answer: "Taiwan",
    incorrect_answers: [
      "United States",
      "Germany",
      "China (People&#039;s Republic of)",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
    correct_answer: "Motorola 68000",
    incorrect_answers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What five letter word is the motto of the IBM Computer company?",
    correct_answer: "Think",
    incorrect_answers: ["Click", "Logic", "Pixel"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: ".at is the top-level domain for what country?",
    correct_answer: "Austria",
    incorrect_answers: ["Argentina", "Australia", "Angola"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "When was the programming language &quot;C#&quot; released?",
    correct_answer: "2000",
    incorrect_answers: ["1998", "1999", "2001"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What was the name given to Android 4.3?",
    correct_answer: "Jelly Bean",
    incorrect_answers: ["Lollipop", "Nutella", "Froyo"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
    correct_answer: "print(&quot;Hello World&quot;)",
    incorrect_answers: [
      "console.log(&quot;Hello World&quot;)",
      "echo &quot;Hello World&quot;",
      "printf(&quot;Hello World&quot;)",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "AMD created the first consumer 64-bit processor.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Approximately how many Apple I personal computers were created?",
    correct_answer: "200",
    incorrect_answers: ["100", "500", "1000"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How fast is USB 3.1 Gen 2 theoretically?",
    correct_answer: "10 Gb/s",
    incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does the term MIME stand for, in regards to computing?",
    correct_answer: "Multipurpose Internet Mail Extensions",
    incorrect_answers: [
      "Mail Internet Mail Exchange",
      "Multipurpose Interleave Mail Exchange",
      "Mail Interleave Method Exchange",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does RAID stand for?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: [
      "Rapid Access for Indexed Devices",
      "Range of Applications with Identical Designs",
      "Randomized Abstract Identification Description",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does &quot;LCD&quot; stand for?",
    correct_answer: "Liquid Crystal Display",
    incorrect_answers: [
      "Language Control Design",
      "Last Common Difference",
      "Long Continuous Design",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What was the first commerically available computer processor?",
    correct_answer: "Intel 4004",
    incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    incorrect_answers: ["2400", "1000", "1240"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is known as &quot;the brain&quot; of the Computer?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Motherboard", "Graphics Processing Unit", "Keyboard"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    correct_answer: "Clipper Chip",
    incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

const resultsHard = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: [
      "Individuals and interactions",
      "Customer collaboration",
      "Responding to change",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: [
      "Super Dense Coding",
      "Quantum Entanglement",
      "Quantum Programming",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: [
      "Runtime Instance Processes",
      "Regular Interval Processes",
      "Routine Inspection Protocol",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: [
      "FM Synthesizer",
      "Programmable Sound Generator (PSG)",
      "PCM Sampler",
    ],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: [
      "Broken Authentication",
      "Cross-Site Scripting",
      "Insecure Direct Object References",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
];

let secondi = 60;
let questionElement = document.getElementById("question");
let answerElement = document.getElementById("answer");
let questionCounterElement = document.getElementById("questionContainer");
let questionCounter = 0;
let totalQuestions;
let pieChartElement = document.getElementById("pie-chart");
let intervallo;
let punti = 0;
const spanCreate = document.createElement("span");
const domandeFatte = [];
let results = [];

const startQuiz = function () {
  const menu = document.getElementById("menu");
  const difficolta = document.getElementById("difficolta");
  const tendina = document.getElementById("tendina");
  const selezione = parseInt(tendina.value);
  const menuBtn = document.getElementById("menuBtn");

  if (difficolta.value === "easy") {
    results = resultsEasy;
  } else if (difficolta.value === "medium") {
    results = resultsMedium;
  } else if (difficolta.value === "hard") {
    results = resultsHard;
  }

  console.log(results);

  totalQuestions = selezione;
  localStorage.setItem("Totale_domande", selezione);
  console.log(
    "totale domande salvato nella memoria locale:",
    localStorage.getItem("Totale_domande")
  );
  results.splice(selezione);
  questionCounter = 0;
  console.log(tendina.value);
  console.log("selezione" + results);

  spanCreate.innerText = "/" + totalQuestions;
  spanCreate.style.color = "#B21288";
  questionCounterElement.appendChild(spanCreate);
  document.getElementById("pie-chart").style.display = "block";
  menu.style.display = "none";

  clearInterval(intervallo);
  intervallo = setInterval(tick, 1000);

  mostraProssimaDomanda(selezione);
};

console.log(results);
const svgNS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(svgNS, "svg");
const pieChart = document.createElementNS(svgNS, "circle");

pieChart.setAttribute("cx", "50%");
pieChart.setAttribute("cy", "50%");
pieChart.setAttribute("r", "40%");
pieChart.setAttribute("stroke-dasharray", "0");
pieChart.classList.add("slice");
svg.appendChild(pieChart);
pieChartElement.appendChild(svg);

const timerText = document.createElementNS(svgNS, "text");
timerText.setAttribute("id", "timerText");
timerText.setAttribute("text-anchor", "middle");
timerText.setAttribute("alignment-baseline", "middle");
timerText.setAttribute("font-size", "24px");
timerText.setAttribute("fill", "white");
timerText.setAttribute("x", "50%");
timerText.setAttribute("y", "50%");
svg.appendChild(timerText);

const textElement = document.getElementById("timerText");
const timerTextX = parseFloat(pieChart.getAttribute("cx"));
const timerTextY = parseFloat(pieChart.getAttribute("cy"));
textElement.setAttribute("x", timerTextX);
textElement.setAttribute("y", timerTextY);
textElement.textContent = secondi;

const secondsText = document.createElementNS(svgNS, "text");
secondsText.setAttribute("id", "secondsText");
secondsText.setAttribute("text-anchor", "middle");
secondsText.setAttribute("alignment-baseline", "middle");
secondsText.setAttribute("font-size", "10px");
secondsText.setAttribute("fill", "white");
secondsText.setAttribute("x", timerTextX);
secondsText.setAttribute("y", timerTextY - 20);
secondsText.textContent = "SECONDS";
svg.appendChild(secondsText);

const remainingText = document.createElementNS(svgNS, "text");
remainingText.setAttribute("id", "remainingText");
remainingText.setAttribute("text-anchor", "middle");
remainingText.setAttribute("alignment-baseline", "middle");
remainingText.setAttribute("font-size", "10px");
remainingText.setAttribute("fill", "white");
remainingText.setAttribute("x", timerTextX);
remainingText.setAttribute("y", timerTextY + 20);
remainingText.textContent = "REMAINING";
svg.appendChild(remainingText);

const updatePieChart = function () {
  const percentage = (secondi / 60) * 100;
  const circumference = 2 * Math.PI * parseFloat(pieChart.getAttribute("r"));
  const strokeDasharray = (percentage / 100) * circumference;
  pieChart.setAttribute(
    "stroke-dasharray",
    `${strokeDasharray} ${circumference}`
  );

  const textElement = document.getElementById("timerText");
  textElement.textContent = secondi;
};

const tick = function () {
  secondi = secondi - 1;
  if (secondi === 0) {
    clearInterval(intervallo);
    mostraProssimaDomanda();
    secondi = 60;
  }
  updatePieChart();
};

const mostraDomanda = function (domanda) {
  // Pulisci elementi precedenti
  questionElement.innerHTML = "";
  answerElement.innerHTML = "";

  // Aggiungi la domanda
  let questionHTML = document.createElement("h1");
  questionHTML.textContent = domanda.question;
  questionElement.appendChild(questionHTML);

  // Aggiungi le risposte
  let answers = [...domanda.incorrect_answers, domanda.correct_answer];
  answers.sort(() => Math.random() - 0.5);
  answers.forEach((risposta) => {
    let button = document.createElement("button");
    button.classList.add("conteiner-answeer");
    button.textContent = risposta;
    button.addEventListener("click", function () {
      button.disabled = true;
      console.log(button);
      clearInterval(intervallo);
      if (risposta === domanda.correct_answer) {
        punti++;
        //answerElement.innerHTML = '<h2>Correct!</h2>'
        button.style.backgroundColor = "green";
      } else {
        //answerElement.innerHTML = '<h3>Wrong!</h3>'
        button.style.backgroundColor = "red";
        Array.from(button.parentElement.children).forEach((button) => {
          if (button.innerText === domanda.correct_answer) {
            button.style.backgroundColor = "green";
          }
        });
      }

      setTimeout(function () {
        mostraProssimaDomanda();
        secondi = 60;
      }, 1000);

      console.log("Risposta giusta: ", domanda.correct_answer);
      console.log("punti: " + punti);
      console.log("Risposta selezionata:", risposta);
      localStorage.setItem("punteggio_risposte", punti);
      console.log(
        "Punteggio salvato nella memoria locale:",
        localStorage.getItem("punteggio_risposte")
      );
    });
    answerElement.appendChild(button);
  });
};

const mostraProssimaDomanda = function () {
  if (domandeFatte.length === results.length) {
    window.location.href = "results.html";
    return;
  }

  let domandaCasuale;

  do {
    domandaCasuale = results[Math.floor(Math.random() * results.length)];
  } while (domandeFatte.includes(results.indexOf(domandaCasuale)));

  domandeFatte.push(results.indexOf(domandaCasuale));

  if (questionCounter < totalQuestions) {
    questionCounter++;
    questionCounterElement.textContent =
      "QUESTION " + questionCounter + spanCreate.innerText;
  } else {
    window.location.href = "results.html";
    return;
  }

  clearInterval(intervallo);
  intervallo = setInterval(tick, 1000);

  mostraDomanda(domandaCasuale);
};
