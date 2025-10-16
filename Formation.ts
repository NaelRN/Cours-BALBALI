import { Stagiaire } from "stagiaire";

export class Formation {
  private intitule: string;
  private nbrJours: number;
  private stagiaires: Stagiaire[];

  constructor(intitule: string, nbrJours: number, stagiaires: Stagiaire[]) {
    this.intitule = intitule;
    this.nbrJours = nbrJours;
    this.stagiaires = stagiaires;
  }
  // Getters
  public getIntitule(): string {
    return this.intitule;
  }
  public getNbrJours(): number {
    return this.nbrJours;
  }
  public getStagiaires(): Stagiaire[] {
    return this.stagiaires;
  }
  // Setters
  public setIntitule(intitule: string): void {
    this.intitule = intitule;
  }
  public setNbrJours(nbrJours: number): void {
    this.nbrJours = nbrJours;
  }
  public setStagiaires(stagiaires: Stagiaire[]): void {
    this.stagiaires = stagiaires;
  }
  // Calculer la moyenne de la formation
  public calculerMoyenneFormation(): number {
    if (this.stagiaires.length === 0) return 0;
    const somme = this.stagiaires.reduce(
      (acc, s) => acc + s.calculerMoyenne(),
      0
    );
    return somme / this.stagiaires.length;
  }

  // Trouver l’indice du stagiaire ayant la meilleure moyenne
  public getIndexMax(): number {
    if (this.stagiaires.length === 0) return -1;
    let maxMoyenne = this.stagiaires[0].calculerMoyenne();
    let indexMax = 0;
    this.stagiaires.forEach((s, index) => {
      if (s.calculerMoyenne() > maxMoyenne) {
        maxMoyenne = s.calculerMoyenne();
        indexMax = index;
      }
    });
    return indexMax;
  }

  // Afficher le nom du stagiaire avec la meilleure moyenne
  public afficherNomMax(): void {
    const index = this.getIndexMax();
    if (index !== -1) {
      console.log(
        `Le stagiaire avec la meilleure moyenne est : ${this.stagiaires[index].getNom()}`
      );
    } else {
      console.log("Aucun stagiaire trouvé.");
    }
  }

  // Afficher la note minimale du stagiaire avec la meilleure moyenne
  public afficherMinMax(): void {
    const index = this.getIndexMax();
    if (index !== -1) {
      const stagiaire = this.stagiaires[index];
      console.log(
        `La note minimale du meilleur stagiaire (${stagiaire.getNom()}) est : ${stagiaire.trouverMin()}`
      );
    } else {
      console.log("Aucun stagiaire trouvé.");
    }
  }

  // Afficher la moyenne d’un stagiaire selon son nom
  public trouverMoyenneParNom(nom: string): void {
    const stagiaire = this.stagiaires.find(
      (s) => s.getNom().toLowerCase() === nom.toLowerCase()
    );
    if (stagiaire) {
      console.log(
        `La moyenne de ${stagiaire.getNom()} est : ${stagiaire.calculerMoyenne().toFixed(2)}`
      );
    } else {
      console.log(`Aucun stagiaire trouvé avec le nom "${nom}".`);
    }
  }
}
