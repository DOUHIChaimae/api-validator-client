import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewProjectComponent} from "./new-project/new-project.component";
import {UpdateProjectComponent} from "./update-project/update-project.component";

const routes: Routes = [
  {path: "new-project", component: NewProjectComponent},
  {path: "update-project/:id", component: UpdateProjectComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
