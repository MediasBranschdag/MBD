-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: MBD-mysql:3306
-- Generation Time: Apr 23, 2020 at 06:31 AM
-- Server version: 5.7.29
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `166397-mediasbranschdag`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description_se` text,
  `description_en` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `description_se`, `description_en`, `logo`, `website`) VALUES
('academicwork', 'Academic Work', 'Academic Work är ett bemannings- och rekryteringsföretag som arbetar för dig som studerar eller nyligen tagit examen. Tillsammans med våra kunder erbjuder vi en bredd av tjänster och meriterande jobb för att du ska kunna ha rätt förutsättningar för att starta din framgångssaga. Ta chansen att träffa oss i vår monter, så att vi får chansen att vara din karriärspartner.', 'Academic Work is a staffing and recruitment company for students or those who have recently graduated. Together with our clients, we offer a wide range of jobs to provide you with the right qualifications to begin your success story. Take the chance to meet us at our booth, so that we get the chance to be your career partner.', 'academicwork.png', 'academicwork.se'),
('acando', 'Acando', 'Sedan 2005 driver Acando konsultprogrammet Acando Trainee, ett av marknadens bästa och mest populära traineeprogram. Som trainee hos oss får du några av Sveriges absoluta topptalanger till kollegor. Du kommer att utvecklas både professionellt och personligt tillsammans med extremt drivna och härliga människor. Vi tror på sammanhållning och gemenskap, och på ett öppet klimat där allas idéer får utrymme. Vi tror att det är så man skapar framgångsrika teamleveranser, och bäst accelererar utveckling och talang.', '', 'acando.png', 'acando.se'),
('apotea', 'Apotea', 'Apotea.se är Sveriges första fullsorterade apotek som bara finns på nätet. Apotea har det största sortimentet, över 11 000 receptfria varor och 5 000 receptbelagda läkemedel för människor och djur, och de lägsta priserna enligt HUI. Med snabba leveranser och rådgivning på nätet och via telefon underlättar Apotea vardagen för våra kunder. Apotea var först med att få Läkemedelsverkets tillstånd att bedriva apotek på nätet 2011. Sedan dess har försäljningen ökat från ca 11 Mkr till knappt en miljard 2016 (prognos) Apotea har drygt 220 anställda i Morgongåva och vid huvudkontoret i Stockholm. Apotea har vunnit en rad priser bla Årets Nätbutik 2014, 2015 på Prisjakt. Årets e-handel på Nordic E-Commerce Award 2014, 2015, 2016 och Svensk Handels stora pris Retail Awards 2016 i kategorin Årets Tillväxtföretag.\n\nEn av framgångsfaktorerna är det egenutvecklade e-handelssystemet. Apoteas IT-avdelning består av ett team av de allra bästa utvecklarna som tillsammans bygger plattformen för Sveriges mest framgångsrika e-handel. Apotea bygger alla sina system själva vilket ger ett omväxlande arbete där uppgiften kan växla mellan front-end programmering på hemsidan till realtidsstyrning av transportbanor i logistiken till framtagande av nya tjänster i vårt affärssystem. Apotea utvecklar sina system i .NET med MVC och SQL Server.', '', 'apotea.png', 'www.apotea.se'),
('asqill', 'asqill', 'Asqill är ett initiativ av sex KTH-studenter med en gemensam vision om att förbättra relationen mellan företag och studenter. Verksamheten definieras som ett talangnätverk och erbjuder extraarbete skräddarsytt för KTH-studenter. Genom deras Projektportal engageras studenter genom att utföra skarpa projekt åt branschrelevanta företag.', '', 'asqill.svg', 'www.asqill.se'),
('bonniernews', 'Bonnier News', 'Som ett av Sveriges ledande mediehus når vi över tre miljoner användare varje dag. Vi värnar om det fria ordet och gör skillnad genom journalistik som når och berör många. Genom att driva tekniken framåt och leda den digitala förändringsresan i branschen når vi hela tiden längre – du kan påverka riktningen.', '', 'bonniernews.jpg', 'bonniernews.se'),
('bontouch', 'Bountouch', '', '', 'bontouch.png', 'bontouch.com'),
('challengermode', 'Challengermode', '', 'Challengermode is an esports platform that built to solve the problem of organizing and participating in esports competitions at scale.  Our vision is to become the world’s primary esports ecosystem, bringing together gamers, game developers, influencers and organizers on one platform. We work with esports organizers like DreamHack that use our platform to host online competitions and with game developers like Riot Games to arrange community tournaments and online qualifiers while providing a better competitive gaming experience for regular esports players - across multiple devices/platforms.  Our mission is to make esports as accessible for non-professional gamers as regular sports are for regular people.', 'challengermode.png', 'challengermode.com'),
('comviq', 'Comviq', '', '', 'comviq.png', 'comviq.se'),
('conversionista', 'Conversionista', 'Conversionista är Sveriges största konverteringsteam, som hjälper sina kunder att använda sig av faktiska data istället för gissningar. Utrustade med vetenskapliga metoder synliggör de sina kunders tillväxtpotential och hjälper dem att nå sina mål.\r\n\r\nConversionista har sedan starten ökat konvertering i över 600 projekt . Förutom att de är Sveriges främsta CRO-experter har de även startat Sveriges första CRO utbildning Conversion Manager samt Nordens största conversion & growth konferens Conversion Jam.\r\n\r\nIdag är Conversionista över 50 konverteringshjältar på tre kontor i Stockholm, Göteborg och Oslo.\r\n\r\nKunder som idag gläds åt högre konverteringgrad inkluderar: Spotify, IKEA, Telia, Mathem, ICA, Rädda Barnen, Cmore, Skandia, Skistar, Di, Halebop, IF, Sitevision, Clas Ohlson m.fl.\r\n\r\nVi erbjuder studenter möjligheten att göra sitt examensarbete hos oss, både på kandidat- och masternivå. Examensarbetet ska på något sätt vara kopplat till vårt arbete på Conversionista och till ett av våra kompetensområden - UX, User Research, A/B-testning och Webbanalys. Utöver det är man varmt välkommen att söka jobb hos oss efter studierna - läs mer på <a href=\"https://conversionista.com/career/\">conversionista.com/career/</a>', 'Conversionsta are conversion optimisers who help their clients use actual data instead of guesses. Armed with scientific methods, they reveal their customers’ growth potential and help them reach their business goals.\r\n\r\nSince the start, they’ve improved conversion in over 600 projects. Apart from having the best CRO experts in Sweden and Norway, they’ve also started Sweden’s first CRO course “Conversion Manager” as well as the largest conversion and growth event in the Nordics – “Conversion Jam”.\r\n\r\nConversionista is currently over 50 conversion heroes in our three different offices in Stockholm, Gothenburg and Oslo.\r\n\r\nWe offer students the opportunity to do their thesis work at Conversionista - both on bachelor and master level. The thesis should somehow connect to our work at Conversionista and one of our competence areas: UX, User Research, A/B-testing, and Web analytics. You are also more than welcome to apply for a job once you are finished with your studies - read more at <a href=\"https://conversionista.com/career/\">conversionista.com/career/</a>', 'conversionista.svg', 'conversionista.com'),
('creuna', 'Creuna', 'Creuna är Nordens ledande digitala byrå. Deras uppdrag sträcker sig från digitala strategier som förändrar deras uppdragsgivares organisationer och arbetssätt, till teknisk vägledning, utveckling, design och innehållsarbete för stora webbplattformar. Addera digitala koncept och strategiskt arbete med sociala medier så har du täckt in en stor del av allt det Creuna sysslar med dagligen. För mer info: www.creuna.se \r\n', '', 'creuna.png', 'www.creuna.com/se/'),
('curamando', 'Curamando', 'Vill du gå på personlig intervju under Medias Branschdag? Läs nedan och anmäl dig där!\r\n\r\nCuramando grundades 2012 utifrån insikten att det pågick en förändring i marknadsföringens ekosystem. Företaget är byggt på övertygelsen att kombinationen av managementkonsulter och digitala experter är vad som krävs för att möta denna förändring och uppnå ökad tillväxt, operationell excellens och högre effektivitet. Företaget har 164 anställda på kontoren i Stockholm, Göteborg och Oslo. I december 2019 skapade Curamando, tillsammans med Altor, en ny företagsgrupp där även Conversionista, Kurppa Hosk, Animal och Keybroker ingår.\r\n\r\nÄr du en engagerad, lösningsorienterad och en positiv person som gillar att utvecklas?\r\nPå Curamando får du chansen att sätta den digitala agendan hos en mängd olika företag - allt från mindre, snabbväxande kunder till några av de största företagen i Sverige. I vår expansiva och entreprenöriella miljö får du många möjligheter att påverka och bli en central del i vårt företagsbyggande. För oss är kunskapsdelning en central del av företaget, det sker tvärs över våra olika kompetensområden och mellan digitala experter och managementkonsulter - vi lovar att det kommer få dig att utvecklas!\r\nAnmälningsformulär: <a href=\"http://bit.ly/curamandoMBD20\">http://bit.ly/curamandoMBD20</a>', 'Curamando is a marketing management consultancy, which supports companies’ online revenue growth by optimizing marketing and sales operations. Curamando was founded in 2012 with the insight that there was a shift underway in the marketing eco system, which placed high demands on companies’ ability to change fast. Curamando is built on the belief that management consultants and digital experts working together is what it takes to meet that shift and achieve growth, operational excellence an increased efficiency. Curamando has 164 employees with offices in Stockholm, Gothenburg and Oslo. In December 2019, Curamando, together with Altor, created a new company group which also includes Conversionista, Kurppa Hosk, Animal and Keybroker.  ', 'curamando.png', 'https://curamando.com/'),
('datatjej', 'DataTjej', 'DataTjej är en ideell förening som arbetar med att främja kvinnor och icke-binära i alla åldrar som är intresserade av IT och data. Vi strävar efter att förbättra relationen mellan studenter och företag, samt våra medlemmar emellan. Vi anordnar event året om som till exempel inspirerande föreläsningar och företagsbesök. DataTjej är mest känt för den årliga konferensen där företag och medlemmar får möjligheten att nätverka.\r\n\r\nDet är både gratis och enkelt att bli medlem: datatjej.se/medlem', '', 'datatjej.png', 'datatjej.se'),
('decerno', 'Decerno', 'Decerno bygger skräddarsydda lösningar med ett helhetsansvar. Vi har under drygt 30 år drivit flera hundratals lyckade uppdrag som driver digitaliseringen framåt och som är verksamhetskritiska för våra kunder. Vi skapar gärna helt nya digitala lösningar och erbjudanden som stärker våra kunders position på marknaden. Projekten genomförs inhouse. Det innebär att du enligt oss får den bästa av kombinationer: jobba i spännande kunduppdrag samtidigt som du har en fast plats på ett av våra kontor.\r\n\r\nVi har kul tillsammans och medarbetare som trivs. Vi hoppas att du vill vara en del av vårt gäng och utvecklas tillsammans med oss. En gemensam nämnare hos oss är det stora teknikintresset och vi triggas av att lösa kluriga problem. Vi tycker om att vara innovativa och arbeta entreprenöriellt. Vi tycker även om att fika, spela brädspel, sola på terrassen, sjunga karaoke - ja helt enkelt att umgås! Känner du igen dig? Då tror vi att du skulle trivas hos oss!\r\n\r\nEn av våra största fördelar är att vi är ett litet bolag som arbetar nära varandra, men som även har styrkan och tryggheten i att vara en del av den stora koncernen Addnode Group.\r\n\r\nVi har en tydlig etisk policy som tar tydligt avstånd från att arbeta med företag inom vapenindustrin, tobak, spel och alkohol.', '', 'decerno.png', 'decerno.se'),
('dice', 'EA/Dice', NULL, 'We are EA/DICE!  We entertain millions of people across the globe with the most amazing and immersive interactive software in the industry. But making games is hard work. That’s why we employ the most creative, passionate people in the industry.  EA/DICE (EA Digital Illusions Creative Entertainment), the award-winning developer based in Stockholm, Sweden, is best known for creating the phenomenally successful Battlefield franchise. We are also the home of Star Wars Battlefront and Mirrors Edge: Catalyst.', 'dice.png', 'www.dice.se/'),
('digpro', 'Digpro', 'Digpro bygger IT-system för framtidens infrastruktur. Våra produkter är GIS/NIS-baserade (geographic/network information system) och riktar sig bland annat till el-, vatten- och telekombolag. Med detaljerad geografisk data kan våra kunder övervaka, dokumentera sin befintliga utrustning samt planera framtida utbyggnad, allt med understöd av en kartvy.\r\n\r\nDigpro är etablerat i Stockholm och majoriteten av företaget arbetar på vårt huvudkontor på Kungsholmen, men vi har även kontor i Polen och internationella partners. Totalt är vi ca 100 medarbetare. Hos oss jobbar en blandning av utvecklare, ux-designers, infrastrukturexperter m fl.\r\n\r\nJust nu gör vi en storsatsning på förbättrad UX i våra applikationer. Kom gärna förbi så berättar vi mer!', 'Digpro builds IT-systems for the infrastructure of tomorrow. Our software is GIS/NIS-based (geographic/network information system) and developed for companies such as electric utility and telecom. Using detailed geographical data we enable our customers to surveil and document  their equipment as well as planning future construction. In all of our applications the map plays a central part.\r\n\r\nDigpro is a company based in Stockholm. The majority of our employees work at our main office on Kungsholmen but we also have an office in Poland and international partners. Digpro has roughly 100 employees. We have a mix of many roles spanning from developers and ux-designers to infrastructure experts.\r\n\r\nRight now we are making a big investment in improving UX in our applications. Feel free to come by and we\'ll tell you more!', 'digpro.svg', 'digpro.com'),
('dynabyte', 'Dynabyte', 'Dynabyte är ett nytänkande IT-konsultföretag inom systemutveckling. Vi är ett härligt gäng på drygt 70 personer som älskar att dela med oss av vår kunskap genom exempelvis seminarier, konferenser och workshops! Samtidigt strävar vi efter att var och en av oss ska ges möjlighet att utvecklas i sin egen takt och utifrån sina egna mål och drömmar. Detta gör vi genom att arbeta med individuell coachning och utvecklingsplaner för samtliga av våra anställda.\r\n\r\nVi har ett nytänkande ledarskap, där transparens och delaktighet står i centrum. Hos oss har du möjlighet att direkt påverka din vardag och organisationen, genom att att vara delaktig i beslut som rör Dynabyte.\r\n\r\nVåra kunder har projekt som ligger i teknisk framkant och befinner sig bland annat inom bank, finans, utbildning, spel, e-handel och startups. \r\n\r\nVårt populära traineeprogram har funnits sedan 2007. Under din tid som trainee på Dynabyte arbetar du i ett projekt med stöttning av våra seniora utvecklare. Parallellt med projektet deltar du även i flertalet utvecklande tekniska utbildningar och workshops. Sedan vi för första gången startade vårt traineeprogram har vi utvecklat några av de allra bästa IT-konsulterna i branschen. Vårt program ger dig ett stort försprång gentemot andra i branschen och efter programmets slut ges du möjlighet att arbeta med roliga utmaningar hos våra kunder!', '', 'dynabyte.png', 'dynabyte.se'),
('epidemicsound', 'Epidemic Sound', '', '', 'epidemicsound.png', 'epidemicsound.com'),
('ericsson', 'Ericsson', 'Ericsson är världsledande inom kommunikationsteknik och tillhörande tjänster med huvudkontor i Stockholm, Sverige. Vår svenska organisation har närmare  14 000 anställda av totalt cirka 111 000 globalt (dec 2017), inom företagets alla verksamheter – forskning, utveckling, försäljning, produktion och administration.\r\n\r\nEricssons erbjudande sträcker sig över områdena Networks, Digital services, Managed Services och Emerging Business och är utvecklat för att stödja våra kunder att digitalisera sin verksamhet, öka effektiviteten och att hitta nya intäktskällor. Ericssons investeringar i innovation har möjliggjort för miljarder människor världen över att ta del av nyttan med telefoni och mobilt bredband. Ericssons aktier är noterade på Nasdaq Stockholm och Nasdaq  NewYork.\r\n\r\nEricsson har en av branschens starkaste patentportföljer med 45 000 beviljade patent. Ericsson i Sverige är basen för FoU inom radioteknik och 5G - och vi har ett tydligt mål, vår forskning och utveckling i Sverige ska/borde vara världsledande, inte minst i nästa generations system för mobilkommunikation. Totalt har vi omkring 7500 dedikerade anställda inom våra FoU-aktiviteter i Sverige.', '', 'ericsson.png', 'ericsson.com'),
('fatshark', 'Fatshark', '', 'Originally founded by Martin Wahlund, Rikard Blomberg, Joakim Wahlström and Johan Jonker the company started off working as hired guns. It wasn’t until 2010 that we published our first game – Lead and Gold, a wild-western shooter, with the help of Paradox Interactive. In 2009 Fatshark co-founded Bitsquid that later was acquired by Autodesk in 2014. The money from the sale funded our very first self-published AAA game, Warhammer: End Times – Vermintide.  Today we consist of a tightly knit team comprised of over 90 experienced and skilled employees, while still doing regular updates for Vermintide 2 and always on the look-out for new and exciting projects. We are currently situated in Södermalm, the creative quarter of central Stockholm, Sweden.  At Fatshark we believe the best moments are experienced together, it’s what influences our work and us as a studio. In our games, you are given the freedom to succeed or fail trying as a group. And that’s exactly the way we like it.  Together we have created experience’s such as Lead and Gold, Krater, Bloodsports.tv and Vermintide 1 & 2 – with no plans to stop just there.  — Fatshark', 'fatshark.png', 'fatsharkgames.com'),
('filter', 'Filter', '', '', 'filter.png', 'magasinetfilter.se'),
('findout', 'FindOut', 'På FindOut arbetar vi med våra kunders utvecklingsprocesser för både hårda produkter och mjuka tjänster. Vi utvecklar, effektiviserar och visualiserar. En del av oss är grymma kodare, några är processgurus eller tunga systemarkitekter. Andra har några års yrkeserfarenhet eller kommer direkt från universitet eller högskola. Vi drivs alla av våra kunders önskan att leverera produkter med bättre kvalitet och med ännu högre grad av innovation. Vi söker främst ingenjörer inom METE, D och F men även andra inriktningar då det framförallt är de personliga egenskaperna som avgör!', 'At FindOut we work with our customers\' development processes, products and software services. We develop, increase efficiency and visualize. Some of us are senior developers, some are process gurus or experienced system architects. Others have a few years of working experience or come directly from University. We are all driven by our customers’ wish to deliver products with higher quality and a high grade of innovation. We look for engineers from METE, D and F but also from other disciplines since above all we value personal qualities!', 'findout.svg', 'find-out.se'),
('fishbrain', 'Fishbrain', '', 'At Fishbrain, our mission is to build the best possible tool for people who love fishing. We believe if you love what you’re doing, surrounded by inspiring colleagues in an environment of growth and development, you will achieve great things.  We’re a Stockholm-based tech startup of more than 50 people from 20 different countries, with a global user base. Some of us fish, some of us love the outdoors, but all of us are united in building the best fishing experience for the anglers of today and the future. 2019 brings a huge year of growth, so come by our booth and drop us a line if you’re hooked. Yes, pun intended. —————-  Other reasons to check out Fishbrain:  *We work closely with Apple and Google in our product development. Plus we partner with world-leading scientists and academics to use our data for research on topics like the sustainability of fish populations.  *Whether you want to attend a conference or gain skills in a particular area, we will support you and do what we can to help make that happen.  *You’re more than a brain and a set of fingers typing. At Fishbrain you’ll get an annual allowance to put towards anything in the realm of health and fitness.  *Twice a year we get together to spend time outside the office -- usually fishing. That’s in addition to other smaller team outings throughout the year.', 'fishbrain.png', 'fishbrain.com'),
('foi', 'FOI', 'FOI är ett av Europas ledande forskningsinstitut för tillämpad forskning inom försvar och säkerhet. Vi är en statlig myndighet under Försvarsdepartementet men merparten av projekten är uppdragsfinansierade. Våra största kunder är\r\nFörsvarsmakten och Försvarets materielverk. Vi har även många uppdrag inom den civila sektorn för statliga myndigheter, kommuner och företag. Vi gör säkerhetspolitiska analyser och bedömningar av olika typer av hot. Vi är ledandeinom undervattensforskning och forskning kring explosivämnen. Vi forskar även kringflygsystem, IT-säkerhet, radar, laser och andra sensorsystem, samt skydd mot farliga ämnen. FOI:s kunskap är efterfrågad internationellt och vi leder flera EU-projekt.\r\n\r\nFLSC\r\nFlygvapnets Luftstrids Simulerings Center (FLSC) ger piloter, flyg- stridsledare och beslutsfattande personal en möjlighet att träna och utveckla det taktiska uppträdandet i förband utifrån framtida scenarier. Såväl nya tekniska hjälpmedel som uppgraderade befintliga system testas och valideras i bemannade simuleringar. I scenarierna anpassas hoten system- och beteendemässigt så de ska motsvara en presumtiv motståndares kapacitet och förmågor.\r\n\r\nFörsvarsmakten använder normalt 26 verksamhetsveckor per år vid FLSC. Utöver detta tillkommer externa kunder som tjänsteexport till andra Gripenkunder eller studier i FMV-regi. Övrig tid, cirka tio veckor per år, pågår förberedelser och teknikutveckling.\r\n\r\nFLSC genomför ett antal olika utbildningspaket för Försvarsmaktens flygförband. De primära målgrupperna är FM insatsförband men även bland annat Flygbefälsskolan FBS, ,Flygskolan och STRIL-skolan. De utbildningar som genomförs är till exempel utbildning i det nationella försvaret av svenskt territorium men också Peace Support Operations, grundläggande och avancerad Beyond Visual Range BVR-strid, Close Air Support och förbandschefsuppträdande.\r\n\r\nFLSC verksamhet finansieras i första hand av Försvarsmaktens rambeställning. Utöverdenna tillkommer intäkter från de externa kunderna som återinvesteras i anläggningen.\r\n\r\nSimuleringsanläggningen gör det möjligt att utbilda och träna kostnadseffektivt, miljövänligtoch säkert.\r\n', '', 'foi.png', 'foi.se'),
('forvalter', 'forValter', '<b>Vilka är vi?</b>\r\nVi är forValter, en glad och driven start-up från KTH som utvecklar \"Valter\", den digitala fastighetsskötaren.\r\n\r\n<b>Vad gör Valter?</b>\r\nValter agerar den primära kontaktytan för boende i flerfamiljshus. Oavsett om bredbandet som  strular, kranen som droppar eller grannen som väsnas; ser Valter till att boende får hjälp med problemet. \r\n\r\n<b>Vad är våra förhoppningar på Medias Branschdag?</b>\r\nVi hoppas på att träffa ambitiösa designers, UX-designers & frontend-utvecklare.\r\n\r\nJust nu är letar vi efter en glad, noggrann och gärna lite tokig designer/UX-designer som ett välbehövt tillskott i vårt team.\r\n\r\n<b>Vad innebär rollen?</b>\r\nRollen är perfekt för dig som som vill ha ett sidoprojekt utanför skolan, men som ändå har med din utbildning att göra.\r\n\r\nDu kommer ansvara för design/UX och förhoppningsvis hjälpa oss hitta en bättre font än Comic Sans.\r\n\r\n<b>Borde man komma förbi oss på branschdagen?</b>\r\nAbsolut, skulle vara väldigt uppskattat. Vi bjuder på grymt godis, trevliga samtal och tävlar ut ett par trådlösa hörlurar. ', '<b>Who are we?</b>\r\nWe are forValter, a joyful and driven start-up from KTH that is developing “Valter”, the digital property manager. \r\n\r\n<b>What does Valter do?</b>\r\nValter is the primary point of contact between residents their property manager. It doesn’t matter if the internet is down, a tap is running, or a neighbor is noisy. Valter ensures the resident gets the help they need.\r\n\r\n<b>What is our goal with Medias Branchdag?</b>\r\nWe are hoping to meet ambitious designers, UX-designers, & frontend-developers. Right now we are looking for a happy, detail oriented, and  preferably a little bit nutty designer/UX-designer to join our team.\r\n\r\n<b>What would the role entail?</b>\r\nThe role is perfect for someone who would like to be a part of a cool project. A none-school related project that is related to their education. In the role you will be responsible for design/UX, and hopefully help us find a better font than Comic Sans.', 'forValter.png', 'kth.se/innovation/forinkubator/bolag/batch-10/forvalter-1.932839'),
('frönb', 'FRÖNB', 'Gaming-produkter som fokuserar på verkliga kundbehov och skapar en överlägsen upplevelse för gamers som vill vara bäst i en tävlingsinriktad värld. FRÖNB:s produkter är byggda med svensk kvalitet och med en enkel svensk design, men med hela världen i åtanke.', 'Gaming gear that focuses on actual customer needs and create a superior experience for gamers who care about being the best in a competitive world. Gear that is built with Swedish quality, with a simplistic Swedish design, for a whole world in mind.', 'fronb.jpg', 'fronb.gg'),
('froosh', 'froosh', NULL, '', 'froosh.png', 'froosh.se'),
('hsustain', 'H Sustain', 'Vårt mål är att i grunden förändra vår uppfattning och uppskattning av vår omgivning. Genom Augmented Reality, Rapid content Creation och Kollaborativt Skapande bygger vi digitala verklighetsutställningar som ger dig möjlighet att utforska de dolda berättelserna och okända platserna som ständigt omger oss.\r\n \r\nVår kultur\r\n● Människor Först!\r\n● Platt organisation.\r\n● Mångfald och Jämlikhet\r\n● Dom som gör saker får saker gjort.\r\n \r\nTech Stack\r\n● Mobil app-utveckling för iOS och Android.\r\n● Programmeringsspråk: Java, Kotlin, Objekt-c eller Swift, etc.\r\n● Backend som körs på Node.js, Java Spring eller Django med servrar på AWS.\r\n \r\nAtt arbeta med oss är att delta i en tidig start-up i framkanten av AR och AI. En möjlighet att ta på sig en utmaning som ger snabb personlig och professionell utveckling, in i framtiden för blandad digital verklighet.\r\n \r\nVi erbjuder sammarbetsorienterad, öppen och platt arbetskultur med lång erfarenhet inom tech att ta del av.\r\n', 'H Sustain is a startup currently receiving support from KTH Innovation pre-incubator. Our\r\nobjective is to help people get immersive and seamless urban exploring experience, and\r\npromote social well-being by enabling thorough exploration of the hidden stories and\r\nunknown places around us. Through rapid content creating and collaborative editing,\r\nrelevant information is collected widely and is up-to-date in different dimensions. With the\r\nhelp of Augmented Reality, digital exhibitions of the real-world elements will be flattered,\r\nuseful information is smartly categorised and easily found, and users’ perceptions of their\r\nphysical surroundings will be enhanced by overlaying information and digital components.\r\nWe embed information into experience!\r\n\r\nOur culture\r\n● Human-centric approach\r\n● Democratic thinking\r\n● Diversity and gender equality\r\n● Visionary doer delivering social impacts\r\nTech Stack\r\n● Mobile app development framework for iOS &amp; Android.\r\n● Programming language Java, Kotlin, Objective-c, or Swift, etc.\r\n● Backend running on Node.js, Java Spring or Django with servers on AWS.\r\n\r\n\r\nThis is a great opportunity for you who want to take part in an early-stage startup while\r\nworking on cutting edge tech and grow with the company for years to come. We offer you\r\nprofessional mentorship and collaborative working culture. We are open to having you\r\nonboard as colleagues and found the future together.\r\n', 'hsustain.png', 'waiovewx.wixsite.com/hsustainhome'),
('ibminteractive', 'IBM Interactive Experience', 'Vi tänker större än en byrå och mer kreativt än ett konsultföretag med befogenhet att integrera hela systemet. Det gör att vi på Interactive Experience (iX) kan förvandla stora idéer till skalbara upplevelser genom IBM Design Thinking, ett agilt förhållningssätt och integrerade system. iX har designstudios i ett flertal länder där vi kan hjälpa våra kunder att sätta sina kunder i centrum för vårt gemensamma arbete. Från strategi, kreativ design och skalbar digital handel, mobila och bärbara plattformar sitter våra team tillsammans med kunderna för att skapa innovationer som driver resultat.\n\niX är en del av IBM, ett globalt företag med över 300 000 anställda världen över finns möjlighet till en internationell karriär och informationsutbyte med kollegor över landsgränserna. Om erfarenhet inom ett område inte finns inom landet finns det alltid en kollega med expertkunskap som man kan kontakta utanför landsgränserna. Ytterligare fördelar med att vara en del av IBM är t.ex. möjligheten att gå på kurser och utbildningar inom Agila metoder, Design Thinking och konsultmannaskap, som ger nya kunskaper och kontakter inom arbetslivet.', '', 'ibmx.png', 'www-05.ibm.com/employment/emea/consultingbydegrees/index.html'),
('if', 'If', '', 'If IT is 1100 people creating the knowledge hub of digital services for the largest fintech company within insurance in the Nordics - If P&C Insurance. If IT develops our new digital platform Waypoint – one of the largest .NET program in the Nordics. We have mature DevOps Teams developing, operating and deploying in Cloud supported by an Agile ALM process on Azure. In our own Tech Lab we work in the forefront of technologies i.e. AI, Bots, Micro services and Machine Learning et al. If IT is a central part of making the digital customer journey undifficult.\r\n \r\nIn August 2020 our 6 month long Nordic .net trainee program will start in Stockholm and Oslo for 25 trainees. The application period is still open, so come by our stand and discuss how this could be a great start in your career. For questions reach out to per.ol-ers@if.se or apply directly web.if.se/joinus\r\n \r\nHere are some of the technologies that we are currently working with, hope it could be of interest for you: .NET Framework | Open Source | GIT | .NET Core | Tableau | Angular | Blueprism | Microsoft Azure | SAS | Mainframe | Azure DevOps | Confluence | Power BI | Teradata | Jira | App Center | Xamarin | Machine Learning | .NET Core | Nuget | npm | SQL Server | CosmosDB | SonarQube | TensorFlow | Cognitive Services | Google Cloud | ML | Deep Learning | PowerShell | Splunk | Microservices', 'if.svg', 'if.se'),
('isotop', 'Isotop', 'Isotop är ett kreativt teknikbolag! Tillsammans med våra kunder bygger vi webbplatser, e-handelstjänster och mobila applikationer. Vår filosofi är att teknik är det som möjliggör den stora förändring vi befinner oss i och därför ska få ta ett större utrymme tidigare i alla digitala satsningar. Allra viktigast är dock att vi levererar rätt lösning på rätt uppgift - därför jobbar vi också med teknisk analys, teknisk strategi och att utveckla och optimera våra kunders digitala produkter.\r\n\r\nHos oss jobbar systemutvecklare UI-utvecklare, producenter, agila coacher och testare enligt agila principer och processmodeller. Tillsammans tar vi fram fungerande tjänster på ett effektivt, långsiktigt och hållbart sätt.\r\n\r\n\r\nVi är idag drygt 50 medarbetare som jobbar i team om 8-10 personer. Vi tycker att vi utvecklas mest när vi jobbar i en sammansvetsad grupp över en lite längre tid - men det går att byta om du vill testa någonting nytt - ett annat team, en ny teknik, en ny roll. Vi vill att du ska kunna utvecklas med oss, inte behöva byta arbetsgivare när du vill ha nya utmaningar. Du får inte jobb på Isotop bara för vad du kan - utan för vad vi tror att du kan utvecklas till.\r\n\r\nVi värdesätter balans mellan arbete och fritid. Vad du gör med din lediga tid formar dig och vad du gör när du är här. Du vet själv vad du gillar. Det du gillar gör dig bättre. Därför vill vi inte att jobbet skall vara det enda som definierar dig. Samtidigt tror vi att du kommer gilla att vara här en hel del. Om inte för frukosten, flipperspelen och människorna, så kanske för att vårt kontor är stort, ljust och mysigt - och ligger mitt i stan.', '', 'isotop.png', 'isotop.se'),
('ist', 'IST', '', 'Are you happy with what you\'re doing? Would you like to be doing something that really matters? Something that makes a difference to our society, our children and our future?  Welcome to IST. We change the way schools work and make sure everyone gets the chance to learn more.  IST has worked side by side with schools for more than 30 years. We have accompanied each other, developed together, challenged each other and found new ways forward. We have delivered IT solutions and services aimed at making life and work better for everyone involved with schools. We know more about schools than most. We have a huge amount of collected experience within our company and half of our employees have a background as teachers or school leaders. What we want to achieve with our work is for everyone in society to have the opportunity to learn as much as possible. Therefore, we have formulated our vision as follows:  \'Every day we help build the schools of tomorrow and a future in which we can all learn more.\'  IST is available in Sweden, Norway and Denmark, where we have about half the population are our customers and users. Our headquarters are in Vaxjo where about 130 people work. Our other office in Sweden is located in Stockholm, with about ten employees. Our Norwegian office is in Oslo, where approximately 50 people work. In Denmark our office is in Roskilde, where there are also about 50 people working. At IST you will find, amongst others, product managers, business consultants, support staff, software developers, project managers, business developers, technicians and Key Account Managers. Basically, we are all problem solvers who, in different ways, try to meet our customers\' challenges.', 'ist.png', 'www.ist.com'),
('kaplan', 'Kaplan', 'Kaplan är Skandinaviens ledande företag för Loyalty Management. De jobbar med effektiva kundlösningar där de ökar värdet för sina kunder genom marknadsföring, dataanalys och olika kreativa processer. I dagens digitala värld har företag tillgång till makalösa mängder av data. Hos Kaplan tror de fast vid att framtiden för kommunikation är datadriven, relevant och riktad där IT och marknadsföring måste arbeta tillsammans för att skapa denna framtid. För mer info: www.kaplan.se \r\n', '', 'kaplan.svg', 'www.kaplan.se'),
('knowit', 'Knowit', 'Knowit AB (publ) är ett konsultbolag som, inom den allt snabbare digitaliseringen, skapar unika kundvärden genom att erbjuda gränsöverskridande leveranser från tre affärsområden, Experience, Insight och Solutions. Det är förmågan att kombinera kompetenser inom design och kommunikation, managementkonsulting samt it, som skiljer oss från andra konsultbolag. För oss på Knowit är varje teknikskifte en möjlighet till utveckling, både för den enskilde konsulten och företaget i stort. Vi är fortfarande precis lika nyfikna – och redo för förändring – som vid starten 1990. Genom att förena kreativ styrka och strategisk kompetens med passion för teknologi tänker vi både nytt och annorlunda. Våra kommunikationsexperter, managementkonsulter och it-specialister hittar alltid nya vägar framåt.\n\nKnowit är idédrivet och uppmuntrar innovation, entreprenörskap och personligt engagemang. Varje medarbetare har eget beslutsmandat och kan växa både i sin yrkesroll och som människa. Vårt sätt att arbeta, och hur vi organiserar oss, matchar dagens föränderliga värld med nya arbetssätt, nya affärsmodeller och ny teknologi. Knowit är alltid med när det händer, i ett ständigt expanderande digitalt universum. Vår kultur präglas av öppenhet, förståelse för kundens affär, hög specialistkompetens och en vilja att ständigt utvecklas. Vi ser våra kunders verksamhet som en helhet där kommunikation, strategi och teknik samverkar – en inställning som speglas i våra tre affärsområden:\n\nKnowit Experience är Nordens ledande kommunikations- och teknikbyrå som skapar digitala möjligheter för både kunden och kundens kund, med fokus på positiva användarupplevelser. Knowit Insight är den digitala managementkonsulten som stöttar uppdragsgivarnas långsiktiga affärsutveckling både taktiskt och strategiskt. Målet är att skapa insikt och förståelse – för att kunna forma snabbare, mer flexibla och mer innovativa organisationer. Knowit Solutions är systemutvecklaren som bygger digitala processer och kärnsystem från grunden – teknik som gör digitaliseringen möjlig. Tillsammans skapar vi möjligheter för företag, individer och samhället i stort.', '', 'knowit.png', 'www.knowit.se'),
('kry', '', NULL, '', 'kry.svg', 'kry.se'),
('lexplore', 'Lexplore', 'Lexplore har en tjänst som mäter läsförmågan hos lågstadiebarn med hjälp av AI, Eyetracking och många års forskning. Med detta kan Lexplore hjälpa skolor och kommuner att mäta läsförmågan och upptäcka elever som behöver stöd tidigt. Tjänsten är snabb, objektiv och resurssnål. På så sätt kan lärare få mer tid för sina elever och skolledare för en möjlighet att få överblick över läsförmågan i en skola eller kommun.\r\n\r\nHur går det till?\r\n\r\nEleverna läser två korta texter på en skärm, en Eyetracker spelar in ögonrörelserna. Efter det får eleven några korta frågor för att testa läsförståelsen. Ögonrörelseinspelningarna laddas upp till en molntjänst där AI-modeller som är tränade på tusentals ögonrörelseinspelningar från elever som gjort referenstester. Därefter levereras resultaten till skolan och kommunen i en webbaserad överskådlig resultatportal.\r\n\r\nLexplore har metodiskt tagit sig ut i världen ända sedan starten 2016 och har hela tiden rönt stor uppmärksamhet. Bland tidigare priser finns Sweden EdTEch award 2016, Nordic EdTech Awards 2017, EIT digital challenge samma år. Företaget har också blivit uppmärksammat i såväl WIRED, Ed Surge (Amerikansk EdTEchblog), SR-Vetenskapsradion och ekot, som av Microsofts VD Satya Nadella som tagit upp det svenska bolaget som ett exempel på hur man använder teknik ”for a global good”.', '', 'lexplore.png', 'lexplore.se'),
('lindvalls', 'Linkwalls', NULL, '', 'lindvalls.png', 'lindvallskaffe.se'),
('linkedin', 'LinkedIn', NULL, 'Your Linkedin profile represents your professional brand and gives you a way to tell your story. Come to our booth and learn how to best express your professional passions, aspirations and achievements from one of Linkedin’s local Stockholm employees and have the chance to transform your own profile based on what you\'ve learned.\r\n\r\nFounded in 2003, LinkedIn connects the world\'s professionals to make them more productive and successful. With more than 660+ million members worldwide, including executives from every Fortune 500 company, LinkedIn is the world\'s largest professional network. The company has a diversified business model with revenue coming from Talent Solutions, Marketing Solutions, and Premium Subscriptions products. Headquartered in Silicon Valley, LinkedIn has offices across the globe. To learn more about working at Linkedin visit our page!', 'linkedin.png', 'linkedin.com'),
('mrg', 'MRG Gametek', NULL, 'Do you want to be part of the team that will shape the future of the iGaming industry? Come and join us at MRG Gametek!  MRG Gametek is providing the technical platforms for the brands Mr Green and Redbet. Our teams are located both in Malta and in Stockholm. At MRG Gametek you will be part of a creative, innovative team and cool technology is the heart of what we do. In everything we do, we are driven by the concept of Green Gaming which is our commitment in responsible use of our products.', 'mrg.png', 'mrggametek.com'),
('myacademy', 'My Academy', 'My Academy startade år 2005 och är idag Sveriges största företag inom läxhjälp i hemmet och online. Företaget präglas av hög ambition, gott humör och att ständigt vilja ge “det lilla extra” till kunder, studiecoacher och medarbetare. Vi är 20 medarbetare som sitter i fina lokaler i centrala Stockholm.\n\nMy Academy har omkring tusentals studiecoacher i nätverket idag och söker löpande personer som vill ha ett flexibelt och roligt extrajobb i kombination med studier.', '', 'myacademy.png', 'www.myacademy.se'),
('naia', 'Naia', NULL, '', 'naia.png', 'thenaiainitiative.se'),
('netinsight', 'Net Insight', 'Net Insights vision är att möjliggöra en live och interaktiv TV-upplevelse för alla världen över. Vårt mål är att leda utvecklingen och möjliggöra en global mediemarknadsplats där live-innehåll kan delas och interaktion bland TV-publiken kan ske i realtid. Vi vill skapa medieupplevelser för framtiden, med fokus på innehåll. Net Insight levererar produkter, mjukvara och tjänster för effektiv, högkvalitativ medietransport, tillsammans med effektiv resursplanering, som skapar en förbättrad TV-upplevelse.\n\nNet Insights erbjudande omfattar hela mediespektrat, från TV-kameror och TV-studior, ända fram till TV-konsumenter. Våra lösningar gynnar nätoperatörer och TV- och produktionsbolag genom att sänka den totala ägandekostnaden, förbättra deras arbetsflöden och ge dem möjlighet att hitta nya affärsmöjligheter. Fler än 500 ledande kunder levererar affärskritiska medietjänster med Net Insights produkter i över 60 länder. Net Insight är noterat på Nasdaq Stockholm.', '', 'netinsight.png', 'www.netinsight.net'),
('netlight', 'Netlight', NULL, '', 'netlight.svg', 'netlight.com'),
('nightli', 'Nightli', 'Framtidens lojalitetsnätverk för nattlivet! Gäster samlar och spenderar fest-poäng på olika nattklubbar med en rolig webbplattform så kroganställda kan skapa större kundlojalitet och får ett bättre beslutsunderlag.', 'Time has finally come to digitize all stages of “going out” through gamification. With the help of a playful user experience nightli will be the first mobile app to bring nightlife as we know it today, to a community platform that raises guest loyalty for nightclub owners. Beneficiaries of our solution will not only be the clubs, but also the visitors thanks to our solution. Therefore, with the help of human computer interaction design and smart algorithms, our goal is to grow world\'s nightlife in a fair and humorous way through technology. Nightlife is not a guestlist. It is a community!', 'nightli.jpg', 'kth.se/innovation/forinkubator/bolag/batch-10/nightli-1.932841'),
('nordicmorninggroup', 'Nordic Morning', NULL, 'We are 220 passionate people driving change for the largest enterprises and brands in the Nordics by building and running their Digital Growth Engines. Our ways of working helps companies become customer-centric by combining our capabilities within business transformation, service design, technology, data driven marketing and content.', 'nordicmorninggroup.svg', 'www.nordicmorning.se'),
('ooyala', 'Ooyala', '', 'Ooyala is a global technology company delivering online video solutions and services. We are on a mission to revolutionize digital TV - end-to-end and at a global scale. That requires taking on some very interesting technical challenges, spread across Media Logistics, Video Publishing, Video Advertising and large scala Data Analytics.  Ooyala Stockholm The Stockholm office is Ooyala\'s third biggest office (after Silicon Valley and London) and is home turf to everything ad-tech.  More than 2/3 of the 80+ strong Stockholm crew work in R&D making Stockholm is one of Ooyala\'s core engineering hubs. The complexity and scale involved in running a global ad-serving platform makes Stockholm an innovation center not only for advertizing technology but also for Ooyala\'s infrastructure management, data pipelines and core analytics.', 'ooyala.png', 'www.ooyala.com'),
('plackers', 'Plackers', NULL, '', 'plackers.svg', 'plackers.se'),
('prime', 'Prime Weber Shandwick ', '', 'Prime and United Minds is an agency of 150 employees with its headquarters in Stockholm, focused on all aspects of integrated marketing, public affairs, crisis management, corporate communications and business intelligence. The agency consists of two different entities: Prime, focusing on public relations and United Minds, providing comprehensive business intelligence services. We provide fully-integrated consulting services to global companies, professional services firms, industry associations, government agencies and other large organizations.  Vi söker studenter inom alla områden, alla olika bakgrunder är välkomna.', 'prime.png', 'primegroup.com'),
('protendering', 'ProTendering', 'ProTendering är ett verktyg som stöttar kravställarna i upphandlingar för optimering av kostnader i relation till önskad kravbild.', '', 'protendering.png', 'emp.jobylon.com/jobs/53152/'),
('redbee', 'Red Bee Media ', 'Red Bee Media formar grunden för existerande och framtida medieupplevelser genom att definiera hur videoinnehåll skapas, förstärks, lagras, hanteras, distribueras, upptäckts och konsumeras. Genom vår dagliga service och pågående innovation hanterar vi teknisk och operativ komplexitet, optimerar arbetsflöden och levererar leveranskritiska tjänster till våra kunder. På så sätt hjälper vi dem att snabbt anpassa sig och trivas i en förändrande mediebransch. De kan då fokusera på innehållsproduktion och slutanvändarens tillfredsställelse, samtidigt som de utnyttjar cloud-baserade och skalbara tjänster från Red Bee Media.\r\n\r\nPå Red Bee Media är vi 2500 media- och sändningsexperter över 10 olika länder som jobbar för att leverera tjänster inom broadcasting, media management, live streaming & VOD, grafik- och metadatahantering med mera. På Stockholmssajten jobbar vi nära tv-produktioner samtidigt som vi är med och driver maskineriet bakom, från kameralins till det som slutanvändaren till slut ser på sin skärm. Hos oss finns en medieteknisk bredd och vare sig du är mer traditionellt tekniskt lagd, gillar att programmera, visualisera eller brinner för ledarskap och management har du chans att passa här.\r\n\r\nSväng gärna förbi vårt bord på Branschdagen vare sig du redan är hooked på TV/video-branschen eller högst förvirrad om vad du vill göra efter examen, You will have us at Hello!', '', 'redbee.jpg', 'redbeemedia.com'),
('river', 'River', '', 'As a hybrid agency, we take pride in providing our clients with a bridge between digital innovation and advertising. Digital communication is the core of everything we do. Our work ranges from global communication platforms to pan-European TVC\'s, digital product innovations, social community management, game development and games for marketing.  We have grown organically alongside our clients for the past eighteen years. Today we deliver high-value strategy, creativity and production for Nike (Global), EA Games (Global), Nokia (Europe), Philips (Europe), KLM (Global) and many more.  River is part of the Intellecta Group.', 'river.png', 'www.river.se'),
('safemind', 'Safemind', 'Vi rekryterar digitala team med det bästa nätverket i Sverige. Vi är specialister på att rekrytera personal till tjänster där IT, teknik och media står i fokus. Det gäller både tjänster som kräver djupa tekniska kunskaper såväl som sälj- och marknadsroller där teknik är en viktig del av erbjudandet.\n\nFör oss handlar rekrytering om att förstå människors drivkrafter och kompetenser och matcha dessa mot våra kunders föränderliga vardag, oftast i en digital context. Att identifiera och tillsätta nyckelpersoner som gör en verklig skillnad är det vi tycker är allra roligast! Med den allt tuffare konkurrensen om de allra bästa kandidaterna är ett väl upparbetat nätverk nyckeln till att snabbt hitta rätt kompetens.\n\nVi har haft förmånen att hjälpa många av de mest framgångsrika techbolagen i sina tillväxtresor från startup till börsintroduktioner, och bra utmaningar lockar de smartaste kandidaterna och bra kandidater lockar de roligaste bolagen.\n\nVi skulle kunna berätta ännu mer om oss själva men föredrar faktiskt att berätta om våra kunder. Vi har haft förmånen att arbeta med några av världens mest framsynta bolag och det tycker vi väger tyngre än ord: King, Spotify, DICE, Tobii, PriceRunner, Fishbrain, SEB, Viaplay, NetEnt, FEO Media, Hemnet och Folksam för att nämna några.\n\nVåra lediga tjänster, och mycket mer, hittar du på vår hemsida:', '', 'safemind.png', 'www.safemind.se');
INSERT INTO `companies` (`id`, `name`, `description_se`, `description_en`, `logo`, `website`) VALUES
('schibsted', 'Schibsted', 'Hej!\r\n\r\nJag heter Schibsted och består av en härlig familj av flera ledande konsumentmärken och produkter såsom Aftonbladet, Blocket, Svenska Dagbladet, Let´s Deal, Prisjakt och Omni, för att bara nämna några.\r\n\r\nI den värld vi lever i är Schibsteds roll som en av Nordens största leverantör av digitala tjänster viktigare än någonsin. Vi har ett tydligt syfte och ett viktigt samhällsuppdrag; att leverera nyheter och tillförlitlig information, att bidra till en hållbar miljö och att utveckla digitala tjänster för framtiden. \r\n\r\nVi ser verkligen fram emot att träffa dig för att få berätta om de olika möjligheter som vi erbjuder dig som student. Kom förbi vår monter så bjuder vi på trevliga samtal, många skratt och kanske en liten sockerchock. Vi ses där!\r\n\r\n/ Schibsted Media Group\r\n', 'Hello!\r\n\r\nMy name is Schibsted and I consist of a fantastic family that includes several leading consumer brands and products such as Aftonbladet, Blocket, Svenska Dagbladet, Let´s Deal, Prisjakt and Omni, to name just a few.\r\n\r\nIn the world we live in, Schibsted\'s role as one of the Nordic´s largest providers of digital services is more important than ever. We have a clear purpose and an important social mission; to deliver news and reliable information, to contribute to a sustainable environment and to develop digital services for the future.\r\n\r\nWe really look forward to meeting you and telling you about the opportunities we offer you as a student. Come by our stand to have interesting conversations, lots of laughs and maybe a little sugar shock. See you there!', 'schibsted.png', 'schibsted.com'),
('sproud', 'Sproud', NULL, '', 'sproud.png', 'sproud.se'),
('sr', 'Sveriges Radio', 'Vi vågar påstå att man blir lite smartare av att jobba på Sveriges Radio. Och kanske lite mer intressant. Vi som jobbar här drivs av att dagligen syna det nya, granska det invanda och ompröva det klassiska. Det gäller alla, oavsett vilken roll du har. Hos oss är du med och utvecklar ny teknik som gör att vi kan fortsätta ligga i framkant och göra radio i världsklass och mitt i händelsernas centrum blir du en viktig del av ett företag som värnar om demokrati, det fria ordet och alla människors lika värde.\r\n\r\nTillsammans med Sveriges Radios innovationsavdelning är vårt uppdrag att driva utvecklingen av Sveriges Radios teknik och att säkerställa alla sändningar, varje dag, för våra lyssnare. På vår teknikenhet implementerar vi IT-lösningar som är unika och världsledande och inom vissa områden är det vi som driver marknadens utveckling.\r\n\r\nFör att kunna ta fram ny teknik i ett samhälle där allt går snabbare och snabbare, behöver vi också jobba med att hitta nya samarbetsformer. Därför använder vi oss av en agil metodik, för att uppnå smidigare flöden internt, som i sin tur gör våra leveranser snabbare och mer effektiva. Vi driver utveckling av produkter, med enorm räckvidd och av oslagbar kvalitet. I en värld som förändras snabbt, har vi möjlighet att göra satsningar som få andra kan.\r\n\r\nHos oss är sunda värderingar en nödvändighet, olika åsikter en ny möjlighet och vi välkomnar alla att komma som dom är.\r\n', '', 'sr.png', 'sverigesradio.se'),
('startuplifers', 'Startuplifers', 'Startuplifers parar ihop nordiska tech-, design-, ekonomistudenter och utexaminerade med San Franciscos bästa startups. Med detta uppdrag i sikte har vi skickat över 250 ambitiösa studenter och utexaminerade till snabbväxande startups i San Francisco för att lära av världens största teknologiska ekosystem. Målet är att hjälpa de hitta självförtroendet att skapa världsförändrande innovationer. Gå till vår webbsida och ansök till ditt sommarjobb eller praktik idag!', 'Startuplifers connects talented Nordic tech, design and business students and graduates with the best startups in the San Francisco Bay Area.\r\n\r\nWith this mission in mind, we’ve sent over 250 ambitious students and graduates to fast-growing startups in the San Francisco Bay Area to learn from the world’s largest tech ecosystem. The goal is to help them find the confidence to create world-changing innovations themselves. Go to our website and apply for your summer job/internship today!', 'startuplifers.png', 'startuplifers.org'),
('storytel', 'Storytel', 'Storytel är företaget som gjort det möjligt för oss alla att gå runt med ett bibliotek i fickan genom deras marknadsledande, digitala abonnemangstjänst för strömmade ljudböcker i mobilen. Ett entreprenörsdrivet företag som växer snabbt och har idag avtal med i princip alla förlag i Sverige. På Storytel arbetas det med mjukvaruutveckling, grafisk- och digital design, spännande ljudteknik och mycket mer. För mer info: www.storytel.se \r\n', '', 'storytel.png', 'www.storytel.se'),
('studentkortet', 'Studentkortet', NULL, '', 'studentkortet.png', 'studentkortet.se'),
('subset', 'Subset', NULL, '', 'subset.png', 'subset.se'),
('sverigesingenjorer', 'Sveriges Ingenjörer', 'Ditt liv som ingenjör börjar nu!\r\n\r\nSveriges Ingenjörer välkomnar dig till vårt unika nätverk med 153 000 ingenjörsmedlemmar.\r\n\r\nSom medlem erbjuder vi dig stöd och verktyg med allt från cv- och LinkedIn-granskning, karriärcoachning och intervjuträning. Ta även del av landets bästa lönestatistik, digitaltidningen Ny Teknik, samt aktiviteter som hålls vid just ditt lärosäte. Dessutom har du möjlighet att teckna förmånliga försäkringar och du har tillgång till experthjälp om något skulle gå snett på sommar- eller extrajobbet.\r\n\r\nVälkommen att börja ditt liv som ingenjör med oss!', '', 'sverigesingenjorer.png', 'sverigesingenjorer.se'),
('svt', 'Sveriges Television', 'Vårt mål är att erbjuda ett utbud som engagerar, underhåller och berikar - för alla åldrar och intressen. Och vi vill bidra till ett Sverige där alla är mer nyfikna och insatta. Vår verksamhet bedrivs självständigt i förhållande till politiska, kommersiella och andra intressen i samhället och finansieras via en obligatorisk avgift. Totalt har SVT:s digitala sektion cirka 200 medarbetare, med en bra blandning av människor. Vi älskar att vi är från olika kulturella bakgrunder och att vi har olika personligheter och intressen. Vi erbjuder dig en arbetsplats där lärande står i fokus och där vi tar väl hand om varandra. Om du studerar finns möjlighet att göra praktik eller ditt exjobb på SVT.', 'Our vision is to contribute to a more inquisitive, informed Sweden. Our aim is to create content that engages, entertains and enriches - in the service of the public. Our operation is based on a democratic idea and is independent of political and commercial interests.In total the digital section of SVT has about 170 employees, with a great mix of people. We love that we are from different cultural backgrounds and that we have different personalities and interests. We can offer you a workplace where learning is in focus and where we take great care of each other. To students we offer internship and possibility to do your master thesis at SVT.', 'svt.png', 'svt.se/omoss'),
('teamengine', 'TeamEngine', 'Vill du utveckla med React? Hej och välkommen till oss!\r\nTeamEngine Collaboration Software AB är ett modernt IT-företag specialiserat på SaaS-tjänster för styrelser och ledningsgrupper. Vi har utvecklat marknadsledande tjänster som används för att effektivisera samt garantera säker hantering av material inom styrelse- och ledningsarbete, insiderhantering, due diligence samt krishantering.\r\n\r\nVi strävar efter att alltid ligga i framkant inom vårt område och har specialistkompetens för att utveckla användarvänliga och säkra webbapplikationer samt appar.\r\n\r\nLåter detta intressant?\r\n\r\nVälkommen förbi vårt bord den 28 februari! Vi söker drivna och nyfikna frontendutvecklare som har erfarenhet av React och vill jobba på ett innovativt och familjeorienterat företag som är marknadsledande inom sitt område.\r\n\r\nMeriterande kunskaper inkluderar Redux, Git, HTML, CSS, JS och ett intresse för Design, Usability och UX.\r\n\r\nVi ser fram emot att träffa dig!', 'TeamEngine Collaboration Software AB is a software company specialized in providing products and services for board and management collaboration, insider management, due diligence and crisis management. All our products enable groups to utilize a safe online platform where documents can be shared without risking unauthorized intrusion. Instead of e-mailing documents, decisions, meeting minutes and calendar posts, everything is found in an online workspace to which only authorized members have access. We are looking for driven and curious front-end developers who have experience with React and want to work at an innovative and family-oriented company that is the market leader in their field. We look forward to meeting you!', 'teamengine.svg', 'teamengine.com'),
('tekompaniet', 'Tekompaniet', NULL, '', 'tekompaniet.png', 'webshop.tekompaniet.se'),
('tietoevry', 'TietoEVRY', NULL, 'TietoEVRY creates digital advantage for businesses and society. We are a leading digital services and software company with local presence and global capabilities. We serve thousands of enterprise and public sector customers in more than 90 countries. Actually, did you know that you’re in contact with us almost every day? When you withdraw money in an ATM, when you buy a train ticket online and when you receive a digital message that you can pick up your package you purchased online. The team behind the scenes for these solutions are 24,000 strategists, coders, analysts, industry experts, and future enthusiasts. Join our cause.', 'TietoEVRY.png', 'evry.com'),
('toptracer', 'Toptracer', 'Tidigare Protracer, en Stockholms-baserad startup som spårar golfbollar i TV-sändningar. Idag går vi under Topgolfs flagg, och jobbar bl.a. med spel- och apputveckling, videografik, maskininlärning och hårdvarulösningar. Allt kretsar kring en kärna av bildanalys.\r\n\r\nVi letar alltid efter nya talanger, både för extrajobb och fast anställning. Vi tar också regelbundet in exjobbare, och ser det som en central del för vår R&D.\r\n\r\nÄr du intresserad av data science, realtidsgrafik eller spelutveckling? Eller kanske sport, TV-produktion eller elektronik? Kom förbi så berättar vi mer!', 'Previously Protracer, a Stockholm-based start up focusing on optical tracking of golf balls for TV. Now under the Topgolf umbrella, we are working with game and app development, video and graphics engineering, data science, and hardware and infrastructure design to name a few, all surrounding our image analysis core.  \r\n\r\nWe are always looking for talent, both for short-term and permanent positions. We also host Master\'s thesis students regularly, several of which are now full-time employees, and even more have seen their thesis make its way into production.  \r\n\r\nAre you interested in data science, real-time graphics, or game development? Or maybe sports, media technology, or electronic hardware? Come talk to us and find out more!', 'toptracer.png', 'toptracer.com'),
('unionen', 'Unionen', 'Var vill du jobba efter examen? Ett medlemskap i Unionen Student för bara 100 kr ger dig stöd på vägen till drömjobbet.\r\n\r\nUnder studierna stöttar vi med förmånliga rabatter och över 3 000 kronor tillbaka för kurslitteratur och kåravgifter om du sparar kvittona till efter examen. \r\n\r\nNär det är dags att ta steget ut i arbetslivet ger vi dig expertkunskap kring löner och villkor, vässar ditt cv, granskar din LinkedIn och hjälper dig med ett unikt kontaktnät på några av Sveriges populäraste arbetsplatser.\r\n\r\nAllt för bara 100 kronor hela studietiden. \r\n \r\nLäs mer på unionen.se/student och bli medlem idag!', 'Unionen is Sweden’s largest trade union on the private labour market and the largest white-collar trade union in the world.  \r\n\r\nAs a Unionen Student member you are entitled to our services which aim at making you better prepared for the working life. We help you with your CV, prepare you for job interviews and advise you on matters regarding labour laws, employment contracts and salaries. \r\n\r\nMost of our membership benefits require a good knowledge in Swedish. Please note that if you plan on starting your career in a company outside Sweden, we recommend you to join a local union, as we only represent salaried staff with Swedish employers.\r\n\r\nStill interested? Learn more on https://www.unionen.se/in-english! ', 'unionen.png', 'unionen.se/student'),
('urbit', 'urb-it', 'urb-it är ett snabbväxande start-up som skapar ett helt nytt sätt att handla. Med urb-it kan du shoppa online och få varan personligt överlämnad direkt – eller när det passar dig. Kort sagt: shopping på ett banbrytande bekvämt och hållbart sätt. Helt på dina villkor!\n\nVår vision är att revolutionera shoppingbranschen och skapa ett helt nytt sätt att handla. Vi står på din sida och brinner för att ge dig en banbrytande bekväm köpupplevelse, helt på dina villkor. För oss är det inte ok att du ska behöva vänta era dagar på ditt köp eller hämta ut din vara själv. Därför utmanar vi konventionerna, tänker nytt och kommer ständigt med nya lösningar på morgondagens shopping.', '', 'urbit.svg', 'www.urb-it.com/sv/stockholm'),
('viaplay', 'Viaplay', 'Viaplay is the leading online service for TV, film and sports in the Nordic countries and part of the Modern Times Group, an international entertainment group listed on the Nasdaq OMX Nordics Large Cap.\r\n\r\nWe offer the most popular TV series, a vast international movie catalogue and a world-class selection of live sports events including Premiere League, Champions League, NHL and the Rio Summer Olympics.\r\n\r\nWe put our hearts into creating beautiful product experiences, and invest every dollar that we can spare into new exciting content formats. Our passion for technology, software development and streaming delivery is unprecedented. Whether you are into sales, marketing, content production, product design or software development we have great problems to solve and new opportunities to capture. Join us and help transform the world of entertainment!', '', 'viaplay.png', 'www.viaplay.se/jobs'),
('voyley', 'Voyley', 'Voyley är en e-biljettsplattform som tillåter resenärer inom EU att planera, köpa och hantera sitt internationella resande med främst tåg men även bussar och färjor. Företaget består av KTH-studenter från bland annat Medieteknik och Datateknik som är passionerade för att göra långa tågresor enklare. \r\n\r\nKom förbi oss på mässan och testa boka en resa i vår prototyp och prata med oss om vilka möjligheter som finns att vara med på vår resa! Vi söker efter backend och frontend utvecklare samt en marknadsförare.  ', 'Voyley is an e-ticketing plattform that allows users to plan, purchase and organise their international travel by train, busses and ferries. The company consists of Media Technology and Computer Science students at KTH that are passionate about making long train travels easier. \r\n\r\nCome see us at the fair and try to book a trip in our prototype or talk to us about joining us on our journey! We are looking for backend and frontend developers as well as marketing competence. ', 'voyley.png', 'voyley.com'),
('westmediasystem', 'West Media System', 'West Media Systems AB utvecklar systemet Link-IT som är en utvecklingsplattform för företagsprocesser. Link-IT hjälper företagen att automatisera sina processer och därmed flytta personerna inblandade i dessa från att utföra till att övervaka och besluta. Stödja processer förutsätter att systemet enkelt kan modifieras för att snabbt anpassa sig till nya omständigheter. Link-IT har ett unikt sätt att underlätta för dessa nya krav, så att kunderna får det stöd som behövs i verksamheten när de behöver det.\r\n\r\nVi är aktiva inom mediabranschen med bl.a. Discovery, Cmore och Ericsson som kunder.', '', 'westmediasystem.png', 'westmediasystems.com'),
('wesupero', 'WeSupero', NULL, '', 'wesupero.png', 'wesupero.com/studentrabatter/'),
('xlent', 'XLENT', 'Nyfiken på livet som IT-konsult? På XLENT jobbar vi med roliga, utmanande projekt och ligger i framkant när det gäller att utveckla digitala lösningar för våra kunder. Vi söker dig som vill starta din karriär inom IT - med systemutveckling, UX, projektledning, eller annan roll tillsammans med engagerade medarbetare. Är du ute efter exjobb bollar vi gärna idéer med dig. Kom förbi och träffa oss i vår monter så berättar vi mer!', '', 'xlent.png', 'xlent.se'),
('yabs', 'YABS', 'YABS, young aces by Sylog, är ett ungt konsultbolag som fokuserar på nyutexaminerade studenter och juniora konsulter. Vi är ett konsultbolag som tillgodoser våra kunders behov av IT-lösningar utveckling, test och integration av programvara. YABS hjälper flera av Sveriges mest framgångsrika bolag inom telekom, försvar, transport, fordon, medicinteknik, bank och spel.\r\n\r\nVåra värderingar; Glädje, teknik, målmedvetenhet och frihet genomsyrar hela organisationen. Vi räds inte en utmaning och inget projekt är för litet eller stort.\r\n\r\nPå YABS strävar vi efter att ha högt i tak och en kultur som sätter människan i centrum. Vi är en platt organisation som erbjuder våra anställda fortlöpande utbildning, roliga kick-offer och event varje månad. Vår ambition är att fortsätta växa med hög kvalitet och behålla känslan av det familjära bolaget, därför anställer vi personer med rätt attityd och rätt driv.\r\n', '', 'yabs.png', 'yabs.se'),
('ytest', 'ytest', 'test', '', 'test', 'test.com');

-- --------------------------------------------------------

--
-- Table structure for table `company_involvement`
--

CREATE TABLE `company_involvement` (
  `companyID` varchar(64) NOT NULL,
  `year` int(11) NOT NULL COMMENT 'Should reference a exhibit_date',
  `isSponsor` tinyint(1) NOT NULL DEFAULT '0',
  `isExhibitor` tinyint(1) NOT NULL DEFAULT '0',
  `isMainSponsor` tinyint(1) NOT NULL DEFAULT '0',
  `seekingDescription_en` text NOT NULL,
  `seekingDescription_se` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company_involvement`
