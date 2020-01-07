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

  public static userId: Field = new Field(IntegerType, 'user_id', OrderDoc);
  public static status: Field = new Field(IntegerType, 'status', OrderDoc);
  public static source: Field = new Field(IntegerType, 'source', OrderDoc);
  public static price: Field = new Field(IntegerType, 'price', OrderDoc);
  public static dateCreated: Field = new Field(DateType, 'date_created', OrderDoc);

  public static conditionSourceDesktop() {
    return OrderDoc.source.in_([OrderSource.desktop]);
  }

  public static conditionLowPrice() {
    return OrderDoc.price.lt_(10);
  }
}
