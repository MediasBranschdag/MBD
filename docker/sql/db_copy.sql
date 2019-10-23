-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: 10.209.1.117
-- Generation Time: Oct 23, 2019 at 09:48 AM
-- Server version: 5.5.42
-- PHP Version: 5.3.10-1ubuntu3.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `166397-mediasbranschdag`
--

-- --------------------------------------------------------

--
-- Table structure for table `annons19`
--

CREATE TABLE IF NOT EXISTS `annons19` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `title` text NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `logo` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `main_sponsor` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1 for main sponsor, otherwise 0',
  `active_start` date NOT NULL DEFAULT '2018-09-01',
  `active_end` date NOT NULL DEFAULT '2019-02-28',
  `is_exhibitor` tinyint(4) NOT NULL DEFAULT '1',
  `mapPositionX` float NOT NULL DEFAULT '50',
  `mapPositionY` float NOT NULL DEFAULT '50',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `description`, `logo`, `website`, `main_sponsor`, `active_start`, `active_end`, `is_exhibitor`, `mapPositionX`, `mapPositionY`) VALUES
('acando', 'Acando', 'Sedan 2005 driver Acando konsultprogrammet Acando Trainee, ett av marknadens bästa och mest populära traineeprogram. Som trainee hos oss får du några av Sveriges absoluta topptalanger till kollegor. Du kommer att utvecklas både professionellt och personligt tillsammans med extremt drivna och härliga människor. Vi tror på sammanhållning och gemenskap, och på ett öppet klimat där allas idéer får utrymme. Vi tror att det är så man skapar framgångsrika teamleveranser, och bäst accelererar utveckling och talang.', 'acando.png', 'acando.se', 0, '2018-02-28', '2019-02-28', 1, 25, 25),
('bontouch', 'Bountouch', NULL, 'bontouch.png', 'bontouch.com', 0, '2018-02-28', '2019-02-28', 0, 10, 40),
('challengermode', 'Challengermode', 'Challengermode is an esports platform that built to solve the problem of organizing and participating in esports competitions at scale.  Our vision is to become the world’s primary esports ecosystem, bringing together gamers, game developers, influencers and organizers on one platform. We work with esports organizers like DreamHack that use our platform to host online competitions and with game developers like Riot Games to arrange community tournaments and online qualifiers while providing a better competitive gaming experience for regular esports players - across multiple devices/platforms.  Our mission is to make esports as accessible for non-professional gamers as regular sports are for regular people.', 'challengermode.png', 'challengermode.com', 0, '2018-02-28', '2019-02-28', 1, 60, 50),
('comviq', '', NULL, 'comviq.png', 'comviq.se', 0, '2018-02-28', '2019-02-28', 0, 70, 50),
('datatjej', 'DataTjej', 'DataTjej är en ideell förening som arbetar med att främja kvinnor och icke-binära i alla åldrar som är intresserade av IT och data. Vi strävar efter att förbättra relationen mellan studenter och företag, samt våra medlemmar emellan. Vi anordnar event året om som till exempel inspirerande föreläsningar och företagsbesök. DataTjej är mest känt för den årliga konferensen där företag och medlemmar får möjligheten att nätverka.\r\n\r\nDet är både gratis och enkelt att bli medlem: datatjej.se/medlem', 'datatjej.png', 'datatjej.se', 0, '2018-02-28', '2019-02-28', 1, 10, 55),
('decerno', 'Decerno', 'Decerno bygger skräddarsydda lösningar med ett helhetsansvar. Vi har under drygt 30 år drivit flera hundratals lyckade uppdrag som driver digitaliseringen framåt och som är verksamhetskritiska för våra kunder. Vi skapar gärna helt nya digitala lösningar och erbjudanden som stärker våra kunders position på marknaden. Projekten genomförs inhouse. Det innebär att du enligt oss får den bästa av kombinationer: jobba i spännande kunduppdrag samtidigt som du har en fast plats på ett av våra kontor.\r\n\r\nVi har kul tillsammans och medarbetare som trivs. Vi hoppas att du vill vara en del av vårt gäng och utvecklas tillsammans med oss. En gemensam nämnare hos oss är det stora teknikintresset och vi triggas av att lösa kluriga problem. Vi tycker om att vara innovativa och arbeta entreprenöriellt. Vi tycker även om att fika, spela brädspel, sola på terrassen, sjunga karaoke - ja helt enkelt att umgås! Känner du igen dig? Då tror vi att du skulle trivas hos oss!\r\n\r\nEn av våra största fördelar är att vi är ett litet bolag som arbetar nära varandra, men som även har styrkan och tryggheten i att vara en del av den stora koncernen Addnode Group.\r\n\r\nVi har en tydlig etisk policy som tar tydligt avstånd från att arbeta med företag inom vapenindustrin, tobak, spel och alkohol.', 'decerno.png', 'decerno.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('digpro', 'Digpro', 'Welcome to the Digpro way!\r\n\r\nDigpro develops, markets and supports its own leading geographic information\r\ntechnologies for major industries. Digpro’s products enable clients to save time\r\nand money, while improving service quality. Established since 1989 in Stockholm,\r\nSweden, Digpro’s products and services are available through an international\r\nnetwork of partners.', 'digpro.svg', 'digpro.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('dynabyte', 'Dynabyte', 'Dynabyte är ett nytänkande IT-konsultföretag inom systemutveckling. Vi är ett härligt gäng på drygt 75 personer som älskar att dela med oss av vår kunskap genom exempelvis seminarier, konferenser och workshops! Samtidigt strävar vi efter att var och en av oss ska ges möjlighet att utvecklas i sin egen takt och utifrån sina egna mål och drömmar. Detta gör vi genom att arbeta med individuell coachning och utvecklingsplaner för samtliga av våra anställda.\r\n\r\nVi har ett nytänkande ledarskap, där transparens och delaktighet står i centrum. Hos oss har du möjlighet att direkt påverka organisationen och din vardag genom att vara delaktig i viktiga beslut. Varje vecka träffas ledningsforum, där du själv kan lägga fram förslag, diskutera och besluta i viktiga frågor för Dynabyte. Våra kunder har projekt som ligger i teknisk framkant och befinner sig bland annat inom bank, finans, utbildning, spel, e-handel och startups. Hos oss är det du själv som väljer det kundprojekt du vill arbeta med.\r\n\r\nVårt populära traineeprogram har funnits sedan 2007 och startar två gånger per år, i februari och september. Under dina sex månader som trainee på Dynabyte arbetar du med de allra senaste teknikerna i ett större kundprojekt, och med stöttning av våra seniora utvecklare och mentorer sköter ni projektets hela utveckling. Parallellt med projektet deltar du även i flertalet utvecklande tekniska utbildningar och workshops.\r\n\r\nSedan vi för första gången startade vårt traineeprogram har vi utvecklat några av de allra bästa IT-konsulterna i branschen. Vårt program ger dig ett stort försprång gentemot andra i branschen och efter programmets slut ges du möjlighet att arbeta med roliga utmaningar hos våra kunder!', 'dynabyte.png', 'dynabyte.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('epidemicsound', 'Epidemic Sound', 'Epidemic Sound is a global music and technology company headquartered in Sweden. We are the number one music provider for a wide range of storytellers; everyone from famous YouTubers to well-respected film producers and directors, as well as corporate brands and broadcasters. The tracks are created by our portfolio of talented independent musicians from all around the world who are increasingly building fan bases and becoming artists in their own right.\r\n\r\nAt Epidemic Sound there are a wide variety of engineering-related roles; from programmers and IT-technicians to product managers and data scientists.\r\n\r\nOur engineers build the Epidemic Sound music player and other tools that help our users to quickly and easily find the right music for their needs. We do this by designing how the apps and websites should look, writing code to make them work correctly, whilst also managing the technical systems that store all of the music and make it accessible to everyone on the internet.\r\n\r\nWe also analyze how and where our music is played so we can do everything from making sure we pay our musicians correctly, to helping us make better decisions about what new music to produce.', 'epidemicsound.png', 'epidemicsound.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('ericsson', 'Ericsson', 'Ericsson är världsledande inom kommunikationsteknik och tillhörande tjänster med huvudkontor i Stockholm, Sverige. Vår svenska organisation har närmare  14 000 anställda av totalt cirka 111 000 globalt (dec 2017), inom företagets alla verksamheter – forskning, utveckling, försäljning, produktion och administration.\r\n\r\nEricssons erbjudande sträcker sig över områdena Networks, Digital services, Managed Services och Emerging Business och är utvecklat för att stödja våra kunder att digitalisera sin verksamhet, öka effektiviteten och att hitta nya intäktskällor. Ericssons investeringar i innovation har möjliggjort för miljarder människor världen över att ta del av nyttan med telefoni och mobilt bredband. Ericssons aktier är noterade på Nasdaq Stockholm och Nasdaq  NewYork.\r\n\r\nEricsson har en av branschens starkaste patentportföljer med 45 000 beviljade patent. Ericsson i Sverige är basen för FoU inom radioteknik och 5G - och vi har ett tydligt mål, vår forskning och utveckling i Sverige ska/borde vara världsledande, inte minst i nästa generations system för mobilkommunikation. Totalt har vi omkring 7500 dedikerade anställda inom våra FoU-aktiviteter i Sverige.', 'ericsson.png', 'ericsson.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('fatshark', 'Fatshark', 'Originally founded by Martin Wahlund, Rikard Blomberg, Joakim Wahlström and Johan Jonker the company started off working as hired guns. It wasn’t until 2010 that we published our first game – Lead and Gold, a wild-western shooter, with the help of Paradox Interactive. In 2009 Fatshark co-founded Bitsquid that later was acquired by Autodesk in 2014. The money from the sale funded our very first self-published AAA game, Warhammer: End Times – Vermintide.\r\n\r\nToday we consist of a tightly knit team comprised of over 90 experienced and skilled employees, while still doing regular updates for Vermintide 2 and always on the look-out for new and exciting projects. We are currently situated in Södermalm, the creative quarter of central Stockholm, Sweden.\r\n\r\nAt Fatshark we believe the best moments are experienced together, it’s what influences our work and us as a studio. In our games, you are given the freedom to succeed or fail trying as a group. And that’s exactly the way we like it.\r\n\r\nTogether we have created experience’s such as Lead and Gold, Krater, Bloodsports.tv and Vermintide 1 & 2 – with no plans to stop just there.\r\n\r\n— Fatshark', 'fatshark.png', 'fatsharkgames.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('filter', '', NULL, 'filter.png', 'magasinetfilter.se', 0, '2018-02-28', '2019-02-28', 0, 50, 50),
('fishbrain', 'Fishbrain', 'At Fishbrain, our mission is to build the best possible tool for people who love fishing. We believe if you love what you’re doing, surrounded by inspiring colleagues in an environment of growth and development, you will achieve great things.\r\n\r\nWe’re a Stockholm-based tech startup of more than 50 people from 20 different countries, with a global user base. Some of us fish, some of us love the outdoors, but all of us are united in building the best fishing experience for the anglers of today and the future. 2019 brings a huge year of growth, so come by our booth and drop us a line if you’re hooked. Yes, pun intended.\r\n—————-\r\n\r\nOther reasons to check out Fishbrain:\r\n\r\n*We work closely with Apple and Google in our product development. Plus we partner with world-leading scientists and academics to use our data for research on topics like the sustainability of fish populations.\r\n\r\n*Whether you want to attend a conference or gain skills in a particular area, we will support you and do what we can to help make that happen.\r\n\r\n*You’re more than a brain and a set of fingers typing. At Fishbrain you’ll get an annual allowance to put towards anything in the realm of health and fitness.\r\n\r\n*Twice a year we get together to spend time outside the office -- usually fishing. That’s in addition to other smaller team outings throughout the year.', 'fishbrain.png', 'fishbrain.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('if', 'If', 'If IT is 1000 people creating the knowledge hub of digital services for the largest fintech company within insurance in the Nordics - If P&C Insurance. If IT develops our new digital platform Waypoint – one of the largest .NET program in the Nordics. We have mature DevOps Teams developing, operating and deploying in Cloud supported by an Agile ALM process on Azure. In our own Tech Lab we work in the forefront of technologies i.e. AI, Bots, Micro services and Machine Learning et al. If IT is a central part of making the digital customer journey smooth.\r\n\r\nHere are some of the technologies that we are currently working with, hope it could be of interest for you: .NET Framework | Open Source | GIT | .NET Core | Tableau | Angular | Blueprism | Microsoft Azure | SAS | Mainframe | Azure DevOps | Confluence | Power BI | Teradata | Jira | App Center | Xamarin | Machine Learning | .NET Core | Nuget | npm | SQL Server | CosmosDB | SonarQube | TensorFlow | Cognitive Services\r\n\r\nIn August 2019 our 6 month long Nordic .net trainee program will start in Stockholm, Oslo and Turku for 25 trainees. The application period is still open, so come by our stand and discuss how this could be a great start in your career. For questions reach out to per.ol-ers@if.se', 'if.png', 'if.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('isotop', 'Isotop', 'Isotop är ett kreativt teknikbolag! Tillsammans med våra kunder bygger vi webbplatser, e-handelstjänster och mobila applikationer. Vår filosofi är att teknik är det som möjliggör den stora förändring vi befinner oss i och därför ska få ta ett större utrymme tidigare i alla digitala satsningar. Allra viktigast är dock att vi levererar rätt lösning på rätt uppgift - därför jobbar vi också med teknisk analys, teknisk strategi och att utveckla och optimera våra kunders digitala produkter.\r\n\r\nHos oss jobbar systemutvecklare UI-utvecklare, producenter, agila coacher och testare enligt agila principer och processmodeller. Tillsammans tar vi fram fungerande tjänster på ett effektivt, långsiktigt och hållbart sätt.\r\n\r\n\r\nVi är idag drygt 50 medarbetare som jobbar i team om 8-10 personer. Vi tycker att vi utvecklas mest när vi jobbar i en sammansvetsad grupp över en lite längre tid - men det går att byta om du vill testa någonting nytt - ett annat team, en ny teknik, en ny roll. Vi vill att du ska kunna utvecklas med oss, inte behöva byta arbetsgivare när du vill ha nya utmaningar. Du får inte jobb på Isotop bara för vad du kan - utan för vad vi tror att du kan utvecklas till.\r\n\r\nVi värdesätter balans mellan arbete och fritid. Vad du gör med din lediga tid formar dig och vad du gör när du är här. Du vet själv vad du gillar. Det du gillar gör dig bättre. Därför vill vi inte att jobbet skall vara det enda som definierar dig. Samtidigt tror vi att du kommer gilla att vara här en hel del. Om inte för frukosten, flipperspelen och människorna, så kanske för att vårt kontor är stort, ljust och mysigt - och ligger mitt i stan.', 'isotop.svg', 'isotop.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('kry', '', NULL, 'kry.svg', 'kry.se', 0, '2018-02-28', '2019-02-28', 0, 50, 50),
('lexplore', 'Lexplore', 'Lexplore har en tjänst som mäter läsförmågan hos lågstadiebarn med hjälp av AI, Eyetracking och många års forskning. Med detta kan Lexplore hjälpa skolor och kommuner att mäta läsförmågan och upptäcka elever som behöver stöd tidigt. Tjänsten är snabb, objektiv och resurssnål. På så sätt kan lärare få mer tid för sina elever och skolledare för en möjlighet att få överblick över läsförmågan i en skola eller kommun.\r\n\r\nHur går det till?\r\n\r\nEleverna läser två korta texter på en skärm, en Eyetracker spelar in ögonrörelserna. Efter det får eleven några korta frågor för att testa läsförståelsen. Ögonrörelseinspelningarna laddas upp till en molntjänst där AI-modeller som är tränade på tusentals ögonrörelseinspelningar från elever som gjort referenstester. Därefter levereras resultaten till skolan och kommunen i en webbaserad överskådlig resultatportal.\r\n\r\nLexplore har metodiskt tagit sig ut i världen ända sedan starten 2016 och har hela tiden rönt stor uppmärksamhet. Bland tidigare priser finns Sweden EdTEch award 2016, Nordic EdTech Awards 2017, EIT digital challenge samma år. Företaget har också blivit uppmärksammat i såväl WIRED, Ed Surge (Amerikansk EdTEchblog), SR-Vetenskapsradion och ekot, som av Microsofts VD Satya Nadella som tagit upp det svenska bolaget som ett exempel på hur man använder teknik ”for a global good”.', 'lexplore.png', 'lexplore.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('mrg', 'MRG Gametek', 'Do you want to be part of the team that will shape the future of the iGaming industry? Come and join us at MRG Gametek!\r\n\r\nMRG Gametek is providing the technical platforms for the brands Mr Green and Redbet. Our teams are located both in Malta and in Stockholm. At MRG Gametek you will be part of a creative, innovative team and cool technology is the heart of what we do. In everything we do, we are driven by the concept of Green Gaming which is our commitment in responsible use of our products.', 'mrg.png', 'mrggametek.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('netlight', '', NULL, 'netlight.svg', 'netlight.com', 0, '2018-02-28', '2019-02-28', 0, 50, 50),
('plackers', '', NULL, 'plackers.svg', 'plackers.se', 0, '2018-02-28', '2019-02-28', 0, 50, 50),
('prime', 'Prime Weber Shandwick ', 'Prime and United Minds is an agency of 150 employees with its headquarters in Stockholm, focused on all aspects of integrated marketing, public affairs, crisis management, corporate communications and business intelligence. The agency consists of two different entities: Prime, focusing on public relations and United Minds, providing comprehensive business intelligence services. We provide fully-integrated consulting services to global companies, professional services firms, industry associations, government agencies and other large organizations.\r\n\r\nVi söker studenter inom alla områden, alla olika bakgrunder är välkomna.', 'prime.png', 'primegroup.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('redbee', 'Red Bee Media ', 'Red Bee Media formar grunden för existerande och framtida medieupplevelser genom att definiera hur videoinnehåll skapas, förstärks, lagras, hanteras, distribueras, upptäckts och konsumeras. Genom vår dagliga service och pågående innovation hanterar vi teknisk och operativ komplexitet, optimerar arbetsflöden och levererar leveranskritiska tjänster till våra kunder. På så sätt hjälper vi dem att snabbt anpassa sig och trivas i en förändrande mediebransch. De kan då fokusera på innehållsproduktion och slutanvändarens tillfredsställelse, samtidigt som de utnyttjar cloud-baserade och skalbara tjänster från Red Bee Media.\r\n\r\nPå Red Bee Media är vi 2500 media- och sändningsexperter över 10 olika länder som jobbar för att leverera tjänster inom broadcasting, media management, live streaming & VOD, grafik- och metadatahantering med mera. På Stockholmssajten jobbar vi nära tv-produktioner samtidigt som vi är med och driver maskineriet bakom, från kameralins till det som slutanvändaren till slut ser på sin skärm. Hos oss finns en medieteknisk bredd och vare sig du är mer traditionellt tekniskt lagd, gillar att programmera, visualisera eller brinner för ledarskap och management har du chans att passa här.\r\n\r\nSväng gärna förbi vårt bord på Branschdagen vare sig du redan är hooked på TV/video-branschen eller högst förvirrad om vad du vill göra efter examen, You will have us at Hello!', 'redbee.jpg', 'redbeemedia.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('schibsted', 'Schibsted', 'Jag heter Schibsted och är en nyfiken och innovativ entreprenör med båda fötterna på jorden. Jag strävar alltid efter att tänka nytt med avsikt att ständigt bli lite bättre, inte bara för mig själv utan också för det samhälle vi lever i. Jag föddes i Norge år 1839 och sedan första hjärtslaget har jag haft en stark passion för den fria journalistiken och för ett välmående samhälle. Idag är jag en del av en stor familj bestående av 150 olika varumärken. Vi alla står för en sak gemensamt; “we empowering people in their daily life”.\r\n\r\nVi ser verkligen fram emot att träffa dig, så kom gärna förbi vår monter för att träffa mig och flera av mina fantastiska kollegor. I montern bjuder vi på trevliga samtal, många skratt och kanske en liten sockerchock. Vi ses där!\r\n\r\n/ Schibsted Media Group', 'schibsted.png', 'schibsted.com', 1, '2018-02-28', '2019-02-28', 1, 50, 50),
('sproud', '', NULL, 'sproud.png', 'sproud.se', 0, '2018-02-28', '2019-02-28', 0, 50, 50),
('sr', 'Sveriges Radio', 'Vi vågar påstå att man blir lite smartare av att jobba på Sveriges Radio. Och kanske lite mer intressant. Vi som jobbar här drivs av att dagligen syna det nya, granska det invanda och ompröva det klassiska. Det gäller alla, oavsett vilken roll du har. Hos oss är du med och utvecklar ny teknik som gör att vi kan fortsätta ligga i framkant och göra radio i världsklass och mitt i händelsernas centrum blir du en viktig del av ett företag som värnar om demokrati, det fria ordet och alla människors lika värde.\r\n\r\nTillsammans med Sveriges Radios innovationsavdelning är vårt uppdrag att driva utvecklingen av Sveriges Radios teknik och att säkerställa alla sändningar, varje dag, för våra lyssnare. På vår teknikenhet implementerar vi IT-lösningar som är unika och världsledande och inom vissa områden är det vi som driver marknadens utveckling.\r\n\r\nFör att kunna ta fram ny teknik i ett samhälle där allt går snabbare och snabbare, behöver vi också jobba med att hitta nya samarbetsformer. Därför använder vi oss av en agil metodik, för att uppnå smidigare flöden internt, som i sin tur gör våra leveranser snabbare och mer effektiva. Vi driver utveckling av produkter, med enorm räckvidd och av oslagbar kvalitet. I en värld som förändras snabbt, har vi möjlighet att göra satsningar som få andra kan.\r\n\r\nHos oss är sunda värderingar en nödvändighet, olika åsikter en ny möjlighet och vi välkomnar alla att komma som dom är.\r\n', 'sr.png', 'sverigesradio.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('startuplifers', 'Startuplifers', 'Startuplifers is a non profit internship program that matches students with paid internships at some of the most competitive startups in the world. We are right now focusing on San Francisco and Singapore, and our partnering startups are looking for people in tech, business and design!\r\nWorking at a startup in these startup hubs is an opportunity of a lifetime to boost your career, learn a lot in a short period and elevate your way of thinking.\r\nCome by our monter and we’ll start planning your adventure together!', 'startuplifers.png', 'startuplifers.org', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('studentkortet', '', NULL, 'studentkortet.png', 'studentkortet.se', 0, '2018-02-28', '2019-02-28', 0, 50, 50),
('sverigesingenjorer', 'Sveriges Ingenjörer', 'Ditt liv som ingenjör börjar nu!\r\n\r\nSveriges Ingenjörer välkomnar dig till vårt unika nätverk med 153 000 ingenjörsmedlemmar. Som medlem erbjuder vi dig träning och stöd inför skarpt läge med allt från cv-granskning och karriärcoachning till hjälp med intervjuteknik. Du tar även del av landets bästa lönestatistik, digitaltidningen Ny Teknik samt aktiviteter som hålls på ditt lärosäte. Dessutom har du möjlighet att teckna förmånliga försäkringar och du har tillgång till experthjälp om något skulle gå snett på sommar eller extrajobbet.\r\n\r\nVälkommen att börja ditt liv som ingenjör med oss!', 'sverigesingenjorer.png', 'sverigesingenjorer.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('teamengine', 'TeamEngine', 'Vill du utveckla med React? Hej och välkommen till oss!\r\nTeamEngine Collaboration Software AB är ett modernt IT-företag specialiserat på SaaS-tjänster för styrelser och ledningsgrupper. Vi har utvecklat marknadsledande tjänster som används för att effektivisera samt garantera säker hantering av material inom styrelse- och ledningsarbete, insiderhantering, due diligence samt krishantering.\r\n\r\nVi strävar efter att alltid ligga i framkant inom vårt område och har specialistkompetens för att utveckla användarvänliga och säkra webbapplikationer samt appar.\r\n\r\nLåter detta intressant?\r\n\r\nVälkommen förbi vårt bord den 28 februari! Vi söker drivna och nyfikna frontendutvecklare som har erfarenhet av React och vill jobba på ett innovativt och familjeorienterat företag som är marknadsledande inom sitt område.\r\n\r\nMeriterande kunskaper inkluderar Redux, Git, HTML, CSS, JS och ett intresse för Design, Usability och UX.\r\n\r\nVi ser fram emot att träffa dig!', 'teamengine.svg', 'teamengine.com', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('unionen', 'Unionen', 'Kraftladda inför drömjobbet.\r\n\r\nMed över 650.000 medlemmar är Unionen Sveriges största fackförbund för tjänstemän. Vi arbetar för Schyssta villkor och trygghet på arbetsplatser i privat sektor. För endast 100 kronor blir du studentmedlem hela studietiden oavsett hur länge du studerar. Förutom att se till att du är trygg på extrajobbet och sommarjobbet så stöttar vi dig med rabatter, stipendier och ger dig chansen att delta på utvecklande seminarier. När det är dags att helt ta klivet ut i arbetslivet ser vi till att du får experthjälp med CV, personligt brev och intervjuteknik samt löner och villkor. Vi hjälper dig också på vägen med ett unikt kontaktnät på några av Sveriges populäraste arbetsplatser.\r\n\r\nOm du efter studierna börjar jobba inom privat sektor och uppdaterar ditt studentmedlemskap till yrkesverksamt så har du möjlighet att få tillbaka upp till 3425 kr för kostnaderna på exempelvis kurslitteratur, kåravgifter, miniräknare eller annat material kopplat till din utbildning som du införskaffat under tiden som studentmedlem.\r\n\r\nVi syns på Medias Branschdag!', 'unionen.png', 'unionen.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50),
('xlent', 'XLENT', 'Nyfiken på livet som IT-konsult? På XLENT jobbar vi med roliga, utmanande projekt och ligger i framkant när det gäller att utveckla digitala lösningar för våra kunder. Vi söker dig som vill starta din karriär inom IT - med systemutveckling, UX, projektledning, eller annan roll tillsammans med engagerade medarbetare. Är du ute efter exjobb bollar vi gärna idéer med dig. Kom förbi och träffa oss i vår monter så berättar vi mer!', 'xlent.png', 'xlent.se', 0, '2018-02-28', '2019-02-28', 1, 50, 50);

-- --------------------------------------------------------

--
-- Table structure for table `companies17`
--

CREATE TABLE IF NOT EXISTS `companies17` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `logo` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies17`
--

INSERT INTO `companies17` (`id`, `name`, `description`, `logo`, `website`) VALUES
('apotea', 'Apotea', 'Apotea.se är Sveriges första fullsorterade apotek som bara finns på nätet. Apotea har det största sortimentet, över 11 000 receptfria varor och 5 000 receptbelagda läkemedel för människor och djur, och de lägsta priserna enligt HUI. Med snabba leveranser och rådgivning på nätet och via telefon underlättar Apotea vardagen för våra kunder. Apotea var först med att få Läkemedelsverkets tillstånd att bedriva apotek på nätet 2011. Sedan dess har försäljningen ökat från ca 11 Mkr till knappt en miljard 2016 (prognos) Apotea har drygt 220 anställda i Morgongåva och vid huvudkontoret i Stockholm. Apotea har vunnit en rad priser bla Årets Nätbutik 2014, 2015 på Prisjakt. Årets e-handel på Nordic E-Commerce Award 2014, 2015, 2016 och Svensk Handels stora pris Retail Awards 2016 i kategorin Årets Tillväxtföretag.\n\nEn av framgångsfaktorerna är det egenutvecklade e-handelssystemet. Apoteas IT-avdelning består av ett team av de allra bästa utvecklarna som tillsammans bygger plattformen för Sveriges mest framgångsrika e-handel. Apotea bygger alla sina system själva vilket ger ett omväxlande arbete där uppgiften kan växla mellan front-end programmering på hemsidan till realtidsstyrning av transportbanor i logistiken till framtagande av nya tjänster i vårt affärssystem. Apotea utvecklar sina system i .NET med MVC och SQL Server.', 'apotea.png', 'www.apotea.se'),
('asqill', 'asqill', 'Asqill är ett initiativ av sex KTH-studenter med en gemensam vision om att förbättra relationen mellan företag och studenter. Verksamheten definieras som ett talangnätverk och erbjuder extraarbete skräddarsytt för KTH-studenter. Genom deras Projektportal engageras studenter genom att utföra skarpa projekt åt branschrelevanta företag.', 'asqill.svg', 'www.asqill.se'),
('creuna', 'Creuna', 'Creuna är Nordens ledande digitala byrå. Deras uppdrag sträcker sig från digitala strategier som förändrar deras uppdragsgivares organisationer och arbetssätt, till teknisk vägledning, utveckling, design och innehållsarbete för stora webbplattformar. Addera digitala koncept och strategiskt arbete med sociala medier så har du täckt in en stor del av allt det Creuna sysslar med dagligen. För mer info: www.creuna.se \r\n', 'creuna.png', 'www.creuna.com/se/'),
('digpro', 'Digpro', 'Welcome to the Digpro way! \r\n\r\nDigpro develops, markets and supports its own leading geographic information \r\ntechnologies for major industries. Digpro’s products enable clients to save time \r\nand money, while improving service quality. Established since 1989 in Stockholm, \r\nSweden, Digpro’s products and services are available through an international \r\nnetwork of partners.', 'digpro.svg', 'http://www.digpro.com/sv/'),
('dynabite', 'Dynabyte', 'Dynabyte är ett IT-konsultbolag med specialistkunskap inom systemutveckling. Vi är ett härligt gäng på drygt 75 personer som älskar att dela med oss av vår kunskap genom exempelvis seminarier, konferenser och workshops! Samtidigt strävar vi efter att var och en av oss ska ges möjlighet att utvecklas i sin egen takt och utifrån sina egna mål och drömmar. Detta gör vi genom att arbeta med individuell coachning och utvecklingsplaner för samtliga av våra anställda!\n\nVårt populära traineeprogram har funnits sedan 2007 och startar två gånger per år, i februari och september. Under dina sex månader som trainee på Dynabyte arbetar du med de allra senaste teknikerna i ett större kundprojekt, och med stöttning av våra seniora utvecklare och mentorer sköter ni projektets hela utveckling. Parallellt med projektet deltar du även i flertalet utvecklande tekniska utbildningar och workshops.\n\nSedan vi för första gången startade vårt traineeprogram har vi utvecklat några av de allra bästa IT-konsulterna i branschen. Vårt program ger dig ett stort försprång gentemot andra i branschen, och efter programmets slut ges du möjlighet att arbeta med tekniska utmaningar hos flera av Sveriges hetaste företag!', 'dynabyte.png', 'www.dynabyte.se'),
('isotop', 'Isotop', 'Isotop är en digital teknikbyrå som bygger webbplatser, e-handelstjänster och mobila applikationer. Vår filosofi är att teknik ska få ta ett större utrymme tidigare i alla digitala satsningar. Därför jobbar vi med teknisk analys, teknisk strategi och att utveckla och optimera våra kunders digitala produkter.\n\nHos oss jobbar producenter, arkitekter, utvecklare och kvalitetsansvariga i team och agilt. Det betyder att vi fokuserar på att interagera och samarbeta, vara beredda på förändringar och få fram fungerande produkter.\n\nDet blir bäst resultat och är som roligast när vi:\n	• får jobba med meningsfulla och utmanande uppdrag\n	• arbetar på ett hållbart sätt med en balans mellan jobb och fritid\n	• får jobba i team med stor frihet och mycket ansvar\n	• är delaktiga och får påverka vår arbetsplats i stort och smått\n\nHåller du med? Då borde du #jobbapåisotop. Vi är intresserade av att träffa dig för den kunskap, utbildning och erfarenhet du har nu. Men vi anställer dig för vad du kommer att lära dig under de kommande åren. Kom förbi oss på Medias Branschdag så berättar vi mer!', 'isotop.svg', 'www.isotop.se'),
('ist', 'IST', 'Are you happy with what you''re doing? Would you like to be doing something that really matters? Something that makes a difference to our society, our children and our future?\r\n\r\nWelcome to IST. We change the way schools work and make sure everyone gets the chance to learn more.\r\n\r\nIST has worked side by side with schools for more than 30 years. We have accompanied each other, developed together, challenged each other and found new ways forward. We have delivered IT solutions and services aimed at making life and work better for everyone involved with schools. We know more about schools than most. We have a huge amount of collected experience within our company and half of our employees have a background as teachers or school leaders. What we want to achieve with our work is for everyone in society to have the opportunity to learn as much as possible. Therefore, we have formulated our vision as follows:\r\n\r\n''Every day we help build the schools of tomorrow and a future in which we can all learn more.''\r\n\r\nIST is available in Sweden, Norway and Denmark, where we have about half the population are our customers and users. Our headquarters are in Vaxjo where about 130 people work. Our other office in Sweden is located in Stockholm, with about ten employees. Our Norwegian office is in Oslo, where approximately 50 people work. In Denmark our office is in Roskilde, where there are also about 50 people working. At IST you will find, amongst others, product managers, business consultants, support staff, software developers, project managers, business developers, technicians and Key Account Managers. Basically, we are all problem solvers who, in different ways, try to meet our customers'' challenges.', 'ist.png', 'www.ist.com'),
('kaplan', 'Kaplan', 'Kaplan är Skandinaviens ledande företag för Loyalty Management. De jobbar med effektiva kundlösningar där de ökar värdet för sina kunder genom marknadsföring, dataanalys och olika kreativa processer. I dagens digitala värld har företag tillgång till makalösa mängder av data. Hos Kaplan tror de fast vid att framtiden för kommunikation är datadriven, relevant och riktad där IT och marknadsföring måste arbeta tillsammans för att skapa denna framtid. För mer info: www.kaplan.se \r\n', 'kaplan.svg', 'www.kaplan.se'),
('storytel', 'Storytel', 'Storytel är företaget som gjort det möjligt för oss alla att gå runt med ett bibliotek i fickan genom deras marknadsledande, digitala abonnemangstjänst för strömmade ljudböcker i mobilen. Ett entreprenörsdrivet företag som växer snabbt och har idag avtal med i princip alla förlag i Sverige. På Storytel arbetas det med mjukvaruutveckling, grafisk- och digital design, spännande ljudteknik och mycket mer. För mer info: www.storytel.se \r\n', 'storytel.png', 'www.storytel.se'),
('sverigesingenjorer', 'Sveriges Ingenjörer', 'Ditt liv som ingenjör börjar nu!\n\nSveriges Ingenjörer välkomnar dig till vårt unika nätverk med 144 000 ingenjörsmedlemmar. Som studentmedlem erbjuder vi dig träning och stöd inför skarpt läge med allt från cv-granskning och karriärcoachning till hjälp med intervjuteknik. Du tar även del av landets bästa lönestatistik, digitaltidningen Ny Teknik samt aktiviteter som hålls vid ditt lärosäte. Dessutom har du möjlighet att teckna förmånliga försäkringar och du har tillgång till experthjälp om något skulle gå snett på sommar eller extrajobbet.\n\nVälkommen att börja ditt liv som ingenjör med oss!', 'sverigesingenjorer.png', 'www.sverigesingenjorer.se'),
('unionen', 'Unionen', 'Kraftladda inför drömjobbet.\r\n\r\nMed över 620.000 medlemmar är Unionen Sveriges största fackförbund för tjänstemän. Vi arbetar för Schysta villkor och trygghet på arbetsplatserna i den privata sektorn. För endast 100 kronor blir du studentmedlem hela studietiden oavsett hur länge du studerar. Förutom att se till att du är trygg på extrajobbet och sommarjobbet så stöttar vi dig med rabatter, stipendier och ger dig chansen att delta på utvecklande seminarier. När det är dags att helt ta klivet ut i arbetslivet ser vi till att du får experthjälp med CV, personligt brev och intervjuteknik samt löner och villkor. Vi hjälper dig också på vägen med ett unikt kontaktnät på några av Sveriges populäraste arbetsplatser.\r\n\r\nNär du börjar jobba och uppdaterar ditt studentmedlemskap till yrkesverksamt så har du möjlighet att få tillbaka upp till 3200 kr för kostnaderna på exempelvis kurslitteratur, kåravgifter, miniräknare eller annat material kopplat till din utbildning som du införskaffat under tiden som studentmedlem.\r\n\r\nVi syns på Medias Branschdag!', 'unionen.png', 'www.unionen.se'),
('viaplay', 'Viaplay', 'Viaplay is the leading online service for TV, film and sports in the Nordic countries and part of the Modern Times Group, an international entertainment group listed on the Nasdaq OMX Nordics Large Cap.\r\n\r\nWe offer the most popular TV series, a vast international movie catalogue and a world-class selection of live sports events including Premiere League, Champions League, NHL and the Rio Summer Olympics.\r\n\r\nWe put our hearts into creating beautiful product experiences, and invest every dollar that we can spare into new exciting content formats. Our passion for technology, software development and streaming delivery is unprecedented. Whether you are into sales, marketing, content production, product design or software development we have great problems to solve and new opportunities to capture. Join us and help transform the world of entertainment!', 'viaplay.png', 'www.viaplay.se/jobs'),
('ytest', 'ytest', 'test', 'test', 'test.com');

-- --------------------------------------------------------

--
-- Table structure for table `companies_old`
--

CREATE TABLE IF NOT EXISTS `companies_old` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies_old`
--

INSERT INTO `companies_old` (`id`, `name`, `description`, `logo`, `website`) VALUES
('apotea', 'Apotea', 'Apotea.se är Sveriges första fullsorterade apotek som bara finns på nätet. Apotea har det största sortimentet, över 11 000 receptfria varor och 5 000 receptbelagda läkemedel för människor och djur, och de lägsta priserna enligt HUI. Med snabba leveranser och rådgivning på nätet och via telefon underlättar Apotea vardagen för våra kunder. Apotea var först med att få Läkemedelsverkets tillstånd att bedriva apotek på nätet 2011. Sedan dess har försäljningen ökat från ca 11 Mkr till knappt en miljard 2016 (prognos) Apotea har drygt 220 anställda i Morgongåva och vid huvudkontoret i Stockholm. Apotea har vunnit en rad priser bla Årets Nätbutik 2014, 2015 på Prisjakt. Årets e-handel på Nordic E-Commerce Award 2014, 2015, 2016 och Svensk Handels stora pris Retail Awards 2016 i kategorin Årets Tillväxtföretag.\n\nEn av framgångsfaktorerna är det egenutvecklade e-handelssystemet. Apoteas IT-avdelning består av ett team av de allra bästa utvecklarna som tillsammans bygger plattformen för Sveriges mest framgångsrika e-handel. Apotea bygger alla sina system själva vilket ger ett omväxlande arbete där uppgiften kan växla mellan front-end programmering på hemsidan till realtidsstyrning av transportbanor i logistiken till framtagande av nya tjänster i vårt affärssystem. Apotea utvecklar sina system i .NET med MVC och SQL Server.', 'apotea.png', 'www.apotea.se'),
('dice', 'EA/Dice', 'We are EA/DICE!\n\nWe entertain millions of people across the globe with the most amazing and immersive interactive software in the industry. But making games is hard work. That’s why we employ the most creative, passionate people in the industry.\n\nEA/DICE (EA Digital Illusions Creative Entertainment), the award-winning developer based in Stockholm, Sweden, is best known for creating the phenomenally successful Battlefield franchise. We are also the home of Star Wars Battlefront and Mirrors Edge: Catalyst.', 'dice.png', 'www.dice.se/'),
('dynabyte', 'Dynabyte', 'Dynabyte är ett IT-konsultbolag med specialistkunskap inom systemutveckling. Vi är ett härligt gäng på drygt 75 personer som älskar att dela med oss av vår kunskap genom exempelvis seminarier, konferenser och workshops! Samtidigt strävar vi efter att var och en av oss ska ges möjlighet att utvecklas i sin egen takt och utifrån sina egna mål och drömmar. Detta gör vi genom att arbeta med individuell coachning och utvecklingsplaner för samtliga av våra anställda!\n\nVårt populära traineeprogram har funnits sedan 2007 och startar två gånger per år, i februari och september. Under dina sex månader som trainee på Dynabyte arbetar du med de allra senaste teknikerna i ett större kundprojekt, och med stöttning av våra seniora utvecklare och mentorer sköter ni projektets hela utveckling. Parallellt med projektet deltar du även i flertalet utvecklande tekniska utbildningar och workshops.\n\nSedan vi för första gången startade vårt traineeprogram har vi utvecklat några av de allra bästa IT-konsulterna i branschen. Vårt program ger dig ett stort försprång gentemot andra i branschen, och efter programmets slut ges du möjlighet att arbeta med tekniska utmaningar hos flera av Sveriges hetaste företag!', 'dynabyte.png', 'www.dynabyte.se'),
('ibminteractive', 'IBM Interactive Experience', 'Vi tänker större än en byrå och mer kreativt än ett konsultföretag med befogenhet att integrera hela systemet. Det gör att vi på Interactive Experience (iX) kan förvandla stora idéer till skalbara upplevelser genom IBM Design Thinking, ett agilt förhållningssätt och integrerade system. iX har designstudios i ett flertal länder där vi kan hjälpa våra kunder att sätta sina kunder i centrum för vårt gemensamma arbete. Från strategi, kreativ design och skalbar digital handel, mobila och bärbara plattformar sitter våra team tillsammans med kunderna för att skapa innovationer som driver resultat.\n\niX är en del av IBM, ett globalt företag med över 300 000 anställda världen över finns möjlighet till en internationell karriär och informationsutbyte med kollegor över landsgränserna. Om erfarenhet inom ett område inte finns inom landet finns det alltid en kollega med expertkunskap som man kan kontakta utanför landsgränserna. Ytterligare fördelar med att vara en del av IBM är t.ex. möjligheten att gå på kurser och utbildningar inom Agila metoder, Design Thinking och konsultmannaskap, som ger nya kunskaper och kontakter inom arbetslivet.', 'ibmx.png', 'www-05.ibm.com/employment/emea/consultingbydegrees/index.html'),
('isotop', 'Isotop', 'Isotop är en digital teknikbyrå som bygger webbplatser, e-handelstjänster och mobila applikationer. Vår filosofi är att teknik ska få ta ett större utrymme tidigare i alla digitala satsningar. Därför jobbar vi med teknisk analys, teknisk strategi och att utveckla och optimera våra kunders digitala produkter.\n\nHos oss jobbar producenter, arkitekter, utvecklare och kvalitetsansvariga i team och agilt. Det betyder att vi fokuserar på att interagera och samarbeta, vara beredda på förändringar och få fram fungerande produkter.\n\nDet blir bäst resultat och är som roligast när vi:\n	• får jobba med meningsfulla och utmanande uppdrag\n	• arbetar på ett hållbart sätt med en balans mellan jobb och fritid\n	• får jobba i team med stor frihet och mycket ansvar\n	• är delaktiga och får påverka vår arbetsplats i stort och smått\n\nHåller du med? Då borde du #jobbapåisotop. Vi är intresserade av att träffa dig för den kunskap, utbildning och erfarenhet du har nu. Men vi anställer dig för vad du kommer att lära dig under de kommande åren. Kom förbi oss på Medias Branschdag så berättar vi mer!', 'isotop.svg', 'www.isotop.se'),
('ist', 'IST', 'Welcome to the hero factory!\n\nAre you happy with what you''re doing? Would you like to be doing something that really matters? Something that makes a difference to our society, our children and our future?\n\nWelcome to IST. We change the way schools work and make sure everyone gets the chance to learn more.\n\nIST has worked side by side with schools for more than 30 years. We have accompanied each other, developed together, challenged each other and found new ways forward. We have delivered IT solutions and services aimed at making life and work better for everyone involved with schools. We know more about schools than most. We have a huge amount of collected experience within our company and half of our employees have a background as teachers or school leaders. What we want to achieve with our work is for everyone in society to have the opportunity to learn as much as possible. Therefore, we have formulated our vision as follows:\n\n''Every day we help build the schools of tomorrow and a future in which we can all learn more.''\n\nIST is available in Sweden, Norway and Denmark, where we have about half the population are our customers and users. Our headquarters are in Vaxjo where about 130 people work. Our other office in Sweden is located in Stockholm, with about ten employees. Our Norwegian office is in Oslo, where approximately 50 people work. In Denmark our office is in Roskilde, where there are also about 50 people working. At IST you will find, amongst others, product managers, business consultants, support staff, software developers, project managers, business developers, technicians and Key Account Managers. Basically, we are all problem solvers who, in different ways, try to meet our customers'' challenges.', 'ist.png', 'www.ist.com'),
('kaplan', 'Kaplan', 'Kaplan Loyalty Management is Scandinavia''s leading Loyalty Management firm. We bring in-depth loyalty management services to our clients, including technological, strategic, analytical and creative solutions.\n\nFounded in 1987, we have close to 30 years'' experience of focusing on just one thing – maximizing value in our client''s customer relationships and databases. We create and shape the one-to-one customer experience of tomorrow in a Marketing Automation process known to us as ''True Personalization''.', 'kaplan.svg', 'www.kaplan.se'),
('knowit', 'Knowit', 'Knowit AB (publ) är ett konsultbolag som, inom den allt snabbare digitaliseringen, skapar unika kundvärden genom att erbjuda gränsöverskridande leveranser från tre affärsområden, Experience, Insight och Solutions. Det är förmågan att kombinera kompetenser inom design och kommunikation, managementkonsulting samt it, som skiljer oss från andra konsultbolag. För oss på Knowit är varje teknikskifte en möjlighet till utveckling, både för den enskilde konsulten och företaget i stort. Vi är fortfarande precis lika nyfikna – och redo för förändring – som vid starten 1990. Genom att förena kreativ styrka och strategisk kompetens med passion för teknologi tänker vi både nytt och annorlunda. Våra kommunikationsexperter, managementkonsulter och it-specialister hittar alltid nya vägar framåt.\n\nKnowit är idédrivet och uppmuntrar innovation, entreprenörskap och personligt engagemang. Varje medarbetare har eget beslutsmandat och kan växa både i sin yrkesroll och som människa. Vårt sätt att arbeta, och hur vi organiserar oss, matchar dagens föränderliga värld med nya arbetssätt, nya affärsmodeller och ny teknologi. Knowit är alltid med när det händer, i ett ständigt expanderande digitalt universum. Vår kultur präglas av öppenhet, förståelse för kundens affär, hög specialistkompetens och en vilja att ständigt utvecklas. Vi ser våra kunders verksamhet som en helhet där kommunikation, strategi och teknik samverkar – en inställning som speglas i våra tre affärsområden:\n\nKnowit Experience är Nordens ledande kommunikations- och teknikbyrå som skapar digitala möjligheter för både kunden och kundens kund, med fokus på positiva användarupplevelser. Knowit Insight är den digitala managementkonsulten som stöttar uppdragsgivarnas långsiktiga affärsutveckling både taktiskt och strategiskt. Målet är att skapa insikt och förståelse – för att kunna forma snabbare, mer flexibla och mer innovativa organisationer. Knowit Solutions är systemutvecklaren som bygger digitala processer och kärnsystem från grunden – teknik som gör digitaliseringen möjlig. Tillsammans skapar vi möjligheter för företag, individer och samhället i stort.', 'knowit.png', 'www.knowit.se'),
('myacademy', 'My Academy', 'My Academy startade år 2005 och är idag Sveriges största företag inom läxhjälp i hemmet och online. Företaget präglas av hög ambition, gott humör och att ständigt vilja ge “det lilla extra” till kunder, studiecoacher och medarbetare. Vi är 20 medarbetare som sitter i fina lokaler i centrala Stockholm.\n\nMy Academy har omkring tusentals studiecoacher i nätverket idag och söker löpande personer som vill ha ett flexibelt och roligt extrajobb i kombination med studier.', 'myacademy.png', 'www.myacademy.se'),
('netinsight', 'Net Insight', 'Net Insights vision är att möjliggöra en live och interaktiv TV-upplevelse för alla världen över. Vårt mål är att leda utvecklingen och möjliggöra en global mediemarknadsplats där live-innehåll kan delas och interaktion bland TV-publiken kan ske i realtid. Vi vill skapa medieupplevelser för framtiden, med fokus på innehåll. Net Insight levererar produkter, mjukvara och tjänster för effektiv, högkvalitativ medietransport, tillsammans med effektiv resursplanering, som skapar en förbättrad TV-upplevelse.\n\nNet Insights erbjudande omfattar hela mediespektrat, från TV-kameror och TV-studior, ända fram till TV-konsumenter. Våra lösningar gynnar nätoperatörer och TV- och produktionsbolag genom att sänka den totala ägandekostnaden, förbättra deras arbetsflöden och ge dem möjlighet att hitta nya affärsmöjligheter. Fler än 500 ledande kunder levererar affärskritiska medietjänster med Net Insights produkter i över 60 länder. Net Insight är noterat på Nasdaq Stockholm.', 'netinsight.png', 'www.netinsight.net'),
('netlight', '', '', 'netlight.png', 'www.netlight.com'),
('ooyala', 'Ooyala', 'Ooyala is a global technology company delivering online video solutions and services. We are on a mission to revolutionize digital TV - end-to-end and at a global scale. That requires taking on some very interesting technical challenges, spread across Media Logistics, Video Publishing, Video Advertising and large scala Data Analytics.\n\nOoyala Stockholm\nThe Stockholm office is Ooyala''s third biggest office (after Silicon Valley and London) and is home turf to everything ad-tech.\n\nMore than 2/3 of the 80+ strong Stockholm crew work in R&D making Stockholm is one of Ooyala''s core engineering hubs. The complexity and scale involved in running a global ad-serving platform makes Stockholm an innovation center not only for advertizing technology but also for Ooyala''s infrastructure management, data pipelines and core analytics.', 'ooyala.png', 'www.ooyala.com'),
('river', 'River', 'As a hybrid agency, we take pride in providing our clients with a bridge between digital innovation and advertising. Digital communication is the core of everything we do. Our work ranges from global communication platforms to pan-European TVC''s, digital product innovations, social community management, game development and games for marketing.\n\nWe have grown organically alongside our clients for the past eighteen years. Today we deliver high-value strategy, creativity and production for Nike (Global), EA Games (Global), Nokia (Europe), Philips (Europe), KLM (Global) and many more.\n\nRiver is part of the Intellecta Group.', 'river.png', 'www.river.se'),
('safemind', 'Safemind', 'Vi rekryterar digitala team med det bästa nätverket i Sverige. Vi är specialister på att rekrytera personal till tjänster där IT, teknik och media står i fokus. Det gäller både tjänster som kräver djupa tekniska kunskaper såväl som sälj- och marknadsroller där teknik är en viktig del av erbjudandet.\n\nFör oss handlar rekrytering om att förstå människors drivkrafter och kompetenser och matcha dessa mot våra kunders föränderliga vardag, oftast i en digital context. Att identifiera och tillsätta nyckelpersoner som gör en verklig skillnad är det vi tycker är allra roligast! Med den allt tuffare konkurrensen om de allra bästa kandidaterna är ett väl upparbetat nätverk nyckeln till att snabbt hitta rätt kompetens.\n\nVi har haft förmånen att hjälpa många av de mest framgångsrika techbolagen i sina tillväxtresor från startup till börsintroduktioner, och bra utmaningar lockar de smartaste kandidaterna och bra kandidater lockar de roligaste bolagen.\n\nVi skulle kunna berätta ännu mer om oss själva men föredrar faktiskt att berätta om våra kunder. Vi har haft förmånen att arbeta med några av världens mest framsynta bolag och det tycker vi väger tyngre än ord: King, Spotify, DICE, Tobii, PriceRunner, Fishbrain, SEB, Viaplay, NetEnt, FEO Media, Hemnet och Folksam för att nämna några.\n\nVåra lediga tjänster, och mycket mer, hittar du på vår hemsida:', 'safemind.png', 'www.safemind.se'),
('schibsted', 'Schibsted', 'Schibsted Media Group is an international media group with 6800 employees in over 30 countries. From Mexico to Malaysia, from Brazil to Norway – millions of people interact with Schibsted companies every day. We ensure that new and old sofas can be sold. News reports are read and watched when, where and how consumers want. Weather reports are checked with quick online services. Carpenters are found through a couple of clicks. Prices are compared and the latest fashion is browsed. These examples are just some of the ways our services empower people all around the world in their daily lives.\n\nOur philosophy is built on keeping an open mind, challenging ourselves and the status quo. The goal is to shape the future of our industry. To achieve this we recruit attitude. Are you driven and ambitious? Do you have the courage to face new challenges?', 'schibsted.png', 'www.schibsted.com'),
('sverigesingenjorer', 'Sveriges Ingenjörer', 'Ditt liv som ingenjör börjar nu!\n\nSveriges Ingenjörer välkomnar dig till vårt unika nätverk med 144 000 ingenjörsmedlemmar. Som studentmedlem erbjuder vi dig träning och stöd inför skarpt läge med allt från cv-granskning och karriärcoachning till hjälp med intervjuteknik. Du tar även del av landets bästa lönestatistik, digitaltidningen Ny Teknik samt aktiviteter som hålls vid ditt lärosäte. Dessutom har du möjlighet att teckna förmånliga försäkringar och du har tillgång till experthjälp om något skulle gå snett på sommar eller extrajobbet.\n\nVälkommen att börja ditt liv som ingenjör med oss!', 'sverigesingenjorer.png', 'www.sverigesingenjorer.se'),
('unionen', 'Unionen', 'Kraftladda inför drömjobbet.\n\nMed över 620.000 medlemmar är Unionen Sveriges största fackförbund för tjänstemän. Vi arbetar för Schysta villkor och trygghet på arbetsplatserna i den privata sektorn. För endast 100 kronor blir du studentmedlem hela studietiden oavsett hur länge du studerar. Förutom att se till att du är trygg på extrajobbet och sommarjobbet så stöttar vi dig med rabatter, stipendier och ger dig chansen att delta på utvecklande seminarier. När det är dags att helt ta klivet ut i arbetslivet ser vi till att du får experthjälp med CV, personligt brev och intervjuteknik samt löner och villkor. Vi hjälper dig också på vägen med ett unikt kontaktnät på några av Sveriges populäraste arbetsplatser.\n\nNär du börjar jobba och uppdaterar ditt studentmedlemskap till yrkesverksamt så har du möjlighet att få tillbaka upp till 3200 kr för kostnaderna på exempelvis kurslitteratur, kåravgifter, miniräknare eller annat material kopplat till din utbildning som du införskaffat under tiden som studentmedlem.\n\nVi syns på Medias Branschdag!', 'unionen.png', 'www.unionen.se'),
('urbit', 'urb-it', 'urb-it är ett snabbväxande start-up som skapar ett helt nytt sätt att handla. Med urb-it kan du shoppa online och få varan personligt överlämnad direkt – eller när det passar dig. Kort sagt: shopping på ett banbrytande bekvämt och hållbart sätt. Helt på dina villkor!\n\nVår vision är att revolutionera shoppingbranschen och skapa ett helt nytt sätt att handla. Vi står på din sida och brinner för att ge dig en banbrytande bekväm köpupplevelse, helt på dina villkor. För oss är det inte ok att du ska behöva vänta era dagar på ditt köp eller hämta ut din vara själv. Därför utmanar vi konventionerna, tänker nytt och kommer ständigt med nya lösningar på morgondagens shopping.', 'urbit.svg', 'www.urb-it.com/sv/stockholm'),
('viaplay', 'Viaplay', 'Viaplay is the leading online service for TV, film and sports in the Nordic countries and part of the Modern Times Group, an international entertainment group listed on the Nasdaq OMX Nordics Large Cap.\n\nWe offer the most popular TV series, a vast international movie catalogue and a world-class selection of live sports events including Premiere League, Champions League, NHL and the Rio Summer Olympics.\n\nWe put our hearts into creating beautiful product experiences, and invest every dollar that we can spare into new exciting content formats. Our passion for technology, software development and streaming delivery is unprecedented. Whether you are into sales, marketing, content production, product design or software development we have great problems to solve and new opportunities to capture. Join us and help transform the world of entertainment!', 'viaplay.png', 'www.viaplay.se/jobs'),
('westmediasystems', 'West Media Systems', 'West Media Systems AB utvecklar systemet Link-IT som är en utvecklingsplattform för företagsprocesser. Link-IT hjälper företagen att automatisera sina processer och därmed flytta personerna inblandade i dessa från att utföra till att övervaka och besluta. Stödja processer förutsätter att systemet enkelt kan modifieras för att snabbt anpassa sig till nya omständigheter. Link-IT har ett unikt sätt att underlätta för dessa nya krav, så att kunderna får det stöd som behövs i verksamheten när de behöver det.\n\nVi är aktiva inom mediabranschen med bl.a. Discovery, Cmore och Ericsson som kunder.', 'westmediasystems.png', 'www.westmediasystems.com');

-- --------------------------------------------------------

--
-- Table structure for table `events19`
--

CREATE TABLE IF NOT EXISTS `events19` (
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` mediumtext,
  `date` date NOT NULL,
  `time` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `fb_link` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `show` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events19`
--

INSERT INTO `events19` (`type`, `title`, `description`, `date`, `time`, `location`, `fb_link`, `image`, `show`) VALUES
(NULL, 'Lunchföreläsning med SVT', '"Hjälp! Vad ska jag göra när jag tar examen?"\r\nVi vet att du, oavsett om du går ditt första år på Medieteknik eller börjar samla ihop de sista poängen inför examen, har tänkt den tanken några gånger.\r\n\r\nMed 113 dagar kvar till Medias Branschdag vill vi inspirera dig inför ditt kommande arbetsliv, genom att anordna en lunchföreläsning med Medieteknik-alumnen Olof Lindman. Han arbetar som Online Video Workflow Engineer på SVT Produktion och Teknik, "tänk ingenjörstekniken bakom SVT Play" som han själv beskriver det. \r\n\r\nUnder lunchföreläsningen får vi följa med Olof på hans resa från ettan på Medieteknik, till en tjänst på SVT. Vad gör man egentligen på SVT som medietekniker? Vad finns det för exempel på potentiella exjobb?', '2018-11-07', '12:15-13:00', 'L1', 'https://www.facebook.com/events/355659474978725/', 'svt_lunch.jpg', 1),
(NULL, 'Lunchföreläsning: Schibsted', 'Vem är Schibsted? Varför är Schibsted rätt arbetsgivare för dig som nyexad medieteknikstudent? Hur ska du tänka för att bygga din karriär på ett framgångsrikt sätt?\r\n\r\nDetta får ni veta från Ian Vännman! Han är en tidigare medietekniskstudent som gått från helpdesken på Aftonbladet till grundare av Omni och som nu är Strategichef för Schibsted Media. \r\n\r\nInom Schibstedkoncernen ryms allt ifrån Aftonbladet, SvD, Blocket, Lendo, Letsdeal och Omni för att bara nämna några varumärken - Schibsted är alltså en riktig guldgruva för oss medietekniker!\r\n\r\nVi bjuder på lunch till de 50 första som dyker upp - och vi i Medias Branschdags projektgrupp har med 80 dagar kvar till branschdagen en överraskning du verkligen inte vill missa.... Så kom och inspireras med oss!', '2018-12-10', '12:15-13:00', 'L1', 'https://www.facebook.com/events/524800701334477', 'schibsted_lunch.jpg', 1),
(NULL, 'Företagspub: MRG Gametek', 'VA?! :(, kanske du tänker, ingen företagspub i år? Jodå, Medias Branschdag och MKM got you covered.\r\n\r\nMRG Gametek kommer med mat, dricka och andra överraskningar - en torsdagspub du helt enkelt inte kommer glömma!\r\n\r\n... eh vänta? Mat? På en torsdag? Johodå! För att ta del av detta ~exklusiva erbjudande~ behöver du vara på plats klockan 18.15 i META, hungrig på både mat och härligt mingel med MRG Gametek. Maten finns tills den tagit slut.\r\n\r\nMRG Gametek är det företag som utrustar spelsiter som Mr Green med tekniska lösningar och plattformar. Just nu söker de också efter dig som går ditt sista år och som letar efter en partner till ditt ex-jobb - kul va? MRG Gametek säger själva att de kommer med en hel del godsaker till puben, så en sån här chans får man bara en gång i livet...', '2018-11-22', '18:00-01:00', 'META', 'https://www.facebook.com/events/694196534297205/', 'pub_stock_3.jpg', 1),
(NULL, 'Lunchföreläsning: Vägen till ingenjörsjobbet', 'Med ynka 10 dagar kvar till Medias Branschdag bjuder vi in till en lunchföreläsning med Sveriges Ingenjörer om vägen till ingenjörsjobbet!\r\n\r\nHur gör du ett bra första intryck på en arbetsmarknadsmässa? Hur skriver du ett professionellt CV och personligt brev? Hur kan du använda Linkedin i ditt jobbsökande? Och hur kan du förbereda dig på bästa sätt inför en anställningsintervju och vad är bra att tänka på under intervjun? \r\n\r\nAtt söka jobb är att marknadsföra sig själv och därför måste du sälja in dina kunskaper och erfarenheter på rätt sätt för att sticka ut ur mängden.\r\n\r\nUnder lunchen kommer en CV-expert från Sveriges Ingenjörer ge dig konkreta tips och råd om vad du behöver tänka på för att kunna stärka ditt personliga varumärke för att hitta just ditt extrajobb, sommarjobb, exjobb eller första ingenjörsjobb. Lunchen bjuder såklart Sveriges Ingenjörer på. Och du... vi bjuder på sushi!', '2019-02-18', '12:15-13:00', 'B2', 'https://www.facebook.com/events/2005565129493190/', 'sverigesingenjorer_lunch.jpg', 1),
(NULL, 'Lunchföreläsning med Epidemic Sound', 'Den 20 februari kommer Epidemic Sound hålla i en lunchföreläsning för oss studenter på Medieteknik! Detta sker i samband med Medias Branschdag som går av stapeln 28 februari.\r\n\r\nEpidemic Sound är en av våra 23 utställare, vilket gör att deras lunchföreläsning blir en PERFEKT introduktion av dem för dig som student innan själva Branschdagen!\r\n\r\nUnder föreläsningen kommer de berätta om sig själva och deras bakgrund. Även om hur de utvecklar sina produkter och varför just du är relevant för dem!\r\n\r\nDe första 50 personerna som kommer till föreläsningssalen kommer att få gratis lunch och en överraskning från Epidemic Sound.', '2019-02-20', '12:15-13:00', 'L1', 'https://www.facebook.com/events/522578174815219/', 'epidemicsound_lunch.jpg', 1),
(NULL, 'Medias Branschdag 28/2 2019', 'Inspiration och framtidstro. Det kommer kårhuset Nymble genomsyras av den 28e februari 2019 när dörrarna öppnas till Medias Branschdag!\n\nVår årliga branschdagsmässa hålls för att studenter och företag ska kunna mötas för utbyten - oavsett om det som söks är ett eventuellt sommarjobb eller insikt i vad det egentligen innebär att jobba med medieteknik i praktiken. Branschdagen ger inte bara studenter ett smakprov på vad arbetslivet har att ge, utan bidrar likväl till att företagen får ett smakprov av vad framtida teknologer har att bidra med.\n\nVi slår upp dörrarna till vår branschdag 10.00 och håller öppet till 16.00. Kvällen avslutas med en sittning som börjar klockan 18.00 och innan dess kan en avnjuta en härlig afterwork-presittning tillsammans med MKM i META. Är du sugen på att gå på sittningen, attenda https://www.facebook.com/events/515817568940260/ för vidare information.\n\nMer info kring branschdagen dag kan hittas på www.mediasbranschdag.com\n\nVarmt välkomna!', '2019-02-28', '10:00-16:00', 'Nymble', 'https://www.facebook.com/events/2855029591389635/', 'mbdbanner19.jpg', 1),
(NULL, 'Sittningen - Medias Branschdag 2019', 'Förläng branschdagsdagen lite extra och ta chansen att prata lite mer med det där företaget du tyckte var intressant över en middag, genom att gå på Medias Branschdags sittning! Eller varför inte bara avsluta februari med en tre-rätters på en finsittning?\n\nSittningen sker efter att branschdagen har stängt igen, närmare bestämt kl 18.00 i Syster O Bror, och innan dess går det att förmingla i META på pub from kl 17.\n\nAnmälan till sittningen finner du här https://goo.gl/forms/5De71GeBqmU6QtTv1 och den stänger den 17/2.\n\nVILL DU GYCKLA?\nAlla typer av gyckel är välkomna - skicka in ditt gyckel till mbdgyckel@gmail.com\n\nVarmt välkommen!', '2019-02-28', '17:00-23:00', 'Syster o Bror', 'https://www.facebook.com/events/515817568940260/', 'mbdsittning19.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `day` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `locationlink` varchar(255) DEFAULT NULL,
  `signuplink` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`type`, `title`, `description`, `day`, `duration`, `location`, `locationlink`, `signuplink`) VALUES
('Lunchföreläsning', 'River', 'Digitalbyrån River håller lunchföreläsning.', '31 Okt', '12:15-13:00', 'B3', 'www.kth.se/places/room/id/79cef4d7-7d64-4688-bd80-9d4c1d441680', 'www.goo.gl/forms/Ahl4QHclnMCJ2XT73'),
('Lunchföreläsning', 'Netlight', 'Konsultföretaget Netlight håller lunchföreläsning.', '1 Nov', '12:15-13:00', 'B3', 'www.kth.se/places/room/id/79cef4d7-7d64-4688-bd80-9d4c1d441680', 'www.goo.gl/forms/IbaPci5qRpkSxjq62'),
('Lunchföreläsning', 'Schibsted', 'Mediekoncernen Schibsted håller lunchföreläsning.', '2 Nov', '12:15-13:00', 'B3', 'www.kth.se/places/room/id/79cef4d7-7d64-4688-bd80-9d4c1d441680', 'www.goo.gl/forms/1WwtEoHaMlCTwW0Y2'),
('Mässan Öppnar', 'MBD 2016', 'Dörrarna öppnas till Medias Branschdag 2016. Det kommer finnas möjlighet att besöka mässan fram till stänging klockan 17.00.', '3 Nov', '10:00-17:00', 'Nymble', 'goo.gl/maps/xqXnQJQV2JQ2', NULL),
('Inspiration', 'Tobias Rundbom', 'Tobias Rundbom, medgrundare och chef på Prototyp, håller ett inspererande tal på stora scenen.', '3 Nov', '11:15-12:00', 'Nymble', 'goo.gl/maps/xqXnQJQV2JQ2', NULL),
('Karriär', 'Monika Hanson', 'Grundare av Branschdagen i Medieteknik och Head of Innovation på Viaplay berättar om sin resa efter examen.', '3 Nov', '13:15-14:00', 'Nymble', 'goo.gl/maps/xqXnQJQV2JQ2', NULL),
('Entrepenörskap', 'Donnie Lygonis', 'Från KTHs egna företagsinkubator, KTH Innovation kommer Donnie och berättar kring startup-kulturen och sin roll som coach.', '3 Nov', '15:15-16:00', 'Nymble', 'goo.gl/maps/xqXnQJQV2JQ2', NULL),
('Afterwork', 'MBD 2016', 'Afterworken öppnar i vår sektionslokal META under mässans sista timme. Det är ett perfekt tillfälle att ta det lugnt efter mässan och mingla innan middagssittningen börjar. Den är öppen för studenter och representanter från företagen som deltagit på mässa', '3 Nov', '16:00-18:00', 'META', NULL, NULL),
('Mässan Stänger', 'MBD 2016', 'Medias Branschdag stänger.', '3 Nov', '17:00', 'Nymble', 'goo.gl/maps/xqXnQJQV2JQ2', NULL),
('Gasque', 'Branschdagssittningen', 'Sittningen öppnar dörrarna!', '3 Nov', '18:00', 'Stora Gasque', 'goo.gl/maps/xqXnQJQV2JQ2', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `schedule17`
--

CREATE TABLE IF NOT EXISTS `schedule17` (
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `day` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `locationlink` varchar(255) DEFAULT NULL,
  `signuplink` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `schedule17`
--

INSERT INTO `schedule17` (`type`, `title`, `description`, `day`, `duration`, `location`, `locationlink`, `signuplink`) VALUES
('Tal', 'Adi & Mak Omanovic', 'Adi och Mak Omanovic studerade medieteknik på KTH och valde sedan att följa sin dröm och starta filmproduktionsbolaget Omanovic Productions. Tvillingbröderna har sedan starten 2007 skapat alltifrån dokumentärfilmer till humoristiska reklamfilmer åt stora klienter såsom Tele2 och Coca-Cola och man arbetar även just nu med manus till en svensk långfilm. Adi och Mak har alltid gått sin egen väg inom branschen och kommer till Medias Branschdag för att hålla ett motiverande tal om hur det var att starta eget företag samt visa en del av det material de lyckats skapa, missa inte det! För mer info: www.omanovic.se \r\n', '1a Nov', '13:00-14:00', 'Nya matsalen i Nymble', NULL, NULL),
('Tal', 'Faviana', 'Faviana Vangelius är sannerligen en källa av inspiration. Efter att ha testat på virtual reality på en festival i USA så visste hon direkt att hon hade funnit en passion och förra våren var hon med och grundade Svrvive studios, ett VR- och AR-företag som idag snabbt växt sig till ett av Sveriges största och hetaste företag inom branschen, med Faviana som VD. Hon blev nyligen också utsedd till en av landets mest lovande unga entreprenörer och hon har den senaste tiden hållit tal på stora mässor och konferenser världen runt. Nu är hon här hos oss för att dela med sig av sin passion och vi kunde inte vara gladare för det. Detta vill ni inte missa!  För mer info: www.svrvive.com \r\n', '1a Nov', '14:00-15:00', 'Nya matsalen i Nymble', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sponsors`
--

CREATE TABLE IF NOT EXISTS `sponsors` (
  `id` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sponsors`
--

INSERT INTO `sponsors` (`id`, `logo`, `website`) VALUES
('arvidnordquist', 'arvidnordquist.png', 'www.arvidnordquist.se'),
('comviq', 'comviq.png', 'www.comviq.se'),
('filter', 'filter.png', 'www.magasinetfilter.se'),
('studentkortet', 'studentkortet.png', 'www.studentkortet.se'),
('sverigesingenjorer', 'sverigesingenjorer.png', 'www.sverigesingenjorer.se'),
('tetrapak', 'tetrapak.png', 'www.tetrapak.se'),
('viaplay', 'viaplay.png', 'www.viaplay.se');

-- --------------------------------------------------------

--
-- Table structure for table `sponsors17`
--

CREATE TABLE IF NOT EXISTS `sponsors17` (
  `id` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sponsors17`
--

INSERT INTO `sponsors17` (`id`, `logo`, `website`) VALUES
('arvidNordquist', 'arvidnordquist.png', 'www.arvidnordquist.se'),
('comviq', 'comviq.png', 'www.comviq.se'),
('digpro', 'digpro.svg', 'www.digpro.com'),
('dynabyte', 'dynabyte.png', 'www.dynabyte.se'),
('froosh', 'froosh.jpg', 'www.froosh.com/sv/'),
('libresse', 'libresse.png', 'www.libresse.se'),
('studentkortet', 'studentkortet.png', 'www.studentkortet.se'),
('sverigesIngenjorer', 'sverigesingenjorer.png', 'www.sverigesingenjorer.se'),
('viaplay', 'viaplay.png', 'www.viaplay.se');

-- --------------------------------------------------------

--
-- Table structure for table `sponsors19`
--

CREATE TABLE IF NOT EXISTS `sponsors19` (
  `id` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sponsors19`
--

INSERT INTO `sponsors19` (`id`, `logo`, `website`) VALUES
('bontouch', 'bontouch.png', 'bontouch.com'),
('comviq', 'comviq.png', 'comviq.se'),
('filter', 'filter.png', 'magasinetfilter.se'),
('kry', 'kry.svg', 'kry.se'),
('netlight', 'netlight.svg', 'netlight.com'),
('plackers', 'plackers.svg', 'plackers.se'),
('sproud', 'sproud.png', 'sproud.se'),
('studentkortet', 'studentkortet.png', 'studentkortet.se');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE IF NOT EXISTS `team` (
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

CREATE TABLE IF NOT EXISTS `team17` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
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

CREATE TABLE IF NOT EXISTS `team19` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

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

CREATE TABLE IF NOT EXISTS `team20` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `team20`
--

INSERT INTO `team20` (`id`, `name`, `position`, `email`, `linkedin`, `image`) VALUES
(1, 'Ella Klara Westerlund', 'Projektledare', 'branschdag@medieteknik.com', 'https://www.linkedin.com/in/ellaklara', 'ella_klara.jpg'),
(2, 'Rasmus Rudling', 'Projektledare', 'rasmus@medieteknik.com', 'https://www.linkedin.com/in/rasmus-rudling-b56652129/', 'rasmus_rudling.jpg'),
(3, 'Adam Jonsson', 'Webbutvecklare', 'adam@medieteknik.com', 'https://www.linkedin.com/in/adam-jonsson/', 'adam_jonsson.jpg'),
(12, 'Nike Backman', 'Företagssamordnare', 'nike@medieteknik.com', 'https://www.linkedin.com/in/nike-backman-52739a159/', 'nike_backman.jpg'),
(13, 'Gabriella Dalman', 'Företagsansvarig', 'gabriella@medieteknik.com', 'https://www.linkedin.com/in/gabriella-d-a74365a8/', 'gabriella_dalman.jpg'),
(14, 'Lina Bengtsson', 'Företagsansvarig', 'lina@medieteknik.com', 'https://www.linkedin.com/in/lina-bengtsson-921704174/', 'lina_bengtsson.jpg'),
(15, 'John Brink', 'Företagsansvarig', 'john@medieteknik.com', 'https://www.linkedin.com/in/john-brink-6607a3127/', 'john_brink.jpg'),
(16, 'Johanna Nilsen', 'PR-ansvarig', 'johannaMBD@medieteknik.com ', 'https://www.linkedin.com/in/johanna-n-aa750210a/', 'johanna_nilsen.jpg'),
(17, 'Fredrik Svanholm', 'Art Director', 'fredrik@medieteknik.com', 'https://www.linkedin.com/in/fredrik-svanholm-1b605b159/', 'fredrik_svanholm.jpg'),
(18, 'Nicole Nordlund', 'Sittningsansvarig', 'nicole@medieteknik.com', 'https://www.linkedin.com/in/nicole-nordlund-655b8116b/', 'nicole_nordlund.jpg'),
(19, 'Mimmi Andreasson', 'Logistik', 'mimmi@medieteknik.com', 'https://www.linkedin.com/in/mimmi-andreasson-672b9b170/', 'mimmi_andreasson.jpg'),
(20, 'Lisa  Balzar', 'Logistik', 'lisa@medieteknik.com', 'https://www.linkedin.com/in/lisa-balzar-8b8044151/', 'lisa_balzar.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
