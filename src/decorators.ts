import { Field, FieldType, FieldOpts } from './document';

export function FieldProp(type: FieldType, fieldOpts: FieldOpts = {}) {
  return (target: any, propertyKey: string) => {
    target[propertyKey] = new Field(type, {
      name: fieldOpts.name ?? propertyKey,
      parent: target,
     });
  };
}