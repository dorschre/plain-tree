import { NodeOrNull } from './types';
declare class Node {
    data: any;
    children: Node[];
    id: string;
    value: string;
    label: string;
    parent: NodeOrNull;
    constructor(data: any, { id, parent }?: {
        id?: string;
        parent?: NodeOrNull;
    });
    addChild(data: any, { id }?: {
        id?: string;
    }): Node;
    private _removeChildren;
    removeChildren(fn: Function): Array<Node>;
    removeChildrenByData(data: any): Array<Node>;
    removeChildrenById(id: string): Array<Node>;
    isLeaf(): boolean;
    hasChildren(): boolean;
    toJson(): string;
    depth(): number;
    widthsByHeight(): Array<number>;
    height(): number;
    flattenByHeight(fn?: Function | null): any[][];
}
export default Node;
