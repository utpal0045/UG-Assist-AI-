/* =====================================================
   UTPAL AI
   FREE LOCAL BROWSER AI ASSISTANT
   ASSAM + INDIA + GK + POLITY + RECORDS
===================================================== */


let user =
  JSON.parse(
    localStorage.getItem("utpalAIUser")
  ) || null;


/* =====================================================
   PAGE SYSTEM
===================================================== */

function showPage(id) {

  document
    .querySelectorAll(".page, .dashboard-page")
    .forEach(page => {
      page.classList.remove("active");
    });


  document
    .getElementById(id)
    .classList.add("active");
}


/* =====================================================
   LOGIN
===================================================== */

function login() {

  const name =
    document
      .getElementById("loginName")
      .value
      .trim();


  if (!name) {

    alert("Please enter your name.");

    return;
  }


  document
    .getElementById("userName")
    .value = name;


  showPage("detailsPage");
}


/* =====================================================
   PROFILE
===================================================== */

function saveProfile() {

  const name =
    document
      .getElementById("userName")
      .value
      .trim();


  const age =
    document
      .getElementById("userAge")
      .value
      .trim();


  const interest =
    document
      .getElementById("userInterest")
      .value
      .trim();


  const about =
    document
      .getElementById("userAbout")
      .value
      .trim();


  if (!name) {

    alert("Please enter your name.");

    return;
  }


  user = {

    name,

    age:
      age || "Not specified",

    interest:
      interest || "Not specified",

    about:
      about || "Nice to meet you!"

  };


  localStorage.setItem(
    "utpalAIUser",
    JSON.stringify(user)
  );


  loadDashboard();

  showPage("dashboard");
}


/* =====================================================
   LOAD DASHBOARD
===================================================== */

function loadDashboard() {

  if (!user) return;


  document
    .getElementById("welcomeText")
    .textContent =
    `Welcome, ${user.name}`;


  document
    .getElementById("profileName")
    .textContent =
    user.name;


  document
    .getElementById("profileAge")
    .textContent =
    user.age;


  document
    .getElementById("profileInterest")
    .textContent =
    user.interest;


  document
    .getElementById("profileAbout")
    .textContent =
    user.about;


  document
    .getElementById("avatar")
    .textContent =
    user.name
      .charAt(0)
      .toUpperCase();
}


/* =====================================================
   KNOWLEDGE DATABASE
===================================================== */

