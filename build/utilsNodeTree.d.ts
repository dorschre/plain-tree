import { NodeOrNull, SerializedNode } from './types';
import Node from './Node';
export declare const nodeToJsonFormatter: (node: Node) => SerializedNode;
export declare const nodeToObjectFormatter: (node: Node) => any;
export declare const widthsByHeight: (node: NodeOrNull) => Array<number>;
export declare const flattenByHeight: (node: NodeOrNull, fn?: Function | null) => any[][];
