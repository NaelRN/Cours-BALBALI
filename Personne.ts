import { Adresse } from "./Adresse";

export class Personne {
  private nom: string;
  private sexe: string; // 'M' ou 'F'
  private adresses: Adresse[];

  constructor(nom: string, sexe: string, adresses: Adresse[]) {
    this.nom = nom;
    this.sexe = sexe;
    this.adresses = adresses;
  }

  // Getters
  public getNom(): string {
    return this.nom;
  }

  public getSexe(): string {
    return this.sexe;
  }

  public getAdresses(): Adresse[] {
    return this.adresses;
  }

  // Setters
  public setNom(nom: string): void {
    this.nom = nom;
  }

  public setSexe(sexe: string): void {
    this.sexe = sexe;
  }

  public setAdresses(adresses: Adresse[]): void {
    this.adresses = adresses;
  }
}
