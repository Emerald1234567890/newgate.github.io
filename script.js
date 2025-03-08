<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newgate - Danmarks Bedst Optimeret FiveM Server</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }
        html, body {
            color: #e0e0e0; /* Beholder lys grå for almindelig tekst for læselighed */
            line-height: 1.6;
            margin: 0; /* Fjerner standard margin */
            min-height: 100vh; /* Sikrer, at body fylder mindst hele skærmhøjden */
            scrollbar-width: none; /* For Firefox */
            -ms-overflow-style: none; /* For Internet Explorer og Edge */
            position: relative; /* Gør det muligt at bruge absolut positionerede pseudo-elementer */
        }
        body::-webkit-scrollbar {
            display: none; /* Skjuler scrollbar i Webkit-browsere (Chrome, Safari) */
        }
        /* Baggrundsbillede på hele siden med blur */
        body::before {
            content: '';
            position: fixed; /* Fast positionering for at dække hele siden */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('new-background.jpg') no-repeat center center;
            background-size: cover; /* Skalerer billedet til at fylde hele siden */
            filter: blur(5px); /* Bevarer 20% blur (fortolket som 5px) */
            z-index: -1; /* Placerer baggrunden bag alt indhold */
        }
        /* Overlay for læselighed på hele siden */
        body::after {
            content: '';
            position: fixed; /* Fast positionering for at dække hele siden */
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Gennemsigtig overlay for læselighed */
            z-index: -1; /* Placerer overlayet oven på baggrunden, men bag indholdet */
        }
        /* Navigation */
        nav {
            background: transparent; /* Fjerner baggrundsbar */
            padding: 10px 0; /* Plads til tekst */
            position: absolute; /* Placerer navigationen absolut over indholdet */
            top: 0; /* Placerer i toppen */
            left: 0;
            z-index: 100; /* Sørger for, at den ligger oven på andet indhold */
            width: 100%; /* Fuld bredde */
            display: flex; /* Bruger flexbox til at placere elementer */
            justify-content: center; /* Centrerer ul horisontalt */
            align-items: center; /* Centrerer vertikalt */
        }
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center; /* Centrerer navigationsteksten horisontalt */
            position: relative;
            z-index: 2;
            margin: 0; /* Fjerner standardmargin */
        }
        nav ul li {
            margin: 0 20px; /* Afstand mellem links */
        }
        nav ul li a {
            color: #ffffff; /* Hvid tekst */
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.7); /* Skygge for kontrast */
        }
        nav ul li a:hover {
            color: #d3d3d3; /* Lys grå nuance for hover-effekt */
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.7); /* Beholder skygge ved hover */
        }
        /* Logo i højre side */
        .nav-logo {
            max-width: 50px; /* Lille logo-størrelse */
            position: absolute; /* Placerer logoet separat */
            top: 10px; /* Lige under toppen */
            right: 20px; /* Afstand fra højre kant */
            z-index: 2; /* Sørger for, at logoet ligger over baggrunden */
        }
        /* Header / Hero Section */
        .hero {
            height: 100vh; /* Fuld skærmhøjde */
            width: 100%; /* Fuld skærmbredde */
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden;
        }
        .hero > div {
            position: relative;
            z-index: 2; /* Sørger for, at indholdet ligger oven på baggrunden */
        }
        .hero img {
            max-width: 300px;
            margin-bottom: 20px;
            animation: fadeIn 1.5s ease-in-out;
        }
        .hero h1 {
            font-size: 3.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #00b4d8; /* Beholder farve, der matcher logoet */
            animation: fadeIn 1.5s ease-in-out;
        }
        .hero p {
            font-size: 1.2rem;
            margin: 20px 0;
            color: #e0e0e0; /* Beholder lys grå for læselighed */
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #00b4d8; /* Matcher logoets antagne farve */
            color: #fff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: transform 0.3s, background-color 0.3s;
        }
        .cta-button:hover {
            transform: scale(1.05);
            background-color: #00a1c8; /* Lidt mørkere nuance for hover */
        }
        /* Content Sections */
        .section {
            max-width: 1000px;
            margin: 50px auto;
            padding: 30px;
            background-color: #1f1f1f;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            display: none; /* Skjuler sektioner som standard */
            position: relative; /* Sørger for, at sektionen ligger oven på baggrunden */
            z-index: 1; /* Placerer sektionen over baggrunden */
            opacity: 0; /* Start med usynlig */
            transition: opacity 0.5s ease; /* Fade-transition */
        }
        .section.active {
            display: block; /* Viser sektionen */
            opacity: 1; /* Gør sektionen synlig */
        }
        .section h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #00b4d8; /* Beholder farve, der matcher logoet */
            text-align: center;
        }
        /* Rules Section Styling */
        .rules-section ul {
            list-style-type: decimal; /* Nummereret liste */
            text-align: left;
            max-width: 600px;
            margin: 0 auto;
        }
        .rules-section ul li {
            margin: 10px 0;
            padding-left: 20px;
            position: relative;
        }
        /* Connect Section Styling */
        .connect-section p {
            text-align: center;
            margin-bottom: 20px;
        }
        .connect-section .ip-address {
            display: inline-block;
            background-color: #2a2a2a;
            padding: 10px 20px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: monospace;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .connect-section .ip-address:hover {
            background-color: #3a3a3a;
        }
        /* Discord Section Styling */
        #discord {
            text-align: center; /* Centrerer alt indhold i Discord-sektionen */
        }
        #discord .cta-button {
            display: block; /* Gør knappen til en blok for at centrere den */
            margin: 20px auto; /* Automatisk margin til venstre og højre for at centrere */
        }
        /* Logo Styling efter tekst */
        .section-logo {
            max-width: 100px; /* Lille logo-størrelse */
            margin-top: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        /* Footer */
        footer {
            text-align: center;
            padding: 20px;
            background-color: #1a1a1a;
            font-size: 0.9rem;
            position: relative; /* Sørger for, at footer ligger oven på baggrunden */
            z-index: 1; /* Placerer footer over baggrunden */
        }
        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero img { max-width: 200px; }
            .hero h1 { font-size: 2rem; }
            .hero p { font-size: 1rem; }
            nav {
                flex-direction: column; /* Stable elementer lodret på mobil */
                align-items: center;
                padding: 5px 0; /* Reduceret padding på mobil */
            }
            nav ul {
                flex-direction: column;
                text-align: center;
            }
            nav ul li {
                margin: 10px 0;
            }
            .nav-logo {
                position: static; /* Fjerner absolut positionering på mobil */
                margin-top: 10px; /* Plads over logoet */
                margin-right: 0; /* Fjerner højre margin */
            }
            .section {
                margin: 20px;
                padding: 20px;
            }
            .section-logo {
                max-width: 80px; /* Justér logo-størrelse på mobil */
            }
            .connect-section .ip-address {
                font-size: 1rem;
                padding: 8px 15px;
            }
            #discord .cta-button {
                margin: 15px auto; /* Justér margin på mobil */
            }
            .hero {
                height: 100vh; /* Fuld højde på mobil */
            }
        }
    </style>
