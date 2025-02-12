import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}

/**
 * Using CLI `ng generate component header` creates a folder with the following files:
 * - header.component.ts
 * - header.component.html
 * - header.component.css
 * - header.component.spec.ts
 * 
 * The decorator `@Component` is used to define the metadata for the component.
 * 
 * You can use template or style for components with very little code but for larger components, it is better to use templateUrl or styleUrl.
 * Since, the command makes all those files, you can see that the decorator has the path to those files.
 * 
 * The `selector` is used to define the name of the component. It is used in the HTML file to render the component.
 * - Make sure that the selector is unique. Usually, at least 2 words that get seperated by a dash.
 * - Importing this component into a file you can use <app-header></app-header> to render the component.
 * 
 */