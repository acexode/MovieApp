import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleComponent } from './single/single.component';
import { MovieComponent } from './movie/movie.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GenreComponent } from './genre/genre.component';
const appRoutes: Routes = [
    {
        path: '',
        component: MovieComponent,
    },

    {
        path: 'movie/:id',
        component: SingleComponent
    },
    {
        path: 'genre/:name',
        component: GenreComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)