</head>
<body>
    <!-- Navigation (centreret i toppen) -->
    <nav>
        <ul>
            <li><a href="#om">Start</a></li>
            <li><a href="#regler">Regler</a></li>
            <li><a href="#discord">Discord</a></li>
            <li><a href="#connect">Connect til Newgate</a></li>
        </ul>
    </nav>
    <!-- Logo i højre side -->
    <img src="newgate-logo.png" alt="Newgate Logo" class="nav-logo">

    <!-- Hero Section -->
    <section class="hero">
        <div>
            <img src="newgate-logo.png" alt="Newgate Logo">
            <h1>Newgate</h1>
            <p>Danmarks mest episke FiveM RP-oplevelse venter på dig!</p>
            <a href="https://discord.gg/4MaZTvKK4A" class="cta-button">Join Nu</a>
        </div>
    </section>

    <!-- Content Sections -->
    <div class="section" id="om">
        <h2>Om os</h2>
        <p>Velkommen til Newgate – Danmarks førende FiveM-community for seriøst rollespil! Vi er en dedikeret gruppe af spillere, der brænder for at skabe en dyb og realistisk spiloplevelse. Med vores skræddersyede scripts, et imponerende udvalg af unikke køretøjer og et engageret fællesskab arbejder vi sammen om at levere en helt særlig verden, hvor dine historier kan udfolde sig. Uanset om du er nybegynder eller erfaren rollespiller, er Newgate stedet, hvor du kan leve dig ind i spændende roller, møde ligesindede og blive en del af noget større. Kom og oplev et community, der sætter kvalitet og fællesskab i højsædet!</p>
        <img src="newgate-logo.png" alt="Newgate Logo" class="section-logo">
    </div>

    <!-- Rules Section -->
    <div class="section rules-section" id="regler">
        <h2>Regler</h2>
        <ul>
            <li>Respektfuldt miljø: Racisme, sexisme, homofobi, mobning eller anden toksisk adfærd er strengt forbudt. Alle spillere skal vise gensidig respekt.</li>
            <li>Rollespilskvalitet: Alle spillere skal forblive i karakter (IC) til enhver tid. Ingen Out-of-Character (OOC)-samtaler medmindre det er godkendt af admin.</li>
            <li>Værd at leve (Value of Life): Spillere skal værdige deres karakters liv og undgå unødvendigt vold eller risikable handlinger uden begrundelse.</li>
            <li>Metagaming: Brug af OOC-information (f.eks. fra streams eller Discord) i spillet er forbudt.</li>
            <li>New Life Rule (NLR): Hvis din karakter dør, glemmer den begivenhederne, der førte til døden, og må ikke vende tilbage til området i 30 minutter.</li>
            <li>Ingen udnyttelse: Udnyttelse af spilfejl eller tredjepartssoftware (f.eks. cheats) resulterer i permanent udelukkelse.</li>
            <li>Vold og konflikt: Ingen Random Deathmatch (RDM) eller Vehicle Deathmatch (VDM) uden gyldig RP-årsag. Alle konflikter skal have en historie.</li>
            <li>Ejendom og økonomi: Ingen "asset dumping" (overførsel af ejendom uden IC-begrundelse) eller ulovlig handel uden for spillet.</li>
            <li>Streamregler: Streamere skal bruge in-game kameraer (f.eks. "GoPro") og må ikke bruge chat til IC-information.</li>
            <li>Admin-audit: Staffs beslutninger er endelige. Brud på regler skal rapporteres via Discord-tickets med video-bevis.</li>
        </ul>
    </div>

    <!-- Connect Section -->
    <div class="section connect-section" id="connect">
        <h2>Connect til Newgate</h2>
        <p>Kopier IP-adressen nedenfor for at tilslutte dig serveren!</p>
        <p><span class="ip-address">123.456.789.10:30120</span></p>
    </div>

    <div class="section" id="discord">
        <h2>Join vores Discord</h2>
        <p>Bliv en del af fællesskabet, få whitelist og hold dig opdateret!</p>
        <a href="https://discord.gg/4MaZTvKK4A" class="cta-button">Join Discord</a>
    </div>

    <!-- Footer -->
    <footer>
        <p>© 2025 Newgate. Alle rettigheder forbeholdes.</p>
    </footer>

    <!-- Tilføj reference til script.js -->
    <script src="script.js"></script>
</body>
</html>