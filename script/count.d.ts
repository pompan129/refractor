export default function count(): typeof transformer;
export type Root = import('mdast').Root;
export type Handler = import('mdast-zone').Handler;
/**
 * @param {Root} tree
 */
declare function transformer(tree: Root): void;
export {};
