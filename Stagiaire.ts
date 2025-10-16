export class Stagiaire {
  private nom: string;
  private notes: number[];

  constructor(nom: string, notes: number[]) {
    this.nom = nom;
    this.notes = notes;
  }

  // Getters et setters
  public getNom(): string {
    return this.nom;
  }
  public getNotes(): number[] {
    return this.notes;
  }
  public setNom(nom: string): void {
    this.nom = nom;
  }
  public setNotes(notes: number[]): void {
    this.notes = notes;
  }

  // Moyenne
  public calculerMoyenne(): number {
    if (this.notes.length === 0) return 0;
    const somme = this.notes.reduce((acc, note) => acc + note, 0);
    return somme / this.notes.length;
  }

  // Trouver la note maximale
  public trouverMax(): number {
    return Math.max(...this.notes);
  }

  // Trouver la note minimale
  public trouverMin(): number {
    return Math.min(...this.notes);
  }
}
