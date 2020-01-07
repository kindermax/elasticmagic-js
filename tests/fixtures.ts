import { FieldProp } from '../src/decorators';
import { DateType, Doc, Field, IntegerType } from '../src/document';

export enum OrderStatus {
  new = 1,
  paid = 2,
  handled = 3,
  canceled = 4,
}

export enum OrderSource {
  desktop = 1,
  mobile = 2,
}

export class OrderDoc extends Doc {
  public static docType: string = 'order';

  @FieldProp(IntegerType, { name: 'user_id' })
  public static userId: Field;
  @FieldProp(IntegerType)
  public static status: Field;
  @FieldProp(IntegerType)
  public static source: Field;
  @FieldProp(IntegerType)
  public static price: Field;
  public static dateCreated: Field = new Field(DateType, { name: 'date_created', parent: OrderDoc });

  public static conditionSourceDesktop() {
    return OrderDoc.source.in_([OrderSource.desktop]);
  }

  public static conditionLowPrice() {
    return OrderDoc.price.lt_(10);
  }
}
