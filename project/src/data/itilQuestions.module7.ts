import type { Question } from "@/types/question";

export const module7Questions: Question[] = [
  {
    id: "m7_q1",
    text: "Quelle pratique de gestion traite de l’amélioration des services et du développement d’une culture de l’amélioration dans toute l’organisation ?",
    options: ["La gestion de la connaissance","La supervision et la gestion des événements","L’amélioration continue","La gestion des relations"],
    correctIndex: 2,
    explanation: "L’amélioration continue structure les initiatives et entretient la culture d’amélioration.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q2",
    text: "Quelle pratique protège l’information nécessaire à l’entreprise pour mener ses activités ?",
    options: ["La gestion des relations","La gestion des actifs IT","La gestion de la sécurité de l’information","La gestion des fournisseurs"],
    correctIndex: 2,
    explanation: "La sécurité de l’information vise confidentialité, intégrité, disponibilité (CIA).",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q3",
    text: "Objet de la gestion des fournisseurs :",
    options: [
      "S’assurer que les fournisseurs et leurs performances sont gérés correctement pour contribuer à la fourniture continue de produits/services de qualité.",
      "Aligner partenaires/fournisseurs avec opérations, améliorations et changements.",
      "Gérer performances aux niveaux stratégiques/tactiques via marketing/vente/fourniture.",
      "Garantir une information fiable sur l’organisation des services des fournisseurs."
    ],
    correctIndex: 0,
    explanation: "L’objectif central : performance fournisseur au service de la qualité livrée.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q4",
    text: "Quelle pratique partage un catalogue de services et des cibles de niveaux de service avec les clients ?",
    options: ["La gestion des relations","La gestion des niveaux de service","La gestion des requêtes de service","La gestion des fournisseurs"],
    correctIndex: 1,
    explanation: "La gestion des niveaux de service établit, suit et communique les cibles SLA.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q5",
    text: "Quelle pratique supervise systématiquement les services/composants et enregistre les changements d’état choisis ?",
    options: ["La gestion des incidents","La supervision et la gestion des événements","La gestion des problèmes","La gestion de la disponibilité"],
    correctIndex: 1,
    explanation: "La gestion des événements détecte, corrèle et déclenche les réponses adaptées.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q6",
    text: "Objet de la gestion des problèmes :",
    options: [
      "Garantir niveaux de disponibilité convenus",
      "Définir des cibles claires de performance",
      "Maximiser les changements IT réussis",
      "Réduire probabilité et impact des incidents via l’identification des causes"
    ],
    correctIndex: 3,
    explanation: "La gestion des problèmes s’attaque aux causes racines et prévient la récurrence.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q7",
    text: "L’objet de la gestion des requêtes de service est de fournir la qualité attendue d’un service par le traitement de toutes les ______ prédéfinies, soumises par l’utilisateur, de façon efficace et conviviale.",
    options: ["Incidents","Changements","Requêtes de service","Problèmes"],
    correctIndex: 2,
    explanation: "Les requêtes de service suivent des workflows standardisés et conviviaux.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q8",
    text: "Objet de la gestion des configurations de service :",
    options: [
      "Définir des cibles claires de performance",
      "Disposer d’informations exactes et fiables sur la configuration des services et CIs au moment/lieu nécessaires",
      "Planifier et gérer le cycle de vie de tous les actifs IT",
      "Garantir des niveaux de disponibilité convenus"
    ],
    correctIndex: 1,
    explanation: "CM/SCM maintient des informations à jour sur services et éléments de configuration.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q9",
    text: "« Tout composant devant être géré afin de fournir un service IT » définit :",
    options: ["Un actif IT","Une demande de changement","Un élément de configuration","Un événement"],
    correctIndex: 2,
    explanation: "Le CI (Configuration Item) est géré pour contrôler le service fourni.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q10",
    text: "« Tout composant utile qui peut contribuer à la fourniture d’un produit ou service IT » définit :",
    options: ["Un incident","Un élément de configuration","Un actif IT","Un événement"],
    correctIndex: 2,
    explanation: "Un actif IT (hardware, software, data, people…) crée de la valeur.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q11",
    text: "Comment définir au mieux un incident ?",
    options: [
      "Interruption non planifiée d’un service ou altération de sa qualité",
      "Cause ou cause potentielle d’incidents",
      "Ajout/modification/retrait pouvant affecter un service",
      "Capacité d’un service/CI à fonctionner quand nécessaire"
    ],
    correctIndex: 0,
    explanation: "Incident = rupture de service prévu ou dégradation mesurable.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q12",
    text: "Définition correcte d’une « erreur connue » :",
    options: [
      "Cause ou cause potentielle d’incidents",
      "Un problème analysé et non résolu",
      "Interruption non planifiée d’un service",
      "Composant utile contribuant à un service"
    ],
    correctIndex: 1,
    explanation: "Erreur connue = problème diagnostiqué (cause identifiée), en attente de solution.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q13",
    text: "Quelle pratique s’occupe de l’approvisionnement de l’infrastructure ?",
    options: ["La gestion des déploiements","La gestion des actifs IT","La supervision/gestion des événements","La gestion des configurations de service"],
    correctIndex: 0,
    explanation: "La gestion des déploiements oriente la mise à disposition d’infrastructures/versions.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q14",
    text: "Objet de la gestion des relations :",
    options: [
      "Gérer fournisseurs et performances pour garantir la fourniture",
      "Suivre services et enregistrer changements d’état",
      "Établir et favoriser les liens entre l’organisation et ses parties prenantes",
      "Définir des cibles de performance mesurables"
    ],
    correctIndex: 2,
    explanation: "La gestion des relations construit confiance, attentes et alignement avec parties prenantes.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q15",
    text: "Qui est responsable de l’amélioration continue ?",
    options: ["Une équipe dédiée","Tout le monde","Les employés","Les responsables"],
    correctIndex: 1,
    explanation: "La culture d’amélioration est portée par l’ensemble de l’organisation.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q16",
    text: "Quelle pratique fait office de point de communication pour le fournisseur de service vis-à-vis de tous ses utilisateurs ?",
    options: ["Gestion des niveaux de service","Gestion des relations","Gestion des déploiements","Centre de service"],
    correctIndex: 3,
    explanation: "Le centre de service (Service Desk) est le SPOC pour les utilisateurs.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q17",
    text: "Planifier et gérer les actifs IT pour maximiser la valeur, contrôler les coûts, gérer les risques et satisfaire les exigences :",
    options: ["Gestion des fournisseurs","Gestion des actifs IT","Habilitation des changements","Gestion des incidents"],
    correctIndex: 1,
    explanation: "IT Asset Management (ITAM) optimise valeur/risque/coûts des actifs.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q18",
    text: "Mise à disposition de services et fonctionnalités nouveaux/modifiés : objectif clé de quelle pratique ?",
    options: ["Gestion des déploiements","Gestion des niveaux de service","Gestion des mises en production","Habilitation des changements"],
    correctIndex: 2,
    explanation: "Release Management orchestre la sortie de versions prêtes à l’usage.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q19",
    text: "Meilleur exemple de solution de contournement (workaround) :",
    options: [
      "Demander de travailler sur une autre tâche",
      "Demander un délai",
      "Informer que le service sera rétabli une fois le problème résolu",
      "Fournir un moyen alternatif de connexion Internet le temps de rétablir la liaison principale"
    ],
    correctIndex: 3,
    explanation: "Un workaround restaure partiellement la fonctionnalité via un chemin alternatif.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q20",
    text: "Un changement de faible risque, bien compris et documenté est :",
    options: ["Un changement à faible impact","Un changement normal","Un changement standard","Un changement mineur"],
    correctIndex: 2,
    explanation: "Standard change = pré-autorisé, faible risque, documenté et répété.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q21",
    text: "« Un SLA est un contrat documenté qui précise les services et le/la ______ attendu(e) »",
    options: ["Coût","Fréquence","Niveau","Qualité"],
    correctIndex: 2,
    explanation: "Le SLA fixe surtout des niveaux mesurables (cibles) de service.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q22",
    text: "Quelles sont les 3 phases de la gestion des problèmes ?",
    options: [
      "Investigation des incidents, analyse de cause, compte-rendu d’erreur connue",
      "Analyse de cause, identification des problèmes, contrôle des problèmes",
      "Contrôle des problèmes, contrôle des erreurs, amélioration continue",
      "Identification des problèmes, contrôle des problèmes, contrôle des erreurs"
    ],
    correctIndex: 3,
    explanation: "Pipeline : identifier → contrôler le problème → contrôler l’erreur (connue).",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q23",
    text: "Le contrôle des problèmes comprend l’analyse des problèmes et la documentation _________ et des erreurs connues.",
    options: ["Des incidents","Des problèmes","Des solutions de contournement","Des changements"],
    correctIndex: 2,
    explanation: "On documente workarounds et erreurs connues pour accélérer la résolution.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q24",
    text: "Quand un workaround efficace peut-il devenir permanent ?",
    options: [
      "Quand la solution du problème n’est pas viable ou trop coûteuse",
      "Quand la résolution d’incidents romprait le SLA",
      "Quand la solution d’un problème est pilotée par un fournisseur",
      "Quand la résolution d’un incident nécessite un changement"
    ],
    correctIndex: 0,
    explanation: "Si la résolution définitive est non viable/coûteuse, un workaround peut suffire.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q25",
    text: "La gestion des niveaux de service fournit une visibilité ______ des services de l’organisation.",
    options: ["Pour le client","Pour l’utilisateur","Pour le consommateur","De bout en bout"],
    correctIndex: 3,
    explanation: "Une vue end-to-end permet d’évaluer la performance réellement perçue.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q26",
    text: "La gestion des niveaux de service collecte/analyse des infos provenant de : i engagement client, ii feedback client, iii indicateurs opérationnels, iv indicateurs métiers.",
    options: ["i et ii seulement","ii et iv seulement","i, iii, et iv seulement","Tous"],
    correctIndex: 3,
    explanation: "Le SLA management s’appuie sur des sources multiples (voix du client + métriques).",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q27",
    text: "Quel point de contact unique pour l’IT/les services ?",
    options: ["Le propriétaire de service","Le centre de service","La gestion des relations","La gestion de la connaissance"],
    correctIndex: 1,
    explanation: "Le Service Desk est l’interface utilisateur-IT unique (SPOC).",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q28",
    text: "Le centre de service a une influence majeure sur ________.",
    options: ["La performance de service","La gestion des relations","L’expérience utilisateur","La gestion de la disponibilité"],
    correctIndex: 2,
    explanation: "C’est la porte d’entrée de l’IT : qualité d’accueil = qualité de l’UX perçue.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q29",
    text: "L’exécution des requêtes peut inclure des changements ; c’est généralement géré :",
    options: ["Via une requête de service","Via des changements normaux","Via des incidents","Via des changements standards"],
    correctIndex: 3,
    explanation: "Les petits changements fréquents liés aux requêtes sont souvent des standard changes.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q30",
    text: "À propos du CIR (Continual Improvement Register) :",
    options: [
      "i et ii sont corrects",
      "Seulement i est correct",
      "Seulement ii est correct",
      "i et ii sont incorrects"
    ],
    correctIndex: 1,
    explanation: "i est vrai (re-priorisation). ii est aussi important en pratique, mais la bonne réponse attendue ici est « Seulement i ». ",
    theme: "module7_pratiques_itil",
    difficulty: "hard"
  },
  {
    id: "m7_q31",
    text: "Un/Une ________ est un problème qui a été analysé ; les composants défaillants sont généralement identifiés.",
    options: ["Incident","Problème","Solution de contournement","Erreur connue"],
    correctIndex: 3,
    explanation: "Erreur connue = problème diagnostiqué (cause identifiée).",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q32",
    text: "À propos des SLA : i ne doit pas faire référence à des engagements/discussions ; ii doit indiquer les résultats attendus d’un service.",
    options: ["i et ii corrects","Seulement i correct","Seulement ii correct","i et ii incorrects"],
    correctIndex: 2,
    explanation: "Le SLA doit exprimer des résultats mesurables ; il s’appuie justement sur les engagements discutés.",
    theme: "module7_pratiques_itil",
    difficulty: "hard"
  },
  {
    id: "m7_q33",
    text: "L’amélioration continue contribue ________ de la chaîne de valeur.",
    options: ["À toutes les activités","À certaines activités","Uniquement à la planification","Autant à « fournir & supporter » qu’à « engager »"],
    correctIndex: 0,
    explanation: "Principe transversal : elle irrigue toute la Value Chain.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q34",
    text: "Dans ITIL 4, qui devrait autoriser un changement pour garantir efficience/efficacité ?",
    options: [
      "Une seule autorité centralisée",
      "Des autorités adaptées selon les catégories de changement",
      "Quiconque dans l’organisation",
      "Le gestionnaire de l’habilitation des changements"
    ],
    correctIndex: 1,
    explanation: "Autorités déléguées selon Standard/Normal/Urgent pour accélérer et sécuriser.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q35",
    text: "Quel élément aide à la communication, évite les conflits et facilite l’affectation des ressources ?",
    options: ["Un changement standard","Un SLA","Un plan de communication des changements","Un planning de réalisation des changements"],
    correctIndex: 3,
    explanation: "Le calendrier des changements (Change Schedule) synchronise les parties prenantes.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q36",
    text: "Meilleure façon de traiter un incident :",
    options: [
      "Premier arrivé, premier servi",
      "Le Service Desk alloue toutes les ressources",
      "Prioriser les incidents à fort impact et urgents",
      "Toujours prioriser les incidents consignés par les cadres"
    ],
    correctIndex: 2,
    explanation: "Priorisation = Impact × Urgence, pour optimiser la valeur rétablie.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q37",
    text: "Critère important lors du choix d’un outil de gestion d’incidents :",
    options: [
      "Auto-résolution des incidents",
      "Accès pour tous les utilisateurs",
      "Usage exclusif par le Service Desk",
      "Connexion aux CIs, changements, problèmes, erreurs connues et autres infos"
    ],
    correctIndex: 3,
    explanation: "Intégration CMDB/Change/Problem/KE est clé pour efficacité et traçabilité.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q38",
    text: "À propos de la gestion d’incident : i self-service possible ; ii ne pas escalader chez des fournisseurs ; iii task-force pour incident majeur ; iv PRA possible.",
    options: ["i et iii seulement","i, ii, et iii seulement","i, iii, et iv seulement","Tous"],
    correctIndex: 2,
    explanation: "i, iii, iv vrais ; ii est faux (l’escalade fournisseur est parfois nécessaire).",
    theme: "module7_pratiques_itil",
    difficulty: "hard"
  },
  {
    id: "m7_q39",
    text: "Tout changement d’état ayant une signification pour la gestion d’un CI ou d’un service IT est :",
    options: ["Un changement","Un événement","Un incident","Une mise en production"],
    correctIndex: 1,
    explanation: "Un événement signale une condition notable requérant évaluation/réponse.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q40",
    text: "Qu’est-ce qui est inexact ?",
    options: [
      "Seuls les incidents majeurs doivent être enregistrés",
      "Les délais cibles de résolution doivent être négociés/communiqués",
      "Les informations d’incident doivent être consignées au fil du cycle",
      "L’auto-assistance des utilisateurs doit être encouragée"
    ],
    correctIndex: 0,
    explanation: "Tous les incidents doivent être enregistrés pour traçabilité et amélioration.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q41",
    text: "Bons exemples de requêtes ? i Accès à un rapport ; ii horaires de bureau ; iii panne d’imprimante ; iv accès à une imprimante.",
    options: ["i et ii seulement","i et iv seulement","i, ii, et iv seulement","Tous"],
    correctIndex: 2,
    explanation: "La panne d’imprimante (iii) est un incident ; i, ii, iv sont des requêtes.",
    theme: "module7_pratiques_itil",
    difficulty: "hard"
  },
  {
    id: "m7_q42",
    text: "À propos des requêtes de service : i peu d’autorisations ; ii encourager l’automatisation ; iii workflows documentés ; iv délais déterminés/communiqués.",
    options: ["i et iii seulement","ii, iii, et iv seulement","i, ii, et iii seulement","Tous"],
    correctIndex: 3,
    explanation: "Toutes ces pratiques améliorent la qualité et l’efficience des requêtes.",
    theme: "module7_pratiques_itil",
    difficulty: "hard"
  },
  {
    id: "m7_q43",
    text: "Recommandation de la pratique de gestion des requêtes :",
    options: [
      "La plupart des requêtes sont simples et n’impliquent pas d’autre équipe",
      "N’encouragez pas l’automatisation complète",
      "Difficile d’anticiper les sollicitations des utilisateurs",
      "Soumission via procédure claire et simple"
    ],
    correctIndex: 3,
    explanation: "Un portail simple et des workflows clairs améliorent l’UX et l’efficacité.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q44",
    text: "Éléments clés à intégrer au centre de service : i téléphonie intelligente ; ii messagerie/workflow ; iii gestion d’effectif/planification ; iv base de connaissance ; v prise en main à distance.",
    options: ["iii, iv, et v seulement","ii, iv, et v seulement","i, ii, iii, et iv seulement","Tous"],
    correctIndex: 3,
    explanation: "Tous ces outils renforcent la capacité de support et la résolution rapide.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q45",
    text: "Recommandation du centre de service :",
    options: [
      "Toujours une équipe physique sur un site unique",
      "Aucun rôle dans la fourniture des services",
      "Traite surtout les problèmes, pas d’explications/coordination",
      "Supporte les personnes et les métiers, pas seulement le technique"
    ],
    correctIndex: 3,
    explanation: "Le Service Desk est orienté personnes/métiers et coordination transverse.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q46",
    text: "La gestion des problèmes démarre une résolution par ______ et contribue au compte-rendu de changement.",
    options: ["L’habilitation des changements","La gestion d’incident","La gestion de connaissance","La gestion des risques"],
    correctIndex: 0,
    explanation: "Les changements nécessaires à l’éradication des causes sont gérés via Change Enablement.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q47",
    text: "N’est PAS un aspect de la gestion des niveaux de service :",
    options: ["Collecte et analyse des indicateurs","Rapports de service","Passage en revue des incidents majeurs","Reporting sur les incidents majeurs"],
    correctIndex: 2,
    explanation: "La revue des incidents majeurs est plutôt du Problem/Incident Major Review.",
    theme: "module7_pratiques_itil",
    difficulty: "hard"
  },
  {
    id: "m7_q48",
    text: "Objet de la pratique de ______ : mettre à disposition des utilisateurs des services et fonctions nouveaux/modifiés.",
    options: ["Habilitation des changements","Gestion des mises en production","Gestion des niveaux de service","Gestion des requêtes de service"],
    correctIndex: 1,
    explanation: "Release Management publie/active de nouvelles capacités en production.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q49",
    text: "Concernant la gestion des niveaux de service, proposition correcte :",
    options: [
      "Aide surtout à être en mode solution",
      "Visualiser les cibles depuis un seul serveur est clé",
      "Communiquer rarement avec les clients",
      "Se bâtit sur des partenariats constructifs"
    ],
    correctIndex: 3,
    explanation: "SLA efficace = collaboration continue et partenariats durables.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q50",
    text: "Un changement ______ peut nécessiter une autorité distincte d’évaluation incluant des managers seniors évaluant les risques.",
    options: ["Urgent","Normal","Standard","Majeur"],
    correctIndex: 0,
    explanation: "Les Emergency Changes ont une voie d’autorisation dédiée et rapide.",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q51",
    text: "Une grande initiative d’amélioration au centre de service doit suivre la pratique :",
    options: ["L’amélioration continue","La gestion des niveaux de service","L’habilitation des changements","La gestion des configurations"],
    correctIndex: 0,
    explanation: "Cadrage via le modèle d’amélioration continue (vision →…→ maintenir l’élan).",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q52",
    text: "Plusieurs idées techniques pour résoudre un problème au meilleur coût : cela s’appelle (ITIL4) :",
    options: ["La gestion d’incident","Le contrôle des problèmes","Le contrôle des erreurs","L’engagement technique"],
    correctIndex: 2,
    explanation: "Le contrôle des erreurs gère options, workarounds, et recommandations de changement.",
    theme: "module7_pratiques_itil",
    difficulty: "hard"
  },
  {
    id: "m7_q53",
    text: "Une erreur non identifiée/non résolue, pouvant constituer un risque pour les services opérationnels :",
    options: ["Un incident","Un problème","Une erreur","Un souci"],
    correctIndex: 1,
    explanation: "Le problème représente la cause sous-jacente (encore à analyser/traiter).",
    theme: "module7_pratiques_itil",
    difficulty: "medium"
  },
  {
    id: "m7_q54",
    text: "« Un changement » = addition/modification/retrait de tout ce qui pourrait avoir un effet sur ______.",
    options: ["Les utilisateurs","Les processus","Les services","Les flux de valeur"],
    correctIndex: 2,
    explanation: "Définition ITIL 4 : effet direct/indirect sur les services.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  },
  {
    id: "m7_q55",
    text: "Selon ITIL 4, une interruption de service non planifiée est :",
    options: ["Une erreur connue","Un incident","Un problème","Une solution de contournement"],
    correctIndex: 1,
    explanation: "C’est bien un incident ; le problème est la cause, l’erreur connue un problème analysé.",
    theme: "module7_pratiques_itil",
    difficulty: "easy"
  }
];
