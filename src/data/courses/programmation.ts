import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_PROGRAMMATION: Cours = {
  id: 'prog_101',
  domaine: Domaine.PROGRAMMATION,
  domaineNom: 'Programmation',
  icon: '🐍',
  titre: "Programmation Python Professionnelle & Génie Logiciel",
  description: 'Cursus complet de 15 chapitres : structures de données, POO avancée, décorateurs, générateurs, programmation asynchrone (asyncio), tests unitaires pytest, APIs REST et profiling.',
  niveau: NiveauDifficulte.DEBUTANT,
  dureeHeures: 50,
  colorClass: 'from-emerald-600 to-teal-700',
  titreBrevet: "Brevet Professionnel de Développement Logiciel & Ingénierie Python",
  objectifs: [
    'Écrire du code Python idiomatique (PEP 8, typage statique mypy)',
    'Concevoir des architectures orientées objet robustes (SOLID, Design Patterns)',
    'Maîtriser les métaprogrammations, décorateurs, context managers et générateurs',
    'Développer des applications asynchrones non-bloquantes avec asyncio',
    'Implémenter une suite de tests automatisés (TDD, fixtures pytest, couverture de code)'
  ],
  competences: [
    'Structures de Données & Complexité Big-O',
    'Programmation Orientée Objet (POO) & Héritage Multiple',
    'Décorateurs & Générateurs Pythoniques',
    'Programmation Asynchrone (async / await)',
    'Tests Automatisés avec pytest & Mocking',
    'Création d’APIs REST & Sérialisation JSON',
    'Profiling de Performance & Optimisation CPython'
  ],
  preRequis: ['Logique de programmation de base'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'prog_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Algorithmique & Optimisation de Structures de Données',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Analyse de complexité temporelle Big-O d’une recherche dans une collection de 1 000 000 d’éléments et refactorisation avec `set` et `dict`.',
      miseEnSituation: 'Un script de traitement de logs télécom recherche si un identifiant client est présent parmi 1 000 000 d’abonnés. L’algorithme actuel utilise une liste `list` et prend 2.5 secondes par recherche.',
      questions: [
        {
          id: 'q1',
          titre: 'Complexité moyenne de l’opérateur `in` sur une liste',
          enonce: 'Quelle est la complexité temporelle moyenne de la recherche `item in my_list` pour une liste Python non triée de taille n ?',
          points: 7,
          type: 'calcul',
          options: ['O(n) - Temps linéaire', 'O(1) - Temps constant', 'O(log n) - Temps logarithmique', 'O(n²) - Temps quadratique'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Une liste Python est un tableau dynamique contigu non indexé par valeur ; la recherche nécessite de parcourir les n éléments séquentiellement dans le pire des cas, soit une complexité O(n).',
          baremeDetail: ['Identification exacte de la complexité O(n) : 4 pts', 'Justification liée à la structure de tableau dynamique : 3 pts']
        },
        {
          id: 'q2',
          titre: 'Optimisation de structure de données',
          enonce: 'Si l’on convertit cette collection en ensemble `set` ou dictionnaire `dict` basé sur une table de hachage, quelle sera la nouvelle complexité moyenne de recherche `item in my_set` ?',
          points: 7,
          type: 'calcul',
          options: ['O(1) - Temps constant immédiat', 'O(n)', 'O(log n)', 'O(n!)'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Les ensembles (`set`) et dictionnaires (`dict`) en Python utilisent des tables de hachage avec résolution de collision ouverte, offrant un accès et test d\'appartenance moyen en temps constant O(1).',
          baremeDetail: ['Identification exacte de la complexité O(1) : 4 pts', 'Explication de la table de hachage : 3 pts']
        },
        {
          id: 'q3',
          titre: 'Gain de performance quantifié',
          enonce: 'Sur 10 000 recherches successives, le temps d’exécution passe de 25 000 ms (25 s) à 1.5 ms. Quel est le facteur d’accélération approximatif obtenu ?',
          points: 6,
          type: 'cas_pratique',
          options: ['Accélération d’un facteur supérieur à 15 000x', 'Accélération de 2x', 'Accélération de 10x', 'Aucun gain mesurable'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Facteur de gain = 25 000 ms / 1.5 ms = 16 666x plus rapide. Cela démontre l\'impact critique du choix des structures de données en génie logiciel.',
          baremeDetail: ['Calcul du ratio de vitesse : 3 pts', 'Conclusion industrielle : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'prog_ch1',
      titre: '1. Types Primitifs, Mutabilité & Références Mémoire en Python',
      dureeEstimeeMin: 35,
      description: 'Entiers, flottants, chaînes, booléens, modèle d’objet CPython (id(), sys.getrefcount), mutabilité vs immutabilité.',
      pointsCles: ['Tout est objet en Python', 'Objets immutables (int, str, tuple)', 'Objets mutables (list, dict, set)'],
      formuleCle: 'id(a) renvoie l\'adresse mémoire de l\'objet',
      contenuHtml: `<p>Compréhension du modèle de mémoire et passage de références en Python.</p>`,
      exercices: [{
        id: 'prog_ch1_ex1',
        type: TypeQuestion.QCM,
        question: "Lequel des types suivants est strictement IMMUTABLE en Python ?",
        reponsesPossibles: ['tuple', 'list', 'dict', 'set'],
        reponsesCorrectes: [0],
        explication: "Les tuples sont immutables une fois créés ; leurs éléments ne peuvent être modifiés, réassignés ou supprimés.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'prog_ch2',
      titre: '2. Structures de Données Avancées (Collections, Itertools & Heapq)',
      dureeEstimeeMin: 40,
      description: 'Module collections (defaultdict, Counter, deque, namedtuple), module itertools (chain, groupby, permutations) et files de priorité heapq.',
      pointsCles: ['deque : O(1) pour ajouts/retraits aux deux extrémités', 'defaultdict : élimine les KeyError', 'Counter : comptage instantané'],
      formuleCle: 'from collections import defaultdict, deque',
      contenuHtml: `<p>Utilisation des structures de données optimisées de la bibliothèque standard.</p>`,
      exercices: [{
        id: 'prog_ch2_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle structure du module `collections` permet d'insérer ou retirer des éléments en O(1) à la fois au début ET à la fin de la file ?",
        reponsesPossibles: ['collections.deque', 'list standard', 'tuple', 'set'],
        reponsesCorrectes: [0],
        explication: "Une `deque` (double-ended queue) est implémentée sous forme de liste doublement chaînée avec accès O(1) aux deux extrémités.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'prog_ch3',
      titre: '3. Programmation Fonctionnelle : List Comprehensions, Lambda, Map & Filter',
      dureeEstimeeMin: 40,
      description: 'Compréhensions de listes, dictionnaires et ensembles, fonctions anonymes lambda, fonctions d’ordre supérieur, functools.reduce et functools.partial.',
      pointsCles: ['Syntaxe expressive : `[x**2 for x in data if x > 0]`', 'Fonctions pures sans effets de bord', 'Immutabilité'],
      formuleCle: '[f(x) for x in iterable if condition(x)]',
      contenuHtml: `<p>Écriture concise, élégante et performante de transformations de données.</p>`,
      exercices: [{
        id: 'prog_ch3_ex1',
        type: TypeQuestion.QCM,
        question: "Que produit l'expression Python : `[x * 2 for x in [1, 2, 3, 4] if x % 2 == 0]` ?",
        reponsesPossibles: ['[4, 8]', '[2, 4, 6, 8]', '[2, 4]', '[1, 2, 3, 4]'],
        reponsesCorrectes: [0],
        explication: "Le filtre `x % 2 == 0` garde les nombres pairs [2, 4], puis applique `x * 2`, ce qui donne [4, 8].",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'prog_ch4',
      titre: '4. Programmation Orientée Objet (POO) : Classes, Héritage & Polymorphisme',
      dureeEstimeeMin: 45,
      description: 'Constructeur __init__, méthodes d’instance, méthodes de classe (@classmethod), méthodes statiques (@staticmethod) et encapsulation (attributs privés _ et __).',
      pointsCles: ['self représente l\'instance active', '@classmethod reçoit cls', 'Polymorphisme par substitution (Liskov)'],
      formuleCle: 'class MaClasse(ClasseMere): def __init__(self, ...): super().__init__()',
      contenuHtml: `<p>Principes fondamentaux de la POO et modélisation de domaines complexes.</p>`,
      exercices: [{
        id: 'prog_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Quel décorateur standard utilise-t-on pour définir une méthode rattachée à la classe elle-même recevant `cls` en premier argument ?",
        reponsesPossibles: ['@classmethod', '@staticmethod', '@property', '@abstractmethod'],
        reponsesCorrectes: [0],
        explication: "@classmethod permet de créer des constructeurs alternatifs ou de manipuler des attributs partagés de classe.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'prog_ch5',
      titre: '5. Méthodes Spéciales (Dunder Methods) & Surcharge d’Opérateurs',
      dureeEstimeeMin: 45,
      description: 'Protocole objet Python : __repr__, __str__, __len__, __getitem__, __eq__, __hash__, __add__, __iter__ et création de collections personnalisées.',
      pointsCles: ['__repr__ pour les développeurs / debugging', '__str__ pour l\'utilisateur final', '__getitem__ permet l\'accès par index [ ]'],
      formuleCle: 'def __len__(self): return len(self._elements)',
      contenuHtml: `<p>Personnalisation complète du comportement des objets créés pour s'intégrer au moteur Python.</p>`,
      exercices: [{
        id: 'prog_ch5_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle méthode spéciale 'dunder' permet à une classe d'être mesurée avec la fonction intégrée `len(mon_objet)` ?",
        reponsesPossibles: ['__len__(self)', '__size__(self)', '__count__(self)', '__length__(self)'],
        reponsesCorrectes: [0],
        explication: "La méthode `__len__(self)` est appelée en interne par `len()` et doit retourner un entier positif ou nul.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'prog_ch6',
      titre: '6. Gestion des Exceptions & Context Managers (__enter__ / __exit__)',
      dureeEstimeeMin: 40,
      description: 'Blocs try / except / else / finally, création d’exceptions personnalisées, déclaration `with` et module contextlib.',
      pointsCles: ['Toujours capturer des exceptions spécifiques (éviter le bare except)', 'Clause finally exécutée dans 100% des cas', 'Gestion propre des fichiers et sockets réseau'],
      formuleCle: 'with open("data.csv", "r") as f: # fermeture automatique garantie',
      contenuHtml: `<p>Garantie de libération des ressources système et robustesse aux pannes.</p>`,
      exercices: [{
        id: 'prog_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Quelles deux méthodes dunder doivent être implémentées pour qu'un objet puisse être utilisé avec l'instruction `with` ?",
        reponsesPossibles: ['__enter__ et __exit__', '__start__ et __stop__', '__open__ et __close__', '__init__ et __del__'],
        reponsesCorrectes: [0],
        explication: "Le protocole de gestionnaire de contexte (Context Manager) requiert `__enter__` et `__exit__`.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'prog_ch7',
      titre: '7. Générateurs, Itérateurs & Mot-clé `yield`',
      dureeEstimeeMin: 45,
      description: 'Protocole d’itération (__iter__, __next__, StopIteration), fonctions génératrices avec `yield`, `yield from` et évaluation paresseuse (Lazy Evaluation).',
      pointsCles: ['Consommation mémoire constante O(1) même sur des gigaoctets de données', 'Suspension et reprise de l\'état de la fonction', 'Flux de données continus'],
      formuleCle: 'def gen(): for i in range(1_000_000): yield i',
      contenuHtml: `<p>Traitement économe de très gros fichiers volumineux et flux en streaming.</p>`,
      exercices: [{
        id: 'prog_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est l'avantage décisif d'utiliser une fonction génératrice avec `yield` pour lire un fichier de 50 Go ligne par ligne ?",
        reponsesPossibles: ['La consommation de mémoire RAM reste minimale car les lignes sont produites une à une à la demande', 'Le script s\'exécute sur la carte graphique', 'Le fichier est compressé en zip', 'Le processeur s\'arrête de chauffer'],
        reponsesCorrectes: [0],
        explication: "Le générateur n'alloue en mémoire vive que la ligne courante sans jamais charger l'intégralité du fichier volumineux.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'prog_ch8',
      titre: '8. Décorateurs de Fonctions & de Classes en Python',
      dureeEstimeeMin: 45,
      description: 'Fonctions comme objets de première classe, fermetures (closures), syntaxe @decorateur, `functools.wraps`, décorateurs paramétrés et mise en cache (`lru_cache`).',
      pointsCles: ['@wraps préserve le nom et la docstring d\'origine', 'Mesure du temps d\'exécution (profiling)', 'Vérification des droits d\'accès (authentification)'],
      formuleCle: 'from functools import wraps, lru_cache',
      contenuHtml: `<p>Design pattern Décorateur appliqué nativement en Python pour la modularité.</p>`,
      exercices: [{
        id: 'prog_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi est-il indispensable d'utiliser le décorateur `@wraps(func)` à l'intérieur de la fonction d'emballage d'un décorateur personnalisé ?",
        reponsesPossibles: ['Pour préserver les métadonnées de la fonction originale (__name__, __doc__)', 'Pour accélérer le code par 100', 'Pour rendre la fonction asynchrone', 'Pour autoriser les nombres négatifs'],
        reponsesCorrectes: [0],
        explication: "`functools.wraps` copie le nom, la documentation et la signature de la fonction décorée pour éviter toute perte lors de l'inspection.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'prog_ch9',
      titre: '9. Typage Statique (Type Hints) & Validation avec Pydantic',
      dureeEstimeeMin: 40,
      description: 'Module typing (Union, Optional, List, Dict, Callable, TypeVar, Generic), vérification statique avec `mypy`, et modèles de validation de données Pydantic V2.',
      pointsCles: ['Détection des bugs avant l\'exécution (Shift-Left)', 'Auto-complétion IDE de premier ordre', 'Pydantic : parsing et coercion de types automatique'],
      formuleCle: 'def traiter(valeur: float, items: list[str]) -> bool:',
      contenuHtml: `<p>Professionnalisation du code Python pour les grands projets d'ingénierie.</p>`,
      exercices: [{
        id: 'prog_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "En Python moderne (>= 3.10), comment s'écrit de manière concise le type d'une variable pouvant être un entier `int` ou `None` ?",
        reponsesPossibles: ['int | None', 'Union[int, NoneType]', 'Maybe(int)', 'int or None'],
        reponsesCorrectes: [0],
        explication: "L'opérateur pipe `|` introduit en Python 3.10 remplace avantageusement la syntaxe `Optional[int]` ou `Union[int, None]`.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'prog_ch10',
      titre: '10. Programmation Concurrente : Threads, Processus & GIL',
      dureeEstimeeMin: 45,
      description: 'Global Interpreter Lock (GIL), threading pour les tâches d’E/S (I/O Bound), multiprocessing pour les calculs intensifs (CPU Bound) et module concurrent.futures.',
      pointsCles: ['Threading : E/S réseau, lectures disque', 'Multiprocessing : contourne le GIL en lançant plusieurs processus Python distincts', 'ThreadPoolExecutor & ProcessPoolExecutor'],
      formuleCle: 'with concurrent.futures.ProcessPoolExecutor() as executor:',
      contenuHtml: `<p>Parallélisation efficace sur processeurs multi-cœurs modernes.</p>`,
      exercices: [{
        id: 'prog_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Quel module Python doit-on utiliser pour paralléliser des calculs mathématiques lourds (CPU Bound) sur tous les cœurs du processeur malgré le GIL ?",
        reponsesPossibles: ['multiprocessing (ou ProcessPoolExecutor)', 'threading', 'asyncio', 'time'],
        reponsesCorrectes: [0],
        explication: "`multiprocessing` crée des processus CPython indépendants possédant chacun leur propre mémoire et leur propre GIL.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'prog_ch11',
      titre: '11. Programmation Asynchrone Haute Performance avec `asyncio`',
      dureeEstimeeMin: 50,
      description: 'Boucle d’événements (Event Loop), coroutines avec `async def` et `await`, tâches concurrentes avec `asyncio.gather()`, files d’attente non-bloquantes (asyncio.Queue).',
      pointsCles: ['Concurrence coopérative sur un seul thread', 'Idéal pour les microservices et serveurs web traitant des dizaines de milliers de connexions simultanées', 'Pas de blocage avec time.sleep (utiliser asyncio.sleep)'],
      formuleCle: 'results = await asyncio.gather(*tasks)',
      contenuHtml: `<p>Architecture asynchrone moderne pour services cloud et passerelles IoT à haut débit.</p>`,
      exercices: [{
        id: 'prog_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Que se passe-t-il si l'on appelle la fonction bloquante standard `time.sleep(5)` à l'intérieur d'une coroutine `async def` ?",
        reponsesPossibles: ['Toute la boucle d\'événements asyncio est totalement bloquée pendant 5 secondes pour tous les clients', 'Seule cette tâche attend, les autres continuent normalement', 'Une exception est levée immédiatement', 'Python bascule sur un second thread'],
        reponsesCorrectes: [0],
        explication: "Dans un modèle asynchrone coopératif, tout appel synchrone bloquant gèle l'unique thread de la boucle d'événements. Il faut utiliser `await asyncio.sleep(5)`.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'prog_ch12',
      titre: '12. Conception d’APIs Web & Microservices (FastAPI & Architecture REST)',
      dureeEstimeeMin: 45,
      description: 'Verbes HTTP (GET, POST, PUT, DELETE), codes d’état (200, 201, 400, 404, 500), injection de dépendances, documentation OpenAPI / Swagger automatique.',
      pointsCles: ['FastAPI basé sur Starlette et Pydantic', 'Sérialisation JSON ultra-rapide', 'Authentification JWT (JSON Web Tokens)'],
      formuleCle: '@app.get("/items/{id}") async def read_item(id: int): return {"id": id}',
      contenuHtml: `<p>Construction d'APIs professionnelles sécurisées et documentées.</p>`,
      exercices: [{
        id: 'prog_ch12_ex1',
        type: TypeQuestion.QCM,
        question: "Quel code de statut HTTP standard doit renvoyer une API REST après la création réussie d'une nouvelle ressource en base de données ?",
        reponsesPossibles: ['201 Created', '200 OK', '204 No Content', '301 Moved Permanently'],
        reponsesCorrectes: [0],
        explication: "Le code HTTP 201 indique explicitement que la requête POST a abouti à la création d'une nouvelle ressource.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'prog_ch13',
      titre: '13. Tests Automatisés & TDD avec pytest, Fixtures & Mocking',
      dureeEstimeeMin: 45,
      description: 'Assertions pytest, fixtures avec `@pytest.fixture`, paramétrisation `@pytest.mark.parametrize`, mock d’appels externes (`unittest.mock`), couverture de code (pytest-cov).',
      pointsCles: ['Approche Test-Driven Development (Red-Green-Refactor)', 'Fixtures pour initialiser et nettoyer l\'environnement de test (Teardown)', 'Objectif de couverture > 80%'],
      formuleCle: '@pytest.mark.parametrize("input, expected", [(1, 2), (2, 4)])',
      contenuHtml: `<p>Mise en place de tests unitaires et d'intégration automatisés pour l'intégration continue (CI/CD).</p>`,
      exercices: [{
        id: 'prog_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Quel décorateur pytest permet d'exécuter la même fonction de test plusieurs fois avec différents jeux de paramètres et résultats attendus ?",
        reponsesPossibles: ['@pytest.mark.parametrize', '@pytest.fixture', '@pytest.repeat', '@pytest.test_suite'],
        reponsesCorrectes: [0],
        explication: "`@pytest.mark.parametrize` injecte automatiquement des tuples de paramètres dans la fonction de test.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'prog_ch14',
      titre: '14. Packaging, Gestion des Dépendances & Sécurité (Poetry & Flit)',
      dureeEstimeeMin: 40,
      description: 'Standard pyproject.toml (PEP 518/621), environnements virtuels isolés (venv), verrouillage déterministe des dépendances (poetry.lock) et audit de vulnérabilités (pip-audit).',
      pointsCles: ['Fini les `requirements.txt` non verrouillés', 'Versionnage sémantique SemVer (MAJOR.MINOR.PATCH)', 'Publication de packages sur PyPI'],
      formuleCle: 'pyproject.toml : fichier unique de configuration du projet',
      contenuHtml: `<p>Standardisation du cycle de vie des bibliothèques et distribution de code reproductible.</p>`,
      exercices: [{
        id: 'prog_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le versionnage sémantique standard (ex: Version 2.4.1), quand incrémente-t-on le chiffre MAJEUR (le '2') ?",
        reponsesPossibles: ['Lorsqu\'on introduit des changements cassant la compatibilité ascendante (Breaking Changes)', 'Lorsqu\'on corrige un simple bug mineur', 'Chaque vendredi après-midi', 'Uniquement lors d\'un changement de logo'],
        reponsesCorrectes: [0],
        explication: "Le numéro majeur est incrémenté lorsque des modifications d'API incompatibles sont introduites.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'prog_ch15',
      titre: '15. Profiling de Performance, Optimisation & Compilation (cProfile & Cython)',
      dureeEstimeeMin: 50,
      description: 'Analyse des goulots d’étranglement avec `cProfile` et visualisation Flamegraph, profiling mémoire (`memory_profiler`), compilation de modules critiques avec Cython ou Rust (PyO3).',
      pointsCles: ['Règle d\'or : "Ne jamais optimiser à l\'aveugle sans mesurer"', 'Loi de Pareto : 80% du temps est passé dans 20% du code', 'Réduction des allocations d\'objets inutiles'],
      formuleCle: 'python -m cProfile -s tottime mon_script.py',
      contenuHtml: `<p>Techniques d'ingénierie avancée pour amener les performances Python au niveau du code C natif.</p>`,
      exercices: [{
        id: 'prog_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Dans la sortie du profiler standard `cProfile`, que représente la colonne 'tottime' ?",
        reponsesPossibles: ['Le temps total passé dans la fonction elle-même, en excluant les appels aux sous-fonctions', 'Le temps que le développeur a mis à coder', 'Le temps de démarrage de Windows', 'Le temps de compilation C'],
        reponsesCorrectes: [0],
        explication: "'tottime' isole le temps machine pur consommé par le corps de la fonction, permettant d'identifier immédiatement le vrai goulot d'étranglement.",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
