import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('14/06/24'),
    },
    {
      name: 'Recipes',
      updated: new Date('14/06/23'),
    },
    {
      name: 'Work',
      updated: new Date('14/06/24'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation',
      updated: new Date('14/06/24'),
    },
    {
      name: 'Kitchen',
      updated: new Date('14/06/24'),
    },
  ];
}
