import { Field, FieldType } from './document';

export function FieldProp(type: FieldType, name?: string) {
  return (target: any, propertyKey: string) => {
    target[propertyKey] = new Field(type, name ?? propertyKey, target);
  };
}