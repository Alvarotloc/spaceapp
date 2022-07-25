export interface IChildren {
    children    : JSX.Element | JSX.Element[];
}
export interface IDestination {
    nombre      : string;
    imagen      : string;
    descripcion : string;
    distance    : string;
    travel      : string;
}
export interface ICrew {
    nombre      : string;
    imagen      : string;
    rol         : string;
    bio         : string;
}
export interface ITech {
    nombre        : string;
    imagen        : string;
    imagenDesktop : string;
    descripcion   : string;
}