const knowledgeBase = {


/* ================= ASSAM HISTORY ================= */

"চুকাফা": `
চুকাফা আহোম ৰাজ্যৰ প্ৰতিষ্ঠাপক আছিল।
১২২৮ খ্ৰীষ্টাব্দত তেওঁ পাটকাই পৰ্বত অতিক্ৰম কৰি অসমত প্ৰৱেশ কৰে।
তেওঁৰ আগমনৰ পিছত অসমত আহোম ৰাজনৈতিক শক্তিৰ সূচনা হয়।
আহোমসকলে প্ৰায় ছয় শতিকালৈ অসমত শাসন কৰিছিল।
`,

"লাচিত বৰফুকন": `
লাচিত বৰফুকন আহোম ৰাজ্যৰ এগৰাকী বিখ্যাত সেনাপতি আছিল।
১৬৭১ খ্ৰীষ্টাব্দৰ শৰাইঘাটৰ যুদ্ধত তেওঁৰ নেতৃত্বত আহোম সেনাই মোগল বাহিনীৰ বিৰুদ্ধে বিজয় লাভ কৰে।
তেওঁৰ সামৰিক দক্ষতা আৰু দেশপ্ৰেম অসমৰ ইতিহাসত বিশেষভাৱে স্মৰণীয়।
`,

"শৰাইঘাটৰ যুদ্ধ": `
শৰাইঘাটৰ যুদ্ধ ১৬৭১ খ্ৰীষ্টাব্দত সংঘটিত হৈছিল।
আহোম সেনাৰ নেতৃত্ব দিছিল লাচিত বৰফুকনে আৰু মোগল পক্ষৰ সেনাপতি আছিল ৰামসিংহ।
এই যুদ্ধত আহোমসকলে মোগল বাহিনীক পৰাস্ত কৰে।
`,

"ভাস্কৰবৰ্মন": `
ভাস্কৰবৰ্মন প্ৰাচীন কামৰূপৰ বৰ্মন বংশৰ এগৰাকী শক্তিশালী ৰজা আছিল।
তেওঁ সপ্তম শতিকাত শাসন কৰিছিল।
উত্তৰ ভাৰতৰ সম্ৰাট হৰ্ষবৰ্ধনৰ সৈতে তেওঁৰ বন্ধুত্বপূৰ্ণ সম্পৰ্ক আছিল।
চীনা পৰিব্ৰাজক হিউৱেন চাঙে তেওঁৰ সময়ত কামৰূপ ভ্ৰমণ কৰিছিল।
`,

"কামৰূপ": `
কামৰূপ প্ৰাচীন অসমৰ অন্যতম গুৰুত্বপূৰ্ণ ৰাজ্য আছিল।
অসমৰ ৰাজনৈতিক আৰু সাংস্কৃতিক ইতিহাসৰ বিকাশত কামৰূপৰ বিশেষ ভূমিকা আছিল।
`,

"প্ৰাগজ্যোতিষ": `
প্ৰাগজ্যোতিষ প্ৰাচীন অসমৰ সৈতে জড়িত এক ঐতিহাসিক নাম।
প্ৰাচীন সাহিত্য আৰু বিভিন্ন ঐতিহাসিক উৎসত প্ৰাগজ্যোতিষৰ উল্লেখ পোৱা যায়।
`,

"যাণ্ডাবু সন্ধি": `
১৮২৬ খ্ৰীষ্টাব্দৰ যাণ্ডাবু সন্ধিৰ ফলত প্ৰথম ইংগ-বাৰ্মী যুদ্ধৰ অন্ত পৰে।
এই সন্ধিৰ পিছত অসম ব্ৰিটিছ ইষ্ট ইণ্ডিয়া কোম্পানীৰ নিয়ন্ত্ৰণলৈ যায়।
`,

"শংকৰদেৱ": `
শ্ৰীমন্ত শংকৰদেৱ অসমৰ মহান বৈষ্ণৱ সাধক, সমাজ-সংস্কাৰক, সাহিত্যিক আৰু সংস্কৃতি-স্ৰষ্টা আছিল।
তেওঁ একশৰণ নামধৰ্মৰ প্ৰচাৰ কৰিছিল।
বৰগীত, অংকীয়া নাট, ভাওনা আৰু সত্ৰীয়া সংস্কৃতিৰ বিকাশত তেওঁৰ অৱদান অতুলনীয়।
`,

"মাধৱদেৱ": `
মাধৱদেৱ শ্ৰীমন্ত শংকৰদেৱৰ প্ৰধান শিষ্য আছিল।
তেওঁ একশৰণ নামধৰ্মৰ অন্যতম প্ৰচাৰক।
তেওঁৰ 'নামঘোষা' অসমীয়া বৈষ্ণৱ সাহিত্যৰ এক উল্লেখযোগ্য গ্ৰন্থ।
`,

"অসম আন্দোলন": `
অসম আন্দোলন ১৯৭৯ চনৰ পৰা ১৯৮৫ চনলৈ চলা এক বৃহৎ গণআন্দোলন আছিল।
বিদেশী নাগৰিকৰ অবৈধ প্ৰবেশৰ বিষয়ক কেন্দ্ৰ কৰি আন্দোলনটো গঢ় লৈ উঠিছিল।
১৯৮৫ চনৰ অসম চুক্তিৰ জৰিয়তে আন্দোলনৰ ৰাজনৈতিক সমাপ্তি ঘটে।
`,

"ভূপেন হাজৰিকা": `
ড° ভূপেন হাজৰিকা অসমৰ এগৰাকী বিশ্ববিখ্যাত সংগীতজ্ঞ, গায়ক, গীতিকাৰ, সুৰকাৰ, চলচ্চিত্ৰ নিৰ্মাতা আৰু সমাজচিন্তক আছিল।
তেওঁৰ সৃষ্টিত মানৱতা, সাম্য আৰু সামাজিক চেতনাৰ প্ৰকাশ দেখা যায়।
`,

"জ্যোতিপ্ৰসাদ আগৰৱালা": `
জ্যোতিপ্ৰসাদ আগৰৱালা অসমীয়া সংস্কৃতিৰ এগৰাকী বিশিষ্ট শিল্পী, গীতিকাৰ, নাট্যকাৰ আৰু চলচ্চিত্ৰ নিৰ্মাতা আছিল।
তেওঁক অসমীয়া চলচ্চিত্ৰৰ পিতৃ হিচাপে স্মৰণ কৰা হয়।
`,

"বিষ্ণুপ্ৰসাদ ৰাভা": `
বিষ্ণুপ্ৰসাদ ৰাভা অসমৰ এগৰাকী বিশিষ্ট সাংস্কৃতিক ব্যক্তিত্ব, শিল্পী, সাহিত্যিক আৰু সমাজকৰ্মী আছিল।
অসমীয়া সংস্কৃতিত তেওঁৰ অৱদানৰ বাবে তেওঁ 'কলাগুৰু' নামেৰে পৰিচিত।
`,


/* ================= INDIAN HISTORY ================= */

"সিন্ধু সভ্যতা": `
সিন্ধু সভ্যতা ভাৰতীয় উপমহাদেশৰ অন্যতম প্ৰাচীন নগৰসভ্যতা।
হৰপ্পা আৰু মহেঞ্জোদাৰো ইয়াৰ উল্লেখযোগ্য নগৰ।
সুপৰিকল্পিত নগৰ, উন্নত নলা-নৰ্দমা, ইটাৰ নিৰ্মাণ আৰু বাণিজ্য ইয়াৰ বিশেষ বৈশিষ্ট্য।
`,

"মৌৰ্য সাম্ৰাজ্য": `
মৌৰ্য সাম্ৰাজ্য প্ৰাচীন ভাৰতৰ অন্যতম বৃহৎ সাম্ৰাজ্য আছিল।
চন্দ্ৰগুপ্ত মৌৰ্যই ইয়াৰ প্ৰতিষ্ঠা কৰে।
কৌটিল্য বা চাণক্য তেওঁৰ ৰাজনৈতিক উপদেষ্টা আছিল।
`,

"চন্দ্ৰগুপ্ত মৌৰ্য": `
চন্দ্ৰগুপ্ত মৌৰ্যই মৌৰ্য সাম্ৰাজ্য প্ৰতিষ্ঠা কৰিছিল।
কৌটিল্যৰ সহায়ত তেওঁ নন্দ বংশক পৰাস্ত কৰি মগধত নিজৰ শাসন প্ৰতিষ্ঠা কৰে।
`,

"অশোক": `
সম্ৰাট অশোক মৌৰ্য বংশৰ অন্যতম শ্ৰেষ্ঠ শাসক আছিল।
কলিংগ যুদ্ধৰ পিছত তেওঁৰ জীৱনত গভীৰ পৰিৱৰ্তন ঘটে।
তেওঁ বৌদ্ধ ধৰ্ম, নৈতিকতা আৰু অহিংসাৰ বাণী প্ৰচাৰ কৰিছিল।
`,

"গুপ্ত সাম্ৰাজ্য": `
গুপ্ত সাম্ৰাজ্য প্ৰাচীন ভাৰতৰ এক গুৰুত্বপূৰ্ণ সাম্ৰাজ্য আছিল।
এই সময়ত বিজ্ঞান, গণিত, সাহিত্য, শিল্প আৰু স্থাপত্যৰ যথেষ্ট উন্নতি হৈছিল।
`,

"আকবৰ": `
আকবৰ মোগল সাম্ৰাজ্যৰ অন্যতম শক্তিশালী সম্ৰাট আছিল।
তেওঁৰ শাসনকালত মোগল সাম্ৰাজ্য যথেষ্ট বিস্তৃত হয়।
তেওঁ প্ৰশাসন আৰু বিভিন্ন ধৰ্মীয় গোটৰ মাজত সমন্বয় স্থাপনৰ ক্ষেত্ৰত গুৰুত্ব দিছিল।
`,

"শিৱাজী": `
ছত্ৰপতি শিৱাজী মহাৰাজে পশ্চিম ভাৰতত মাৰাঠা শক্তিৰ উত্থানত গুৰুত্বপূৰ্ণ ভূমিকা পালন কৰিছিল।
তেওঁ দক্ষ সামৰিক কৌশল আৰু সুসংগঠিত প্ৰশাসনৰ বাবে বিখ্যাত।
`,

"১৮৫৭": `
১৮৫৭ চনৰ বিদ্ৰোহ ব্ৰিটিছ ইষ্ট ইণ্ডিয়া কোম্পানীৰ শাসনৰ বিৰুদ্ধে সংঘটিত এক বৃহৎ বিদ্ৰোহ আছিল।
সামৰিক অসন্তোষ, ৰাজনৈতিক হস্তক্ষেপ আৰু সামাজিক-অৰ্থনৈতিক অসন্তোষ ইয়াৰ বিভিন্ন কাৰণ আছিল।
`,

"ভাৰতীয় জাতীয় কংগ্ৰেছ": `
ভাৰতীয় জাতীয় কংগ্ৰেছ ১৮৮৫ চনত প্ৰতিষ্ঠা কৰা হয়।
পৰৱৰ্তী সময়ত ই ভাৰতৰ স্বাধীনতা আন্দোলনৰ অন্যতম গুৰুত্বপূৰ্ণ ৰাজনৈতিক সংগঠনলৈ পৰিণত হয়।
`,

"মহাত্মা গান্ধী": `
মহাত্মা গান্ধী ভাৰতৰ স্বাধীনতা আন্দোলনৰ এগৰাকী কেন্দ্ৰীয় নেতা আছিল।
সত্যাগ্ৰহ আৰু অহিংসাৰ নীতিৰ জৰিয়তে তেওঁ ব্ৰিটিছ শাসনৰ বিৰুদ্ধে গণআন্দোলন সংগঠিত কৰিছিল।
`,

"অসহযোগ আন্দোলন": `
অসহযোগ আন্দোলন ১৯২০ চনত মহাত্মা গান্ধীৰ নেতৃত্বত আৰম্ভ হৈছিল।
ব্ৰিটিছ শাসনৰ সৈতে অসহযোগিতা কৰাৰ আহ্বান জনাই এই আন্দোলন চলোৱা হৈছিল।
`,

"ভাৰত ত্যাগ আন্দোলন": `
ভাৰত ত্যাগ আন্দোলন ১৯৪২ চনত আৰম্ভ হয়।
মহাত্মা গান্ধীৰ নেতৃত্বত ব্ৰিটিছক ভাৰত এৰি যাবলৈ দাবী জনোৱা হয়।
`,

"ভাৰত স্বাধীনতা": `
ভাৰতে ১৯৪৭ চনৰ ১৫ আগষ্টত ব্ৰিটিছ শাসনৰ পৰা স্বাধীনতা লাভ কৰে।
জৱাহৰলাল নেহৰু স্বাধীন ভাৰতৰ প্ৰথম প্ৰধানমন্ত্ৰী আছিল।
`,


/* ================= POLITY ================= */

"অনুচ্ছেদ 14": `
ভাৰতীয় সংবিধানৰ অনুচ্ছেদ ১৪-এ আইনৰ আগত সমতা আৰু আইনৰ সমান সুৰক্ষাৰ অধিকাৰ নিশ্চিত কৰে।
`,

"অনুচ্ছেদ 19": `
অনুচ্ছেদ ১৯-এ ভাৰতীয় নাগৰিকসকলক কেইবাটাও মৌলিক স্বাধীনতা প্ৰদান কৰে।
`,

"অনুচ্ছেদ 21": `
অনুচ্ছেদ ২১-এ জীৱন আৰু ব্যক্তিগত স্বাধীনতাৰ সুৰক্ষা নিশ্চিত কৰে।
`,

"অনুচ্ছেদ 32": `
অনুচ্ছেদ ৩২-এ মৌলিক অধিকাৰ বলবৎ কৰাৰ বাবে উচ্চতম ন্যায়ালয়ৰ কাষ চাপিব পৰা অধিকাৰ প্ৰদান কৰে।
`,

"অনুচ্ছেদ 356": `
অনুচ্ছেদ ৩৫৬ ৰাজ্যত সাংবিধানিক যন্ত্ৰণা বিফল হ'লে ৰাষ্ট্ৰপতিৰ শাসনৰ ব্যৱস্থাৰ সৈতে জড়িত।
`,

"মৌলিক অধিকাৰ": `
ভাৰতীয় সংবিধানৰ তৃতীয় ভাগত মৌলিক অধিকাৰসমূহৰ ব্যৱস্থা আছে।
`,

"মৌলিক কৰ্তব্য": `
মৌলিক কৰ্তব্য সংবিধানৰ ৫১A অনুচ্ছেদত উল্লেখ কৰা হৈছে।
৪২তম সংবিধান সংশোধন, ১৯৭৬ৰ জৰিয়তে মৌলিক কৰ্তব্য সংযোজন কৰা হৈছিল।
`,

"পঞ্চায়তী ৰাজ": `
৭৩তম সংবিধান সংশোধন, ১৯৯২ৰ জৰিয়তে পঞ্চায়তী ৰাজ প্ৰতিষ্ঠানসমূহক সাংবিধানিক মৰ্যাদা দিয়া হয়।
`,

"নগৰ স্থানীয় শাসন": `
৭৪তম সংবিধান সংশোধন, ১৯৯২ৰ জৰিয়তে নগৰীয়া স্থানীয় স্ব-শাসন প্ৰতিষ্ঠানসমূহক সাংবিধানিক মৰ্যাদা দিয়া হয়।
`,

"ভোট দিয়াৰ বয়স": `
ভাৰতত ভোটদানৰ ন্যূনতম বয়স ১৮ বছৰ।
৬১তম সংবিধান সংশোধনৰ জৰিয়তে ভোটদানৰ বয়স ২১ৰ পৰা ১৮ বছৰলৈ হ্ৰাস কৰা হয়।
`,


/* ================= BASIC GK ================= */

"ভাৰতৰ ৰাজধানী": `
ভাৰতৰ ৰাজধানী হৈছে নতুন দিল্লী।
`,

"ভাৰতৰ ৰাষ্ট্ৰীয় পশু": `
ভাৰতৰ ৰাষ্ট্ৰীয় পশু হৈছে বাঘ।
`,

"ভাৰতৰ ৰাষ্ট্ৰীয় পক্ষী": `
ভাৰতৰ ৰাষ্ট্ৰীয় পক্ষী হৈছে ময়ূৰ।
`,

"ভাৰতৰ ৰাষ্ট্ৰীয় ফুল": `
ভাৰতৰ ৰাষ্ট্ৰীয় ফুল হৈছে পদুম।
`,

"ভাৰতৰ ৰাষ্ট্ৰীয় গছ": `
ভাৰতৰ ৰাষ্ট্ৰীয় গছ হৈছে বটগছ।
`,

"ভাৰতৰ ৰাষ্ট্ৰীয় ফল": `
ভাৰতৰ ৰাষ্ট্ৰীয় ফল হৈছে আম।
`,

"ৰাষ্ট্ৰীয় সংগীত": `
ভাৰতৰ ৰাষ্ট্ৰীয় সংগীত হৈছে 'জন গণ মন'।
ইয়াৰ ৰচয়িতা ৰবীন্দ্ৰনাথ ঠাকুৰ।
`,

"ৰাষ্ট্ৰীয় গীত": `
ভাৰতৰ ৰাষ্ট্ৰীয় গীত হৈছে 'বন্দে মাতৰম্'।
ইয়াৰ ৰচয়িতা বংকিমচন্দ্ৰ চট্টোপাধ্যায়।
`,

"ভাৰতৰ প্ৰথম ৰাষ্ট্ৰপতি": `
ড° ৰাজেন্দ্ৰ প্ৰসাদ ভাৰতৰ প্ৰথম ৰাষ্ট্ৰপতি আছিল।
তেওঁ ১৯৫০ চনৰ পৰা ১৯৬২ চনলৈ এই পদত আছিল।
`,

"ভাৰতৰ প্ৰথম প্ৰধানমন্ত্ৰী": `
জৱাহৰলাল নেহৰু ভাৰতৰ প্ৰথম প্ৰধানমন্ত্ৰী আছিল।
তেওঁ ১৯৪৭ চনৰ পৰা ১৯৬৪ চনলৈ প্ৰধানমন্ত্ৰী আছিল।
`,

"প্ৰথম মহিলা ৰাষ্ট্ৰপতি": `
প্ৰতিভা পাটিল ভাৰতৰ প্ৰথম মহিলা ৰাষ্ট্ৰপতি আছিল।
তেওঁ ২০০৭ চনৰ পৰা ২০১২ চনলৈ ৰাষ্ট্ৰপতি আছিল।
`,

"প্ৰথম মহিলা প্ৰধানমন্ত্ৰী": `
ইন্দিৰা গান্ধী ভাৰতৰ প্ৰথম মহিলা প্ৰধানমন্ত্ৰী আছিল।
তেওঁ ১৯৬৬ চনত প্ৰথমবাৰৰ বাবে প্ৰধানমন্ত্ৰী হয়।
`,


/* ================= WORLD RECORD / RECENT ================= */

"এশা সিং": `
Esha Singh-এ ২০২৬ ISSF World Cup Munich-ৰ Women's 25m Pistol event-ত Gold Medal লাভ কৰাৰ লগতে World Record আৰু Junior World Record score স্থাপন কৰে।
`,

"Physics Olympiad": `
২০২৬ International Physics Olympiad-ত ভাৰতৰ পাঁচজনীয়া দলটোৰ প্ৰতিজন সদস্যই Gold Medal লাভ কৰে।

Kanishk Jain
Riddhesh Anant Bendale
Rishit Garg
Shresth Suraiya
Svarit Joshi

ভাৰতীয় দলটোৱে সম্পূৰ্ণ Gold Medal sweep কৰে।
`,

"Asian Games 2026": `
২০২৬ Aichi-Nagoya Asian Games-ত ভাৰতে ২১টা Gold, ২৭টা Silver আৰু ৩৭টা Bronze—মুঠ ৮৫টা Medal লাভ কৰে।
`,

"ৰোহটাছ চৌধুৰী": `
২০২৬ চনত ৰোহটাছ চৌধুৰীয়ে পিঠিত ৬০ পাউণ্ড ওজন লৈ এক ঘণ্টাত ৮৪৭টা push-up কৰি Guinness World Record স্থাপন কৰাৰ তথ্য প্ৰকাশিত হৈছে।
`,

"NHAI": `
২০২৬ চনত National Highways Authority of India (NHAI)-এ road construction আৰু paving-ৰ ক্ষেত্ৰত কেইবাটাও Guinness World Record স্থাপন কৰাৰ তথ্য প্ৰকাশিত হৈছে।
`

};


