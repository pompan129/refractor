export default function syntaxes(): typeof transformer;
export type Root = import('mdast').Root;
export type PhrasingContent = import('mdast').PhrasingContent;
export type Handler = import('mdast-zone').Handler;
/**
 * @param {Root} tree
 */
declare function transformer(tree: Root): Promise<void>;
export {};
