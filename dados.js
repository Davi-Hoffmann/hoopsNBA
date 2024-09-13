let dados = [
    {
        img: "assets/Los_Angeles_Lakers_logo.svg.png",
        alt: "",
        titulo: "Los Angeles Lakers",
        descricao: "Os Los Angeles Lakers são um dos times mais históricos e populares da NBA. Com uma rica tradição e uma legião de fãs apaixonados, a franquia californiana conquistou diversos títulos ao longo dos anos. A combinação de talento individual, trabalho em equipe e momentos icônicos tornou os Lakers um dos símbolos do esporte nos Estados Unidos e no mundo.",
        link: "https://pt.wikipedia.org/wiki/Los_Angeles_Lakers",
        tags: " Lakers, Los Angeles, times, time"
    },
    {
        img: "assets/Golden-State-Warriors-logo.png",
        alt: "",
        titulo: "Golden State Warriors",
        descricao: "Os Golden State Warriors emergiram como uma das forças dominantes da NBA nas últimas décadas, conquistando o coração dos fãs com um estilo de jogo rápido, eficiente e repleto de arremessos de                    três pontos. A equipe californiana, com sede em San Francisco, construiu uma dinastia moderna, marcada por títulos e momentos memoráveis.",
        link: "https://pt.wikipedia.org/wiki/Golden_State_Warriors",
        tags: "Warriors, GoldenState, ThreePointers, times, time"
    },
    {
        img: "assets/Boston-Celtics-logo.png",
        alt: "",
        titulo: "Boston Celtics",
        descricao: "Os Boston Celtics são um dos times mais tradicionais da NBA, com uma das maiores torcidas e rivalidades do basquete. A equipe de Massachusetts possui uma rica história, marcada por diversas dinastias e títulos conquistados ao longo das décadas.",
        link: "https://pt.wikipedia.org/wiki/Boston_Celtics",
        tags: " Celtics, Boston, LarryBird, times, time"
    },
    {
        img: "assets/chicago-bulls-logo-B2324223CB-seeklogo.com.png",
        alt: "",
        titulo: "Chicago Bulls",
        descricao: "Os Chicago Bulls são mundialmente conhecidos pela dinastia liderada por Michael Jordan nos anos 90. A equipe de Illinois conquistou seis títulos da NBA nessa década e se tornou um símbolo do esporte, com Jordan sendo considerado um dos maiores jogadores de todos os tempos.",
        link: "https://pt.wikipedia.org/wiki/Chicago_Bulls",
        tags: "Bulls, Chicago, MichaelJordan, times, time"
    },
    {
        img: "assets/logo-miami-heat-2048.png",
        alt: "",
        titulo: "Miami Heat",
        descricao: "O Miami Heat emergiu como uma potência da NBA nas últimas décadas, com títulos conquistados e um estilo de jogo rápido e intenso. A equipe da Flórida se tornou conhecida por suas finais emocionantes e por ter um dos ginásios mais apaixonados da liga.",
        link: "https://pt.wikipedia.org/wiki/Miami_Heat",
        tags: "Heat, Miami, times, time"
    },
    {
        img: "assets/logo-san-antonio-spurs-2048.png",
        alt: "",
        titulo: "San Antonio Spurs",
        descricao: "Os San Antonio Spurs são conhecidos por sua organização exemplar e por um estilo de jogo inteligente e disciplinado. A equipe do Texas conquistou diversos títulos sob o comando do técnico Gregg Popovich e se tornou uma das franquias mais respeitadas da NBA.",
        link: "https://pt.wikipedia.org/wiki/San_Antonio_Spurs",
        tags: "Spurs, SanAntonio, times, time"
    },
    {
        img: "assets/Philadelphia-76ers-logo.png",
        alt: "",
        titulo: "Philadelphia 76ers",
        descricao: "Os Philadelphia 76ers possuem uma rica história, com títulos conquistados e uma das maiores torcidas da NBA. A equipe da Pensilvânia passou por diversas reconstruções, mas sempre busca voltar a ser uma das forças da liga.",
        link: "https://pt.wikipedia.org/wiki/Philadelphia_76ers",
        tags: "76ers, Philadelphia, times, time"
    },
    {
        img: "assets/Brooklyn-Nets-Logo.png",
        alt: "",
        titulo: "Brooklyn Nets",
        descricao: "Os Brooklyn Nets, anteriormente conhecidos como New Jersey Nets, são uma equipe com uma história recente de grandes contratações e expectativas elevadas. A equipe de Nova York busca construir uma dinastia e conquistar seu primeiro título na NBA.",
        link: "https://pt.wikipedia.org/wiki/Brooklyn_Nets",
        tags: "Nets, Brooklyn, times, time"
    },
    {
        img: "assets/Phoenix-Suns-Logo-1993-2000.png",
        alt: "",
        titulo: "Phoenix Suns",
        descricao: "Os Phoenix Suns são conhecidos por seu estilo de jogo ofensivo e rápido, com diversos jogadores talentosos que marcaram época na franquia. A equipe do Arizona busca conquistar seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Phoenix_Suns",
        tags: "Suns, Phoenix, times, time"
    },
    {
        img: "assets/Dallas-Mavericks-Logo.png",
        alt: "",
        titulo: "Dallas Mavericks",
        descricao: "Os Dallas Mavericks conquistaram um título da NBA em 2011, liderados por Dirk Nowitzki. A equipe do Texas possui uma torcida apaixonada e busca construir um time competitivo para voltar a brigar por títulos.",
        link: "https://pt.wikipedia.org/wiki/Dallas_Mavericks",
        tags: "Mavericks, Dallas, times, time"
    },
    {
        img: "assets/Atlanta_Hawks.png",
        alt: "",
        titulo: "Atlanta Hawks",
        descricao: "Os Atlanta Hawks são uma franquia histórica da NBA, com sede na Geórgia. A equipe passou por altos e baixos ao longo dos anos, mas sempre manteve uma base de fãs leal e busca seu segundo título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Atlanta_Hawks",
        tags: "Hawks, Atlanta, TraeYoung, times, time"
    },
    {
        img:"assets/Charlotte_Hornets.png",
        alt: "",
        titulo: "Charlotte Hornets",
        descricao: "Os Charlotte Hornets são uma das equipes mais jovens da NBA, com uma história marcada por altos e baixos. A equipe da Carolina do Norte busca se consolidar como uma das forças emergentes da liga.",
        link: "https://pt.wikipedia.org/wiki/Charlotte_Hornets",
        tags: "Hornets, Charlotte, LaMeloBall, times, time"
    },
    {
        img: "assets/Cleveland_Cavaliers_secondary_logo.svg.png",
        alt: "",
        titulo: "Cleveland Cavaliers",
        descricao: "Os Cleveland Cavaliers se tornaram mundialmente conhecidos após a conquista do título de 2016, liderados por LeBron James. A franquia de Ohio busca manter-se competitiva e atrair novos talentos.",
        link: "https://pt.wikipedia.org/wiki/Cleveland_Cavaliers",
        tags: "Cavaliers, Cleveland, times, time, cavs"
    },
    {
        img: "assets/Denver-Nuggets-Logo.png",
        alt: "",
        titulo: "Denver Nuggets",
        descricao: "Os Denver Nuggets são conhecidos por seu estilo de jogo coletivo e a altitude de Denver que desafia seus adversários. A equipe do Colorado busca seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Denver_Nuggets",
        tags: "Nuggets, Denver, times, time"
    },
    {
        img: "assets/Detroit-Pistons-logo.png",
        alt: "",
        titulo: "Detroit Pistons",
        descricao: "Os Detroit Pistons são conhecidos por sua mentalidade defensiva e estilo de jogo físico, que marcou a história da franquia nos anos 80 e 2000. A equipe de Michigan busca se reconstruir e voltar aos dias de glória.",
        link: "https://pt.wikipedia.org/wiki/Detroit_Pistons",
        tags: "Pistons, Detroit, times, time"
    },
    {
        img: "assets/logo-houston-rockets-2048.png",
        alt: "",
        titulo: "Houston Rockets",
        descricao: "Os Houston Rockets são uma das equipes mais emblemáticas da NBA, com uma rica história de estrelas e títulos. A equipe do Texas busca voltar ao topo da liga, com uma nova geração de talentos.",
        link: "https://pt.wikipedia.org/wiki/Houston_Rockets",
        tags: "Rockets, Houston, times, time"
    },
    {
        img: "assets/Indiana-Pacers-logo.png",
        alt: "",
        titulo: "Indiana Pacers",
        descricao: "Os Indiana Pacers são conhecidos por sua forte cultura de basquete e por sua rivalidade regional com equipes da conferência leste. A equipe de Indianápolis busca conquistar seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Indiana_Pacers",
        tags: "Pacers, Indiana, times, time"
    },
    {
        img: "assets/logo-los-angeles-clippers-4096.png",
        alt: "",
        titulo: "Los Angeles Clippers",
        descricao: "Os Los Angeles Clippers têm uma história marcada por altos e baixos, mas emergiram recentemente como uma equipe competitiva. A equipe busca seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Los_Angeles_Clippers",
        tags: "Clippers, LosAngeles, times, time"
    },
    {
        img: "assets/logo-memphis-grizzlies-2048.png",
        alt: "",
        titulo: "Memphis Grizzlies",
        descricao: "Os Memphis Grizzlies são uma equipe jovem e enérgica, conhecida pelo estilo de jogo físico e pela cultura de 'Grit and Grind'. A equipe do Tennessee busca alcançar seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Memphis_Grizzlies",
        tags: "Grizzlies, Memphis, JaMorant, times, time"
    },
    {
        img: "assets/Milwaukee_Bucks_logo15.png",
        alt: "",
        titulo: "Milwaukee Bucks",
        descricao: "Os Milwaukee Bucks conquistaram seu segundo título da NBA em 2021, liderados por Giannis Antetokounmpo. A equipe de Wisconsin busca continuar sua trajetória de sucesso.",
        link: "https://pt.wikipedia.org/wiki/Milwaukee_Bucks",
        tags: "Bucks, Milwaukee, GiannisAntetokounmpo, times, time"
    },
    {
        img: "assets/Minnesota-Timberwolves-logo.png",
        alt: "",
        titulo: "Minnesota Timberwolves",
        descricao: "Os Minnesota Timberwolves são uma equipe jovem e talentosa, buscando consolidar-se como uma das forças da conferência oeste. A equipe de Minneapolis tenta alcançar seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Minnesota_Timberwolves",
        tags: "Timberwolves, Minnesota, times, time"
    },
    {
        img: "assets/logo-new-orleans-pelicans-2048.png",
        alt: "",
        titulo: "New Orleans Pelicans",
        descricao: "Os New Orleans Pelicans são uma equipe em ascensão, com jovens talentos promissores. A equipe da Louisiana busca conquistar seu primeiro título da NBA e solidificar sua base de fãs.",
        link: "https://pt.wikipedia.org/wiki/New_Orleans_Pelicans",
        tags: "Pelicans, NewOrleans, times, time"
    },
    {
        img: "assets/logo-new-york-knicks-2048.png",
        alt: "",
        titulo: "New York Knicks",
        descricao: "Os New York Knicks são uma das franquias mais tradicionais da NBA, com uma base de fãs apaixonada. A equipe de Nova York busca voltar aos dias de glória e conquistar um novo título.",
        link: "https://pt.wikipedia.org/wiki/New_York_Knicks",
        tags: "Knicks, NewYork, times, time"
    },
    {
        img: "assets/Oklahoma_City_Thunder.svg.png",
        alt: "",
        titulo: "Oklahoma City Thunder",
        descricao: "Os Oklahoma City Thunder são conhecidos por seu desenvolvimento de jovens talentos e por uma base de fãs fervorosa. A equipe de Oklahoma busca conquistar seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Oklahoma_City_Thunder",
        tags: "Thunder, OklahomaCity, times, time"
    },
    {
        img: "assets/Orlando-Magic-logo.png",
        alt: "",
        titulo: "Orlando Magic",
        descricao: "Os Orlando Magic são uma equipe jovem e promissora, com uma história marcada por grandes estrelas como Shaquille O'Neal e Dwight Howard. A equipe da Flórida busca reconstruir-se e voltar à elite da NBA.",
        link: "https://pt.wikipedia.org/wiki/Orlando_Magic",
        tags: "Magic, Orlando, times, time"
    },
    {
        img: "assets/Portland-Trail-Blazers-Logo.png",
        alt: "",
        titulo: "Portland Trail Blazers",
        descricao: "Os Portland Trail Blazers são uma das equipes mais estáveis da NBA, com uma forte base de fãs e jogadores talentosos. A equipe do Oregon busca conquistar seu segundo título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Portland_Trail_Blazers",
        tags: "Blazers, Portland, times, time"
    },
    {
        img: "assets/Sacramento-Kings-Logo.png",
        alt: "",
        titulo: "Sacramento Kings",
        descricao: "Os Sacramento Kings possuem uma das torcidas mais apaixonadas da NBA, apesar de décadas sem grandes sucessos. A equipe da Califórnia busca reviver seus dias de glória e conquistar seu segundo título da liga.",
        link: "https://pt.wikipedia.org/wiki/Sacramento_Kings",
        tags: "Kings, Sacramento, times, time"
    },
    {
        img: "assets/Toronto_Raptors_logo.png",
        alt: "",
        titulo: "Toronto Raptors",
        descricao: "Os Toronto Raptors se tornaram campeões da NBA em 2019, com uma campanha histórica. A equipe do Canadá busca continuar competindo em alto nível e conquistar mais títulos.",
        link: "https://pt.wikipedia.org/wiki/Toronto_Raptors",
        tags: "Raptors, Toronto, times, time"
    },
    {
        img: "assets/Utah-Jazz-logo.png",
        alt: "",
        titulo: "Utah Jazz",
        descricao: "Os Utah Jazz são uma franquia conhecida por sua consistência ao longo das décadas, com fortes equipes lideradas por lendas como Karl Malone e John Stockton. A equipe de Salt Lake City busca seu primeiro título da NBA.",
        link: "https://pt.wikipedia.org/wiki/Utah_Jazz",
        tags: "Jazz, Utah, times, time"
    },
    {
        img: "assets/Washington-Wizards-symbol.png",
        alt: "",
        titulo: "Washington Wizards",
        descricao: "Os Washington Wizards são uma equipe com uma rica história, mas com poucas conquistas recentes. A franquia da capital dos Estados Unidos busca voltar aos dias de glória e competir por títulos.",
        link: "https://pt.wikipedia.org/wiki/Washington_Wizards",
        tags: "Wizards, Washington, times, time"
    }
];