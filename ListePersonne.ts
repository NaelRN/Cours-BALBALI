import { Personne } from "./Personne";

export class ListePersonnes {
  private personnes: Personne[];

  constructor(personnes: Personne[]) {
    this.personnes = personnes;
  }

  // Getter et setter
  public getPersonnes(): Personne[] {
    return this.personnes;
  }

  public setPersonnes(personnes: Personne[]): void {
    this.personnes = personnes;
  }

  // 3️⃣ Recherche par nom
  public findByNom(s: string): Personne | null {
    const personne = this.personnes.find(
      (p) => p.getNom().toLowerCase() === s.toLowerCase()
    );
    return personne || null;
  }

  // 4️⃣ Vérifie si une personne a une adresse avec un code postal donné
  public findByCodePostal(cp: string): boolean {
    return this.personnes.some((p) =>
      p.getAdresses().some((a) => a.getCodePostal() === cp)
    );
  }

  // 5️⃣ Compte le nombre de personnes ayant une adresse dans une ville donnée
  public countPersonneVille(ville: string): number {
    return this.personnes.filter((p) =>
      p.getAdresses().some(
        (a) => a.getVille().toLowerCase() === ville.toLowerCase()
      )
    ).length;
  }

  // 6️⃣ Modifier le nom d’une personne
  public editPersonneNom(oldNom: string, newNom: string): void {
    this.personnes.forEach((p) => {
      if (p.getNom().toLowerCase() === oldNom.toLowerCase()) {
        p.setNom(newNom);
      }
    });
  }

  // 7️⃣ Modifier la ville de toutes les adresses d’une personne donnée
  public editPersonneVille(nom: string, newVille: string): void {
    this.personnes.forEach((p) => {
      if (p.getNom().toLowerCase() === nom.toLowerCase()) {
        p.getAdresses().forEach((a) => a.setVille(newVille));
      }
    });
  }
}
