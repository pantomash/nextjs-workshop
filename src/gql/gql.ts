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
    "fragment CartFragment on Cart {\n  id\n}": types.CartFragmentFragmentDoc,
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $totalPrice: Int!) {\n  createCartItem(\n    data: {quantity: 1, totalPrice: $totalPrice, product: {connect: {id: $productId}}, cart: {connect: {id: $cartId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartCreate {\n  createCart(data: {total: 0}) {\n    id\n    items {\n      id\n      quantity\n      totalPrice\n      product {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(where: {id: $id}, stage: DRAFT) {\n    id\n    items {\n      id\n      quantity\n      totalPrice\n      product {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($itemId: ID!) {\n  deleteCartItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "mutation CartSetItemQuantity($cartItemId: ID!, $quantity: Int!) {\n  updateCartItem(where: {id: $cartItemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetItemQuantityDocument,
    "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetBySlug($slug: String!, $first: Int!, $skip: Int!) {\n  categoriesConnection(first: $first, skip: $skip, where: {slug: $slug}) {\n    edges {\n      node {\n        products {\n          ...ProductListItemFragment\n        }\n        name\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    aggregate {\n      count\n    }\n  }\n}": types.CategoryGetBySlugDocument,
    "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.CollectionsGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    slug\n    name\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItemFragment\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductListItemFragment\n  }\n}": types.ProductGetBySlugDocument,
    "fragment ProductItemFragment on Product {\n  id\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    id\n    name\n  }\n}": types.ProductItemFragmentFragmentDoc,
    "fragment ProductListItemFragment on Product {\n  id\n  slug\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  rating\n  categories {\n    id\n    name\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetList {\n  products {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetPaginatedList($first: Int!, $skip: Int!, $orderBy: ProductOrderByInput!) {\n  productsConnection(first: $first, skip: $skip, orderBy: $orderBy) {\n    edges {\n      node {\n        ...ProductListItemFragment\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetPaginatedListDocument,
    "mutation ReviewCreate($author: String!, $description: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  createReview(\n    data: {author: $author, description: $description, product: {connect: {id: $productId}}, rating: $rating, title: $title}\n  ) {\n    author\n    description\n    id\n    rating\n    title\n  }\n}": types.ReviewCreateDocument,
    "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}": types.ReviewPublishDocument,
    "query ReviewsGetList {\n  reviews {\n    author\n    description\n    id\n    rating\n    title\n  }\n}": types.ReviewsGetListDocument,
    "query ReviewsGetListByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}, stage: DRAFT) {\n    author\n    description\n    id\n    rating\n    title\n  }\n}": types.ReviewsGetListByProductIdDocument,
    "query SearchGetList($query: String!) {\n  products(where: {_search: $query}) {\n    ...ProductListItemFragment\n  }\n}": types.SearchGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartFragment on Cart {\n  id\n}"): typeof import('./graphql').CartFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $totalPrice: Int!) {\n  createCartItem(\n    data: {quantity: 1, totalPrice: $totalPrice, product: {connect: {id: $productId}}, cart: {connect: {id: $cartId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createCart(data: {total: 0}) {\n    id\n    items {\n      id\n      quantity\n      totalPrice\n      product {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(where: {id: $id}, stage: DRAFT) {\n    id\n    items {\n      id\n      quantity\n      totalPrice\n      product {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteCartItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetItemQuantity($cartItemId: ID!, $quantity: Int!) {\n  updateCartItem(where: {id: $cartItemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!, $first: Int!, $skip: Int!) {\n  categoriesConnection(first: $first, skip: $skip, where: {slug: $slug}) {\n    edges {\n      node {\n        products {\n          ...ProductListItemFragment\n        }\n        name\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    slug\n    name\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItemFragment on Product {\n  id\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  categories {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  slug\n  name\n  description\n  images {\n    url\n    alt\n  }\n  price\n  rating\n  categories {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetPaginatedList($first: Int!, $skip: Int!, $orderBy: ProductOrderByInput!) {\n  productsConnection(first: $first, skip: $skip, orderBy: $orderBy) {\n    edges {\n      node {\n        ...ProductListItemFragment\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetPaginatedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($author: String!, $description: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  createReview(\n    data: {author: $author, description: $description, product: {connect: {id: $productId}}, rating: $rating, title: $title}\n  ) {\n    author\n    description\n    id\n    rating\n    title\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}"): typeof import('./graphql').ReviewPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetList {\n  reviews {\n    author\n    description\n    id\n    rating\n    title\n  }\n}"): typeof import('./graphql').ReviewsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetListByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}, stage: DRAFT) {\n    author\n    description\n    id\n    rating\n    title\n  }\n}"): typeof import('./graphql').ReviewsGetListByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchGetList($query: String!) {\n  products(where: {_search: $query}) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').SearchGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
