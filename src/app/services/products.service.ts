import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private Products: Product[] = [
    {
      id: 1,
      name: 'Abraracourcix',
      description:
        'Abraracourcix, le chef du village Gaulois qui ne se gène pas pour nous le rappeler "Le chef ici, cest moi !',
      price: 50,
      imageUrl: '/images/abraracourcix.webp',
    },
    {
      id: 2,
      name: 'Astérix',
      description:
        'Avec votre figurine Tonie Astérix Le Gaulois et votre Toniebox (vendue séparément), embarquez pour une aventure audio unique (env. 40 minutes), inspirée de la bande dessinée originale. Et une fois laventure terminée, prolongez lexpérience de jeu dans le monde réel avec cette attachante figurine peinte à la main.',
      price: 40,
      imageUrl: '/images/Asterix.webp',
    },
    {
      id: 3,
      name: 'plastoy-asterix',
      description:
        'Figurine de collection Plastoy Astérix: Idéfix. Matière: vinyle. Hauteur: 30cm.',
      price: 110,
      imageUrl: '/images/plastoy-asterix.webp',
    },
    {
      id: 4,
      name: 'asterix le gaulois',
      description:
        'Avec votre figurine Tonie Astérix Le Gaulois et votre Toniebox (vendue séparément), embarquez pour une aventure audio unique (env. 40 minutes), inspirée de la bande dessinée originale.',
      price: 80,
      imageUrl: '/images/asterix-le-gaulois.jpg ',
    },
    {
      id: 5,
      name: 'Idéfix',
      description:
        'On ne présente plus Astérix et Défi. Ils forment avec Obélix un trio inséparable, toujours prêts à partir à laventure ! revivez les aventures dAstérix avec cette figurine dAstérix et Défi',
      price: 50,
      imageUrl: '/images/idéfix_large.webp',
    },
    {
      id: 6,
      name: 'obelix',
      description:
        'Retrouvez Obélix et son tonneau. Quest-ce que transporte ce tonneau ? On espère que ce nest pas de la potion magique ; si cest le cas, les romains vont passer un sale quart d heure !',
      price: 99,
      imageUrl: '/images/obelix-et-son-tonneau.webp',
    },
    {
      id: 7,
      name: 'asterix-paf',
      description:
        'Astérix en plein combat avec un légionnaire romain. La figurine est inspirée du jeu vidéo Astérix & Obélix.',
      price: 39,
      imageUrl: '/images/asterix-paf.webp',
    },
    {
      id: 8,
      name: 'idefix-bull-coeur',
      description:
        'Cest un chien blanc, le fidèle compagnon dObélix. Ce petit chien à la curieuse particularité de pleurer quand on coupe un arbre',
      price: 95,
      imageUrl: '/images/idefix-bulle-coeur.jpg',
    },
    {
      id: 9,
      name: 'obelix-livreur.jpg',
      description:
        'Dans le tout premier album d’Astérix, on découvre la force d’Obélix qui porte non pas un mais deux menhirs. Il se sent un peu faible mais n’aura tout de même pas droit à la célèbre potion magique',
      price: 130,
      imageUrl: '/images/obelix-livreur.jpg',
    },
    {
      id: 10,
      name: 'asterix-enchaine',
      description:
        'Caius Bonus voulant s’emparer de la légendaire force surhumaine des gaulois apprendra à ses dépens que celle-ci est la propriété du village et de ses habitants. Astérix se laissera enchaîner avec bonne humeur',
      price: 165,
      imageUrl: '/images/asterix-enchaine.jpg',
    },
    {
      id: 11,
      name: 'amerix',
      description:
        'Craquez pour cette belle figurine en plastique de 7 cm aux finitions soignées ! Embarquez pour une aventure palpitante dans lunivers des irréductibles Gaulois avec le livre Amérix dans La Serpe dOr ',
      price: 20,
      imageUrl: '/images/amerix.webp',
    },
    {
      id: 12,
      name: 'alambix',
      description:
        'Craquez pour cette belle figurine en plastique de 6,5 cm aux finitions soignées !Embarquez pour une aventure palpitante dans lunivers des irréductibles Gaulois avec le livre Alambix dans La Bouclier arverne ! ',
      price: 20,
      imageUrl: '/images/alambix.jpg',
    },
  ];

  constructor() {}
  getProducts(): Product[] {
    return this.Products;
  }
}
