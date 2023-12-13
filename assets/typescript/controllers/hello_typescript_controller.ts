// @ts-ignore
import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello-typescript" attribute will cause
 * this controller to be executed. The name "hello-typescript" comes from the filename:
 * hello_typescript_controller.js -> "hello-typescript"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller<HTMLDivElement> {
  private element: HTMLDivElement;

  connect(): void {
    console.log('Loaded hello_controller.ts 🎉');

    this.element.textContent = 'Hello Typescript Stimulus! Edit me in assets/typescript/controllers/hello_typescript_controller.ts';
  }
}
