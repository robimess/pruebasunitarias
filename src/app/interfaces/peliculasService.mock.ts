import { Observable, of } from "rxjs";
import { mockPeliculas } from "../mocks/policulas.mock";
import { Root } from "./peliculas.interface";

export const PeliculasServiceMock: {
    obtenerDramas: () => Observable<Root>
} = {
    obtenerDramas: () => of(mockPeliculas),
}