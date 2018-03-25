import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export let Router: Routes = [
    { path: '**', component: HomeComponent },
    { path: 'crisis-center', component: HomeComponent }
];

RouterModule.forRoot(Router, { useHash: true })