--

INSERT INTO `company_involvement` (`companyID`, `year`, `isSponsor`, `isExhibitor`, `isMainSponsor`, `seekingDescription_en`, `seekingDescription_se`) VALUES
('academicwork', 2020, 0, 1, 0, '', ''),
('acando', 2019, 0, 1, 0, '', ''),
('bonniernews', 2020, 0, 1, 0, '', ''),
('bontouch', 2019, 1, 0, 0, '', ''),
('bontouch', 2020, 1, 0, 0, '', ''),
('challengermode', 2019, 0, 1, 0, '', ''),
('comviq', 2019, 1, 0, 0, '', ''),
('conversionista', 2020, 0, 1, 0, '', ''),
('curamando', 2020, 0, 1, 0, '', ''),
('datatjej', 2019, 0, 1, 0, '', ''),
('decerno', 2019, 0, 1, 0, '', ''),
('digpro', 2020, 0, 1, 0, '- Thesis work\r\n- Extra work\r\n- Summer internships', '- Exjobb \r\n- Extrajobb \r\n- Sommarjobb'),
('dynabyte', 2020, 0, 1, 0, '', ''),
('epidemicsound', 2019, 0, 1, 0, '', ''),
('ericsson', 2019, 0, 1, 0, '', ''),
('fatshark', 2019, 0, 1, 0, '', ''),
('filter', 2019, 1, 0, 0, '', ''),
('findout', 2020, 0, 1, 0, '', ''),
('fishbrain', 2019, 0, 1, 0, '', ''),
('foi', 2020, 0, 1, 0, '', ''),
('forvalter', 2020, 0, 1, 0, 'Design and UX', 'Design och UX'),
('froosh', 2020, 1, 0, 0, '', ''),
('frönb', 2020, 0, 1, 0, 'Seeking someone who can help with launching a Kickstarter campaign (sometime during summer 2020)\r\nA trial will be done before that where quality and creativity will be determined in:\r\n- Pictures\r\n- Videos \r\n- Info and text\r\n- Promoting the upcoming campaign on social media\r\n\r\nSkills:\r\n- Photography/cinematics\r\n- Video editing\r\n- Photoshop\r\n- Adobe Illustrator\r\n- Visualisation\r\n- UX\r\n\r\nBONUS: Gaming interested and knows how to spark people’s curiosity\r\n\r\nA successful Kickstarter campaign with us gives you the high potential of being one of us in the FRÖNB team :)', 'Vi söker någon som vill hjälpa till med att lansera en Kickstarter kampanj (under sommaren 2020)\r\nEn testperiod kommer att göras innan det där vi bedömer kvalite och kreativitet i:\r\n- Bilder\r\n- Videos\r\n- Info och text\r\n- Reklam inför kampanjen på sociala medier\r\n\r\nKunskaper:\r\n- Fotografi/Videografi\r\n- Videoredigering\r\n- Photoshop\r\n- Adobe Illustrator\r\n- Visualisation\r\n- UX\r\n\r\nBONUS: Gaming intresserad och vet hur man väcker nyfikenhet hos folk\r\n\r\nEn lyckad Kickstarter kampanj med oss gör att du sannolikt kommer bli en del av FRÖNB teamet :)'),
('hsustain', 2020, 0, 1, 0, '', 'Full-Stack Mobile app Engineers (Internship) för att hjälpa driva vårt Open Air Museum framåt. Inom de kommande fyra månaderna kommer vi att fokusera på vår andra prototyp och en Beta-version av appen.\r\n \r\nDina uppgifter inkluderar:\r\n1. Mjukvaru Utveckling genom hela vår Stack, från mobilapp till backend till frontend back office\r\n2. Arbeta tätt med grundarna och UI / UX-experter efter produktens roadmap.\r\n \r\nUppskattat startdatum: december 2019\r\n \r\nDu..\r\n- Är en mobil appingenjör / student / hacker / tech geek, med kunskap och erfarenhet av iOS och Android.\r\n- Har ett öga för design (faktiska designfärdigheter är en bonus).\r\n- Gillar open-source. Tidigare öppen källkodsarbete är ett stort plus.\r\n- Har ett användarcentrerat tänkande.\r\n- Är ivrig att lära dig ny teknik och programmeringskills.\r\n- Har ett nyfiket sinne och gillar utmaningar.\r\n'),
('if', 2020, 0, 1, 0, '', ''),
('isotop', 2020, 0, 1, 0, '', ''),
('kry', 2019, 1, 0, 0, '', ''),
('lexplore', 2019, 0, 1, 0, '', ''),
('lindvalls', 2020, 1, 0, 0, '', ''),
('linkedin', 2020, 0, 1, 0, '', ''),
('mrg', 2019, 0, 1, 0, '', ''),
('naia', 2020, 1, 0, 0, '', ''),
('netlight', 2019, 1, 0, 0, '', ''),
('nightli', 2020, 0, 1, 0, 'Summer internship\r\nPart-time (flexible to your situation)\r\n\r\nWe are looking for anyone who believes in using digital solutions to improve and extend a real life experience. Therefore we are looking for someone wanting improve our product from a user experience perspective. What is the future way of using an app before, during and after a party or night out?', ''),
('nordicmorninggroup', 2020, 0, 1, 0, '', ''),
('plackers', 2019, 1, 0, 0, '', ''),
('prime', 2019, 0, 1, 0, '', ''),
('protendering', 2020, 0, 1, 0, 'We are looking for Windows Developers.\r\nJoin an experienced team driven by joy and creating high monetary\r\nvalue for all team members.\r\nWe are currently supported by the KTH Innovation Pre Incubator\r\nProgram (batch 10). Don’t miss the chance of a lifetime.\r\nJoin the ride - Enjoy the ride.', 'We are looking for Windows Developers.\r\nJoin an experienced team driven by joy and creating high monetary\r\nvalue for all team members.\r\nWe are currently supported by the KTH Innovation Pre Incubator\r\nProgram (batch 10). Don’t miss the chance of a lifetime.\r\nJoin the ride - Enjoy the ride.'),
('redbee', 2020, 0, 1, 0, '', ''),
('schibsted', 2020, 0, 1, 1, '', ''),
('sproud', 2019, 1, 0, 0, '', ''),
('sproud', 2020, 1, 0, 0, '', ''),
('sr', 2019, 0, 1, 0, '', ''),
('sr', 2020, 0, 1, 0, '', ''),
('startuplifers', 2020, 0, 1, 0, '', ''),
('studentkortet', 2019, 1, 0, 0, '', ''),
('subset', 2020, 1, 0, 0, '', ''),
('sverigesingenjorer', 2019, 0, 1, 0, '', ''),
('sverigesingenjorer', 2020, 0, 1, 0, '', ''),
('svt', 2020, 0, 1, 0, '', ''),
('teamengine', 2020, 0, 1, 0, '', 'Vi erbjuder just nu både somarjobb, ex-jobb samt möjlighet till extrajobb i samband med studier. Så vill du lära dig något helt nytt eller har du egna idéer som du vill testa och förverkliga? Vi ser till att du får göra det här hos oss!'),
('tekompaniet', 2020, 1, 0, 0, '', ''),
('tietoevry', 2020, 0, 1, 0, 'There are several exciting opportunities for you as a newly graduated engineer here at TietoEVRY. But as we all know, those years spent gaining valuable knowledge at school doesn\'t always answer the question of – what do you want to do in life? To make that choice a bit easier, our Graduate Program offers two tracks to choose from, depending on where your passion lies.\r\nThe Rotator - For those who have fallen head over heels over software development and wants to know all the ins and outs of this magical field, we have a branch that consists of three different blocks. During one eventful year, you\'ll work with requirement engineering, development, and testing. The best part? You\'ll be doing it all IRL with our clients.\r\nThe Specialist - For those who know what they want to do and want to do it now, we offer you a full year packed with hands-on learning within most of our roles in IT & Tech as well as business.', ''),
('toptracer', 2020, 0, 1, 0, '', ''),
('unionen', 2020, 0, 1, 0, '', ''),
('voyley', 2020, 0, 1, 0, 'Front end developers, backend developers, full stack developers, PR manager, UX designers', ''),
('westmediasystem', 2020, 0, 1, 0, 'West media systems AB is always on the search for new talents. For you as a student we offer both job during the summer holidays and interesting master thesis work. If you are looking for something extra to do on your spare time, ask us! ', 'Vi på West media systems AB letar alltid efter nya talanger. Vi erbjuder därför både sommarjobb samt ex-jobb till högskolestudenter. Om du letar efter något att arbeta med på din fritid så finns det möjlighet till det med.'),
('wesupero', 2020, 1, 0, 0, '', ''),
('xlent', 2020, 0, 1, 0, '', ''),
('yabs', 2020, 0, 1, 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `company_map_position`
--

CREATE TABLE `company_map_position` (
  `companyID` varchar(64) NOT NULL,
  `year` mediumint(9) NOT NULL,
  `mapPositionX` float NOT NULL DEFAULT '50',
  `mapPositionY` float NOT NULL DEFAULT '50',
  `customOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company_map_position`
--

INSERT INTO `company_map_position` (`companyID`, `year`, `mapPositionX`, `mapPositionY`, `customOrder`) VALUES
('academicwork', 2020, 62, 38, 20),
('bonniernews', 2020, 51, 63, 3),
('conversionista', 2020, 62, 28, 27),
('curamando', 2020, 62, 19, 26),
('digpro', 2020, 43, 50, 10),
('dynabyte', 2020, 40, 63, 2),
('findout', 2020, 56, 55, 8),
('foi', 2020, 51, 9, 24),
('forvalter', 2020, 50, 42, 15),
('frönb', 2020, 39, 24, 22),
('hsustain', 2020, 62, 42, 17),
('if', 2020, 74, 47, 13),
('isotop', 2020, 53, 38, 19),
('linkedin', 2020, 10, 51, 31),
('nightli', 2020, 67, 50, 12),
('nordicmorninggroup', 2020, 58, 9, 25),
('protendering', 2020, 40, 55, 6),
('redbee', 2020, 58, 63, 4),
('schibsted', 2020, 51, 24, 30),
('sr', 2020, 45, 42, 14),
('startuplifers', 2020, 64, 56, 9),
('sverigesingenjorer', 2020, 72, 63, 5),
('svt', 2020, 48, 19, 28),
('teamengine', 2020, 38, 34, 21),
('tietoevry', 2020, 56, 42, 16),
('toptracer', 2020, 60, 50, 11),
('unionen', 2020, 54, 19, 29),
('voyley', 2020, 46, 55, 7),
('westmediasystem', 2020, 45, 38, 18),
('xlent', 2020, 40, 14, 23),
('yabs', 2020, 34, 60, 1);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `ID` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `title_se` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `description_se` mediumtext,
  `description_en` mediumtext NOT NULL,
  `date` date NOT NULL,
  `time` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `fb_link` varchar(255) DEFAULT NULL,
  `tickets_link` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `show` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`ID`, `type`, `title_se`, `title_en`, `description_se`, `description_en`, `date`, `time`, `location`, `fb_link`, `tickets_link`, `image`, `show`) VALUES
(1, NULL, 'Lunchföreläsning med SVT', '', '\"Hjälp! Vad ska jag göra när jag tar examen?\"\r\nVi vet att du, oavsett om du går ditt första år på Medieteknik eller börjar samla ihop de sista poängen inför examen, har tänkt den tanken några gånger.\r\n\r\nMed 113 dagar kvar till Medias Branschdag vill vi inspirera dig inför ditt kommande arbetsliv, genom att anordna en lunchföreläsning med Medieteknik-alumnen Olof Lindman. Han arbetar som Online Video Workflow Engineer på SVT Produktion och Teknik, \"tänk ingenjörstekniken bakom SVT Play\" som han själv beskriver det. \r\n\r\nUnder lunchföreläsningen får vi följa med Olof på hans resa från ettan på Medieteknik, till en tjänst på SVT. Vad gör man egentligen på SVT som medietekniker? Vad finns det för exempel på potentiella exjobb?', '', '2018-11-07', '12:15-13:00', 'L1', 'https://www.facebook.com/events/355659474978725/', NULL, 'svt_lunch.jpg', 1),
(2, NULL, 'Lunchföreläsning: Schibsted', '', 'Vem är Schibsted? Varför är Schibsted rätt arbetsgivare för dig som nyexad medieteknikstudent? Hur ska du tänka för att bygga din karriär på ett framgångsrikt sätt?\r\n\r\nDetta får ni veta från Ian Vännman! Han är en tidigare medietekniskstudent som gått från helpdesken på Aftonbladet till grundare av Omni och som nu är Strategichef för Schibsted Media. \r\n\r\nInom Schibstedkoncernen ryms allt ifrån Aftonbladet, SvD, Blocket, Lendo, Letsdeal och Omni för att bara nämna några varumärken - Schibsted är alltså en riktig guldgruva för oss medietekniker!\r\n\r\nVi bjuder på lunch till de 50 första som dyker upp - och vi i Medias Branschdags projektgrupp har med 80 dagar kvar till branschdagen en överraskning du verkligen inte vill missa.... Så kom och inspireras med oss!', '', '2018-12-10', '12:15-13:00', 'L1', 'https://www.facebook.com/events/524800701334477', NULL, 'schibsted_lunch.jpg', 1),
(3, NULL, 'Företagspub: MRG Gametek', '', 'VA?! :(, kanske du tänker, ingen företagspub i år? Jodå, Medias Branschdag och MKM got you covered.\r\n\r\nMRG Gametek kommer med mat, dricka och andra överraskningar - en torsdagspub du helt enkelt inte kommer glömma!\r\n\r\n... eh vänta? Mat? På en torsdag? Johodå! För att ta del av detta ~exklusiva erbjudande~ behöver du vara på plats klockan 18.15 i META, hungrig på både mat och härligt mingel med MRG Gametek. Maten finns tills den tagit slut.\r\n\r\nMRG Gametek är det företag som utrustar spelsiter som Mr Green med tekniska lösningar och plattformar. Just nu söker de också efter dig som går ditt sista år och som letar efter en partner till ditt ex-jobb - kul va? MRG Gametek säger själva att de kommer med en hel del godsaker till puben, så en sån här chans får man bara en gång i livet...', '', '2018-11-22', '18:00-01:00', 'META', 'https://www.facebook.com/events/694196534297205/', NULL, 'pub_stock_3.jpg', 1),
(4, NULL, 'Lunchföreläsning: Vägen till ingenjörsjobbet', '', 'Med ynka 10 dagar kvar till Medias Branschdag bjuder vi in till en lunchföreläsning med Sveriges Ingenjörer om vägen till ingenjörsjobbet!\r\n\r\nHur gör du ett bra första intryck på en arbetsmarknadsmässa? Hur skriver du ett professionellt CV och personligt brev? Hur kan du använda Linkedin i ditt jobbsökande? Och hur kan du förbereda dig på bästa sätt inför en anställningsintervju och vad är bra att tänka på under intervjun? \r\n\r\nAtt söka jobb är att marknadsföra sig själv och därför måste du sälja in dina kunskaper och erfarenheter på rätt sätt för att sticka ut ur mängden.\r\n\r\nUnder lunchen kommer en CV-expert från Sveriges Ingenjörer ge dig konkreta tips och råd om vad du behöver tänka på för att kunna stärka ditt personliga varumärke för att hitta just ditt extrajobb, sommarjobb, exjobb eller första ingenjörsjobb. Lunchen bjuder såklart Sveriges Ingenjörer på. Och du... vi bjuder på sushi!', '', '2019-02-18', '12:15-13:00', 'B2', 'https://www.facebook.com/events/2005565129493190/', NULL, 'sverigesingenjorer_lunch.jpg', 1),
(5, NULL, 'Lunchföreläsning med Epidemic Sound', '', 'Den 20 februari kommer Epidemic Sound hålla i en lunchföreläsning för oss studenter på Medieteknik! Detta sker i samband med Medias Branschdag som går av stapeln 28 februari.\r\n\r\nEpidemic Sound är en av våra 23 utställare, vilket gör att deras lunchföreläsning blir en PERFEKT introduktion av dem för dig som student innan själva Branschdagen!\r\n\r\nUnder föreläsningen kommer de berätta om sig själva och deras bakgrund. Även om hur de utvecklar sina produkter och varför just du är relevant för dem!\r\n\r\nDe första 50 personerna som kommer till föreläsningssalen kommer att få gratis lunch och en överraskning från Epidemic Sound.', '', '2019-02-20', '12:15-13:00', 'L1', 'https://www.facebook.com/events/522578174815219/', NULL, 'epidemicsound_lunch.jpg', 1),
(6, NULL, 'Medias Branschdag 28/2 2019', '', 'Inspiration och framtidstro. Det kommer kårhuset Nymble genomsyras av den 28e februari 2019 när dörrarna öppnas till Medias Branschdag!\n\nVår årliga branschdagsmässa hålls för att studenter och företag ska kunna mötas för utbyten - oavsett om det som söks är ett eventuellt sommarjobb eller insikt i vad det egentligen innebär att jobba med medieteknik i praktiken. Branschdagen ger inte bara studenter ett smakprov på vad arbetslivet har att ge, utan bidrar likväl till att företagen får ett smakprov av vad framtida teknologer har att bidra med.\n\nVi slår upp dörrarna till vår branschdag 10.00 och håller öppet till 16.00. Kvällen avslutas med en sittning som börjar klockan 18.00 och innan dess kan en avnjuta en härlig afterwork-presittning tillsammans med MKM i META. Är du sugen på att gå på sittningen, attenda https://www.facebook.com/events/515817568940260/ för vidare information.\n\nMer info kring branschdagen dag kan hittas på www.mediasbranschdag.com\n\nVarmt välkomna!', '', '2019-02-28', '10:00-16:00', 'Nymble', 'https://www.facebook.com/events/2855029591389635/', NULL, 'mbdbanner19.jpg', 1),
(7, NULL, 'Sittningen - Medias Branschdag 2019', '', 'Förläng branschdagsdagen lite extra och ta chansen att prata lite mer med det där företaget du tyckte var intressant över en middag, genom att gå på Medias Branschdags sittning! Eller varför inte bara avsluta februari med en tre-rätters på en finsittning?\n\nSittningen sker efter att branschdagen har stängt igen, närmare bestämt kl 18.00 i Syster O Bror, och innan dess går det att förmingla i META på pub from kl 17.\n\nAnmälan till sittningen finner du här https://goo.gl/forms/5De71GeBqmU6QtTv1 och den stänger den 17/2.\n\nVILL DU GYCKLA?\nAlla typer av gyckel är välkomna - skicka in ditt gyckel till mbdgyckel@gmail.com\n\nVarmt välkommen!', '', '2019-02-28', '17:00-23:00', 'Syster o Bror', 'https://www.facebook.com/events/515817568940260/', NULL, 'mbdsittning19.jpg', 1),
(8, NULL, 'Medias Branschdag 2020: Sittningen!', '', 'För möjligheten att förlänga Medias Branschdag ytterligare och att i ett mer avslappnat format få chansen att prata med några av de företagsrepresentanter som deltog under dagen presenterar vi i Medias Branschdag: Sittningen! \r\n\r\nSittningen kommer starta klockan 18.00 och förminglet i META kommer starta vid 16.00.\r\n\r\nEfter sittningen rekommenderas varmt att återvända till META för god drinkar kommer serveras och andra överraskningar. Hit är även alla som inte närvarar på sittningen välkomna! \r\n\r\nVarmt välkommna! ', 'For the opportunity to extend Medias Braschdag further and in a more relaxed format have the chance to talk to some of the company representatives who participated during the day, we in Media Braschdag present: Sittingen!   \r\n\r\nThe dinner will start at 6PM and the mingle will start at 4PM.\r\n\r\nAfter the dinner it is strongly recommended to return to META for good drinks will be. Everyone who did not attend the sittning is also welcome!\r\n\r\nThose who apply to become a company host or logistics host will be able to attend the dinner subsidized.\r\n\r\nWarm welcome!', '2020-02-04', '18:00 - 01:00', 'Restaurang Q', 'https://www.facebook.com/events/564321737680291/', 'https://bit.ly/dinnerMBD20', 'mbdsittning20.jpg', 1),
(9, NULL, 'Medias Branschdag 2020', '', 'Den fjärde februari 2020 är det äntligen dags för Medietekniks årliga branschdagsmässa Medias Branschdag! Hit är ni varmt välkomna att knyta värdefulla kontakter och mingla bland relevanta och spännande företag. \r\n\r\nMedias Branschdag ger inte bara studenter ett smakprov på vad arbetslivet har att ge, utan bidrar likväl till att företagen får ett smakprov av vad vi teknologer har att bidra med.\r\n\r\nBranschdagen slår upp dörrarna klockan 10.00 och håller öppet till 16.00. Kvällen avslutas med en sittning som börjar klockan 18.00 och innan dess kan en avnjuta en härlig afterwork-presittning i vår fina sektionslokal META.\r\n\r\nVarmt välkomna!', 'On the fourth of February 2020, it is finally time for Media Technology\'s annual fair Media\'s Branschdag! Here you are warmly welcomed to make valuable contacts and mingle among relevant and exciting companies.\r\n\r\nThe fair will open its doors at 10:00 and is stay open until 16:00. The evening ends with a dinner that starts at 18:00 and before that one can enjoy a lovely afterwork in META.\r\n\r\nWarm welcome!', '2020-02-04', '10:00–16:00', 'Nymble, Drottning Kristinas väg 15-19, 100 44 Stockholm', 'https://www.facebook.com/events/507681753120822/', NULL, 'mbdbanner20.jpg', 1),
(10, NULL, 'Företagspub med Bonnier News', '', 'Torsdagen den 14de november är det äntligen dags för Företagspub med Bonnier News tillsammans med MKM och Medias Branschdag! \r\n\r\nBonnier står för mat, drinkbiljetter, goodiebags och andra överraskningar (hörde jag photobooth?). En sån här chans får man bara en gång i livet! \r\n\r\nFör att få mat behöver du vara en av de första 50 som anmäler sig i formuläret: https://forms.gle/6FbSC5VEtdq3AExh9 och hämta ut din mat någon gång mellan 17.15 och 18.30. Vi lovar att det inte kommer vara en tråkig wrap. \r\n\r\nUnder puben kommer Bonnier bland annat berätta om sitt talangprogram, där du kan få möjlighet att jobba för ett av nordens ledande medieföretag. \r\n\r\n(!!) Alla besökare kommer behöva anmäla sig till puben på samma formulär som för maten: https://forms.gle/6FbSC5VEtdq3AExh9 Som Medietekniker eller Datalog förväntas du även visa upp leg och kårleg i dörren. \r\n+1:or är också välkomna men kräver föranmälan (senaste den 14e) och leg! \r\n\r\nMedietekniker och dataloger kan även anmäla sig i dörren för att komma in!\r\n\r\nNär: 14/11 17:15\r\nVar: META\r\nHur: Företagspub!\r\nMat: YEAH BOI\r\n\r\n----- Priser -----\r\nÖl från 20 kr \r\nDrinkar från 30 kr\r\nAlkfritt från 15 kr.\r\n\r\n\r\nFormulär för anmälan: https://forms.gle/6FbSC5VEtdq3AExh9\r\n\r\nSes där!!!!!', '', '2019-11-14', '17:00-01:00', 'Meta, Osquars Backe 21, 114 28 Stockholm', 'https://www.facebook.com/events/785869978526311/', NULL, 'bonnier_pub.jpg', 1),
(11, NULL, 'Lunchföreläsning med Schibsted', '', 'Är du sugen på att bli UX-designer och gillar gratis lunch? Då får du inte missa denna lunchföreläsning med Medias Branschdags huvudsponsor Schibsted!\r\n\r\nMat och dricka från Lett kommer att serveras till de 50 första på plats!\r\n\r\nSpeakers:\r\nJinyi Wang – UX Lead, Omni and PhD in Human-Computer Interaction\r\nMartin Bystedt – Head of UX, Design Systems and Newsdesk tools\r\nWe work with helping our news consumers in Scandinavia to get access to independent journalism in an easy and engaging way through our news outlets; Omni, Aftonbladet, Svenska Dagbladet, VG, Aftenposten, Bergens Tidende, Stavanger Aftenblad and a number of local newspaper. \r\n\r\nTopic:\r\nIn our industry we are faced with a multitude of challenges and our newspapers and media companies has gone through transformation during a number of years and will continuously need to evolve. Working as a UX designer at the company we do contribute and have a crucial role to play to help the company to change.\r\nOther than the challenges in the media industry we will of course present the company Schibsted and the different sub-companies within our group.\r\nMost important we will give you tips on how to start your careers as UX-designers.', '', '2020-01-27', '12:00', 'L1', 'https://www.facebook.com/events/180340719744514/', NULL, 'schibsted_lunch_2020.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `exhibit_dates`
--

CREATE TABLE `exhibit_dates` (
  `year` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exhibit_dates`
--

INSERT INTO `exhibit_dates` (`year`, `date`) VALUES
(2019, '2019-02-28 10:00:00'),
(2020, '2020-02-04 10:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `persons`
--

CREATE TABLE `persons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `persons`
--

INSERT INTO `persons` (`id`, `name`, `email`, `linkedin`) VALUES
(1, 'Ella Klara Westerlund', 'ellaklara@medieteknik.com', 'https://www.linkedin.com/in/ellaklara');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`name`, `position`, `email`, `linkedin`, `image`) VALUES
('Niklas Gustavsson', 'Projektledare', 'niklas.gustavsson@mediasbranschdag.com', 'https://se.linkedin.com/in/niklas-gustavsson-2a6876104/sv', 'niklas.jpg'),
('Sabina von Essen', 'Ansvarig för Näringslivsgruppen', 'sabina.von.essen@mediasbranschdag.com', 'https://se.linkedin.com/in/sabina-von-essen-5bb976102', 'sabina.jpg'),
('Christian Abdelmassih', 'Företagskontakt', 'christian.abdelmassih@mediasbranschdag.com', 'https://se.linkedin.com/in/christianabdelmassih', 'christian.jpg'),
('David Tranæus', 'Företagskontakt', 'david.tranaeus@mediasbranschdag.com', 'https://se.linkedin.com/in/david-tranaeus-0834a7114', 'david.jpg'),
('Marcus Hogler', 'Ansvarig för Kommunikationsgruppen', 'marcus.hogler@mediasbranschdag.com', '', 'marcus.jpg'),
('Emil Westin', 'Webmaster', 'emil.westin@mediasbranschdag.com', 'https://se.linkedin.com/in/emil-westin-087376b5', 'emil.jpg'),
('Gabriella Sanches Karlsson', 'Kommunikation & PR', 'gabriella.s.karlsson@mediasbranschdag.com', 'https://se.linkedin.com/in/gabriella-sanchez-karlsson-784b2866', 'gabriella.jpg'),
('Sofia Blomgren', 'Kommunikation & PR', 'sofia.blomgren@mediasbranschdag.com', 'https://se.linkedin.com/in/sofia-blomgren-543985120', 'sofia.jpg'),
('Evelina Hedberg', 'Sittningsansvarig', 'evelina.hedberg@mediasbranschdag.com', '', 'evelina.jpg'),
('Emma Olsson', 'Sittningsansvarig', 'emma.olsson@mediasbranschdag.com', 'https://se.linkedin.com/in/emma-olsson-17b531b2', 'emmao.jpg'),
('Glenn Schmitz', 'HR', 'glenn.schmitz@mediasbranschdag.com', 'https://se.linkedin.com/in/glenn-schmitz-44b65048', 'glenn.jpg'),
('Beata von Grothusen', 'Sponsansvarig', 'beata.v.grothusen@mediasbranschdag.com', '', 'beata.jpg'),
('Linnéa Lennartsson', 'Logistikansvarig', 'linnea.lennartsson@mediasbranschdag.com', 'https://se.linkedin.com/in/linnéa-lennartsson-798251a5', 'linnea.jpg'),
('Emma Igelström', 'Logistikansvarig', 'emma.igelstrom@mediasbranschdag.com', '', 'emmai.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `team17`
--

CREATE TABLE `team17` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `team17`
--

INSERT INTO `team17` (`id`, `name`, `position`, `email`, `linkedin`, `image`) VALUES
(1, 'Karl Andrén', 'Projektledare', 'branschdag@medieteknik.com', 'https://se.linkedin.com/in/karl-andrén-606a02110', 'karl.png'),
(2, 'Erik Lindström', 'Företagskontakt', 'erik.lindstrom@medieteknik.com', 'https://se.linkedin.com/in/erik-lindström-5bb325115', 'erik.png'),
(3, 'Magdalena Okurowska', 'Företagskontakt', 'Magdalena.Okurowska@medieteknik.com', 'https://se.linkedin.com/in/magdalenaok', 'magdalena.png'),
(4, 'Louise Hellberg', 'Sponsansvarig', 'Louise.Hellberg@medieteknik.com', 'https://se.linkedin.com/in/louise-hellberg-0b973b114', 'louise.png'),
(5, 'Jonas Abu Nijmeh', 'PR & Kommunikation', 'Jonas.Abu.Nijmeh@medieteknik.com', 'https://www.linkedin.com/in/jonas-abu-nijmeh-b578b2143/', 'jonas.png'),
(6, 'Linette Nilsson', 'Webansvarig', 'Linette.Nilsson@medieteknik.com', 'https://se.linkedin.com/in/linette-nilsson', 'linette.png'),
(7, 'William Neem Laahanen', 'HR & Ekonomi', 'William.Neem.Laahanen@medieteknik.com', 'https://se.linkedin.com/in/williamneemlaahanen', 'william.png'),
(8, 'Isabella Johannesson', 'Logistik & Event', 'Isabella.Johannesson@medieteknik.com', 'https://se.linkedin.com/in/isabella-johannesson-08582b10', 'isabella.png'),
(9, 'Lukas Frösslund', 'Teknik & Logistik', 'Lukas.Frosslund@medieteknik.com', 'https://se.linkedin.com/in/lukas-frösslund-a54578112/', 'lukas.png'),
(10, 'Linn Pagés Billai', 'Teknik & Logistik', 'linn.pages.billai@medieteknik.com', 'https://se.linkedin.com/in/linn-pagès-billai-504906109/', 'linn.png'),
(11, 'Emil Erlandsson', 'Sittningsansvarig', 'emil.Erlandsson@medieteknik.com', 'https://se.linkedin.com/in/emil-erlandsson-0b2102a5', 'emil.png');

-- --------------------------------------------------------

--
-- Table structure for table `team19`
--

CREATE TABLE `team19` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `team19`
--

INSERT INTO `team19` (`id`, `name`, `position`, `email`, `linkedin`, `image`) VALUES
(1, 'Amalia Berglöf', 'Projektledare', 'branschdag@medieteknik.com', 'https://www.linkedin.com/in/amalia-berglöf-521652114/', 'placeholder.png'),
(2, 'Anna Gustavsson', 'Samordnare Näringsliv | Företagsansvarig', 'anna@medieteknik.com', 'https://www.linkedin.com/in/gustavssonanna/', 'placeholder.png'),
(3, 'Arvid Larsson', 'Samordnare Kommunikation | Webbansvarig', 'arvid@medieteknik.com', 'https://www.linkedin.com/in/arvidlarzzon/', 'placeholder.png'),
(4, 'Kristina Andersson', 'Samordnare Logistik & Event | Teknik & Logistik', 'kristina@medieteknik.com', 'https://www.linkedin.com/in/kristina-andersson', 'placeholder.png'),
(5, 'Thelma Svenns', 'Kommunikation & PR | Sittningsansvarig', 'thelma@medieteknik.com', 'https://www.linkedin.com/in/thelma-svenns-998b92169/', 'placeholder.png'),
(6, 'Rasmus Rudling', 'Kommunikation & PR | Företagsansvarig', 'rasmus@medieteknik.com', 'https://www.linkedin.com/in/rasmus-rudling-b56652129/', 'placeholder.png'),
(7, 'Ella Klara Westerlund', 'Sponsoransvarig | Webbansvarig', 'ellaklara@medieteknik.com', 'https://www.linkedin.com/in/ellaklara', 'placeholder.png'),
(8, 'Filip Stål', 'Sponsoransvarig | Företagsansvarig', 'filip@medieteknik.com', 'https://www.linkedin.com/in/filip-stal', 'placeholder.png'),
(9, 'Johanna Iivanainen', 'HR | Teknik & Logistik', 'johanna@medieteknik.com', 'https://www.linkedin.com/in/johanna-iivanainen-618410170/', 'placeholder.png'),
(10, 'Hilda Robertsson', 'HR | Sittningsansvarig', 'hilda@medieteknik.com', 'https://www.linkedin.com/in/hilda-robertsson-7a3b1816b/', 'placeholder.png');

-- --------------------------------------------------------

--
-- Table structure for table `team20`
--

CREATE TABLE `team20` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position_se` varchar(255) DEFAULT NULL,
  `position_en` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `team20`
--

INSERT INTO `team20` (`id`, `name`, `position_se`, `position_en`, `email`, `linkedin`, `image`) VALUES
(1, 'Ella Klara Westerlund', 'Projektledare', 'Project Leader', 'branschdag@medieteknik.com', 'https://www.linkedin.com/in/ellaklara', 'ella_klara.jpg'),
(2, 'Rasmus Rudling', 'Projektledare', 'Project Leader', 'rasmus@medieteknik.com', 'https://www.linkedin.com/in/rasmus-rudling-b56652129/', 'rasmus_rudling.jpg'),
(3, 'Adam Jonsson', 'Webbutvecklare', 'Web Developer', 'adam@medieteknik.com', 'https://www.linkedin.com/in/adam-jonsson/', 'adam_jonsson.jpg'),
(12, 'Nike Backman', 'Företagssamordnare', 'Sales Team Coordinator', 'nike@medieteknik.com', 'https://www.linkedin.com/in/nike-backman-52739a159/', 'nike_backman.jpg'),
(13, 'Gabriella Dalman', 'Företagsansvarig', 'Sales Associate', 'gabriella@medieteknik.com', 'https://www.linkedin.com/in/gabriella-d-a74365a8/', 'gabriella_dalman.jpg'),
(14, 'Lina Bengtsson', 'Företagsansvarig', 'Sales Associate', 'lina@medieteknik.com', 'https://www.linkedin.com/in/lina-bengtsson-921704174/', 'lina_bengtsson.jpg'),
(15, 'John Brink', 'Företagsansvarig', 'Sales Associate', 'john@medieteknik.com', 'https://www.linkedin.com/in/john-brink-6607a3127/', 'john_brink.jpg'),
(16, 'Johanna Nilsen', 'PR-ansvarig', 'Public Relations', 'johannaMBD@medieteknik.com ', 'https://www.linkedin.com/in/johanna-n-aa750210a/', 'johanna_nilsen.jpg'),
(17, 'Fredrik Svanholm', 'Art Director', 'Art Director', 'fredrik@medieteknik.com', 'https://www.linkedin.com/in/fredrik-svanholm-1b605b159/', 'fredrik_svanholm.jpg'),
(18, 'Nicole Nordlund', 'Sittningsansvarig', 'Dinner Party Organizer', 'nicole@medieteknik.com', 'https://www.linkedin.com/in/nicole-nordlund-655b8116b/', 'nicole_nordlund.jpg'),
(19, 'Mimmi Andreasson', 'Logistik', 'Logistics', 'mimmi@medieteknik.com', 'https://www.linkedin.com/in/mimmi-andreasson-672b9b170/', 'mimmi_andreasson.jpg'),
(20, 'Lisa  Balzar', 'Logistik', 'Logistics', 'lisa@medieteknik.com', 'https://www.linkedin.com/in/lisa-balzar-8b8044151/', 'lisa_balzar.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `team_involvement`
--

CREATE TABLE `team_involvement` (
  `personId` int(11) NOT NULL,
  `year` int(11) NOT NULL COMMENT 'Should reference a exhibit_date',
  `position_se` varchar(255) NOT NULL,
  `position_en` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team_involvement`
--

INSERT INTO `team_involvement` (`personId`, `year`, `position_se`, `position_en`, `image`) VALUES
(1, 2021, 'Webbutvecklare', 'Web Developer', 'ella_klara.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_involvement`
--
ALTER TABLE `company_involvement`
  ADD PRIMARY KEY (`companyID`,`year`);

--
-- Indexes for table `company_map_position`
--
ALTER TABLE `company_map_position`
  ADD PRIMARY KEY (`companyID`,`year`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `exhibit_dates`
--
ALTER TABLE `exhibit_dates`
  ADD PRIMARY KEY (`year`);

--
-- Indexes for table `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team17`
--
ALTER TABLE `team17`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team19`
--
ALTER TABLE `team19`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team20`
--
ALTER TABLE `team20`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `persons`
--
ALTER TABLE `persons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `team19`
--
ALTER TABLE `team19`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `team20`
--
ALTER TABLE `team20`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