/* =====================================================
   CURRENT POLITY
===================================================== */

const currentPolity = {

  "ৰাষ্ট্ৰপতি": `
ভাৰতৰ বৰ্তমান ৰাষ্ট্ৰপতি দ্ৰৌপদী মুৰ্মু।
তেওঁ ২০২২ চনত ৰাষ্ট্ৰপতি হিচাপে কাৰ্যভাৰ গ্ৰহণ কৰে।
`,

  "প্ৰধানমন্ত্ৰী": `
ভাৰতৰ বৰ্তমান প্ৰধানমন্ত্ৰী নৰেন্দ্ৰ মোদী।
তেওঁ ২০১৪ চনৰ পৰা প্ৰধানমন্ত্ৰী হিচাপে কাৰ্যৰত।
`,

  "উপ-ৰাষ্ট্ৰপতি": `
ভাৰতৰ বৰ্তমান উপ-ৰাষ্ট্ৰপতি চি. পি. ৰাধাকৃষ্ণন।
`

};


/* =====================================================
   SEARCH ENGINE
===================================================== */

function searchKnowledge(question) {

  const q =
    question
      .toLowerCase()
      .replace(/[?!.,]/g, "");


  /* Exact knowledge search */

  for (const key in knowledgeBase) {

    if (
      q.includes(
        key.toLowerCase()
      )
    ) {

      return knowledgeBase[key].trim();
    }
  }


  /* Current polity */

  if (
    q.includes("ৰাষ্ট্ৰপতি") ||
    q.includes("president")
  ) {

    return currentPolity["ৰাষ্ট্ৰপতি"];
  }


  if (
    q.includes("প্ৰধানমন্ত্ৰী") ||
    q.includes("prime minister") ||
    q.includes("pm")
  ) {

    return currentPolity["প্ৰধানমন্ত্ৰী"];
  }


  if (
    q.includes("উপ-ৰাষ্ট্ৰপতি") ||
    q.includes("vice president")
  ) {

    return currentPolity["উপ-ৰাষ্ট্ৰপতি"];
  }


  /* English keyword mapping */

  const map = {

    "chukapha": "চুকাফা",

    "sukapha": "চুকাফা",

    "lachit": "লাচিত বৰফুকন",

    "sarai ghat": "শৰাইঘাটৰ যুদ্ধ",

    "battle of saraighat":
      "শৰাইঘাটৰ যুদ্ধ",

    "bhaskaravarman":
      "ভাস্কৰবৰ্মন",

    "sankaradeva":
      "শংকৰদেৱ",

    "madhavdeva":
      "মাধৱদেৱ",

    "ashoka":
      "অশোক",

    "maurya":
      "মৌৰ্য সাম্ৰাজ্য",

    "chandragupta":
      "চন্দ্ৰগুপ্ত মৌৰ্য",

    "akbar":
      "আকবৰ",

    "shivaji":
      "শিৱাজী",

    "1857":
      "১৮৫৭",

    "gandhi":
      "মহাত্মা গান্ধী",

    "quit india":
      "ভাৰত ত্যাগ আন্দোলন",

    "constitution":
      "ভাৰতৰ সংবিধান",

    "article 14":
      "অনুচ্ছেদ 14",

    "article 19":
      "অনুচ্ছেদ 19",

    "article 21":
      "অনুচ্ছেদ 21",

    "article 32":
      "অনুচ্ছেদ 32",

    "article 356":
      "অনুচ্ছেদ 356",

    "fundamental rights":
      "মৌলিক অধিকাৰ",

    "fundamental duties":
      "মৌলিক কৰ্তব্য",

    "panchayati raj":
      "পঞ্চায়তী ৰাজ",

    "esha singh":
      "এশা সিং",

    "physics olympiad":
      "Physics Olympiad",

    "world record":
      "NHAI",

    "national animal":
      "ভাৰতৰ ৰাষ্ট্ৰীয় পশু",

    "national bird":
      "ভাৰতৰ ৰাষ্ট্ৰীয় পক্ষী",

    "national flower":
      "ভাৰতৰ ৰাষ্ট্ৰীয় ফুল",

    "national tree":
      "ভাৰতৰ ৰাষ্ট্ৰীয় গছ"

  };


  for (const keyword in map) {

    if (q.includes(keyword)) {

      const key =
        map[keyword];

      if (knowledgeBase[key]) {

        return knowledgeBase[key].trim();
      }
    }
  }


  return null;
}


