const academies = [
    {
      "Name": "American University of Armenia (AUA) – Acopian Center for the Environment",
      "Address": "40 Marshal Baghramyan Ave, Yerevan, Armenia",
      "Coordinates": "40.180278, 44.511389",
      "Contact": "Aghavni  Harutyunyan",
      "Email": "a.harutyunyan@aua.am"
    },
    {
      "Name": "GeoSphere Austria",
      "Address": "Hohe Warte 38 · 1190 Wien, Austria",
      "Coordinates": "48.241944, 16.363333",
      "Contact": "Filippo Vecchiotti",
      "Email": "filippo.vecchiotti@geosphere.at"
    },
    {
      "Name": "Space Generation Advisory Council (SGAC)",
      "Address": "Schwarzenbergplatz 16, TOP 1 1010 Vienna, Austria",
      "Coordinates": "48.202222, 16.365833",
      "Contact": "Nikol Koleva",
      "Email": "executivedirector@spacegeneration.org"
    },
    {
      "Name": "Spatial Services GmbH",
      "Address": "Schillerstrasse 30 · 5020 Salzburg, Austria",
      "Coordinates": "47.794444, 13.043333",
      "Contact": "Markus Kerschbaumer",
      "Email": "markus.kerschbaumer@spatial-services.com"
    },
    {
      "Name": "University of Natural Resources and Applied Life Sciences (BOKU)",
      "Address": "Gregor-Mendel Straße 33 · 1180 Vienna, Austria",
      "Coordinates": "48.201944, 16.383333",
      "Contact": "Clement Atzberger",
      "Email": "clement.atzberger@boku.ac.at"
    },
    {
      "Name": "University of Salzburg – Department of Geoinformatics (Z_GIS)",
      "Address": "Kapitelgasse 4 · 5020 Salzburg, Austria",
      "Coordinates": "47.795278, 13.046111",
      "Contact": "Stefan Lang",
      "Email": "stefan.lang@sbg.ac.at"
    },
    {
      "Name": "KU Leuven Research & Development",
      "Address": "Waaistraat 6, Internal Postal Box 5105, 3000 Leuven, Belgium",
      "Coordinates": "50.877778, 4.700556",
      "Contact": "Danny Vandenbroucke",
      "Email": "danny.vandenbroucke@kuleuven.be"
    },
    {
      "Name": "Université Libre de Bruxelles – Départment de Géosciences",
      "Address": "Campus Solbosch, Bât.D, Niveaux 3-4-5-6, avenue Antoine Depage, 30 à 1050 Bruxelles",
      "Coordinates": "50.813333, 4.395278",
      "Contact": "Eleonore  Wolff",
      "Email": "ewolff@ulb.ac.be"
    },
    {
      "Name": "VITO",
      "Address": "Boeretang 200 - BE-2400 MOL, Belgium",
      "Coordinates": "51.216944, 5.453333",
      "Contact": "Ils Reusen",
      "Email": "ils.reusen@vito.be"
    },
    {
      "Name": "YouSpace",
      "Address": "Rue de la Station 47 - B-6920 WELLIN, Belgium",
      "Coordinates": "50.283333, 5.333333",
      "Contact": "Dominique Tilmans",
      "Email": "secretariat@dominiquetilmans.be"
    },
    {
      "Name": "Belize High School\n[Member of CSUCA consortium]",
      "Address": "One Coney Dr, Belize City, Belize",
      "Coordinates": "17.498611, -88.193611",
      "Contact": "Jamie Usher",
      "Email": "jusher@belizehighschool.edu.bz"
    },
    {
      "Name": "Fondo para el desarrollo de los Pueblos Indígenas de América Latina y el Caribe (FILAC)\n[Member of CSUCA consortium]",
      "Address": "Av. 20 de octubre 2287 - Esq. Rosendo Gutiérrez, La Paz, Bolivia",
      "Coordinates": "-16.499444, -68.131389",
      "Contact": "Filac",
      "Email": "filac@filac.org"
    },
    {
      "Name": "Observatorio Agroambiental y Productivo (OAyP)",
      "Address": "Via della Vasca Navale 79, Rome Italy",
      "Coordinates": "-16.497812867382596, -68.13567754733708",
      "Contact": "Melisa Abalos Choque",
      "Email": "melisa.abalos@gmail.com"
    },
    {
      "Name": "University of Banja Luka – Faculty of Architecture, Civil Engineering and Geodesy",
      "Address": "Bulevar vojvode Stepe Stepanovića 77/3, Banja Luka 78000, Bosna i Hercegovina",
      "Coordinates": "44.773333, 17.188889",
      "Contact": "Gordana Jakovljević",
      "Email": "gordana.jakovljevic@aggf.unibl.org"
    },
    {
      "Name": "Sofia University \"St. Kliment Ohridski\" – Department of Meteorology and Geophysics",
      "Address": "Sofia 1164, 5, James Bourchier Boulvrd., corpus C, 4th floor",
      "Coordinates": "42.696944, 23.322778",
      "Contact": "Nikolay Rachev",
      "Email": "nick@phys.uni-sofia.bg"
    },
    {
      "Name": "Space Research and Technology Institute – Bulgarian Academy of Sciences (SRTI-BAS)",
      "Address": "Acad G Bonchev St Block 1 Sofia-grad 1113 Sofia, Bulgaria",
      "Coordinates": "42.705556, 23.315",
      "Contact": "Lachezar Filchev",
      "Email": "lachezarhf@mail.space.bas.bg"
    },
    {
      "Name": "Observation Group of Southern Patagonia – GOPA",
      "Address": "Pasaje Patagona, 6200000 Punta Arenas, Chile",
      "Coordinates": "-53.153333, -70.905833",
      "Contact": "René Muñoz Arriagada",
      "Email": "rene.munoz@umag.cl"
    },
    {
      "Name": "Universidad de Magallanes",
      "Address": "Avenida Bulnes 01855 Punta Arenas, Chile",
      "Coordinates": "-53.158333, -70.905278",
      "Contact": "Carlos Cárdenas",
      "Email": "carlos.cardenas@umag.cl"
    },
    {
      "Name": "Universidad Mayor – Hémera, Centro de Observación de la Tierra",
      "Address": "Manuel Montt 367, Previdencia, Santiago, Chile",
      "Coordinates": "-33.425278, -70.623889",
      "Contact": "Paulina Vidal",
      "Email": "paulina.vidal@umayor.cl"
    },
    {
      "Name": "Universidad Tecnica Frederico Santa Maria – Academia de Ciencias Aeronáuticas",
      "Address": "Avenida Santa María 6400, Vitacura, Santiago, Chile",
      "Coordinates": "-33.405556, -70.611667",
      "Contact": "Rodrigo Suarez",
      "Email": "rodrigo.suarez@usm.cl"
    },
    {
      "Name": "Corporación Red Nacional Académica de Tecnología Avanzada-Renata",
      "Address": "Calle 73 7 31 P 2 To B, Bogota, Bogota",
      "Coordinates": "4.663889, -74.082222",
      "Contact": "Mónica Maria López Sánchez",
      "Email": "m.lopez@renata.edu.co"
    },
    {
      "Name": "Universidad de la Gran Colombia",
      "Address": "CARRERA 6 12 B 40, BOGOTA, Distrito Capital de Bogota, Colombia",
      "Coordinates": "4.604167, -74.083333",
      "Contact": "Luis Miguel  Mejía Giraldo",
      "Email": "mejiagluismiguel@miugca.edu.co"
    },
    {
      "Name": "Corporación Universitaria Minuto de Dios",
      "Address": "Diagonal 81C Bis #72C 85, Bogota, D.C., Capital District 111021, Colombia",
      "Coordinates": "4.690833, -74.060278",
      "Contact": "Sergio Filipo Galindo",
      "Email": "sergio.galindo.g@uniminuto.edu"
    },
    {
      "Name": "Universidad Nacional de Colombia – Facultad de Ciencias Agrarias",
      "Address": "Avenida Carrera 30 # 45, Bogotá, D.C. 111321",
      "Coordinates": "4.625, -74.073056",
      "Contact": "Joel  Martinez",
      "Email": "ljmartinezm@unal.edu.co"
    },
    {
      "Name": "Centro Agronómico Tropical de Investigación y Enseñanza (CATIE)\n[Member of CSUCA consortium]",
      "Address": "Just outside Turrialba, on the road to Siquirres, Turrialba 30501, Costa Rica",
      "Coordinates": "9.908056, -83.623056",
      "Contact": "Lenin \n Corrales",
      "Email": "lenin.corrales@catie.ac.cr"
    },
    {
      "Name": "Facultad Latinoamericana de Ciencias Sociales (FLACSO)\n[Member of CSUCA consortium]",
      "Address": "Ajusco Km. 1, 14200 Ciudad de México, Ciudad de México, Mexico",
      "Coordinates": "19.343333, -99.173333",
      "Contact": "Josette  Altmann",
      "Email": "jaltmann@flacso.org"
    },
    {
      "Name": "Colegio Federado de Ingenieros y de Arquitectura de Costa Rica (CFIA)\n[Member of CSUCA consortium]",
      "Address": "Contiguo al Indoor Club de Curridabat, San José, Costa Rica",
      "Coordinates": "9.933333, -84.091667",
      "Contact": "Carlos Enrique  Alvarado-Briceño",
      "Email": "calvaradob@cfia.or.cr"
    },
    {
      "Name": "Universidad de Costa Rica – Escuela de Geografía\n[Member of CSUCA consortium]",
      "Address": "Facultad de Ciencias Sociales, Segundo piso, torre D y E, Montes de Oca, 2060 San José. Costa Rica",
      "Coordinates": "9.941389, -84.133333",
      "Contact": "Melvin Lizano Araya",
      "Email": "melvin.lizanoaraya@ucr.ac.cr"
    },
    {
      "Name": "Algebra University College",
      "Address": "Algebra University, Gradišćanska 24, 10000 Zagreb, Croatia",
      "Coordinates": "45.815833, 15.981111",
      "Contact": "Maja  Brkljacic",
      "Email": "maja.brkljacic@algebra.hr"
    },
    {
      "Name": "Croatian Crisis Management Association",
      "Address": "Stipanovićeva 21 - 10000 Zagreb, Croatia",
      "Coordinates": "45.813056, 15.979167",
      "Contact": "Igor Magdalenić",
      "Email": "hukm@hukm.hr"
    },
    {
      "Name": "Oikon Ltd. – Institute of Applied Ecology",
      "Address": "Trg Senjskih Uskoka 1-2 10000 ZAGREB, Croatia",
      "Coordinates": "45.814167, 15.9775",
      "Contact": "Dalibor Hatić",
      "Email": "dhatic@oikon.hr"
    },
    {
      "Name": "Faculty of Agrobiotechnical Sciences Osijek, Josip Juraj Strossmayer University of Osijek",
      "Address": "Vladimira Preloga 1 31000 Osijek, Croatia",
      "Coordinates": "45.557222, 18.691389",
      "Contact": "Mladen Jurišić",
      "Email": "mjurisic@fazos.hr"
    },
    {
      "Name": "University of Zagreb – Faculty of Geodesy",
      "Address": "Kačićeva Ulica 26 10000 Zagreb, Croatia",
      "Coordinates": "45.816667, 15.983333",
      "Contact": "Zeljko Bačić",
      "Email": "zbacic@geof.hr"
    },
    {
      "Name": "Cyprus Remote Sensing Society",
      "Address": "2-8 Saripolou, Achilleos I Building, 1st Floor, Lemesos, Cyprus",
      "Coordinates": "34.675833, 33.040278",
      "Contact": "Kyriacos Themistocleous",
      "Email": "RSCY@giscyprus.com"
    },
    {
      "Name": "Cyprus Space Exploration Organisation",
      "Address": "Alkiviadi 1, 1016 Nicosia, Cyprus",
      "Coordinates": "35.169722, 33.374167",
      "Contact": "George Danos",
      "Email": "george@spaceexploration.org.cy"
    },
    {
      "Name": "Cyprus University of Technology – Eratosthenes Research Centre",
      "Address": "82 Franklin Roosevelt, 3012,\nLemesos, Cyprus",
      "Coordinates": "34.690556, 33.047222",
      "Contact": "Diofantos Gl.  Hadjimitsis",
      "Email": "d.hadjimitsis@cut.ac.cy"
    },
    {
      "Name": "Charles University",
      "Address": "Ovocný trh 5 - Prague 1, 116 36 Czech Republic",
      "Coordinates": "50.088056, 14.413333",
      "Contact": "Premysl Stych",
      "Email": "stych@natur.cuni.cz"
    },
    {
      "Name": "Czech University of Life Sciences Prague (CZU)",
      "Address": "Kamycka 129A 16500 Prague, Czech Republic",
      "Coordinates": "50.083333, 14.408333",
      "Contact": "Tomáš Klouček",
      "Email": "tkloucek@fzp.czu.cz"
    },
    {
      "Name": "ESERO – European Sapce Education Resource Office, CZ",
      "Address": "Celetná 593/21 - 110 00 Praha 1 – Staré město, Czech Republic",
      "Coordinates": "50.089167, 14.4125",
      "Contact": "Petr Mares",
      "Email": "mares@sciencein.cz"
    },
    {
      "Name": "SCIENCE IN (CZ), S.r.o.",
      "Address": "Úvoz 161/22 11800 Prag, Czech Republic",
      "Coordinates": "50.084722, 14.402778",
      "Contact": "Petr Mares",
      "Email": "mares@sciencein.cz"
    },
    {
      "Name": "Masaryk University – Faculty of Science, Department of Geography",
      "Address": "Kotlářská 267/2, 611 37 Brno, Czech Republic",
      "Coordinates": "49.192500, 16.606389",
      "Contact": "Katerina Tatjovska",
      "Email": "katkatajovska@email.cz"
    },
    {
      "Name": "Aarhus University",
      "Address": "Høegh-Guldbergs Gade 6B, 8000 Aarhus, Denmark",
      "Coordinates": "56.157778, 10.198056",
      "Contact": "Christoffer Karoff",
      "Email": "karoff@geo.au.dk"
    },
    {
      "Name": "Egyptian Space Agency",
      "Address": "Middle Ring Road Km, New Cairo, Cairo, Egypt",
      "Coordinates": "30.054444, 31.363333",
      "Contact": "Ahmed  El-Shal",
      "Email": "ahmed.elshal@egsa.gov.eg"
    },
    {
      "Name": "Universidad de Oriente UNIVO",
      "Address": "4ta calle poniente 705, SAN MIGUEL, El Salvador",
      "Coordinates": "13.4817801361117, -88.18365988028907",
      "Contact": "Jonathan Bonilla",
      "Email": "jromero@univo.edu.sv"
    },
    {
      "Name": "Consejo Indígena de Centro América (CICA)\n[Member of CSUCA consortium]",
      "Address": "Col. Flor Blanca, Calle El Progreso, Pasaje Las Rosas No. 7. San Salvador, El Salvador",
      "Coordinates": "13.691389, -88.820278",
      "Contact": "Jesús Amadeo  Martínez Guzmán",
      "Email": "amadeomg@gmail.com"
    },
    {
      "Name": "Presidencia de la República de El Salvador\n[Member of CSUCA consortium]",
      "Address": "Alameda Manuel Enrique Araujo 5500, San Salvador, El Salvador",
      "Coordinates": "13.691866247957162, -89.23192451603269",
      "Contact": "Secretaria de Innovacion",
      "Email": "echang@presidencia.gob.sv"
    },
    {
      "Name": "Universidad de El Salvador (UES)\n[Member of CSUCA consortium]",
      "Address": "Ciudad Universitaria \"Dr. Fabio Castillo Figueroa\", Final Avenida \"Mártires Estudiantes del 30 julio\", San Salvador, El Salvador",
      "Coordinates": "13.688333, -88.802778",
      "Contact": "José Sermeno",
      "Email": "jose.sermeno@ues.edu.sv"
    },
    {
      "Name": "Universidad de Oriente (UNIVO)\n[Member of CSUCA consortium]",
      "Address": "4ta calle poniente 705, SAN MIGUEL, El Salvador",
      "Coordinates": "13.48175938790004, -88.18384437063962",
      "Contact": "Jonathan Bonilla",
      "Email": "jromero@univo.edu.sv"
    },
    {
      "Name": "University of Tartu – Tartu Observatory",
      "Address": "Lossi 40 51003 Tartu, Estonia",
      "Coordinates": "58.377778, 26.725278",
      "Contact": "Anu Noorma",
      "Email": "anu.noorma@ut.ee"
    },
    {
      "Name": "University of Turku",
      "Address": "Lemminkäisenkatu 14-18 Turku, Finland",
      "Coordinates": "60.491389, 22.260278",
      "Contact": "Niina Käyhkö",
      "Email": "niina.kayhko@utu.fi"
    },
    {
      "Name": "AgroParisTech - Institut des Sciences et Industries du Vivant et de l'Environnement",
      "Address": "648 r Jean François Breton, 34090 Montpellier, France",
      "Coordinates": "43.606389, 3.877500",
      "Contact": "Pierre-Yves Vion",
      "Email": "pierre-yves.vion@agroparistech.fr"
    },
    {
      "Name": "Bordeaux INP, Aerocampus Aquitaine",
      "Address": "1 rte Cénac, 33360 Latresne, France",
      "Coordinates": "44.780278, -0.563056",
      "Contact": "Eric Kerherve",
      "Email": "eric.kerherve@bordeaux-inp.fr"
    },
    {
      "Name": "Bordeaux Sciences Agro, Montpellier Sup Agro",
      "Address": "1 Cours du Général de Gaulle, 33170 Gradignan, France",
      "Coordinates": "44.730556, -0.597222",
      "Contact": "Christian Germain",
      "Email": "Christian.germain@agro-bordeaux.fr"
    },
    {
      "Name": "BreTel – Brittany Remote Sensing Group",
      "Address": "IMT Atlantique Bretagne-Pays de la Loire\nCampus de Brest\nTechnopôle Brest-Iroise\nCS 83818\n29238 Brest Cedex 3",
      "Coordinates": "48.403333, -4.481389",
      "Contact": "Nicolas Bellec",
      "Email": "nicolas.bellec@imt-atlantique.fr"
    },
    {
      "Name": "CNRS – OSU Network CNRS-INSU",
      "Address": "3-5 Rue Michel Ange F-75016 Paris, France",
      "Coordinates": "48.859167, 2.289722",
      "Contact": "Sophie Godin-Beekmann",
      "Email": "sophie.godin-beekmann@cnrs.fr"
    },
    {
      "Name": "Ecole Nationale des Sciences Geographiques (ENSG)",
      "Address": "6-8 AV Blaise Pascal, 77420 Champs-sur-Marne, France",
      "Coordinates": "48.852778, 2.552222",
      "Contact": "Marc Poupee",
      "Email": "marc.poupee@ensg.eu"
    },
    {
      "Name": "Eurisy",
      "Address": "52 rue Jacques Hillairet 75012 PARIS FRANCE",
      "Coordinates": "48.856389, 2.360278",
      "Contact": "Annalisa Donati",
      "Email": "annalisa.donati@eurisy.eu"
    },
    {
      "Name": "European Space Sciences Committee",
      "Address": "1 Quai Lezay-Marnesia, 67000 Strasbourg, France",
      "Coordinates": "48.585278, 7.753889",
      "Contact": "Emmanueil  Detsis",
      "Email": "edetsis@esf.org"
    },
    {
      "Name": "IDGEO",
      "Address": "42 AV du Général de Croutte, 31100 Toulouse, France",
      "Coordinates": "43.580278, 1.443056",
      "Contact": "Renaud Lahaye",
      "Email": "renaud.lahaye@idgeo.fr"
    },
    {
      "Name": "Institut Polytechnique des Sciences Avancées (IPSA) – site de Toulouse",
      "Address": "40 bd Marquette, 31000 Toulouse, France",
      "Coordinates": "43.605833, 1.447500",
      "Contact": "Fabrice Lamareille",
      "Email": "fabrice.lamareille@ipsa.fr"
    },
    {
      "Name": "Institut Supérieur de l'Aéronautique et de l'Espace (ISAE-SUPAERO)",
      "Address": "10, avenue Édouard-Belin - BP 54032 - 31055 Toulouse, France",
      "Coordinates": "43.582500, 1.435556",
      "Contact": "Laurent Ferro-Famil",
      "Email": "Laurent.FERRO-FAMIL@isae-supaero.fr"
    },
    {
      "Name": "International Space University",
      "Address": "1 Illkirch-Graffenstaden, France",
      "Coordinates": "48.580833, 7.743611",
      "Contact": "Danijela Stupar",
      "Email": "danijela.stupar@isunet.edu"
    },
    {
      "Name": "La Cité de l’Espace",
      "Address": "Avenue Jean Gonord, 31500 Toulouse, France",
      "Coordinates": "43.575278, 1.462222",
      "Contact": "Ines Prieto",
      "Email": "i.prieto@cite-espace.com"
    },
    {
      "Name": "LATMOS-IPSL",
      "Address": "11 Bd d'Alembert - Guyancourt, France",
      "Coordinates": "48.785833, 2.090278",
      "Contact": "Philippe Keckhut",
      "Email": "keckhut@latmos.ipsl.fr"
    },
    {
      "Name": "MINES ParisTech",
      "Address": "11, rue Pierre et Marie Curie - 75231 Paris - France",
      "Coordinates": "48.849722, 2.331389",
      "Contact": "Thierry Ranchin",
      "Email": "thierry.ranchin@mines-paristech.fr"
    },
    {
      "Name": "Université Côte d’Azur",
      "Address": "28 Avenue de Valrose 06103 Nice, France",
      "Coordinates": "43.733333, 7.266667",
      "Contact": "Aurélie Delort",
      "Email": "Aurelie.Delort@univ-cotedazur.fr"
    },
    {
      "Name": "Université Paris 1 Panthéon - Sorbonne",
      "Address": "12 Place du Panthéon, 75005 Paris, France",
      "Coordinates": "48.852778, 2.347222",
      "Contact": "Romain Courault",
      "Email": "romain.courault@univ-paris1.fr"
    },
    {
      "Name": "Université Toulouse III-Paul-Sabatier",
      "Address": "118 rte Narbonne, 31400 Toulouse, France",
      "Coordinates": "43.552500, 1.482222",
      "Contact": "Odile Rauzy",
      "Email": "odile.rauzy@univ-tlse3.fr"
    },
    {
      "Name": "VisioTerra",
      "Address": "14 r Albert Einstein, 77420 Champs sur Marne, France",
      "Coordinates": "48.853333, 2.554722",
      "Contact": "Serge RIAZANOFF",
      "Email": "serge.riazanoff@visioterra.fr"
    },
    {
      "Name": "Afrosurface UG",
      "Address": "Eddelbüttel Straße 25, Hamburg Germany",
      "Coordinates": "53.599167, 9.990278",
      "Contact": "Olalekan Adebayo",
      "Email": "Ola.adebayo@afrosurv.com"
    },
    {
      "Name": "University of Applied Sciences Stuttgart – Faculty of Geomatics, Computer Science and Mathematics, Department of Geomatics",
      "Address": "Schellingstr. 24 - Stuttgart Germany",
      "Coordinates": "48.785278, 9.180833",
      "Contact": "Dietrich Schröder",
      "Email": "dietrich.schroeder@hft-stuttgart.de"
    },
    {
      "Name": "Earth Observation Center (EOC), DLR",
      "Address": "Münchener Str. 20 · 82234 Weßling, Germany",
      "Coordinates": "48.103333, 11.383333",
      "Contact": "Doris Klein",
      "Email": "doris.klein@dlr.de"
    },
    {
      "Name": "EIT RawMaterials",
      "Address": "Europaplatz 2 - Berlin, Germany",
      "Coordinates": "52.519722, 13.376389",
      "Contact": "Wesley  Crock",
      "Email": "Wesley.crock@eitrawmaterials.eu"
    },
    {
      "Name": "European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT)",
      "Address": "Eumetsat Allee 1 - D-64295 Darmstadt Germany",
      "Coordinates": "49.869167, 8.659167",
      "Contact": "Hayley Evers-King",
      "Email": "Hayley.EversKing@eumetsat.int"
    },
    {
      "Name": "Friedrich-Schiller University Jena",
      "Address": "Ernst-Abbe Platz 1-4 · 07743 Jena, Germany",
      "Coordinates": "50.936944, 11.581667",
      "Contact": "Robert Eckardt",
      "Email": "robert.eckardt@uni-jena.de"
    },
    {
      "Name": "Heidelberg University of Education & Heidelberg University – UNESCO Chair on World Heritage and Biosphere Reserve Observation and Education, Dept. of Geography – Research Group for Earth Observatio...",
      "Address": "Hauptstr. 114 · 69117 Heidelberg, Germany",
      "Coordinates": "49.412500, 8.688889",
      "Contact": "Alexander Siegmund",
      "Email": "siegmund@ph-heidelberg.de"
    },
    {
      "Name": "Technische Hochschule Georg Agricola University (THGA) – Research Center of Post-Mining",
      "Address": "Herner Street 45 · 44787 Bochum, Germany",
      "Coordinates": "51.483333, 7.323056",
      "Contact": "Peter Goerke-Mallet",
      "Email": "peter.goerke-mallet@thga.de"
    },
    {
      "Name": "Ruhr University Bochum – Geomatics Research Group (GRP), Institute of Geography",
      "Address": "Universitätsstraße 150 - 44801 Bochum, Germany",
      "Coordinates": "51.444167, 7.315556",
      "Contact": "Andreas Rienow",
      "Email": "andreas.rienow@rub.de"
    },
    {
      "Name": "University of Bonn – Remote Sensing Research Group (RSRG)",
      "Address": "Meckenheimer Allee 166 - 53115 Bonn, Germany",
      "Coordinates": "50.729722, 7.067500",
      "Contact": "Olena Dubovyk",
      "Email": "odubovyk@uni-bonn.de"
    },
    {
      "Name": "University of Wurzburg – Department of Remote Sensing",
      "Address": "Sanderring 2 · 97070 Wuerzburg, Germany",
      "Coordinates": "49.805556, 9.933333",
      "Contact": "Martin Wegmann",
      "Email": "martin.wegmann@uni-wuerzburg.de"
    },
    {
      "Name": "WASCAL",
      "Address": "CSIR Office Complex 6, Agostino Neto Road, Accra, Greater Accra, Ghana",
      "Coordinates": "5.572222, -0.193611",
      "Contact": "Kwame Oppong Hackman",
      "Email": "hackman.k@wascal.org"
    },
    {
      "Name": "Aristotle University of Thessaloniki (AUTH)",
      "Address": "36 Vasilissis Olgas Avenue, 546 41 Thessaloniki, Greece",
      "Coordinates": "40.641944, 22.947222",
      "Contact": "Antonios Mouratidis",
      "Email": "amourati@auth.gr"
    },
    {
      "Name": "Biomimicry Greece Research & Innovation Center",
      "Address": "Palama 4, Larissa, Greece",
      "Coordinates": "39.629722, 22.390278",
      "Contact": "Kleopatra Alamantariotou",
      "Email": "kleopatra229@yahoo.co.uk"
    },
    {
      "Name": "Information Technologies Institute – Center for Research and Technology Hellas (CERTH)",
      "Address": "6th km Harilaou - Thermi, 57001, Thessaloniki, Greece",
      "Coordinates": "40.56745991599344, 22.997628298197263",
      "Contact": "Ioannis Manakos",
      "Email": "imanakos@iti.gr"
    },
    {
      "Name": "National Technical University of Athens – Institute of Communications and Computers Systems (ICCS/NTUA)\n[Coordinator of the Greek Copernicus Academy Network (GR-CAN)]",
      "Address": "9 Ir. Polytechneiou, Zografou, Greece",
      "Coordinates": "37.963889, 23.776389",
      "Contact": "Dimitrios Soudris",
      "Email": "dsoudris@microlab.ntua.gr"
    },
    {
      "Name": "National Technical University of Athens – RSLab & Microlab\n[Member of GR-CAN]",
      "Address": "9, Iroon Polytechniou Avenue, Zografou Campus 15780 Zografou, Greece",
      "Coordinates": "37.977831108590294, 23.783482129137404",
      "Contact": "Dimitrios Soudris",
      "Email": "dsoudris@microlab.ntua.gr"
    },
    {
      "Name": "Athena Research Centre – Corallia\n[Member of GR-CAN]",
      "Address": "Kifissias Ave. 44 Monumental Plaza-Building C - Athens, Greece",
      "Coordinates": "37.983333, 23.773056",
      "Contact": "Dimitrios Soudris",
      "Email": "dsoudris@microlab.ntua.gr"
    },
    {
      "Name": "Democritus University of Thrace (DUTH) – Forest Aerial Photography and Remote Sensing Laboratory\n[Member of GR-CAN]",
      "Address": "Campus 691 00 Greece",
      "Coordinates": "41.1365, 25.3724",
      "Contact": "Dimitrios Soudris",
      "Email": "dsoudris@microlab.ntua.gr"
    },
    {
      "Name": "National and Kapodistrian University of Athens (NKUA) – Department of Environmental Physics-Meteorology\n[Member of GR-CAN]",
      "Address": "30 Panepistimiou Street 157 72 Athens, Greece",
      "Coordinates": "37.96776225990759, 23.782801383037125",
      "Contact": "Dimitrios Soudris",
      "Email": "dsoudris@microlab.ntua.gr"
    },
    {
      "Name": "Aristotle University of Thessaloniki (AUTH) – Laboratory of Applied Soil Science; Laboratory of Remote Sensing, Spectroscopy and GIS; Automation and Robotics Laboratory\n[Member of GR-CAN]",
      "Address": "A.U.Th. Campus, Building C, 3rd Floor (Information Processing La 54124 THESSALONIKI, Greece",
      "Coordinates": "40.638056, 22.944722",
      "Contact": "Dimitrios Soudris",
      "Email": "dsoudris@microlab.ntua.gr"
    },
    {
      "Name": "Harokopio University of Athens",
      "Address": "Leoforos Eleftheriou Venizelou 70 176 76 Kallithea, Greece",
      "Coordinates": "37.973333, 23.683056",
      "Contact": "Christos Chalkias",
      "Email": "xalkias@hua.gr"
    },
    {
      "Name": "Institute for Mediterranean Studies, Foundation for Research and Technology, Hellas (IMS-FORTH) – Laboratory of Geophysical Satellite Remote Sensing & Archaeoenvironment (GeoSat ReSeArch)",
      "Address": "Ioannou Melissinou 130 &, Nikiforou Foka 741 31 Municipality of Rethymno, Greece",
      "Coordinates": "35.341944, 24.447222",
      "Contact": "Dimitrios Alexakis",
      "Email": "dalexakis@ims.forth.gr"
    },
    {
      "Name": "National and Kapodistrian University of Athens – Laboratory of Climatology and Atmospheric Environment (LACAE)",
      "Address": "University Campus (Panepistimioupolis Zografou) - GR 15784, Athens, Greece",
      "Coordinates": "37.96741175916764, 23.78559765401677",
      "Contact": "Panagiotis Nastos",
      "Email": "nastos@geol.uoa.gr"
    },
    {
      "Name": "School of European Education Heraklion",
      "Address": "No. Nioti 8 712 02 Heraklion, Greece",
      "Coordinates": "35.325000, 25.138889",
      "Contact": "Amalia Filippaki",
      "Email": "afilippaki@edc.uoc.gr"
    },
    {
      "Name": "University of the Aegean – Department of Marine Sciences",
      "Address": "University Hill - 81100 Mytilene, Lesvos island, Greece",
      "Coordinates": "39.105278, 26.559722",
      "Contact": "Konstantinos Topouzelis",
      "Email": "topouzelis@marine.aegean.gr"
    },
    {
      "Name": "University of Patras – Department of Physics",
      "Address": "University Campus of Patras, Panepistimioupoli in Rio 26500 Patras, Greece",
      "Coordinates": "38.052778, 21.773056",
      "Contact": "Andreas Kazantzidis",
      "Email": "akaza@upatras.gr"
    },
    {
      "Name": "University of Thessaly",
      "Address": "Argonafton & Filellinon - 382 21, Volos, Greece",
      "Coordinates": "39.383333, 22.925000",
      "Contact": "Dimitrios Stathakis",
      "Email": "dstath@uth.gr"
    },
    {
      "Name": "Secretaría General del Consejo Superior Universitario Centroamericano (SG-CSUCA)\n[Coordinator of CSUCA consortium]",
      "Address": "Avenida las Américas 1-03, Z.14 Interior Club Deportivo Los Arcos - Ciudad de Guatemala, Guatemala",
      "Coordinates": "14.622500, -90.522222",
      "Contact": "Carlos Guillermo Alvarado Cerezo",
      "Email": "jluna@csuca.org\nmario@csuca.org carlosalvarado@csuca.org\njluna@csuca.org\nmario@csuca.org - carlosalvarado@csuca.org"
    },
    {
      "Name": "Comisión para el Desarrollo Científico y Tecnológico de Centroamérica y Panamá (CT-CAP) - Secretaría Nacional de Ciencia y Tecnología de la República de Guatemala (Senacyt)\n[Member of CSUCA consor...",
      "Address": "3av. 13-28 Zona 1 - Guatemala City, Guatemala",
      "Coordinates": "14.638889, -90.513889",
      "Contact": "Ana Judith Chan Orantes",
      "Email": "achan@senacyt.gob.gt"
    },
    {
      "Name": "Ministerio de ambiente y recursos naturales de Guatemala\n[Member of CSUCA consortium]",
      "Address": "3-67, 7A Avenida 13, Cdad. de Guatemala, Guatemala",
      "Coordinates": "14.633333, -90.510278",
      "Contact": "Kenset Amaury Rosales Riveiro",
      "Email": "krriveiro@marn.gob.gt"
    },
    {
      "Name": "Universidad Rafael Landívar de Guatemala – Instituto de investigación y proyección sobre ciencia y tecnología (INCYT)\n[Member of CSUCA consortium]",
      "Address": "Vista Hermosa III, zona 16 Guatemala",
      "Coordinates": "14.596788109513513, -90.48618687388463",
      "Contact": "Edson Toniño  Hernández Mazariegos",
      "Email": "ethernadez@url.edu.gt Edsonhernan1468@hotmail.com"
    },
    {
      "Name": "Universidad Rafael Landívar de Guatemala – Unidad de información estratégica para la investigación y proyección (UIE)\n[Member of CSUCA consortium]",
      "Address": "Vista Hermosa III, zona 16 Guatemala",
      "Coordinates": "14.594568938238648, -90.48348420189956",
      "Contact": "Carlos Guillermo Alvarado Cerezo",
      "Email": "carlosalvarado@csuca.org"
    },
    {
      "Name": "Universidad de Valle de Guatemala\n[Member of CSUCA consortium]",
      "Address": "11 Calle, Zona 15, Guatemala 01015",
      "Coordinates": "14.625833, -90.505833",
      "Contact": "Gabriela Fuentes",
      "Email": "gmfuentes@uvg.edu.gt"
    },
    {
      "Name": "Universidad Nacional Autónoma de Honduras (UNAH)\n[Member of CSUCA consortium]",
      "Address": "Bulevar Suyapa, Tegucigalpa, M.D.C, Honduras",
      "Coordinates": "14.104444, -87.182778",
      "Contact": "Javier Mejuto",
      "Email": "javier.mejuto@unah.edu.hn"
    },
    {
      "Name": "Instituto Hondureño de Ciencias de la Tierra (IHCIT/UNAH)\n[Member of CSUCA consortium]",
      "Address": "Tegucigalpa, Ciudad Universitaria, Edificio E1, Facultad de Ciencias, Tegucigalpa, Honduras",
      "Coordinates": "14.097222, -87.178056",
      "Contact": "Lidia Torres",
      "Email": "lidia.torres@unah.edu.hn"
    },
    {
      "Name": "Geo-Sentinel Research, Service and Consulting Ltd",
      "Address": "Kacsóh Pongrác utca 13, H-2132 Göd, Hungary",
      "Coordinates": "47.605556, 19.113611",
      "Contact": "Sándor Frey",
      "Email": "frey.sandor@geo-sentinel.eu"
    },
    {
      "Name": "Dublin Institute for Advanced Studies",
      "Address": "10 Burlington Road Dublin D04 C932 Dublin, Ireland",
      "Coordinates": "53.340556, -6.257500",
      "Contact": "Sergei Lebedev",
      "Email": "sergei@cp.dias.ie"
    },
    {
      "Name": "Maynooth University",
      "Address": "MAYNOOTH UNIVERSITY MAYNOOTH W23 F2H6 CO KILDARE, Ireland",
      "Coordinates": "53.378333, -6.793611",
      "Contact": "Peter Thorne",
      "Email": "peter.thorne@nuim.ie"
    },
    {
      "Name": "AGRICOLUS S.r.l.",
      "Address": "Via Settevalli 320 - 06129 Perugia (PG), Italy",
      "Coordinates": "43.113889, 12.383333",
      "Contact": "Chiara  Fusari",
      "Email": "c.fusari@agricolus.com"
    },
    {
      "Name": "CIRGEO - Interdepartmental Research Center of Geomatics",
      "Address": "Viale dell'Università 16 - 35020 Legnaro -Italy",
      "Coordinates": "45.375278, 11.828333",
      "Contact": "Francesco  Pirotti",
      "Email": "francesco.pirotti@unipd.it"
    },
    {
      "Name": "Centre for Climate and Climate Change (CRC), University of Perugia",
      "Address": "via G.Duranti 67, Perugia, Italy",
      "Coordinates": "43.104722, 12.391944",
      "Contact": "Paolina  Bongioannini Cerlini",
      "Email": "paolina.cerlini@unipg.it"
    },
    {
      "Name": "CIMA Research Foundation – Centro Internazionale in Monitoraggio Ambientale",
      "Address": "Via Nizza 97/A - 17100 Savona (Liguria), Italy",
      "Coordinates": "44.301636714000736, 8.45109250362094",
      "Contact": "Nicola Rebora",
      "Email": "Nicola.rebora@cimafoundation.org"
    },
    {
      "Name": "Corpo Italiano di San Lazzaro - CSLI Italia",
      "Address": "Via delle Galere 35 Livorno, Italy",
      "Coordinates": "43.552778, 10.313889",
      "Contact": "Alexander Virgili",
      "Email": "alexander.virgili@csli-italia.org"
    },
    {
      "Name": "Fondazione Centro Euro-Mediterraneo sui Cambiamenti Climatici (Fondazione CMCC)",
      "Address": "VIA AMBROGIO BERGOGNONE 34 - 20144 Milano (MI)",
      "Coordinates": "45.483333, 9.188056",
      "Contact": "Giulia Galluccio",
      "Email": "giulia.galluccio@cmcc.it"
    },
    {
      "Name": "GECO sistema",
      "Address": "via Costantino Bagli 2/B – I-47921 Rimini (RN), Italy",
      "Coordinates": "44.063889, 12.573056",
      "Contact": "Stefano Bagli",
      "Email": "stefano.bagli@gecosistema.com"
    },
    {
      "Name": "GISIG - Geographical Information Systems International Group",
      "Address": "Via Piacenza 54 - 16138 Genova (Liguria), Italy",
      "Coordinates": "44.405278, 8.948056",
      "Contact": "Milva Carbonaro",
      "Email": "m.carbonaro@gisig.it"
    },
    {
      "Name": "IEST – European Institute for Technological Development",
      "Address": "Via Fratelli Bandiera, 60 - Venezia, Italy",
      "Coordinates": "45.433333, 12.333333",
      "Contact": "Stefania De Zorzi",
      "Email": "dezorzi@ie4st.eu"
    },
    {
      "Name": "ISMEA - Istituto di Servizi per il Mercato Agricolo Alimentare",
      "Address": "Viale Liegi, 26 - 00198 - Roma, Italy",
      "Coordinates": "41.902778, 12.505278",
      "Contact": "Camillo  Zaccarini Bonelli",
      "Email": "c.zaccarini@ismea.it"
    },
    {
      "Name": "Istituto Universitario di Studi Superiori (IUSS) Pavia",
      "Address": "Vittoria Square, 15 - 27100 Pavia (Pavia), Italy",
      "Coordinates": "45.183333, 9.153056",
      "Contact": "Andrea Taramelli",
      "Email": "andrea.taramelli@iusspavia.it"
    },
    {
      "Name": "MEEO S.r.l",
      "Address": "Corso Ercole I d'Este, 6/A - Ferrara, Italy",
      "Coordinates": "44.833333, 11.623056",
      "Contact": "Marco Folegani",
      "Email": "folegani@meeo.it"
    },
    {
      "Name": "National Institute of Oceanography and Applied Geophysics",
      "Address": "Borgo Grotta Gigante 42/C - 34010 - Sgonico ( TS ) - Italy",
      "Coordinates": "45.663333, 13.803056",
      "Contact": "Nicola  Casagli",
      "Email": "ncasagli@inogs.it"
    },
    {
      "Name": "NHAZCA S.r.l.",
      "Address": "Via Vittorio Bachelet, 12 - 00185 Rome (Italy)",
      "Coordinates": "41.905278, 12.495278",
      "Contact": "Vera Costantini",
      "Email": "vera.costantini@nhazca.com"
    },
    {
      "Name": "Planetek Italia SRL",
      "Address": "Via Massaua 12 - 70132 Bari (BA), Italy",
      "Coordinates": "41.118333, 16.871944",
      "Contact": "Francesca  Albanese",
      "Email": "education@planetek.it"
    },
    {
      "Name": "Politecnico di Bari",
      "Address": "Via Edoardo Orabona 4 - 70125 Bari (BA), Italy",
      "Coordinates": "41.128333, 16.866944",
      "Contact": "Eufemia Tarantino",
      "Email": "eufemia.tarantino@poliba.it"
    },
    {
      "Name": "Politecnico di Milano",
      "Address": "Via Camillo Golgi 39 - 20133 Milano (MI), Italy",
      "Coordinates": "45.480278, 9.198056",
      "Contact": "Raffaella Brumana",
      "Email": "raffaella.brumana@polimi.it"
    },
    {
      "Name": "Politecnico di Milano – GEOLab",
      "Address": "Piazza Leonardo da Vinci, 32 - 20133 Milano, Italy",
      "Coordinates": "45.483333, 9.193056",
      "Contact": "Maria Antonia Brovelli",
      "Email": "maria.brovelli@polimi.it"
    },
    {
      "Name": "Politecnico di Torino",
      "Address": "Corso Castelfidardo 39 - 10129 Torino (TO), Italy",
      "Coordinates": "45.068333, 7.693056",
      "Contact": "Piero  Boccardo",
      "Email": "copernicus.academy@polito.it"
    },
    {
      "Name": "Spacearth Technology S.r.l",
      "Address": "VIA DI VIGNA MURATA 605 - 00143 Roma (RM), Italy",
      "Coordinates": "41.883333, 12.513056",
      "Contact": "Vittorio Cannas",
      "Email": "vittorio.cannas@spacearth.net"
    },
    {
      "Name": "STUDIOMAPP S.r.l",
      "Address": "VIA PIETRO ALIGHIERI 43 - 48121 Ravenna (RA), Italy",
      "Coordinates": "44.416944, 12.213056",
      "Contact": "Angela Corbari",
      "Email": "angela@studiomapp.com"
    },
    {
      "Name": "TEAMDEV",
      "Address": "Via Settevalli 320 - 06129 Perugia (PG), Italy",
      "Coordinates": "43.113889, 12.383333",
      "Contact": "Luciano Concezzi",
      "Email": "l.concezzi@teamdev.it"
    },
    {
      "Name": "TeRN – Tecnologie per le Osservazioni della Terra ed i Rischi Naturali",
      "Address": "VIA ZONA INDUSTRIALE SNC - 70015 Noci (BA)",
      "Coordinates": "40.773333, 17.213056",
      "Contact": "Umberto Brindisi",
      "Email": "brindisi@e-sintesi.it"
    },
    {
      "Name": "Università degli Studi della Basilicata",
      "Address": "VIA RAFFAELE ACERENZA - 85100 Potenza (PZ), Italy",
      "Coordinates": "40.643056, 15.803056",
      "Contact": "Valerio Tramutoli",
      "Email": "valerio.tramutoli@unibas.it"
    },
    {
      "Name": "Università di Bologna – Department of Civil, Chemical, Environmental and Materials Engineering (DICAM)",
      "Address": "Via Zamboni, 33 - 40126 Bologna, Italy",
      "Coordinates": "44.493333, 11.343056",
      "Contact": "Gabriele Bitelli",
      "Email": "gabriele.bitelli@unibo.it"
    },
    {
      "Name": "Università di Bologna – Department of Physics and Astronomy",
      "Address": "Via Zamboni, 33 - 40126 Bologna, Italy",
      "Coordinates": "44.493333, 11.343056",
      "Contact": "Nadia Pinardi",
      "Email": "nadia.pinardi@unibo.it"
    },
    {
      "Name": "Università della Calabria (UNICAL) – Department of Computer Science, Modeling, Electronics and Systems Engineering (DIMES)",
      "Address": "Pietro Bucci Street - 87036 Rende (Cosenza), Italy",
      "Coordinates": "39.328333, 16.213056",
      "Contact": "Daniela Biondi",
      "Email": "daniela.biondi@unical.it"
    },
    {
      "Name": "Università degli Studi di Firenze – Department of Earth Sciences",
      "Address": "Via La Pira, 4 - 50121 Firenze (FI), Italy",
      "Coordinates": "43.773333, 11.253056",
      "Contact": "Nicola Casagli",
      "Email": "nicola.casagli@unifi.it"
    },
    {
      "Name": "Università degli Studi di Firenze – Laboratory of Applied Geography (SAGAS), LabGeo",
      "Address": "Via S. Gallo, 10 - 50129 Firenze (FI), Italy",
      "Coordinates": "43.778056, 11.263056",
      "Contact": "Margherita Azzari",
      "Email": "margherita.azzari@unifi.it"
    },
    {
      "Name": "Università degli Studi di Firenze – Laboratory of Forest Geomatics (DAGRI), geoLAB",
      "Address": "Via Gaetano Donizetti, 6 - 50145 Firenze, Italy",
      "Coordinates": "43.783333, 11.258056",
      "Contact": "Gherardo Chirici",
      "Email": "gherardo.chirici@unifi.it"
    },
    {
      "Name": "Università Iuav di Venezia",
      "Address": "Sestiere Santa Croce 191 - 30135 Venezia (VE), Italy",
      "Coordinates": "45.433333, 12.333333",
      "Contact": "Denis Maragno",
      "Email": "dmaragno@iuav.it"
    },
    {
      "Name": "Università di Napoli Federico II – CRISP (Interdepartmental Research Centre on the \"Earth Critical Zone\")",
      "Address": "Via Università, 100 – Portici (NA)- Italy",
      "Coordinates": "40.823333, 14.323056",
      "Contact": "Fabio Terribile",
      "Email": "fabio.terribile@unina.it"
    },
    {
      "Name": "Università degli Studi di Napoli Parthenope",
      "Address": "Generale Parisi 13 - 80132 Napoli (NA), Italy",
      "Coordinates": "40.843333, 14.253056",
      "Contact": "Maurizio Migliaccio",
      "Email": "maurizio.migliaccio@uniparthenope.it"
    },
    {
      "Name": "Università degli Studi di Milano-Bicocca – Department of Earth and Environmental Sciences (UNIMIB-DISAT)",
      "Address": "Piazza dell'Ateneo Nuovo, 1 - 20126, Milan, Italy",
      "Coordinates": "45.483333, 9.188056",
      "Contact": "Roberto Colombo",
      "Email": "roberto.colombo@unimib.it"
    },
    {
      "Name": "Università degli Studi di Padova – Centre of Studies and Activities for Space CISAS “G.Colombo”",
      "Address": "Via Venezia 15, 35131 Padova, Italy",
      "Coordinates": "45.403333, 11.873056",
      "Contact": "Carlo Bettanini",
      "Email": "carlo.bettanini@unipd.it"
    },
    {
      "Name": "Università degli Studi di Pavia – Department of Electrical, Computer, Biomedical Engineering",
      "Address": "Via A. Ferrata, 5 - 27100 Pavia - Italy",
      "Coordinates": "45.183333, 9.153056",
      "Contact": "Fabio Dell’Acqua",
      "Email": "fabio.dellacqua@unipv.it"
    },
    {
      "Name": "Università di Pisa – Department of Civil and Industrial Engineering",
      "Address": "Lungarno Antonio Pacinotti Street, 43 - 56126 Pisa (Pisa), Italy",
      "Coordinates": "43.723333, 10.393056",
      "Contact": "Pietro  Croce",
      "Email": "pietro.croce@unipi.it"
    },
    {
      "Name": "Università Politecnica delle Marche",
      "Address": "Roma Square, 22 - 60121 Ancona (Ancona), Italy",
      "Coordinates": "43.593333, 13.503056",
      "Contact": "Maurizio  Brocchini",
      "Email": "m.brocchini@univpm.it"
    },
    {
      "Name": "Università di Roma \"La Sapienza\" – Aerospace Research Center (CRAS)",
      "Address": "Piazzale Aldo Moro 5, 00185 Roma, Italy",
      "Coordinates": "41.902778, 12.495278",
      "Contact": "Nazzareno Pierdicca",
      "Email": "nazzareno.pierdicca@uniroma1.it"
    },
    {
      "Name": "Università di Roma \"La Sapienza\" – C.I.T.E.R.A.",
      "Address": "Piazzale Aldo Moro 5, 00185 Roma, Italy",
      "Coordinates": "41.902778, 12.495278",
      "Contact": "Fabrizio Cumo",
      "Email": "centrocitera@uniroma1.it"
    },
    {
      "Name": "Università di Roma \"La Sapienza\" – Geodesy and Geomatic Division (DICEA)",
      "Address": "Piazzale Aldo Moro 5, 00185 Roma, Italy",
      "Coordinates": "41.902778, 12.495278",
      "Contact": "Mattia Crespi",
      "Email": "mattia.crespi@uniroma1.it"
    },
    {
      "Name": "Università degli studi di Bari Aldo Moro",
      "Address": "Umberto I Square - 70121 Bari (Bari), Italy",
      "Coordinates": "41.118333, 16.871944",
      "Contact": "Francesco Giordano",
      "Email": "francesco.giordano@uniba.it"
    },
    {
      "Name": "Università degli Studi \"Roma Tre\" – Dipartimento di Ingegneria",
      "Address": "VIA VITO VOLTERRA 62 - 00146 Roma (RM), Italy",
      "Coordinates": "41.908056, 12.503056",
      "Contact": "Georgio Bellotti",
      "Email": "giorgio.bellotti@uniroma3.it"
    },
    {
      "Name": "Università degli studi di Roma \"Tor vergata\" – Earth Observation Laboratory",
      "Address": "Via Cracovia, 50 - Roma, Italy",
      "Coordinates": "41.893333, 12.513056",
      "Contact": "Fabio Del Frate",
      "Email": "fabio.del.frate@uniroma2.it"
    },
    {
      "Name": "Università degli Studi di Salerno – Dipartimento di Informatica",
      "Address": "Via Giovanni Paolo II, 132 - 84084 Salerno (SA), Italy",
      "Coordinates": "40.673333, 14.773056",
      "Contact": "Monica M. L. Sebillo",
      "Email": "msebillo@unisa.it"
    },
    {
      "Name": "Università degli studi di Torino – Department of Agricultural, Forest and Food Sciences (DISAFA)",
      "Address": "Via Verdi 8 - 10124 Torino, Italy",
      "Coordinates": "45.073333, 7.683056",
      "Contact": "Enrico Borgogno Mondino",
      "Email": "enrico.borgogno@unito.it"
    },
    {
      "Name": "Università Telematica Giustino Fortunato",
      "Address": "Galleria del Corso 2 - 20122 Milano (MI), Italy",
      "Coordinates": "45.483333, 9.188056",
      "Contact": "Marco Di Fonzo",
      "Email": "difonzo.m@gmail.com"
    },
    {
      "Name": "Earth Observation Institute",
      "Address": "Shpetim Robaj PN Sofali - Prishtine, Kosovo",
      "Coordinates": "42.663333, 21.163056",
      "Contact": "Perparim  Ameti",
      "Email": "info@eo-ins.org"
    },
    {
      "Name": "Kyrgyz State University of Construction, Transport and Architecture (KSUCTA)",
      "Address": "st. Maldybaeva 34 b, 720020, Bishkek, Kyrgyz Republic",
      "Coordinates": "42.873333, 74.583056",
      "Contact": "Akylbek   Chymyrov",
      "Email": "chymyrov@gmail.com"
    },
    {
      "Name": "Institute for Environmental Solutions (IES)",
      "Address": "Lidlauks, Priekulu parish - Priekulu County, LV-4102 Latvia",
      "Coordinates": "57.321249962345995, 25.321422343831497",
      "Contact": "Ieva Vītola",
      "Email": "ieva.vitola@vri.lv"
    },
    {
      "Name": "University of Latvia",
      "Address": "19 Raina Blvd., Riga, latvia",
      "Coordinates": "56.948333, 24.103056",
      "Contact": "Ingus Mitrofanovs",
      "Email": "ingus.mitrofanovs@lu.lv"
    },
    {
      "Name": "Klaipeda University – Marine Research Institute",
      "Address": "H Manto 84 92294 Klaipeda, Lithuania",
      "Coordinates": "55.703333, 21.133056",
      "Contact": "Diana Vaiciute",
      "Email": "diana.vaiciute@jmtc.ku.lt"
    },
    {
      "Name": "Vilnius University",
      "Address": "University st. 3 01131 Vilnius, Lithuania",
      "Coordinates": "54.683333, 25.283056",
      "Contact": "Dalia Grendaite",
      "Email": "dalia.grendaite@chgf.vu.lt"
    },
    {
      "Name": "Luxembourg Institute of Science and Technology (LIST)",
      "Address": "5, avenue des Hauts-Fourneaux, Esch-sur-Alzette, Luxembourg",
      "Coordinates": "49.473333, 5.983056",
      "Contact": "Marco Chini",
      "Email": "marco.chini@list.lu"
    },
    {
      "Name": "Institute and Observatory of Geophysics of Antananarivo (IOGA), University of Antananarivo",
      "Address": "BP 3843 Ambohidempona, Campus Universitaire - Antananarivo 101 Madagascar",
      "Coordinates": "-18.928333, 47.503056",
      "Contact": "Solofoarisoa Rakotoniaina",
      "Email": "solofo.rakotondraompiana@univ-antananarivo.mg"
    },
    {
      "Name": "Integrated Resources Management (IRM) Company Ltd",
      "Address": "24, POPE BENEDICT XV SQUARE,, Senglea CSP06, Malta",
      "Coordinates": "35.893333, 14.513056",
      "Contact": "Anna Spiteri",
      "Email": "anna@environmentalmalta.com"
    },
    {
      "Name": "University of Malta",
      "Address": "University of Malta, Tal-Qroqq, MSD2080 Msida, Central Region, Msida, Malta Majjistral",
      "Coordinates": "35.890278, 14.493056",
      "Contact": "Aldo Drago",
      "Email": "aldo.drago@um.edu.mt"
    },
    {
      "Name": "Comisión Económica para América Latina y el Caribe Sede Subregional en México (CEPAL)\n[Member of CSUCA consortium]",
      "Address": "Presidente Mazarik No.29-5O Piso Polanco, Miguel Hidalgo, 11570 Ciudad de México, Distrito Federal, Mexico",
      "Coordinates": "19.433333, -99.158056",
      "Contact": "Hugo Beteta",
      "Email": "hugo.beteta@cepal.org"
    },
    {
      "Name": "Delft University of Technology",
      "Address": "Mekelweg 2, 2628 CD Delft, The Netherlands",
      "Coordinates": "51.983333, 4.363056",
      "Contact": "Stef Lhermitte",
      "Email": "s.lhermitte@tudelft.nl"
    },
    {
      "Name": "European School The Hague",
      "Address": "Oostduinlaan 50, 2596 JP The Hague, The Netherlands",
      "Coordinates": "52.103333, 4.323056",
      "Contact": "Caroline Emery",
      "Email": "c.emery@eshthehague.nl"
    },
    {
      "Name": "Leiden University – Department of Astronomy",
      "Address": "Gorlaeus Building\nEinsteinweg 55 - NL-2333 CC Leiden, The Netherlands",
      "Coordinates": "52.163333, 4.483056",
      "Contact": "Pedro Russo",
      "Email": "russo@strw.leidenuniv.nl"
    },
    {
      "Name": "University of Twente – Faculty of Geo-Information Science and Earth Observation (ITC)",
      "Address": "Hengelosestraat 99, 7514 AE Enschede, The Netherlands",
      "Coordinates": "52.223333, 6.893056",
      "Contact": "Valentijn Venus",
      "Email": "v.venus@utwente.nl"
    },
    {
      "Name": "Stichting DotSpace",
      "Address": "Huygensstraat 34 - Noordwijk, Netherlands",
      "Coordinates": "52.233333, 4.423056",
      "Contact": "Martin Seijger",
      "Email": "martijn.seijger@groundstation.space"
    },
    {
      "Name": "Universidad Nacional Autónoma de Nicaragua\n[Member of CSUCA consortium]",
      "Address": "Pabellón 19 UNAN mANAGUA, 663, Managua, Nicaragua",
      "Coordinates": "12.133333, -86.283056",
      "Contact": "Jilma Romero",
      "Email": "jromero@unan.edu.ni"
    },
    {
      "Name": "Cooperative Information Network (COPINE) - National Space Research and Development Agency",
      "Address": "Obafemi Awolowo University Campus, P.M.B 022, Ile-Ife, Osun State, Nigeria",
      "Coordinates": "7.483333, 4.533056",
      "Contact": "Alaga Abayomi Taofeek",
      "Email": "alagayomi@yahoo.com"
    },
    {
      "Name": "Nigeria Hydrological Services Agency",
      "Address": "Plot 222 Foundation Plaza, Abuja, Nigeria",
      "Coordinates": "9.053333, 7.483056",
      "Contact": "Cletus Musa",
      "Email": "mancle2001@yahoo.com"
    },
    {
      "Name": "NERSC – Nansen Environmental and Remote Sensing Center\n(in a coalition with MET Norway & the Institute of Marine Research)",
      "Address": "Jahnebakken 3 - N-5007, Bergen, NORWAY",
      "Coordinates": "60.393333, 5.323056",
      "Contact": "Laurent Bertino",
      "Email": "laurent.bertino@nersc.no"
    },
    {
      "Name": "University of Bergen - Geography Department",
      "Address": "Postboks 7802 - NO-5020 BERGEN, NORWAY",
      "Coordinates": "60.393333, 5.323056",
      "Contact": "Olena Dubovyk",
      "Email": "olena.dubovyk@uib.no"
    },
    {
      "Name": "University of Agriculture, Faisalabad",
      "Address": "Jail Road, Faisalabad, Punjab,38000 Pakistan",
      "Coordinates": "31.413333, 73.083056",
      "Contact": "Muhammad Ahsan Latif",
      "Email": "mahsanlatif@uaf.edu.pk"
    },
    {
      "Name": "University of Engineering and Technology – Intelligent Information Processing Lab, National Center of Artificial Intelligence",
      "Address": "GT Road, Lahore, Lahore, Punjab 54890, Pakistan",
      "Coordinates": "31.563333, 74.308056",
      "Contact": "Khan Muhammad",
      "Email": "khan.m@uetpeshawar.edu.pk"
    },
    {
      "Name": "Universidad tecnológica de Panamá\n[Member of CSUCA consortium]",
      "Address": "Campus Victor Levi Sasso, Vía Centenario. Ancón, Panamá., Panamá",
      "Coordinates": "8.983333, -79.533056",
      "Contact": "Rodney Delgado",
      "Email": "rodney.delgado@utp.ac.pa"
    },
    {
      "Name": "Agencia Espacial del Paraguay",
      "Address": "Avda. Mcal. López y 22 de Setiembre, Bloque B, Piso 7. Asunción, Paraguay",
      "Coordinates": "-25.293333, -57.603056",
      "Contact": "Jorge Kurita",
      "Email": "gkurita@gmail.com"
    },
    {
      "Name": "Universidad Nacional de Asunción – Facultad Politecnica",
      "Address": "Campus de San Lorenzo, 910 San Lorenzo, Paraguay",
      "Coordinates": "-25.323333, -57.533056",
      "Contact": "Rossana Villalba Cáceres‎",
      "Email": "rvillalba@pol.una.py"
    },
    {
      "Name": "University of Philippines Diliman - Department of Geodetic Engineering",
      "Address": "MH216, Melchor Hall, Osmeña Avenue, UP DIliman,, Quezon City, Philippines",
      "Coordinates": "14.673333, 121.053056",
      "Contact": "Czar Jakiri Sarmiento",
      "Email": "cssarmiento@up.edu.ph"
    },
    {
      "Name": "Association of Geographic Information Laboratories in Europe (AGILE)",
      "Address": "Plac Stanisława Małachowskiego - 00-063 Warszawa, Poland",
      "Coordinates": "52.243333, 21.003056",
      "Contact": "Marek  Baranowski",
      "Email": "agile.secretary@gmail.com"
    },
    {
      "Name": "The Silesian University of Technology",
      "Address": "Bolesława Krzywoustego 2, 99-300 Kutno, Łódzkie, Poland",
      "Coordinates": "52.223333, 19.383056",
      "Contact": "Barbara Sensula",
      "Email": "barbara.sensula@polsl.pl"
    },
    {
      "Name": "UNEP/GRID-Warsaw Centre",
      "Address": "Poznańska 21, 00-685 Warszawa, Woj. Mazowieckie, Poland",
      "Coordinates": "52.243333, 21.003056",
      "Contact": "Maria Andrzejewska",
      "Email": "maria@gridw.pl"
    },
    {
      "Name": "National Laboratory of Energy and Geology (LNEG)",
      "Address": "Estrada da Portela Bairro do Zambujal - Apartado 7586, Alfragide 2610-999 Amadora Portugal",
      "Coordinates": "38.733333, -9.233056",
      "Contact": "Lidia Quental",
      "Email": "lidia.quental@lneg.pt"
    },
    {
      "Name": "Spacelayer Technologies",
      "Address": "Avenida Emídio Navarro, 83 Coimbra 3000-151, Portugal",
      "Coordinates": "40.203333, -8.413056",
      "Contact": "Pedro Jorge Caridade",
      "Email": "pedrojcaridade@spacelayertech.com"
    },
    {
      "Name": "University of the Azores",
      "Address": "Rua da Mãe de Deus, 58 Ponta Delgada 9500-321, Portugal",
      "Coordinates": "37.74608594473726, -25.663628330979208",
      "Contact": "Artur Gil",
      "Email": "artur.jf.gil@uac.pt"
    },
    {
      "Name": "University of Evora",
      "Address": "Largo dos Colegiais 2, Centro Histórico Evora 7004-516, Portugal",
      "Coordinates": "38.573333, -7.883056",
      "Contact": "Adélia  Sousa",
      "Email": "asousa@uevora.pt"
    },
    {
      "Name": "Romanian Space Agency (ROSA)",
      "Address": "str. Mendeleev, nr. 21-25 Bucharest, Romania",
      "Coordinates": "44.433333, 26.103056",
      "Contact": "Ion Nedelcu",
      "Email": "ion.nedelcu@rosa.ro"
    },
    {
      "Name": "Tudor Arghezi Secondary School",
      "Address": "CABANEI NR 14 - 905700 Navodari, Romania",
      "Coordinates": "44.333333, 28.583056",
      "Contact": "Tutuianu Vasilica",
      "Email": "ica33nav@yahoo.com"
    },
    {
      "Name": "S.C Esri Romania S.r.l.",
      "Address": "Str. Washington, Nr. 25 011793 Bucuresti, Romania",
      "Coordinates": "44.433333, 26.103056",
      "Contact": "Andreea Vasile",
      "Email": "aanghel@esri.ro"
    },
    {
      "Name": "Transilvania University of Brasov",
      "Address": "Str. Washington, Nr. 25 011793 Bucuresti, Romania",
      "Coordinates": "44.433333, 26.103056",
      "Contact": "Mihai Ivanovici",
      "Email": "mihai.ivanovici@unitbv.ro"
    },
    {
      "Name": "University of Novy Sad – Faculty of Technical Sciences",
      "Address": "Trg Dositeja Obradovića 6, 21102 Novi Sad, Serbia",
      "Coordinates": "45.253333, 19.833056",
      "Contact": "Miro Govedaric",
      "Email": "miro@uns.ac.rs"
    },
    {
      "Name": "Pavol Jozef Safarik University",
      "Address": "Srobarova 1014/2 04001 Kosice, Slovakia",
      "Coordinates": "48.713333, 21.253056",
      "Contact": "Pavol Sovak",
      "Email": "rektor@upjs.sk"
    },
    {
      "Name": "Faculty of Mining, Ecology, Process Control and Geotechnologies, Technical University of Košice",
      "Address": "Letná 1/9 - 042 00 Košice-Sever - Slovak Republic",
      "Coordinates": "48.723333, 21.263056",
      "Contact": "Michal  Cehlar",
      "Email": "michal.cehlar@tuke.sk"
    },
    {
      "Name": "Faculty of Natural Sciences, Matej Bel University",
      "Address": "Tajovského 40 - 974 01 Banská Bystrica, Slovakia",
      "Coordinates": "48.733333, 19.153056",
      "Contact": "Lenka Balazovicova",
      "Email": "lenka.balazovicova@umb.sk"
    },
    {
      "Name": "Plant Science and Biodiversity Center, Slovak Academy of Sciences",
      "Address": "Dúbravská cesta 9, 845 23 Bratislava 4, Slovak Republic",
      "Coordinates": "48.143333, 17.113056",
      "Contact": "Maria Šibíková",
      "Email": "maria.sibikova@savba.sk"
    },
    {
      "Name": "Sinergise",
      "Address": "Cvetkova ulica 29 1000 Ljubljana, Slovenia",
      "Coordinates": "46.053333, 14.503056",
      "Contact": "Sabina Dolenc",
      "Email": "sabina.dolenc@sinergise.com"
    },
    {
      "Name": "University of Ljubljana – Faculty of Civil and Geodetic Engineering",
      "Address": "Jamova cesta 2, 1000 Ljubljana, Slovenia",
      "Coordinates": "46.053333, 14.503056",
      "Contact": "Kristof Ostir",
      "Email": "kristof.ostir@fgg.uni-lj.si"
    },
    {
      "Name": "Campus Excelencia Agroalimentario (ceiA3)",
      "Address": "Calle de Alfonso XII 13, 14002, Córdoba (Andalucía), Spain",
      "Coordinates": "37.883333, -4.783056",
      "Contact": "Nicolás Aranda",
      "Email": "opi01.op@ceia3.es"
    },
    {
      "Name": "Centro Integrado Formacion Profesional Almazcara",
      "Address": "Fina La Dehesa, Calle la Dehesa, Almazcara (León), Spain",
      "Coordinates": "42.523333, -5.553056",
      "Contact": "Celso Coco",
      "Email": "almazcara@forestry.es"
    },
    {
      "Name": "Colegio Oficial de Ingenieros de Telecomunicación",
      "Address": "C/ Almagro 2 1º Izqda 28010 Madrid, Spain",
      "Coordinates": "40.413333, -3.693056",
      "Contact": "Adrián Nogales Escudero",
      "Email": "anogales@coit.es"
    },
    {
      "Name": "Euskal Herriko Unibersitatea (EHU – University of the Basque Country)",
      "Address": "Barrio Sarriena street, 48940, Leioa (Biscay), Spain",
      "Coordinates": "43.323333, -2.983056",
      "Contact": "Ekhi Roteta",
      "Email": "ekhi.roteta@gmail.com"
    },
    {
      "Name": "GRUMETS – Methods and Applications in Remote Sensing and Geographic Information Systems Research Group",
      "Address": "Campus UAB, Edifici B. - 08193 Bellaterra, Catalonia, Spain",
      "Coordinates": "41.50166476441625, 2.10962195562096",
      "Contact": "Lluís   Pesquer",
      "Email": "l.pesquer@creaf.uab.cat"
    },
    {
      "Name": "IHCantabria",
      "Address": "C/ Isabel Torres, 15, 39011, Santander (Cantabria), Spain",
      "Coordinates": "43.473333, -3.803056",
      "Contact": "Ana Silio Calzada",
      "Email": "ana.silio@unican.es"
    },
    {
      "Name": "Institut Cartografic I Geologic de Catalonia",
      "Address": "Paseo de Santa Madrona, 45, 08038, Barcelona, Spain",
      "Coordinates": "41.383333, 2.173056",
      "Contact": "Jordi Corbera Simon",
      "Email": "jordi.corbera@icgc.cat"
    },
    {
      "Name": "Jaume I University – Institute of New Imaging Technologies (INIT)",
      "Address": "Avda. Sos Baynat, s/n, Universidad Jaume I, Castellón de la Plana. Castellón - 12071 España",
      "Coordinates": "39.983333, -0.053056",
      "Contact": "Joaquín Huerta Guijarro",
      "Email": "huerta@uji.es"
    },
    {
      "Name": "TIDOP Research Group",
      "Address": "Hornos Caleros street, nº50, 05003, Ávila, Spain",
      "Coordinates": "40.663333, -4.683056",
      "Contact": "Diego González Aguilera",
      "Email": "daguilera@usal.es"
    },
    {
      "Name": "Universidad Autonoma de Madrid",
      "Address": "Ciudad Universitaria de Cantoblanco, C/ Einstein 1, 28049, Madrid, Spain",
      "Coordinates": "40.453333, -3.643056",
      "Contact": "Jose Antonio Rodriguez-Esteban",
      "Email": "josea.rodriguez@uam.es"
    },
    {
      "Name": "University Complutense of Madrid – Geography Department",
      "Address": "Calle del Obispo Trejo 8, 28005, Madrid, Spain",
      "Coordinates": "40.413333, -3.693056",
      "Contact": "Gustavo Romanillos",
      "Email": "gustavro@ucm.es"
    },
    {
      "Name": "Universidad de Cadiz",
      "Address": "Fragela 8, 11003, Cádiz, Spain",
      "Coordinates": "36.53762915172956, -6.3004597495265555",
      "Contact": "Jesus Gomez-Enri",
      "Email": "jesus.gomez@uca.es"
    },
    {
      "Name": "Universidad de Cantabria",
      "Address": "Castros Avenue, 39005, Santander (Cantabria), Spain",
      "Coordinates": "43.473333, -3.803056",
      "Contact": "Antonio S.  Cofiño",
      "Email": "antonio.cofino@unican.es"
    },
    {
      "Name": "Universidad de Castilla-La Mancha – Instituto de Desarrollo Regional",
      "Address": "Paseo de los Estudiantes, s/n, 02006 Albacete, Spain",
      "Coordinates": "38.993333, -1.863056",
      "Contact": "Alfonso Calera Belmonte",
      "Email": "alfonso.calera@uclm.es"
    },
    {
      "Name": "Universitat de Girona (UdG) – Geographical Information Systems and Remote Sensing Service (SIGTE)",
      "Address": "Santo Domingo sq, 3 Les Aguiles Buidling, 17004, Girona (Girona), Spain",
      "Coordinates": "41.983333, 2.823056",
      "Contact": "Josep Sitjar Suñer",
      "Email": "josep.sitjar@udg.edu"
    },
    {
      "Name": "Universidad de Jaén – Photogrammetric and Topometric Systems Research Group",
      "Address": "Edificio A3. Campus Las Lagunillas s/n | 23071 - Jaén, Spain",
      "Coordinates": "23071 - Jaén, Spain",
      "Contact": "Jorge Delgado",
      "Email": "jdelgado@ujaen.es"
    },
    {
      "Name": "Universidad de Las Palmas de Gran Canaria – Instituto Universitario SIANI",
      "Address": "Edificio Central del Parque Científico y Tecnológico, Campus Universitario de Tafira - 35017 Las Palmas de Gran Canaria, España",
      "Coordinates": "28.103333, -15.413056",
      "Contact": "Antonio Falcon Martel",
      "Email": "antonio.falcon@ulpgc.es"
    },
    {
      "Name": "Universidad de Málaga – European Topic Centre",
      "Address": "Edificio de Investigación Ada Byron, Arquitecto Francisco Peñalosa, 18, Campanillas, 29010 Málaga, Spain",
      "Coordinates": "36.723333, -4.453056",
      "Contact": "Christoph Schröder",
      "Email": "schroeder.c@gmail.com"
    },
    {
      "Name": "Universidad Politécnica de Madrid",
      "Address": "Ramiro de Maeztu street, 7, 28040, Madrid, Spain",
      "Coordinates": "40.423333, -3.683056",
      "Contact": "Roberto Martinez",
      "Email": "roberto.martinez@upm.es"
    },
    {
      "Name": "Universidad de Oviedo – Escuela de Ingeniería de Minas, Energía y Materiales",
      "Address": "Calle de Asturias 13, 33004, Oviedo (Asturias), Spain",
      "Coordinates": "43.363333, -5.843056",
      "Contact": "Pablo Cienfuegos",
      "Email": "cienfuegospablo@uniovi.es"
    },
    {
      "Name": "Universidad de Sevilla",
      "Address": "San Fernando street, 4, 41004, Seville (Seville), Spain",
      "Coordinates": "37.383333, -5.993056",
      "Contact": "Miguel Torres Garcia",
      "Email": "migueltorres@us.es"
    },
    {
      "Name": "Universidad de Sevilla – Escuela Técnica Superior de Ingenieros",
      "Address": "Calle de Francisco de Xerez, 1, 41092, Seville (Andalusia), Spain",
      "Coordinates": "37.343333, -5.983056",
      "Contact": "Cristina Torrecillas",
      "Email": "torrecillas@us.es"
    },
    {
      "Name": "University of Huelva - Research group \"Integrated management of agricultural and natural resources”",
      "Address": "Facultad de Ciencias Experimentales .Campus Universitario El carmen, 21007 Huelva, Spain",
      "Coordinates": "37.263333, -6.933056",
      "Contact": "Eduardo Moreno Cuesta",
      "Email": "emoreno@uhu.es"
    },
    {
      "Name": "Universitat Politècnica de València – Escuela Técnica Superior Ingeniería Geodésica, Cartográfica y Topográfica",
      "Address": "ETSI Geodésica, Cartogr. y Top., Camino de Vera, s/n, Edificio 7 i, 46022, Valencia, Spain",
      "Coordinates": "39.473333, -0.383056",
      "Contact": "Jorge Recio",
      "Email": "jrecio@cgf.upv.es"
    },
    {
      "Name": "Universitat de València Estudi-General (UVEG) – Unidad de Cambio Global (UCG)",
      "Address": "Av. Blasco Ibáñez, 13. 46010 València, Spain",
      "Coordinates": "39.473333, -0.383056",
      "Contact": "Jose Sobrino",
      "Email": "sobrino@uv.es"
    },
    {
      "Name": "Lund University – Department of Physical Geography and Ecosystem Science",
      "Address": "Sölvegatan 12, 223 62, Lund, Sweden",
      "Coordinates": "55.703333, 13.193056",
      "Contact": "Zheng Duan",
      "Email": "zheng.duan@nateko.lu.se"
    },
    {
      "Name": "SupTech University",
      "Address": "22 Avenue de Madrid 1001, 1001 Tunis, Tunisia",
      "Coordinates": "36.803333, 10.173056",
      "Contact": "Nejib Belhabib",
      "Email": "belhabib@suptech.tn"
    },
    {
      "Name": "National Center “Junior Academy of Sciences of Ukraine” (JAS of Ukraine)",
      "Address": "vul. Degtyarivska, 38/44 - 04119, Kyiv, Ukraine",
      "Coordinates": "50.463663198443044, 30.46096559485479",
      "Contact": "Svitlana Babiichuk",
      "Email": "gis_rs@man.gov.ua"
    },
    {
      "Name": "Space Research Institute NASU-SSAU",
      "Address": "Glushkov Ave 40, 4/1, 03187, Kyiv 187, Ukraine",
      "Coordinates": "50.443333, 30.523056",
      "Contact": "Nataliia Kussul",
      "Email": "nataliia.kussul@gmail.com"
    },
    {
      "Name": "Climate-KIC",
      "Address": "Climate-KIC Holding B.V.\nUK Branch\n15-17 Leek Street, London WC1X 9HY United Kingdom",
      "Coordinates": "51.513333, -0.123056",
      "Contact": "Kevin Ramirez",
      "Email": "kevin.ramirez@climate-kic.org"
    },
    {
      "Name": "European Schools of Culham, Munich, Bruxelles I (Uccle)",
      "Address": "Thame Lane, Abingdon OX14 3DZ, United Kingdom",
      "Coordinates": "51.673333, -1.283056",
      "Contact": "Nicolas Bounet",
      "Email": "nicolas.bounet@gmail.com"
    },
    {
      "Name": "NERC Field Spectroscopy Facility",
      "Address": "Room 248, Grant Institute, School of GeoSciences, University of Edinburgh, James Hutton Road, Edinburgh EH9 3FE, UK",
      "Coordinates": "55.943333, -3.183056",
      "Contact": "Robbie Ramsay",
      "Email": "robbie.ramsay@ed.ac.uk"
    },
    {
      "Name": "University of Bath",
      "Address": "Claverton Down, Bath BA2 7AY, UK",
      "Coordinates": "51.383333, -2.353056",
      "Contact": "Philippe Blondel",
      "Email": "pyspb@bath.ac.uk"
    },
    {
      "Name": "University of Northumbria – Centre for Polar Observation and Modelling (CPOM)",
      "Address": "Department of Geography and Environmental Sciences, Northumbria University, Ellison Place, Newcastle upon Tyne, United Kingdom",
      "Coordinates": "54.973333, -1.613056",
      "Contact": "Charlotte Royle",
      "Email": "charlie.royle@northumbria.ac.uk"
    },
    {
      "Name": "University of Leeds – Centre for the Observation and Modelling of Earthquakes, Volcanoes and Tectonics (COMET)",
      "Address": "Clarence Road, Leeds LS10 1LW United Kingdom",
      "Coordinates": "53.803333, -1.553056",
      "Contact": "Charlotte Royle",
      "Email": "c.royle@leeds.ac.uk"
    },
    {
      "Name": "University of Reading – Institute of Environmental Analytics (IEA), National Centre for Earth Observation",
      "Address": "2nd Floor, Philip Lyle Building - Whiteknights Campus, Reading RG6 6B",
      "Coordinates": "51.443333, -0.933056",
      "Contact": "Uzma Saeed",
      "Email": "u.saeed@reading.ac.uk"
    },
    {
      "Name": "Cooperación Latinoamericana de Redes Avanzadas (RedCLARA)",
      "Address": "Rambla República de México 6125. Montevideo 11400. Uruguay.",
      "Coordinates": "-34.903333, -56.183056",
      "Contact": "Laura  Castellana",
      "Email": "laura.castellana@redclara.net"
    }
  ];

  exports =academies;