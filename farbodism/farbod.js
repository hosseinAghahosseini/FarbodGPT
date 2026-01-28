class Farbodism {
    static askFarbodChoice(optionCount) {
        if (isNaN(parseInt(optionCount))) return "خودتو سرکار بذار.";
        if (optionCount <= 0) return "الان می‌خوای با این عدد چی رو ثابت کنی؟";
        if (optionCount == 1) return "تو انتخاب فقط یک گزینه هم موندی؟؟؟";

        let option = Math.random() * optionCount;
        let selected = Math.ceil(option);
        return `به نظر من بهتره گزینه شماره ${selected} رو انتخاب کنی.`;
    }

    static askFarbodSuggestion() {
        const knowledgeSize = 7;
        let knowledge = new Array(knowledgeSize);

        //gameKnowledge
        knowledge[0] = [
            "Prince of Persia: Warrior Within",
            "The Witcher 3",
            "Limbo",
            "Skyrim",
            "Gwent",
            "Darkest Dungeon",
            "Company of Heroes",
            "Diablo",
            "Wolfenestein The Old Blood",
            "Starcraft",
            "Stronghold",
            "The Witcher 2"
        ];

        //movieKnowledge
        knowledge[1] = [
            "Ghost Dog: The Way of the Samurai",
            "Banshees of the Inisherin",
            "The Big Lebowski",
            "The Lord of the Rings",
            "Papillon",
            "The Good, The Bad and The Ugly",
            "City of God (2002)",
            "The Battle of Algiers"
        ];

        //animeKnowledge
        knowledge[2] = [
            "JoJo's Bizarre Adventures",
            "Fist of the North Star",
            "Attack on Titan",
            "Princess Mononoke",
            "Spirited Away",
            "Howls Moving Castle",
            "Castle in the Sky",
            "Grave of the Fireflies"
        ];

        //musicKnowledge
        knowledge[3] = [
            "J.S. Bach - Toccata and Fugue in D Minor",
            "Schubert's Fantasy in F Minor. Piano 4 hands",
            "Chopin: Prelude #15 in D Flat, Op. 28/15, Raindrop",
            "خواب‌های طلایی جواد معروفی",
            "Rachmaninov - Piano Concerto No. 2",
            "Tchaikovsky - The Swan Lake",
            "Liszt - Hungarian Rhapsody No. 2",
            "Mendelssohn - Violin Concerto",
            "Sibelius - Nocturne Op 51, No. 3",
            "Giorgio Gaber - Il Conformista",
            "Dmitri Shostakovich - The Second Waltz",
            "Vivaldi - The Four Seasons",
            "Beethoven - Moonlight sonata, Adagio",
            "Dvorak - Slavonic Dance No. 2 in E minor Op. 72 (Violin)",
            "Mozart - Requiem Mass in D Minor, Lacrimosa Dies",
            "Astor Piazzolla - Oblivion",
            "Mahler - Quartet for Piano and Strings",
            "Chopin - Marche Funebre",
            "Schubert - Piano Trio In E Flat, Op. 100",
            "J.S. Bach - BWV 1031 Es Flute-Sonata 2 Siciliano",
            "Ifukube Akira - Godzilla Theme"
        ];

        //foodKnowledge
        knowledge[4] = [
            "بستنی سامورایی (بستنی قیفی شکلاتی)",
            "سمبوسه آقا خلیلی",
            "چای نبات دکه بلندیان",
            "دلستر کلاسیک",
            "بشقاب عدسی از علی عدسی",
            "بندری سعید سگ پز"
        ];

        //otherMediaKnowledge
        knowledge[5] = [
            "بشین مستند Hyper-Normalization رو ببین",
            "بشین کتاب هنر جنگ سون تزو رو بخون.",
            "بشین سریال The Three Kingdoms (2010) رو ببین.",
            "بشین سریال Twin Peaks رو ببین."
        ];

        //generalTasks
        knowledge[6] = [
            "با بچه‌ها در بیا بیرون برو پارک.",
            "با خانواده در بیا بیرون برو باغ.",
            "توی کاری که می‌خوای انجام بدی کاملا greedy عمل کن.",
            "توی کاری که می‌خوای انجام بدی ساعت‌ها تجربه کسب کن تا لول‌آپ بشی.",
            "با بچه‌ها جمع شین و یه دست کال آو دیوتی مدرن وارفر قدیمی به صورت Lan بازی کنید.",
            "می‌تونی با بچه‌ها بری بیرون و پاسور بازی کنی.",
            "بشین یه دست شطرنج بازی کن.",
            "به غذایی که می‌خوای بخوری تخم مرغ اضافه کن.",
            "اگه برات مقدوره با چوب یه آتیش کوچولو درست کن."
        ];

        let i = Math.floor(Math.random() * (knowledgeSize + 1));
        if (i == knowledgeSize)
        {
            let link = "https://furfallin.ir/" + Farbodism.generateFurfallinPost();
            return `بشین <a href="${link}" target="_blank">این پست تصادفی</a> از سایت فرفالین رو مطالعه کن.`;
        }

        let j = Math.floor(Math.random() * knowledge[i].length);
        let selectedChoice = knowledge[i][j];

        if (i == 0) //game
        {
            return `بشین ${selectedChoice} بازی کن.`;
        }
        else if (i == 1) //movie
        {
            return `بشین فیلم سینمایی ${selectedChoice} رو ببین.`;
        }
        else if (i == 2) //anime
        {
            return `بشین انیمه ${selectedChoice} رو ببین.`;
        }
        else if (i == 3) //music
        {
            return `بشین قطعه‌ی موسیقی ${selectedChoice} رو گوش بده.`;
        }
        else if (i == 4) //food
        {
            return `ایده‌ی بدی نیست اگه یه ${selectedChoice} بخوری.`;
        }
        else if (i == 5 || i == 6) //documentary
        {
            return selectedChoice;
        }
        //else if (i == 7) {
        //    link = "https://furfallin.ir/" + this.generateFurfallinPost();
        //    return `<span>بشین <a href="${link}">این پست</a> از سایت فرفالین رو مطالعه کن.</span>`;
        //}
    }

    static askFarbodRawQuestion(questionString) {
        if (questionString == "") return "خودتو سرکار بذار.";

        return "به خاطر همین الکی سوال پرسیدنای شماست که قیمت RAM و SSD سر به فلک کشیده. من وقت و انرژیمو سر این چیزا هدر نمی‌کنم.";
    }

    static generateFurfallinPost() {
        let furfallinKnowledge = [
            "",
            "Movie",
            "Music",
            "Dialog",
            "PMDB",
            "MovieOnHDD",
            "Recomm?id=1", //needs better text
            "Recomm?id=2",
            //"Recomm?id=3", //needs images
            "Recomm?id=4", //needs better text
            "Recomm?id=5",
            "Recomm?id=6",
            "Recomm?id=7",
            "Recomm?id=8",
            "Recomm?id=9",
            "Recomm?id=10",
            "Recomm?id=11",
            "Article?id=10",
            "Article?id=12",
            "Article?id=25",
            "Article?id=26",
            "Article?id=28",
            "Article?id=30",
            "Article?id=37",
            "Article?id=38",
            "Article?id=42",
            "Article?id=44",
            "Article?id=45",
            "Article?id=46",
            "Article?id=48",
            "Article?id=49",
            "Article?id=51",
            "Article?id=1051", //geralt dandelion
            "Article?id=1055", //geralt dandelion
            "Article?id=1057", //geralt dandelion
            "Article?id=1072", //geralt dandelion
            "Article?id=1053",
            "Article?id=1054",
            "Article?id=1056",
            "Article?id=1059",
            "Article?id=1060",
            "Article?id=1061",
            "Article?id=1062",
            "Article?id=1063",
            "Article?id=1064",
            "Article?id=1065",
            "Article?id=1066",
            "Article?id=1067",
            "Article?id=1068",
            "Article?id=1069",
            "Article?id=1070",
            "Article?id=1071", //needs images
            "Article?id=1073",
            "Article?id=1074",
            "Article?id=1075", //ciri vesemir
            "Article?id=5137", //ciri vesemir
            "Article?id=1076",
            "Article?id=1077",
            "Article?id=1078",
            "Article?id=1079",
            "Article?id=1080",
            "Article?id=1081",
            "Article?id=1082",
            "Article?id=1083",
            "Article?id=1084",
            "Article?id=1085",
            "Article?id=1086",
            "Article?id=1087",
            "Article?id=1088",
            "Article?id=1089",
            "Article?id=1090",
            "Article?id=1091",
            "Article?id=1092",
            "Article?id=1093",
            "Article?id=1095",
            "Article?id=1096",
            "Article?id=1098",
            "Article?id=1099",
            "Article?id=1100",
            "Article?id=1102",
            "Article?id=1103",
            "Article?id=1104",
            "Article?id=1105",
            "Article?id=1106",
            "Article?id=1107",
            "Article?id=1108",
            "Article?id=1109",
            "Article?id=1111",
            "Article?id=1112",
            "Article?id=1113",
            "Article?id=1114",
            "Article?id=1115",
            "Article?id=1116",
            "Article?id=1117",
            "Article?id=1118",
            "Article?id=1119",
            "Article?id=1120",
            "Article?id=1121",
            "Article?id=1112",
            "Article?id=1122",
            "Article?id=2122",
            "Article?id=2123",
            "Article?id=2124",
            "Article?id=2125",
            "Article?id=2126",
            "Article?id=2127",
            "Article?id=2128",
            "Article?id=2129",
            "Article?id=2130",
            "Article?id=3130",
            "Article?id=4130",
            "Article?id=4131",
            "Article?id=4132",
            "Article?id=4133",
            "Article?id=4134", //needs link farsi
            "Article?id=5134",
            "Article?id=5135",
            "Article?id=5136",
            "Article?id=5137",
            "Article?id=5138",
            "Article?id=5140",
            "Article?id=5141",
            "Article?id=5142",
            "Article?id=5143",
            "Article?id=5144",
            "Article?id=5145",
            "Article?id=5146",
            "Article?id=5147",
            "Article?id=5148",
            "Article?id=5149",
            "Article?id=5150",
            "Article?id=5151",
            "Article?id=5152",
            "Article?id=5153",
            "Article?id=5154",
            "Article?id=5155",
            "Article?id=5156",
            "Article?id=5157",
            "Article?id=5158",
            "Article?id=5159",
            "Article?id=5160",
            "Article?id=5161",
            "Article?id=5162",
            "Article?id=5163",
            "Article?id=5164",
            "Article?id=5165",
            "Article?id=5166",
            "Article?id=5167",
            "Article?id=5168",
            "Article?id=5169",
            "Article?id=5170",
            "Article?id=5171",
            "Article?id=5172",
            "Article?id=5173",
            "Article?id=5174",
            "Article?id=5175",
            "Article?id=6175",
            "Article?id=7175",
            "Article?id=7176",
            "Article?id=7177",
            "Article?id=7178",
            "Article?id=7179",
            "Article?id=7180",
            "Article?id=7181",
            "Article?id=7182",
            "Article?id=7183",
            "Article?id=7184",
            "Article?id=7185",
            "Article?id=7186",
            "/Pics?GalleryID=3",
            "/Pics?GalleryID=2"
        ];

        return furfallinKnowledge[Math.floor(Math.random() * furfallinKnowledge.length)];
    }


}
