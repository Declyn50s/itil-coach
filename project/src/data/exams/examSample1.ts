import type { Question } from "@/types/question";

export const examSample1: Question[] = [
  // 1
  {
    id: "ex1_q1",
    text: "Quelle pratique est responsable du déplacement des composants vers les environnements de production ?",
    options: [
      "L’habilitation des changements",
      "La gestion des mises en production",
      "La gestion des actifs informatiques",
      "La gestion des déploiements"
    ],
    correctIndex: 3,
    explanation: "Déployer = déplacer composants/logiciels/doc vers prod. (Gestion des déploiements)",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 2
  {
    id: "ex1_q2",
    text: "Quelle pratique inclue la classification et la propriété des questions et des demandes des utilisateurs ?",
    options: [
      "Le centre de services",
      "La gestion des incidents",
      "L’habilitation des changements",
      "La gestion des niveaux de service"
    ],
    correctIndex: 0,
    explanation: "Service Desk = SPOC, enregistre, classe, prend la propriété des demandes.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 3
  {
    id: "ex1_q3",
    text: "Quelle pratique identifie les métriques qui reflètent l'expérience d'un service pour le client ?",
    options: [
      "L'amélioration continue",
      "Le centre de services",
      "La gestion des niveaux de service",
      "La gestion des problèmes"
    ],
    correctIndex: 2,
    explanation: "SLM définit des cibles/mesures qui reflètent l’expérience réelle du client.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 4
  {
    id: "ex1_q4",
    text: "Quelle est l'utilisation PRINCIPALE d'un calendrier des changements ?",
    options: [
      "Supporter incidents et améliorations",
      "Gérer les changements urgents",
      "Planifier les changements et éviter les conflits",
      "Gérer les changements standards"
    ],
    correctIndex: 2,
    explanation: "Change schedule = planifier, communiquer, éviter conflits, allouer ressources.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 5
  {
    id: "ex1_q5",
    text: "Quelle dimension de la gestion des services est axée sur les activités et la façon dont elles sont coordonnées ?",
    options: [
      "Organisations et personnes",
      "Information et technologie",
      "Partenaires et fournisseurs",
      "Flux de valeur et processus"
    ],
    correctIndex: 3,
    explanation: "Valeur & processus = activités, enchaînement, contrôles, efficacité.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 6
  {
    id: "ex1_q6",
    text: "De quelle façon la catégorisation des incidents assiste la gestion des incidents ?",
    options: [
      "Achemine vers la zone de support appropriée",
      "Détermine la priorité",
      "Garantit le respect des délais",
      "Détermine la perception du fournisseur"
    ],
    correctIndex: 0,
    explanation: "Catégorie -> bon groupe de support. La priorité = impact × urgence.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 7
  {
    id: "ex1_q7",
    text: "Un service est un moyen qui permet la co-création de valeur en facilitant [?] que les clients veulent atteindre.",
    options: ["la garantie", "les résultats", "l'utilité", "les livrables"],
    correctIndex: 1,
    explanation: "Définition ITIL : faciliter des résultats attendus par les clients.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 8
  {
    id: "ex1_q8",
    text: "Laquelle est une recommandation de la pratique d'amélioration continue ?",
    options: [
      "Avoir au moins une petite équipe dédiée",
      "Toujours des projets multi-phases",
      "Isoler l’amélioration des autres pratiques",
      "Exclure les fournisseurs"
    ],
    correctIndex: 0,
    explanation: "Tout le monde contribue, mais une petite équipe moteur est recommandée.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 9
  {
    id: "ex1_q9",
    text: "Bénéfice potentiel d’un outil ITSM pour la gestion des incidents ?",
    options: [
      "Garantir l’identification des causes dans les délais",
      "Correspondance auto des incidents vers problèmes/erreurs connues",
      "Aligner les contrats fournisseurs",
      "Résoudre/clore automatiquement des incidents complexes"
    ],
    correctIndex: 1,
    explanation: "Matching auto incidents ↔ problèmes/KE = fonctionnalité typique ITSM.",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 10
  {
    id: "ex1_q10",
    text: "Quel rôle soumet des demandes de services ?",
    options: [
      "L'utilisateur ou son représentant autorisé",
      "Le client",
      "Le sponsor",
      "Le fournisseur"
    ],
    correctIndex: 0,
    explanation: "Une demande de service est initiée par l’utilisateur (ou son représentant).",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 11
  {
    id: "ex1_q11",
    text: "Quelle pratique propose un point de contact unique pour les utilisateurs ?",
    options: [
      "La gestion des incidents",
      "L’habilitation des changements",
      "Le centre de services",
      "La gestion des demandes de services"
    ],
    correctIndex: 2,
    explanation: "Service Desk = SPOC pour tous les utilisateurs.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 12
  {
    id: "ex1_q12",
    text: "Quel principe recommande de considérer les quatre dimensions de la gestion des services ?",
    options: [
      "Penser et travailler de façon holistique",
      "Avancer par itération avec des retours",
      "Privilégier la valeur",
      "Opter pour la simplicité et rester pratique"
    ],
    correctIndex: 0,
    explanation: "Holistique = intégrer les 4 dimensions et leurs interactions.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 13
  {
    id: "ex1_q13",
    text: "Laquelle est supportée par la gestion des demandes de services ?",
    options: [
      "Autorisation d’un changement",
      "Demande utilisateur liée à la fourniture normale",
      "Restauration après interruption",
      "Investigation des causes d’incidents"
    ],
    correctIndex: 1,
    explanation: "Request = action standard convenue dans la fourniture normale.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 14
  {
    id: "ex1_q14",
    text: "Quelle pratique relève de la responsabilité de chacun dans l'organisation ?",
    options: [
      "Gestion des niveaux de service",
      "Habilitation des changements",
      "Gestion des problèmes",
      "Amélioration continue"
    ],
    correctIndex: 3,
    explanation: "L’amélioration continue est l’affaire de tous.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 15
  {
    id: "ex1_q15",
    text: "But de la gestion de la sécurité de l'information : [?] les informations de l'organisation.",
    options: ["stocker", "fournir", "vérifier", "protéger"],
    correctIndex: 3,
    explanation: "Protéger (CIA + autres aspects : auth, non-répudiation).",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 16
  {
    id: "ex1_q16",
    text: "Quel principe recommande de collecter des données avant de déterminer ce qui peut être réutilisé ?",
    options: [
      "Privilégier la valeur",
      "Commencer là où vous êtes",
      "Opter pour la simplicité et rester pratique",
      "Avancer par itération avec retours"
    ],
    correctIndex: 1,
    explanation: "Observer/mesurer l’existant avant de décider.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 17
  {
    id: "ex1_q17",
    text: "N’est PAS habituellement incluse dans la gestion des incidents :",
    options: [
      "Scripts de collecte d’info",
      "Procédure formelle d’enregistrement",
      "Procédures détaillées de diagnostic",
      "Recours à expertise spécialisée"
    ],
    correctIndex: 2,
    explanation: "Le processus n’impose pas des pas de diagnostic détaillés.",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 18
  {
    id: "ex1_q18",
    text: "Nature des principes directeurs :",
    options: [
      "Guident en toutes circonstances",
      "Imposent des actions spécifiques",
      "On en choisit un seul",
      "Décrivent des processus obligatoires"
    ],
    correctIndex: 0,
    explanation: "Recommandations universelles, non prescriptives.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 19
  {
    id: "ex1_q19",
    text: "Énoncé CORRECT sur l’autorité de changement :",
    options: [
      "Unique pour tous les changements",
      "Selon catégories de changements",
      "Normaux = pré-autorisés",
      "Urgents sans autorisation"
    ],
    correctIndex: 1,
    explanation: "Autorités adaptées (Standard/Normal/Urgent).",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 20
  {
    id: "ex1_q20",
    text: "Quelle pratique met à disposition services/fonctionnalités nouveaux ou modifiés ?",
    options: [
      "Habilitation des changements",
      "Gestion des demandes de services",
      "Gestion des mises en production",
      "Gestion des déploiements"
    ],
    correctIndex: 2,
    explanation: "Release management = rendre disponible une version prête à l’usage.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 21
  {
    id: "ex1_q21",
    text: "Activité de la chaîne de valeur qui assure une compréhension commune de la vision ?",
    options: ["Améliorer", "Planifier", "Fournir et soutenir", "Obtenir/construire"],
    correctIndex: 1,
    explanation: "Planifier = vision, état actuel, direction d’amélioration.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 22
  {
    id: "ex1_q22",
    text: "Énoncé CORRECT sur les activités de la chaîne de valeur :",
    options: [
      "Chaque pratique appartient à une activité",
      "Combinaison activité+pratiques = relation de service",
      "Unique flux de travail",
      "Chaque activité transforme des entrées en livrables"
    ],
    correctIndex: 3,
    explanation: "Chaque activité transforme inputs → outputs (interconnectées).",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 23
  {
    id: "ex1_q23",
    text: "But de la gestion des fournisseurs :",
    options: [
      "Gérer fournisseurs/performance pour l’approvisionnement de qualité",
      "Aligner pratiques sur besoins business (amélioration continue)",
      "Coordonner marketing/vente/fourniture",
      "Disposer d’infos de config des fournisseurs"
    ],
    correctIndex: 0,
    explanation: "Performance fournisseurs au service d’un approvisionnement intégré et qualité.",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 24
  {
    id: "ex1_q24",
    text: "Deux types de coûts à évaluer par le consommateur d’un service :",
    options: [
      "Prix + coût de création",
      "Coûts supprimés + coûts imposés",
      "Coût de fourniture + coût d’amélioration",
      "Coût logiciel + coût matériel"
    ],
    correctIndex: 1,
    explanation: "Vue consommateur : coûts évités vs coûts imposés par la consommation.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 25
  {
    id: "ex1_q25",
    text: "But du centre de services :",
    options: [
      "Réduire probabilité/impact via causes",
      "Maximiser les changements réussis",
      "Capturer la demande d’incidents et de services",
      "Définir cibles de performance"
    ],
    correctIndex: 2,
    explanation: "SPOC : enregistre incidents/requests et route.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 26
  {
    id: "ex1_q26",
    text: "Adopter des méthodes d’amélioration continue :",
    options: [
      "Une nouvelle méthode à chaque fois",
      "Quelques méthodes clés appropriées",
      "Autant de méthodes que possible",
      "Une seule méthode pour tout"
    ],
    correctIndex: 1,
    explanation: "Sélectionner quelques méthodes adaptées aux types d’améliorations.",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 27
  {
    id: "ex1_q27",
    text: "Quel concept ITIL décrit la gouvernance ?",
    options: [
      "Principes directeurs",
      "Quatre dimensions",
      "Chaîne de valeur des services",
      "Système de valeur des services"
    ],
    correctIndex: 3,
    explanation: "La gouvernance est un composant du SVS (avec principes, SVC, pratiques, CI).",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 28
  {
    id: "ex1_q28",
    text: "Recommandation du centre de services :",
    options: [
      "Éviter l’automatisation",
      "Être très technique",
      "Comprendre l’organisation dans son ensemble",
      "Toujours une équipe physique fixe"
    ],
    correctIndex: 2,
    explanation: "Connaissance du contexte business/processus/utilisateurs = clé.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 29
  {
    id: "ex1_q29",
    text: "Principe qui recommande d’organiser le travail en parties petites et gérables :",
    options: [
      "Privilégier la valeur",
      "Commencer là où vous êtes",
      "Avancer par itération avec retours",
      "Collaborer et promouvoir la visibilité"
    ],
    correctIndex: 2,
    explanation: "Itérations + feedback pour un focus précis et cadence maîtrisée.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 30
  {
    id: "ex1_q30",
    text: "Qu’est-ce qu’un changement standard ?",
    options: [
      "Préautorisé, faible risque, bien compris, documenté",
      "Évalué/autorisé/planifié par autorité",
      "Sans évaluation des risques",
      "Évalué/autorisé dans l’amélioration continue"
    ],
    correctIndex: 0,
    explanation: "Standard = préautorisé, procédure répétable, faible risque.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 31
  {
    id: "ex1_q31",
    text: "Quand un workaround devient permanent pour un problème non rentable à résoudre ?",
    options: [
      "Soumettre une demande de changement d’office",
      "La gestion des problèmes restaure le service",
      "Le problème reste une erreur connue",
      "Supprimer l’enregistrement du problème"
    ],
    correctIndex: 2,
    explanation: "Workaround documenté ; statut = erreur connue si résolution non viable.",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 32
  {
    id: "ex1_q32",
    text: "Définition d’un changement :",
    options: [
      "Ajouter/modifier/supprimer tout ce qui peut affecter les services",
      "Assurer des infos exactes de configuration",
      "Mettre à disposition des services/fonctionnalités nouveaux/modifiés",
      "Déplacer composants vers prod"
    ],
    correctIndex: 0,
    explanation: "Définition ITIL 4 du changement.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 33
  {
    id: "ex1_q33",
    text: "Définition d’un événement :",
    options: [
      "Changement d’état significatif pour un service/CI",
      "Tout composant à gérer pour fournir un service (CI)",
      "Interruption non planifiée / réduction de qualité",
      "Composant à valeur financière contribuant au service"
    ],
    correctIndex: 0,
    explanation: "Événement = condition notable à traiter ou surveiller.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 34
  {
    id: "ex1_q34",
    text: "Quelle option décrit des résultats ?",
    options: [
      "Livrables tangibles/intangibles",
      "Fonctionnalité offerte (utilité)",
      "Résultats souhaités par une partie prenante",
      "Configuration des ressources (produit)"
    ],
    correctIndex: 2,
    explanation: "Résultat = outcome pour une partie prenante.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 35
  {
    id: "ex1_q35",
    text: "NE constitue PAS un élément clé de la dimension information et technologie :",
    options: [
      "Sécurité et conformité",
      "Systèmes de communication et bases de connaissances",
      "Systèmes de workflow et d’inventaire",
      "Rôles et responsabilités"
    ],
    correctIndex: 3,
    explanation: "Rôles/responsabilités relèvent d’“organisations & personnes”.",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 36
  {
    id: "ex1_q36",
    text: "Pratiques généralement impliquées dans l’implémentation de la résolution d’un problème :",
    options: ["1 et 2", "2 et 3", "3 et 4", "1 et 4"],
    correctIndex: 3,
    explanation: "Amélioration continue (1) + Habilitation des changements (4).",
    theme: "exam_sample1",
    difficulty: "medium"
  },
  // 37
  {
    id: "ex1_q37",
    text: "Élément clé du principe « opter pour la simplicité et rester pratique » :",
    options: [
      "Couvrir chaque exception",
      "Comprendre la contribution à la valeur",
      "Ignorer objectifs contradictoires",
      "Partir complexe puis simplifier"
    ],
    correctIndex: 1,
    explanation: "Toujours relier à la création de valeur, éviter la complexité inutile.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 38
  {
    id: "ex1_q38",
    text: "Première étape quand on « privilégie la valeur » :",
    options: [
      "Identifier les résultats",
      "Lister fournisseurs/partenaires",
      "Identifier le consommateur du service",
      "Évaluer le coût de fourniture"
    ],
    correctIndex: 2,
    explanation: "D’abord : qui est servi ? (consommateur) puis ce qui a de la valeur pour lui.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 39
  {
    id: "ex1_q39",
    text: "Un package ordinateur + logiciels + licences + support est un exemple de :",
    options: ["Valeur", "Résultat", "Garantie", "Offre de service"],
    correctIndex: 3,
    explanation: "Combinaison de biens/accès/activités = offre de service.",
    theme: "exam_sample1",
    difficulty: "easy"
  },
  // 40
  {
    id: "ex1_q40",
    text: "Définition d’une garantie :",
    options: [
      "Livrable d’une activité",
      "Assurance que le produit/service répondra aux exigences convenues",
      "Événement potentiel préjudiciable",
      "Fonctionnalité offerte pour satisfaire un besoin"
    ],
    correctIndex: 1,
    explanation: "Garantie = assurance niveau de service convenu (fit for use).",
    theme: "exam_sample1",
    difficulty: "easy"
  }
];
