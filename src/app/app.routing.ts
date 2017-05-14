import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleComponent } from './single/single.component';
import { MovieComponent } from './movie/movie.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GenreComponent } from './genre/genre.component';
import { SearchComponent } from './search/search.component';
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
    },
    {
        path: 'search/:name',
        component: SearchComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)