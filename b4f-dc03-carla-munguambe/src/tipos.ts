export const CATEGORIAS = [
"Mercearia", "Bebidas", "Higiene", "Limpeza", "Casa",
] as const;
export type Categoria = (typeof CATEGORIAS)[number];
export type IdProduto = `P${string}`;
export type IdVenda = `V${string}`;
export type DiaSemana = `{1 | 2 | 3 | 4 | 5 | 6}`;
export interface Produto {
readonly id: IdProduto;
readonly categoria: Categoria;
readonly nome: string;
readonly precoBase: number;
readonly stock: number;
readonly stockMinimo: number;
readonly activo: boolean
// … nome, precoBase, stock, stockMinimo, activo
}
export interface Venda{
    readonly Id:IdVenda;                                                                        
    readonly produto: IdProduto;
    readonly quantidade:string;
    readonly dia:DiaSemana;
}
// const sumo: Produto = { id: "P016", categoria: "Bebida", … };
// // erro TS2820: Type '"Bebida"' is not assignable to type '"Bebidas" | "Casa"
// //   | "Higiene" | "Limpeza" | "Mercearia"'. Did you mean '"Bebid

// const sumo: Produto = { id: "P016", categoria: "Bebida", … };
// // erro TS2820: Type '"Bebida"' is not assignable to type '"Bebidas" | "C 