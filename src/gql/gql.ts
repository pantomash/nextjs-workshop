/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetBySlug($slug: String!) {\n  category(where: {slug: $slug}) {\n    name\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.CategoryGetBySlugDocument,
    "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    id\n    name\n    description\n    images {\n      url\n      alt\n    }\n    price\n    categories {\n      id\n      name\n    }\n  }\n}": types.ProductGetBySlugDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  slug\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    id\n    name\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetListDocument,
    "query SearchGetList($query: String!) {\n  products(where: {_search: $query}) {\n    name\n    slug\n    price\n    description\n  }\n}": types.SearchGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  category(where: {slug: $slug}) {\n    name\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    id\n    name\n    description\n    images {\n      url\n      alt\n    }\n    price\n    categories {\n      id\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  slug\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchGetList($query: String!) {\n  products(where: {_search: $query}) {\n    name\n    slug\n    price\n    description\n  }\n}"): typeof import('./graphql').SearchGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
