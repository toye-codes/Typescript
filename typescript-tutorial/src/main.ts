import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import '../src/function/Task-4.ts'
<<<<<<< HEAD
import '../src/types/type-alias.ts'
import "../src/types/Merging.ts";
=======
import '../src/Type/type-Exercise-1.ts'
import './Interface/interface-exercise-1.ts';
import './Interface/method-Exercise-2.ts'
import './Turples and Enums/Exercise-1.ts'
>>>>>>> 502a98bc83b486ca5ddf2d2dfcb3c03a9631c645

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
