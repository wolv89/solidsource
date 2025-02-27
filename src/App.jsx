import styles from './App.module.css';
import { createSignal, For } from 'solid-js';

const [dates] = createSignal(['Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9']);
const [today] = createSignal(10);

function isWeekend(index) {
  return index % 7 <= 1
}

function App() {
  return (
    <div class={styles.App}>
      <article class={styles.Calendar}>
        <ol>
          <For each={dates()}>{(d, i) => 
            <li classList={{ [styles.today]: i() == today(), [styles.weekend]: isWeekend(i() + 2)}}>
              <span>{d()}</span>
            </li>
          }</For>
        </ol>
      </article>
    </div>
  );
}

export default App;
