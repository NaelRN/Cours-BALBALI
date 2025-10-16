import { Stagiaire } from "./Stagiaire";
import { Formation } from "./Formation";

// Création de trois stagiaires
const s1 = new Stagiaire("Alice", [15, 18, 12, 17]);
const s2 = new Stagiaire("Bob", [10, 13, 9, 11]);
const s3 = new Stagiaire("Charlie", [14, 16, 15, 17]);

// Création d'une formation
const formation = new Formation("Développement Web", 30, [s1, s2, s3]);

// Tests des méthodes
console.log("Moyenne de la formation :", formation.calculerMoyenneFormation().toFixed(2));

formation.afficherNomMax();   // Nom du meilleur stagiaire
formation.afficherMinMax();   // Note minimale du meilleur stagiaire
formation.trouverMoyenneParNom("Bob"); // Moyenne de Bob