/* =====================================================
   AI RESPONSE
===================================================== */

function getAIResponse(message) {

  const text =
    message
      .toLowerCase()
      .trim();


  const name =
    user
      ? user.name
      : "বন্ধু";


  /* Knowledge */

  const knowledge =
    searchKnowledge(message);


  if (knowledge) {

    return knowledge;
  }


  /* Greetings */

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey") ||
    text.includes("নমস্কাৰ") ||
    text.includes("হাই")
  ) {

    return `
নমস্কাৰ ${name}! 👋

মই Utpal AI।

তুমি মোক Assam History,
Indian History, GK,
Indian Polity, World Records,
Science আৰু বহুতো বিষয়ত
প্ৰশ্ন কৰিব পাৰা।
`;
  }


  /* Identity */

  if (
    text.includes("who are you") ||
    text.includes("তুমি কোন") ||
    text.includes("what are you")
  ) {

    return `
মই Utpal AI — এটা free
browser-based local AI assistant।

মোৰ কোনো API key বা server connection নাই।
মই তোমাৰ browser-ৰ ভিতৰত কাম কৰোঁ।
`;
  }


  /* HELP */

  if (
    text.includes("help") ||
    text.includes("কি কৰিব পাৰা") ||
    text.includes("what can you do")
  ) {

    return `
মই এইবোৰ বিষয়ত সহায় কৰিব পাৰোঁ:

🇮🇳 Indian History
🟢 Assam History
📚 General Knowledge
⚖ Indian Polity
🏆 World Records
🥇 Recent Achievements
🎓 Education
🧮 Basic Calculation
🕐 Time & Date
🎙 Voice Assistant

উদাহৰণ:

"লাচিত বৰফুকন কোন আছিল?"
"অশোক কোন আছিল?"
"Article 21 কি?"
"ভাৰত কেতিয়া স্বাধীন হৈছিল?"
"ভাৰতৰ ৰাষ্ট্ৰপতি কোন?"
`;
  }


  /* TIME */

  if (
    text.includes("time") ||
    text.includes("সময়") ||
    text.includes("সময়")
  ) {

    return `
এতিয়া সময়:
${new Date().toLocaleTimeString("en-IN")}
⏰
`;
  }


  /* DATE */

  if (
    text.includes("date") ||
    text.includes("today") ||
    text.includes("তাৰিখ") ||
    text.includes("আজি")
  ) {

    return `
আজি:
${new Date().toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    )}
📅
`;
  }


  /* NAME */

  if (
    text.includes("my name") ||
    text.includes("মোৰ নাম") ||
    text.includes("who am i")
  ) {

    return `
তোমাৰ নাম ${name}। 😊
`;
  }


  /* PROFILE */

  if (
    text.includes("about me") ||
    text.includes("মোৰ বিষয়ে") ||
    text.includes("মোৰ বিষয়ে")
  ) {

    return `
তুমি তোমাৰ বিষয়ে কৈছিলা:

${user.about}

তোমাৰ আগ্ৰহ:
${user.interest}
`;
  }


  /* CALCULATOR */

  if (
    /^[0-9+\-*/().%\s]+$/
      .test(text)
  ) {

    try {

      const result =
        Function(
          `"use strict"; return (${text})`
        )();


      if (
        typeof result === "number" &&
        isFinite(result)
      ) {

        return `উত্তৰ: ${result}`;
      }

    }

    catch (error) {}

  }


  /* THANKS */

  if (
    text.includes("thank") ||
    text.includes("thanks") ||
    text.includes("ধন্যবাদ")
  ) {

    return `
তোমাকো ধন্যবাদ, ${name}! 😊
`;
  }


  /* DEFAULT */

  return `
এই প্ৰশ্নটোৰ নিৰ্দিষ্ট উত্তৰ
মোৰ বর্তমান local knowledge base-ত
নাই।

তুমি "help" লিখি মই কি কি জানো
চাই ল'ব পাৰা।

উদাহৰণ:
• চুকাফা কোন আছিল?
• লাচিত বৰফুকন কোন আছিল?
• শৰাইঘাটৰ যুদ্ধ কেতিয়া হৈছিল?
• অশোক কোন আছিল?
• ১৮৫৭ চনৰ বিদ্ৰোহ কি?
• ভাৰত কেতিয়া স্বাধীন হৈছিল?
• Article 21 কি?
• ভাৰতৰ প্ৰধানমন্ত্ৰী কোন?
• World Record কি আছে?
`;
}


