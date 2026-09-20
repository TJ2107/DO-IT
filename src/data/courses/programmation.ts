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
      dureeEstimeeMin: 40,
      description: 'Entiers, flottants, chaînes, booléens, modèle d’objet CPython (id(), sys.getrefcount), mutabilité vs immutabilité.',
      pointsCles: [
        'En Python, TOUT est objet dérivé de `PyObject` en CPython',
        'Types immutables : int, float, str, tuple, frozenset, bytes',
        'Types mutables : list, dict, set, bytearray',
        'L\'opérateur `is` compare l\'adresse mémoire (`id(a) == id(b)`), tandis que `==` compare les valeurs',
        'Piège classique : arguments par défaut mutables dans les fonctions (ex: `def f(x=[])`)'
      ],
      formuleCle: 'id(obj) \\rightarrow \\text{adresse mémoire hexadécimale unique de l\'objet}',
      conseilProfesseur: 'Ne mettez jamais de liste ou dictionnaire vide comme valeur par défaut dans une signature de fonction. Utilisez toujours `def f(item=None): if item is None: item = []` pour éviter de partager la même référence mutable entre tous les appels.',
      astuceTerrain: 'Pour vérifier si deux variables pointent vers le même objet en mémoire vive sans afficher un grand entier, utilisez l\'opérateur identité : `a is b`. C\'est la méthode standard recommandée par la PEP 8 pour comparer avec les singletons comme `None` (`if val is None:`).',
      contenuHtml: `
        <h3>1.1 Le Modèle Objet CPython et la Gestion de la Mémoire</h3>
        <p>En Python, les variables ne stockent pas directement les valeurs, mais des <strong>références (pointeurs)</strong> vers des objets alloués sur le tas (Heap). Chaque objet en CPython possède un en-tête structuré contenant :</p>
        <ul>
          <li><strong>Le compteur de références (Reference Count) :</strong> Nombre de variables ou conteneurs pointant vers cet objet.</li>
          <li><strong>Le pointeur de type :</strong> Pointeur vers l'objet type définissant les méthodes et le comportement.</li>
          <li><strong>La valeur utile :</strong> Les données réelles (charge utile).</li>
        </ul>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <p class="text-emerald-400 font-bold mb-2"># Démonstration de l'identité et de la mutabilité</p>
          <pre>import sys

a = [1, 2, 3]
b = a          # b référence le même objet que a
b.append(4)
print(a)       # Affiche [1, 2, 3, 4] ! Car a et b partagent le même id()
print(a is b)  # True (même adresse mémoire)

# Cas des types immutables (str, int) :
s1 = "bonjour"
s2 = s1
s1 += " monde" # Crée un NOUVEL objet str en mémoire
print(s2)      # Reste "bonjour" (s1 et s2 ont des id différents)</pre>
        </div>

        <h3>1.2 Tableau Comparatif : Mutabilité & Conséquences</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2 text-left">Type de Données</th>
              <th class="border p-2 text-left">Catégorie</th>
              <th class="border p-2 text-left">Peut servir de clé dans un dict ?</th>
              <th class="border p-2 text-left">Modification sur place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-mono">int, float, bool</td>
              <td class="border p-2 text-emerald-600 font-semibold">Immutable</td>
              <td class="border p-2">Oui (Hashable)</td>
              <td class="border p-2">Impossible (réallocation d'un nouvel objet)</td>
            </tr>
            <tr>
              <td class="border p-2 font-mono">str, tuple, bytes</td>
              <td class="border p-2 text-emerald-600 font-semibold">Immutable</td>
              <td class="border p-2">Oui (si le tuple ne contient que des immutables)</td>
              <td class="border p-2">Impossible</td>
            </tr>
            <tr>
              <td class="border p-2 font-mono">list, dict, set</td>
              <td class="border p-2 text-amber-600 font-semibold">Mutable</td>
              <td class="border p-2 text-rose-600 font-bold">NON (TypeError: unhashable)</td>
              <td class="border p-2">Oui (append, extend, update, pop)</td>
            </tr>
          </tbody>
        </table>

        <h3>1.3 Garbage Collection & Compteur de Références</h3>
        <p>CPython gère la libération de mémoire principalement par <strong>comptage de références</strong>. Dès que le compteur d'un objet tombe à 0, sa mémoire est immédiatement libérée. Un ramasse-miettes cyclique (Cyclic GC) secondaire s'active périodiquement pour détecter et casser les cycles de références circulaires (ex: <code>a.enfant = b</code> et <code>b.parent = a</code>).</p>
      `,
      exercices: [
        {
          id: 'prog_ch1_ex1',
          type: TypeQuestion.QCM,
          question: "Lequel des types suivants est strictement IMMUTABLE en Python et peut être utilisé comme clé de dictionnaire ?",
          reponsesPossibles: ['tuple (contenant des entiers ou chaînes)', 'list', 'dict', 'set'],
          reponsesCorrectes: [0],
          explication: "Les tuples dont tous les éléments sont immutables sont hashables et immutables ; les listes, dictionnaires et sets sont mutables et lèvent une TypeError si on tente de les utiliser comme clés.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        },
        {
          id: 'prog_ch1_ex2',
          type: TypeQuestion.QCM,
          question: "Que produit l'exécution de : `a = [10]; b = a; b += [20]; print(a)` ?",
          reponsesPossibles: ['[10, 20]', '[10]', 'SyntaxError', '[20]'],
          reponsesCorrectes: [0],
          explication: "L'opérateur `+=` sur une liste appelle la méthode in-place `__iadd__` (équivalent à `extend`), modifiant l'objet partagé par a et b.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'prog_ch2',
      titre: '2. Structures de Données Avancées (Collections, Itertools & Heapq)',
      dureeEstimeeMin: 45,
      description: 'Module collections (defaultdict, Counter, deque, namedtuple), module itertools (chain, groupby, permutations) et files de priorité heapq.',
      pointsCles: [
        'deque (Double Ended Queue) : insertion/suppression en O(1) aux deux extrémités',
        'defaultdict : initialise automatiquement une clé absente via une fonction factory',
        'Counter : calcul de fréquences et méthode .most_common(k)',
        'heapq : implémente une file de priorité Min-Heap en temps O(log n)',
        'itertools : générateurs de combinaisons, permutations et chaînes sans allocation mémoire massive'
      ],
      formuleCle: 'T_{deque\\_appendleft} = O(1) \\quad \\text{vs} \\quad T_{list\\_insert(0)} = O(n)',
      conseilProfesseur: 'Lorsque vous devez maintenir une file FIFO (Premier Entré, Premier Sorti) ou un buffer glissant des N derniers éléments, n\'utilisez JAMAIS de liste standard avec pop(0) (qui décale tous les éléments en O(n)). Utilisez `collections.deque(maxlen=N)`.',
      astuceTerrain: 'Pour compter des occurrences de mots ou d\'erreurs dans des gigaoctets de logs, `collections.Counter` est optimisé en C et fournit instantanément `counter.most_common(10)` pour les 10 erreurs les plus fréquentes.',
      contenuHtml: `
        <h3>2.1 Le Module collections : Outils Hautes Performances</h3>
        <p>La bibliothèque standard Python fournit des alternatives spécialisées aux types primitifs :</p>
        
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <p class="text-emerald-400 font-bold mb-2"># Exemples concrets du module collections</p>
          <pre>from collections import deque, defaultdict, Counter, namedtuple

# 1. Deque avec taille maximale (Buffer glissant FIFO)
tampon = deque(maxlen=3)
tampon.append(1); tampon.append(2); tampon.append(3)
tampon.append(4)  # 1 est automatiquement éjecté à gauche
print(tampon)     # deque([2, 3, 4], maxlen=3)

# 2. Defaultdict évitant les tests "if key in dict:"
grouped_data = defaultdict(list)
grouped_data["serveur_A"].append("192.168.1.10")  # Pas de KeyError !

# 3. Counter pour l'analyse fréquentielle
mots = ["python", "java", "python", "c++", "python", "java"]
compteur = Counter(mots)
print(compteur.most_common(2)) # [('python', 3), ('java', 2)]

# 4. Namedtuple : légèreté du tuple + clarté des attributs nommés
Point = namedtuple("Point", ["x", "y", "z"])
p = Point(12.5, 45.0, 0.8)
print(p.x, p.y)  # Accès par point ou par index p[0]</pre>
        </div>

        <h3>2.2 Files de Priorité avec le Module heapq</h3>
        <p>Le module <code>heapq</code> transforme une liste classique en arbre binaire Min-Heap où le plus petit élément est toujours à l'indice 0 (racine) :</p>
        <ul>
          <li><code>heapq.heappush(heap, item)</code> : Insertion en $\\mathcal{O}(\\log n)$.</li>
          <li><code>heapq.heappop(heap)</code> : Extraction du minimum absolu en $\\mathcal{O}(\\log n)$.</li>
          <li><code>heapq.nlargest(k, iterable)</code> / <code>nsmallest(k, iterable)</code> : Trouver les $k$ extrêmes sans tri complet $\\mathcal{O}(n \\log k)$.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'prog_ch2_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle structure du module `collections` permet d'insérer ou retirer des éléments en O(1) à la fois au début ET à la fin de la file ?",
          reponsesPossibles: ['collections.deque', 'list standard', 'tuple', 'set'],
          reponsesCorrectes: [0],
          explication: "Une `deque` (double-ended queue) est implémentée sous forme de liste doublement chaînée avec accès O(1) aux deux extrémités, contrairement à une liste contiguë qui nécessite un décalage en O(n).",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        },
        {
          id: 'prog_ch2_ex2',
          type: TypeQuestion.QCM,
          question: "Quelle est la complexité pour extraire l'élément prioritaire minimal d'un tas `heapq` de taille n ?",
          reponsesPossibles: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
          reponsesCorrectes: [0],
          explication: "L'extraction avec `heappop` réorganise l'arbre binaire min-heap le long de sa hauteur, soit un coût logarithmique O(log n).",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'prog_ch3',
      titre: '3. Programmation Fonctionnelle : Comprehensions, Lambda, Map & Filter',
      dureeEstimeeMin: 40,
      description: 'Compréhensions de listes, dictionnaires et ensembles, fonctions anonymes lambda, fonctions d’ordre supérieur, functools.reduce et functools.partial.',
      pointsCles: [
        'List Comprehension : syntaxe `[expr for item in iterable if condition]` plus rapide qu\'une boucle for avec append',
        'Dict Comprehension : `{k: v for ...}` et Set Comprehension : `{x for ...}`',
        'Fonctions Lambda : fonctions anonymes courtes à expression unique',
        'Fonctions d\'ordre supérieur : `map()`, `filter()`, `sorted(..., key=...)` et `functools.partial`',
        'Pureté fonctionnelle : éviter la modification d\'état global pour faciliter les tests et le parallélisme'
      ],
      formuleCle: '\\text{Résultat} = [f(x) \\; \\text{for} \\; x \\in E \\; \\text{if} \\; P(x)]',
      conseilProfesseur: 'Une compréhension de liste ne doit pas dépasser 2 niveaux d\'imbrication. Si votre compréhension devient trop longue ou difficile à lire, écrivez une boucle standard ou décomposez-la en sous-fonctions nommées.',
      astuceTerrain: 'Pour trier des structures complexes (ex: liste de dictionnaires d\'employés), utilisez `key=lambda x: x["salaire"]` ou encore plus rapide en C : `key=operator.itemgetter("salaire")`.',
      contenuHtml: `
        <h3>3.1 Compréhensions Pythoniques</h3>
        <p>Les compréhensions sont compilées au niveau du bytecode en boucles C optimisées, générant des performances supérieures au schéma impératif classique <code>result = []; for x in data: result.append(...)</code>.</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre><span class="text-emerald-400"># 1. List Comprehension filtrée</span>
nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
carres_pairs = [x**2 for x in nombres if x % 2 == 0]
# -> [4, 16, 36, 64, 100]

<span class="text-emerald-400"># 2. Dict Comprehension (Indexation inversée rapide)</span>
utilisateurs = [{"id": 101, "nom": "Alice"}, {"id": 102, "nom": "Bob"}]
map_par_id = {u["id"]: u["nom"] for u in utilisateurs}
# -> {101: 'Alice', 102: 'Bob'}

<span class="text-emerald-400"># 3. Utilisation de functools.partial pour figer des arguments</span>
from functools import partial

def calculer_tva(taux, prix_ht):
    return prix_ht * (1 + taux)

tva_france = partial(calculer_tva, 0.20)
print(tva_france(100))  # Affiche 120.0</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch3_ex1',
          type: TypeQuestion.QCM,
          question: "Que produit l'expression Python : `[x * 2 for x in [1, 2, 3, 4] if x % 2 == 0]` ?",
          reponsesPossibles: ['[4, 8]', '[2, 4, 6, 8]', '[2, 4]', '[1, 2, 3, 4]'],
          reponsesCorrectes: [0],
          explication: "Le filtre `x % 2 == 0` ne retient que les pairs [2, 4], puis applique la transformation `x * 2`, produisant [4, 8].",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'prog_ch4',
      titre: '4. Programmation Orientée Objet (POO) : Classes, Héritage & Polymorphisme',
      dureeEstimeeMin: 45,
      description: 'Constructeur __init__, méthodes d’instance, méthodes de classe (@classmethod), méthodes statiques (@staticmethod) et encapsulation (attributs privés _ et __).',
      pointsCles: [
        'Le premier argument `self` fait référence à l\'instance concrète de l\'objet',
        '`@classmethod` reçoit `cls` et sert de constructeur alternatif (Factory Pattern)',
        '`@staticmethod` ne reçoit ni `self` ni `cls`, c\'est une fonction utilitaire rattachée au namespace de la classe',
        'Convention d\'encapsulation : `_nom` (protégé par convention) vs `__nom` (Name Mangling : renommé en `_Classe__nom`)',
        'Héritage multiple et algorithme C3 Linearization (ordre MRO : Method Resolution Order)'
      ],
      formuleCle: '\\text{MRO} : \\text{Classe.mro()} \\rightarrow [\\text{Classe}, \\text{ParentA}, \\text{ParentB}, \\text{object}]',
      conseilProfesseur: 'Privilégiez la composition plutôt que l\'héritage ("Composition over Inheritance"). Un objet "a un" composant plutôt qu\'il "est un" composant, ce qui évite les hiérarchies de classes rigides.',
      astuceTerrain: 'Pour voir dans quel ordre exact Python recherche une méthode dans une arborescence d\'héritage multiple, inspectez `Classe.__mro__`. Cela résout immédiatement les bugs de surcharge.',
      contenuHtml: `
        <h3>4.1 Architecture POO et Décorateurs de Méthodes</h3>
        <p>Python propose une approche flexible de la POO combinant encapsulation dynamique et polymorphisme par duck-typing ("Si ça marche comme un canard et cancane comme un canard, c'est un canard").</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>class CompteBancaire:
    banque_centrale = "BCE"  # Attribut de classe partagé

    def __init__(self, titulaire: str, solde_initial: float = 0.0):
        self.titulaire = titulaire
        self._solde = solde_initial  # Protégé

    @property
    def solde(self) -> float:
        """Getter sécurisé"""
        return self._solde

    def deposer(self, montant: float) -> None:
        if montant <= 0:
            raise ValueError("Le montant doit être strictement positif.")
        self._solde += montant

    @classmethod
    def depuis_chaine(cls, donnees_csv: str):
        """Constructeur alternatif (Factory)"""
        nom, solde_str = donnees_csv.split(";")
        return cls(titulaire=nom.strip(), solde_initial=float(solde_str))

    @staticmethod
    def valider_iban(iban: str) -> bool:
        """Méthode statique utilitaire"""
        return len(iban.replace(" ", "")) == 27 and iban.startswith("FR")</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch4_ex1',
          type: TypeQuestion.QCM,
          question: "Quel décorateur standard utilise-t-on pour définir une méthode rattachée à la classe elle-même recevant `cls` en premier argument ?",
          reponsesPossibles: ['@classmethod', '@staticmethod', '@property', '@abstractmethod'],
          reponsesCorrectes: [0],
          explication: "@classmethod permet de créer des constructeurs alternatifs ou de manipuler des attributs partagés de classe en recevant la référence `cls`.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'prog_ch5',
      titre: '5. Méthodes Spéciales (Dunder Methods) & Surcharge d’Opérateurs',
      dureeEstimeeMin: 45,
      description: 'Protocole objet Python : __repr__, __str__, __len__, __getitem__, __eq__, __hash__, __add__, __iter__ et création de collections personnalisées.',
      pointsCles: [
        '`__repr__` : représentation textuelle technique non ambiguë pour le développeur (reproductible)',
        '`__str__` : affichage lisible et ergonomique pour l\'utilisateur final (`print`)',
        '`__getitem__` et `__setitem__` : accès par crochets `obj[key]`',
        '`__eq__` et `__hash__` : permettent à vos objets personnalisés d\'être stockés dans des `set` ou utilisés comme clés de `dict`',
        '`__add__`, `__sub__`, `__mul__` : surcharge mathématique des opérateurs +, -, *'
      ],
      formuleCle: 'a + b \\iff a.\\_\\_add\\_\\_(b)',
      conseilProfesseur: 'Si vous redéfinissez `__eq__`, définissez TOUJOURS aussi `__hash__`. Si un objet est mutable, mettez `__hash__ = None` pour empêcher qu\'il ne corrompe les tables de hachage.',
      astuceTerrain: 'Dans 90% des cas en Python 3.7+, utilisez `@dataclass` du module standard `dataclasses`. Il génère automatiquement `__init__`, `__repr__`, `__eq__` sans écrire de code répétitif !',
      contenuHtml: `
        <h3>5.1 Le Modèle de Données Python (Data Model)</h3>
        <p>Les méthodes spéciales (Dunder pour <em>Double Underscore</em>) permettent à vos classes d'adopter la syntaxe native du langage Python.</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>class Vecteur2D:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __repr__(self) -> str:
        return f"Vecteur2D(x={self.x}, y={self.y})"

    def __add__(self, other: "Vecteur2D") -> "Vecteur2D":
        if not isinstance(other, Vecteur2D):
            return NotImplemented
        return Vecteur2D(self.x + other.x, self.y + other.y)

    def __len__(self) -> int:
        return int((self.x**2 + self.y**2)**0.5)

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Vecteur2D):
            return False
        return self.x == other.x and self.y == other.y

v1 = Vecteur2D(3, 4)
v2 = Vecteur2D(1, 2)
print(v1 + v2)  # Vecteur2D(x=4, y=6)
print(len(v1))  # 5</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch5_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle méthode spéciale 'dunder' permet à une classe d'être mesurée avec la fonction intégrée `len(mon_objet)` ?",
          reponsesPossibles: ['__len__(self)', '__size__(self)', '__count__(self)', '__length__(self)'],
          reponsesCorrectes: [0],
          explication: "La méthode `__len__(self)` est appelée en interne par `len()` et doit retourner un entier positif ou nul.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'prog_ch6',
      titre: '6. Gestion des Exceptions & Context Managers (__enter__ / __exit__)',
      dureeEstimeeMin: 40,
      description: 'Blocs try / except / else / finally, création d’exceptions personnalisées, déclaration `with` et module contextlib.',
      pointsCles: [
        'EAFP : "Easier to Ask for Forgiveness than Permission" est le paradigme fondamental de Python',
        'Ne jamais utiliser un bloc `except:` nu (attrape aussi KeyboardInterrupt et SystemExit)',
        '`else` s\'exécute uniquement si AUCUNE exception n\'a été levée',
        '`finally` s\'exécute toujours, même en cas de `return` prématuré ou de crash',
        'Protocoles Context Manager : `__enter__` et `__exit__` pour la gestion sûre des ressources'
      ],
      formuleCle: '\\text{with } \\text{Resource}() \\text{ as } r: \\implies r.\\_\\_enter\\_\\_() \\dots r.\\_\\_exit\\_\\_()',
      conseilProfesseur: 'Pour créer des exceptions claires dans vos bibliothèques, faites hériter toutes vos erreurs d\'une classe mère commune du domaine (ex: `class TelecomError(Exception): pass`, puis `class SignalLostError(TelecomError): pass`). Cela permet aux utilisateurs d\'attraper toutes vos erreurs d\'un coup.',
      astuceTerrain: 'Pour créer un context manager sans écrire une classe complète avec `__enter__` et `__exit__`, utilisez le décorateur standard `@contextlib.contextmanager` avec un simple `yield` dans un bloc try/finally.',
      contenuHtml: `
        <h3>6.1 Hiérarchie des Exceptions et Blocs de Contrôle</h3>
        <p>La gestion d'erreurs en Python garantit la stabilité des serveurs de production.</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>import contextlib
import time

# Création d'un chronomètre sous forme de Context Manager
@contextlib.contextmanager
def chrono(nom_etape: str):
    t_start = time.perf_counter()
    try:
        yield
    finally:
        t_duree = (time.perf_counter() - t_start) * 1000
        print(f"[{nom_etape}] terminé en {t_duree:.2f} ms")

# Utilisation
with chrono("Calcul matriciel"):
    total = sum(i**2 for i in range(1_000_000))</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch6_ex1',
          type: TypeQuestion.QCM,
          question: "Quelles deux méthodes dunder doivent être implémentées pour qu'un objet puisse être utilisé avec l'instruction `with` ?",
          reponsesPossibles: ['__enter__ et __exit__', '__start__ et __stop__', '__open__ et __close__', '__init__ et __del__'],
          reponsesCorrectes: [0],
          explication: "Le protocole de gestionnaire de contexte (Context Manager) requiert `__enter__` et `__exit__`.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'prog_ch7',
      titre: '7. Générateurs, Itérateurs & Mot-clé `yield`',
      dureeEstimeeMin: 45,
      description: 'Protocole d’itération (__iter__, __next__, StopIteration), fonctions génératrices avec `yield`, `yield from` et évaluation paresseuse (Lazy Evaluation).',
      pointsCles: [
        'Évaluation paresseuse (Lazy Evaluation) : calcul à la demande élément par élément',
        'Consommation de mémoire constante $\\mathcal{O}(1)$ indépendante de la taille des données (Go/To)',
        '`yield` suspend l\'exécution de la fonction en conservant tout son état local',
        '`next(gen)` reprend l\'exécution jusqu\'au prochain `yield` ou lève `StopIteration`',
        'Expressions génératrices : `(x**2 for x in data)` avec parenthèses au lieu de crochets'
      ],
      formuleCle: '\\text{RAM}_{\\text{générateur}} = \\mathcal{O}(1) \\quad \\ll \\quad \\text{RAM}_{\\text{liste}} = \\mathcal{O}(n)',
      conseilProfesseur: 'Lorsque vous écrivez une fonction de lecture de logs ou de base de données susceptible de renvoyer des millions de lignes, ne retournez jamais une liste. Retournez un générateur avec `yield`.',
      astuceTerrain: 'Pour composer des générateurs imbriqués (aplatir une arborescence ou déléguer à un sous-générateur), utilisez `yield from sous_generateur()` au lieu d\'une boucle `for item in sous_generateur: yield item`.',
      contenuHtml: `
        <h3>7.1 Anatomie d'un Générateur</h3>
        <p>Un générateur est un itérateur spécial dont la mémoire est optimisée à l'extrême.</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>def lire_fichier_geocaching(nom_fichier: str):
    """Générateur de streaming ligne par ligne sans saturer la RAM"""
    with open(nom_fichier, mode="r", encoding="utf-8") as f:
        for ligne in f:
            if ligne.strip() and not ligne.startswith("#"):
                yield ligne.strip().split(";")

# Traitement en chaîne (Pipeline de générateurs)
lignes = lire_fichier_geocaching("traces_gps_50Go.csv")
altitudes = (float(row[3]) for row in lignes if len(row) > 3)
max_alt = max(altitudes)  # Consomme ~ 8 Ko de RAM pour 50 Go de fichier !</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch7_ex1',
          type: TypeQuestion.QCM,
          question: "Quel est l'avantage décisif d'utiliser une fonction génératrice avec `yield` pour lire un fichier de 50 Go ligne par ligne ?",
          reponsesPossibles: ['La consommation de mémoire RAM reste minimale car les lignes sont produites une à une à la demande', 'Le script s\'exécute sur la carte graphique', 'Le fichier est compressé en zip', 'Le processeur s\'arrête de chauffer'],
          reponsesCorrectes: [0],
          explication: "Le générateur n'alloue en mémoire vive que la ligne courante sans jamais charger l'intégralité du fichier volumineux.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'prog_ch8',
      titre: '8. Décorateurs de Fonctions & de Classes en Python',
      dureeEstimeeMin: 45,
      description: 'Fonctions comme objets de première classe, fermetures (closures), syntaxe @decorateur, `functools.wraps`, décorateurs paramétrés et mise en cache (`lru_cache`).',
      pointsCles: [
        'En Python, les fonctions sont des objets de première classe (peuvent être passées en arguments et retournées)',
        'Un décorateur est une fonction qui prend une fonction en entrée et retourne une fonction modifiée',
        '`@functools.wraps(func)` est obligatoire pour préserver `__name__`, `__doc__` et la signature',
        'Décorateurs avec arguments : nécessitent 3 niveaux d\'imbrication de fonctions',
        '`@functools.lru_cache(maxsize=128)` : mémoïsation automatique pour des gains de temps spectaculaires'
      ],
      formuleCle: '@decorateur \\iff ma\\_fonction = decorateur(ma\\_fonction)',
      conseilProfesseur: 'Utilisez les décorateurs pour les aspects transversaux (Cross-Cutting Concerns) : journalisation, mesure de performance, authentification/rôles, validation d\'arguments, et retry automatique sur échec réseau.',
      astuceTerrain: 'Sur les fonctions récursives (ex: Fibonacci, programmation dynamique) ou les requêtes de référentiels immuables, l\'ajout de `@lru_cache(maxsize=None)` transforme une complexité exponentielle $O(2^n)$ en temps linéaire $O(n)$ !',
      contenuHtml: `
        <h3>8.1 Conception d'un Décorateur Professionnel</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>import functools
import time
import logging

def retry(tentatives_max: int = 3, delai_sec: float = 1.0):
    """Décorateur paramétré réessayant une fonction sur exception"""
    def decorateur(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for essai in range(1, tentatives_max + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    logging.warning(f"Tentative {essai}/{tentatives_max} échouée : {e}")
                    if essai == tentatives_max:
                        raise
                    time.sleep(delai_sec)
        return wrapper
    return decorateur

@retry(tentatives_max=3, delai_sec=0.5)
def appel_api_meteo(ville: str):
    # Simule une requête réseau
    return {"ville": ville, "temp": 28.5}</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch8_ex1',
          type: TypeQuestion.QCM,
          question: "Pourquoi est-il indispensable d'utiliser le décorateur `@wraps(func)` à l'intérieur de la fonction d'emballage d'un décorateur personnalisé ?",
          reponsesPossibles: ['Pour préserver les métadonnées de la fonction originale (__name__, __doc__)', 'Pour accélérer le code par 100', 'Pour rendre la fonction asynchrone', 'Pour autoriser les nombres négatifs'],
          reponsesCorrectes: [0],
          explication: "`functools.wraps` copie le nom, la documentation et la signature de la fonction décorée pour éviter toute perte lors de l'inspection.",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'prog_ch9',
      titre: '9. Typage Statique (Type Hints) & Validation avec Pydantic',
      dureeEstimeeMin: 40,
      description: 'Module typing (Union, Optional, List, Dict, Callable, TypeVar, Generic), vérification statique avec `mypy`, et modèles de validation de données Pydantic V2.',
      pointsCles: [
        'PEP 484 : Type Hints introduits pour l\'analyse statique sans impacter l\'exécution à chaud',
        'Syntaxe moderne (>= 3.10) : `int | None`, `list[str]`, `dict[str, Any]`',
        '`mypy --strict` détecte 80% des bugs d\'incompatibilité de type avant tout déploiement',
        'Pydantic : validation à l\'exécution, parsing JSON et coercion de types automatique',
        'Génériques avec `TypeVar` et `Generic[T]` pour des conteneurs universellement typés'
      ],
      formuleCle: 'def traiter(data: list[str], timeout: float | None = None) -> dict[str, int]:',
      conseilProfesseur: 'N\'utilisez jamais `Any` comme solution de facilité. Si une fonction manipule un objet possédant certaines méthodes sans type strict, utilisez un `Protocol` (Duck Typing structurel de `typing.Protocol`).',
      astuceTerrain: 'Dans vos modèles Pydantic V2, utilisez `Field(..., gt=0, description="...")` pour documenter et valider simultanément les contraintes métier (prix strictement positif, email valide, longueur de chaîne).',
      contenuHtml: `
        <h3>9.1 Modèles de Données Pydantic V2</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>from pydantic import BaseModel, Field, EmailStr
from datetime import datetime

class CapteurPayload(BaseModel):
    sensor_id: str = Field(..., pattern=r"^SEN-[0-9]{4}$")
    temperature: float = Field(..., ge=-50.0, le=120.0, description="Température en °C")
    pression_bar: float = Field(default=1.013, gt=0)
    technicien_email: EmailStr
    date_releve: datetime = Field(default_factory=datetime.utcnow)

# Test de validation
payload_json = '{"sensor_id": "SEN-4892", "temperature": 23.4, "technicien_email": "alice@lab.org"}'
donnee_validee = CapteurPayload.model_validate_json(payload_json)
print(donnee_validee.temperature)  # 23.4 (flottant garanti)</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch9_ex1',
          type: TypeQuestion.QCM,
          question: "En Python moderne (>= 3.10), comment s'écrit de manière concise le type d'une variable pouvant être un entier `int` ou `None` ?",
          reponsesPossibles: ['int | None', 'Union[int, NoneType]', 'Maybe(int)', 'int or None'],
          reponsesCorrectes: [0],
          explication: "L'opérateur pipe `|` introduit en Python 3.10 remplace avantageusement la syntaxe `Optional[int]` ou `Union[int, None]`.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'prog_ch10',
      titre: '10. Programmation Concurrente : Threads, Processus & GIL',
      dureeEstimeeMin: 45,
      description: 'Global Interpreter Lock (GIL), threading pour les tâches d’E/S (I/O Bound), multiprocessing pour les calculs intensifs (CPU Bound) et module concurrent.futures.',
      pointsCles: [
        'GIL (Global Interpreter Lock) : verrou exclusif de CPython empêchant plusieurs threads d\'exécuter du bytecode simultanément',
        'Tâches I/O Bound (appels HTTP, lectures fichiers, requêtes SQL) : `threading` ou `ThreadPoolExecutor` (le thread relâche le GIL pendant l\'attente réseau)',
        'Tâches CPU Bound (calcul matriciel, compression, chiffrement) : `multiprocessing` ou `ProcessPoolExecutor` (lance un processus indépendant par cœur CPU)',
        'Partage de mémoire inter-processus via `multiprocessing.Queue` et `Value`/`Array`'
      ],
      formuleCle: '\\text{CPU-Bound} \\implies \\text{ProcessPoolExecutor} \\quad | \\quad \\text{I/O-Bound} \\implies \\text{ThreadPoolExecutor / asyncio}',
      conseilProfesseur: 'N\'essayez jamais d\'accélérer un algorithme de calcul mathématique pur en Python avec du multithreading simple ; à cause du GIL et du coût de commutation de contexte, votre programme sera plus lent qu\'en mono-thread ! Utilisez multiprocessing.',
      astuceTerrain: 'Le module standard `concurrent.futures` fournit une API unifiée exceptionnelle. Vous pouvez basculer de threads à processus en changeant une seule ligne : `with concurrent.futures.ProcessPoolExecutor() as pool:`.',
      contenuHtml: `
        <h3>10.1 Le GIL et la Concurrence en CPython</h3>
        <p>Comprendre la distinction entre parallélisme matériel et concurrence est essentiel pour dimensionner vos architectures logicielles.</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>from concurrent.futures import ProcessPoolExecutor
import math

def calcul_lourd_cpu(n: int) -> int:
    return sum(math.isqrt(i) for i in range(n))

if __name__ == "__main__":
    tailles = [10_000_000, 10_000_000, 10_000_000, 10_000_000]
    
    # Parallélisation sur tous les cœurs CPU de la machine
    with ProcessPoolExecutor() as executor:
        resultats = list(executor.map(calcul_lourd_cpu, tailles))
    print("Calculs terminés :", resultats)</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch10_ex1',
          type: TypeQuestion.QCM,
          question: "Quel module Python doit-on utiliser pour paralléliser des calculs mathématiques lourds (CPU Bound) sur tous les cœurs du processeur malgré le GIL ?",
          reponsesPossibles: ['multiprocessing (ou ProcessPoolExecutor)', 'threading', 'asyncio', 'time'],
          reponsesCorrectes: [0],
          explication: "`multiprocessing` crée des processus CPython indépendants possédant chacun leur propre mémoire et leur propre GIL.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'prog_ch11',
      titre: '11. Programmation Asynchrone Haute Performance avec `asyncio`',
      dureeEstimeeMin: 50,
      description: 'Boucle d’événements (Event Loop), coroutines avec `async def` et `await`, tâches concurrentes avec `asyncio.gather()`, files d’attente non-bloquantes (asyncio.Queue).',
      pointsCles: [
        'Concurrence coopérative mono-thread : ultra-légère (des centaines de milliers de coroutines simultanées)',
        '`async def` définit une coroutine ; `await` cède le contrôle à la boucle d\'événements pendant une opération d\'E/S',
        '`asyncio.gather(*tasks)` exécute de multiples coroutines en parallèle logique',
        'Règle d\'or : ne JAMAIS appeler de fonction synchrone bloquante (ex: `time.sleep`, `requests.get`) dans du code asynchrone (utiliser `asyncio.sleep`, `httpx` ou `aiohttp`)'
      ],
      formuleCle: '\\text{Résultats} = \\text{await asyncio.gather}(t_1, t_2, \\dots, t_k)',
      conseilProfesseur: 'Si vous DEVEZ exécuter une bibliothèque legacy bloquante dans du code asyncio, déléguez-la à un thread pool via `await asyncio.to_thread(fonction_bloquante, arg1)`.',
      astuceTerrain: 'Pour limiter le nombre de requêtes simultanées envoyées à un serveur tiers et éviter de vous faire bannir (Rate Limiting), utilisez `asyncio.Semaphore(10)`.',
      contenuHtml: `
        <h3>11.1 La Boucle d'Événements (Event Loop)</h3>
        <p>L'asynchronisme permet à un seul thread de gérer des dizaines de milliers de connexions Web ou IoT avec une consommation de ressources négligeable.</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>import asyncio
import httpx

async def fetch_meteo(client: httpx.AsyncClient, ville: str):
    url = f"https://api.meteo.org/data/{ville}"
    # Le mot-clé await libère le CPU pendant l'attente réseau
    resp = await client.get(url, timeout=5.0)
    return ville, resp.json()

async def main():
    villes = ["Paris", "Libreville", "Dakar", "Kinshasa", "Tokyo"]
    async with httpx.AsyncClient() as client:
        taches = [fetch_meteo(client, v) for v in villes]
        resultats = await asyncio.gather(*taches)
        for ville, data in resultats:
            print(f"{ville} -> {data}")

# Exécution de la boucle principale
# asyncio.run(main())</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch11_ex1',
          type: TypeQuestion.QCM,
          question: "Que se passe-t-il si l'on appelle la fonction bloquante standard `time.sleep(5)` à l'intérieur d'une coroutine `async def` ?",
          reponsesPossibles: ['Toute la boucle d\'événements asyncio est totalement bloquée pendant 5 secondes pour tous les clients', 'Seule cette tâche attend, les autres continuent normalement', 'Une exception est levée immédiatement', 'Python bascule sur un second thread'],
          reponsesCorrectes: [0],
          explication: "Dans un modèle asynchrone coopératif, tout appel synchrone bloquant gèle l'unique thread de la boucle d'événements. Il faut utiliser `await asyncio.sleep(5)`.",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'prog_ch12',
      titre: '12. Conception d’APIs Web & Microservices (FastAPI & Architecture REST)',
      dureeEstimeeMin: 45,
      description: 'Verbes HTTP (GET, POST, PUT, DELETE), codes d’état (200, 201, 400, 404, 500), injection de dépendances, documentation OpenAPI / Swagger automatique.',
      pointsCles: [
        'FastAPI : framework asynchrone haute performance basé sur Starlette et Pydantic',
        'Génération automatique de la documentation interactive Swagger UI (`/docs`) et ReDoc',
        'Système d\'injection de dépendances `Depends()` pour la gestion de session DB et sécurité',
        'Codes d\'état HTTP normalisés (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found)'
      ],
      formuleCle: '@app.post("/items/", status\\_code=201) \\implies \\text{Création de ressource}',
      conseilProfesseur: 'Concevez toujours vos endpoints selon les standards RESTful : les URLs doivent être des noms pluriels représentant des ressources (ex: `/api/v1/apprenants/42/factures`), jamais des verbes d\'action.',
      astuceTerrain: 'Utilisez `status_code=status.HTTP_201_CREATED` pour les créations et `status.HTTP_204_NO_CONTENT` pour les suppressions réussies (DELETE).',
      contenuHtml: `
        <h3>12.1 Microservice Moderne avec FastAPI</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>from fastapi import FastAPI, HTTPException, status, Depends
from pydantic import BaseModel

app = FastAPI(title="API Inscriptions DO IT", version="1.0.0")

class ApprenantCreate(BaseModel):
    nom: str
    email: str
    formation_id: str

@app.post("/apprenants", status_code=status.HTTP_201_CREATED)
async def inscrire_apprenant(payload: ApprenantCreate):
    # Logique métier d'enregistrement
    return {"id": "usr_9921", "status": "inscrit", **payload.model_dump()}</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch12_ex1',
          type: TypeQuestion.QCM,
          question: "Quel code de statut HTTP standard doit renvoyer une API REST après la création réussie d'une nouvelle ressource en base de données ?",
          reponsesPossibles: ['201 Created', '200 OK', '204 No Content', '301 Moved Permanently'],
          reponsesCorrectes: [0],
          explication: "Le code HTTP 201 indique explicitement que la requête POST a abouti à la création d'une nouvelle ressource.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'prog_ch13',
      titre: '13. Tests Automatisés & TDD avec pytest, Fixtures & Mocking',
      dureeEstimeeMin: 45,
      description: 'Assertions pytest, fixtures avec `@pytest.fixture`, paramétrisation `@pytest.mark.parametrize`, mock d’appels externes (`unittest.mock`), couverture de code (pytest-cov).',
      pointsCles: [
        'TDD (Test-Driven Development) : cycle Red -> Green -> Refactor',
        'Fixtures pytest : injection de dépendances modulaire avec setup et teardown via `yield`',
        '`@pytest.mark.parametrize` : tester des dizaines de cas limites en une seule fonction',
        '`unittest.mock.patch` : simuler des bases de données et appels API tiers sans dépendance externe',
        'Couverture de code : mesure avec `pytest --cov=mon_projet --cov-report=html`'
      ],
      formuleCle: '@pytest.mark.parametrize("input, expected", [(10, 20), (0, 0), (-5, -10)])',
      conseilProfesseur: 'Un bon test unitaire doit être F.I.R.S.T : Fast (rapide), Independent (isolé), Repeatable (déterministe), Self-validating (succès/échec clair), Timely (écrit au bon moment).',
      astuceTerrain: 'Pour tester des fonctions qui interagissent avec le système de fichiers, utilisez la fixture native `tmp_path` de pytest. Elle crée un répertoire temporaire unique automatiquement nettoyé après chaque test.',
      contenuHtml: `
        <h3>13.1 Suite de Tests avec pytest et Fixtures</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>import pytest

class CalculateurRemise:
    def calculer(self, montant: float, fidelite: bool) -> float:
        if montant < 0:
            raise ValueError("Montant négatif invalide")
        remise = 0.10 if fidelite else 0.0
        return montant * (1 - remise)

@pytest.fixture
def calc():
    """Initialise une instance fraîche avant chaque test"""
    return CalculateurRemise()

@pytest.mark.parametrize("montant, fidelite, attendu", [
    (100.0, True, 90.0),
    (100.0, False, 100.0),
    (0.0, True, 0.0),
])
def test_calcul_remise_nominal(calc, montant, fidelite, attendu):
    assert calc.calculer(montant, fidelite) == attendu

def test_calcul_remise_erreur_montant_negatif(calc):
    with pytest.raises(ValueError, match="Montant négatif"):
        calc.calculer(-50.0, False)</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch13_ex1',
          type: TypeQuestion.QCM,
          question: "Quel décorateur pytest permet d'exécuter la même fonction de test plusieurs fois avec différents jeux de paramètres et résultats attendus ?",
          reponsesPossibles: ['@pytest.mark.parametrize', '@pytest.fixture', '@pytest.repeat', '@pytest.test_suite'],
          reponsesCorrectes: [0],
          explication: "`@pytest.mark.parametrize` injecte automatiquement des tuples de paramètres dans la fonction de test.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'prog_ch14',
      titre: '14. Packaging, Gestion des Dépendances & Sécurité (Poetry & Flit)',
      dureeEstimeeMin: 40,
      description: 'Standard pyproject.toml (PEP 518/621), environnements virtuels isolés (venv), verrouillage déterministe des dépendances (poetry.lock) et audit de vulnérabilités (pip-audit).',
      pointsCles: [
        'Fichier unique `pyproject.toml` remplaçant setup.py, requirements.txt et setup.cfg',
        'Fichier de lock (`poetry.lock`) : garantit des builds 100% reproductibles en CI/CD',
        'Semantic Versioning (SemVer) : MAJOR.MINOR.PATCH (ex: 2.1.4)',
        'Audit de sécurité automatisé des vulnérabilités CVE avec `pip-audit` et `safety`'
      ],
      formuleCle: '\\text{Version} = \\text{MAJOR}.\\text{MINOR}.\\text{PATCH}',
      conseilProfesseur: 'Ne committez jamais de mot de passe ou clé API dans votre dépôt Git. Utilisez un fichier `.env` ignoré dans `.gitignore` et lisez vos secrets avec `pydantic-settings` ou `python-dotenv`.',
      astuceTerrain: 'Pour publier une bibliothèque sur PyPI ou sur un registre privé d\'entreprise : `poetry build` puis `poetry publish`. Tout est compilé et packagé au format Wheel `.whl` standard.',
      contenuHtml: `
        <h3>14.1 Configuration pyproject.toml Standard</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>[project]
name = "doit-telecom-engine"
version = "1.2.0"
description = "Moteur de traitement des données télécom"
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "fastapi>=0.110.0",
    "pydantic>=2.6.0",
    "httpx>=0.27.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0.0",
    "mypy>=1.9.0",
    "ruff>=0.3.0",
]</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch14_ex1',
          type: TypeQuestion.QCM,
          question: "Dans le versionnage sémantique standard (ex: Version 2.4.1), quand incrémente-t-on le chiffre MAJEUR (le '2') ?",
          reponsesPossibles: ['Lorsqu\'on introduit des changements cassant la compatibilité ascendante (Breaking Changes)', 'Lorsqu\'on corrige un simple bug mineur', 'Chaque vendredi après-midi', 'Uniquement lors d\'un changement de logo'],
          reponsesCorrectes: [0],
          explication: "Le numéro majeur est incrémenté lorsque des modifications d'API incompatibles sont introduites.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'prog_ch15',
      titre: '15. Profiling de Performance, Optimisation & Compilation (cProfile & Cython)',
      dureeEstimeeMin: 50,
      description: 'Analyse des goulots d’étranglement avec `cProfile` et visualisation Flamegraph, profiling mémoire (`memory_profiler`), compilation de modules critiques avec Cython ou Rust (PyO3).',
      pointsCles: [
        'Règle d\'or de Donald Knuth : "L\'optimisation prématurée est la racine de tous les maux"',
        '`cProfile` : mesure le temps d\'exécution par fonction (`tottime` vs `cumtime`)',
        '`tracemalloc` : identifie les allocations de mémoire et fuites (memory leaks)',
        'Accélération avec NumPy (vectorisation C) et Numba (compilation JIT LLVM)',
        'Extensions C/Rust (PyO3) pour atteindre des vitesses natives sur les boucles critiques'
      ],
      formuleCle: '\\text{Gain de vitesse (Vectorisation NumPy)} \\approx 50\\times \\text{ à } 200\\times',
      conseilProfesseur: 'Avant de réécrire du code en C ou Rust, vérifiez toujours vos algorithmes : remplacer une recherche linéaire $O(n)$ par un dictionnaire $O(1)$ apporte souvent un gain de $10\\,000\\times$, infiniment supérieur à n\'importe quelle optimisation matérielle.',
      astuceTerrain: 'Pour générer un graphique Flamegraph interactif de votre code Python : `py-spy record -o profile.svg -- python mon_script.py`. Vous repérerez immédiatement le bloc responsable des ralentissements.',
      contenuHtml: `
        <h3>15.1 Profiling avec cProfile et Optimisation Vectorielle</h3>
        <p>L'ingénieur logiciel mesure avec rigueur avant de restructurer le code.</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>import cProfile
import pstats

def simulation_metier():
    # Code à analyser
    data = [x**0.5 for x in range(2_000_000)]
    return sum(data)

# Profiling programmatique
profiler = cProfile.Profile()
profiler.enable()
simulation_metier()
profiler.disable()

stats = pstats.Stats(profiler).sort_stats("tottime")
stats.print_stats(10)  # Affiche les 10 fonctions les plus lentes</pre>
        </div>
      `,
      exercices: [
        {
          id: 'prog_ch15_ex1',
          type: TypeQuestion.QCM,
          question: "Dans la sortie du profiler standard `cProfile`, que représente la colonne 'tottime' ?",
          reponsesPossibles: ['Le temps total passé dans la fonction elle-même, en excluant les appels aux sous-fonctions', 'Le temps que le développeur a mis à coder', 'Le temps de démarrage de Windows', 'Le temps de compilation C'],
          reponsesCorrectes: [0],
          explication: "'tottime' isole le temps machine pur consommé par le corps de la fonction, permettant d'identifier immédiatement le vrai goulot d'étranglement.",
          points: 5,
          difficulte: NiveauDifficulte.EXPERT
        }
      ]
    }
  ]
};
