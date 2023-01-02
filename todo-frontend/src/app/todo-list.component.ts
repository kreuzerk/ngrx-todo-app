import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'todo-list',
  template: `
    <div class="mb-4">
      <ul class="list-reset">
        <li class="flex items-center justify-between mb-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
            <label class="ml-2 text-sm leading-5 text-gray-700" for="todos">
              Take out the trash
            </label>
          </div>
          <span class="material-symbols-outlined">delete</span>
        </li>
        <li class="flex items-center justify-between mb-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="flex items-center">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
            <label class="ml-2 text-sm leading-5 text-gray-700" for="todos">
              Do the dishes
            </label>
          </div>
          <span class="material-symbols-outlined">delete</span>
        </li>
      </ul>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
}