/* =====================================================
   CHAT
===================================================== */

function handleKey(event) {

  if (
    event.key === "Enter"
  ) {

    sendMessage();
  }
}


function sendMessage() {

  const input =
    document.getElementById(
      "userInput"
    );


  const text =
    input.value.trim();


  if (!text) return;


  addMessage(
    text,
    "user"
  );


  input.value = "";


  setTimeout(() => {

    const answer =
      getAIResponse(text);


    addMessage(
      answer,
      "ai"
    );

  }, 350);
}


/* =====================================================
   QUICK ASK
===================================================== */

function quickAsk(text) {

  document
    .getElementById(
      "userInput"
    )
    .value = text;


  sendMessage();
}


/* =====================================================
   ADD MESSAGE
===================================================== */

function addMessage(
  text,
  type
) {

  const container =
    document.getElementById(
      "chatMessages"
    );


  const message =
    document.createElement(
      "div"
    );


  message.className =
    `message ${type}`;


  const name =
    type === "ai"
      ? "AI"
      : "YOU";


  message.innerHTML = `
    <div class="message-name">
      ${name}
    </div>

    <p>
      ${escapeHTML(text)}
    </p>
  `;


  container.appendChild(
    message
  );


  container.scrollTop =
    container.scrollHeight;
}


/* =====================================================
   SECURITY
===================================================== */

function escapeHTML(text) {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    text;


  return div.innerHTML;
}


/* =====================================================
   CLEAR CHAT
===================================================== */

function clearChat() {

  document
    .getElementById(
      "chatMessages"
    )
    .innerHTML = `

      <div class="message ai">

        <div class="message-name">
          AI
        </div>

        <p>
          Chat cleared.
          নতুনকৈ আৰম্ভ কৰোঁ! 👋
        </p>

      </div>

  `;
}


/* =====================================================
   VOICE ASSISTANT
===================================================== */

let recognition = null;


function startVoice() {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


  if (!SpeechRecognition) {

    alert(
      "Voice recognition এই browser-ত support নকৰে। Chrome-ত চেষ্টা কৰা।"
    );

    return;
  }


  recognition =
    new SpeechRecognition();


  /*
    Assamese recognition availability
    browser অনুযায়ী ভিন্ন হ'ব পাৰে.
  */

  recognition.lang =
    "en-