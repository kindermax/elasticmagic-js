import { DateType, Doc, Field } from '../src/document';

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

  public static userId = new Field(DateType, 'user_id', OrderDoc);
  public user_id?: number;
  public static status = new Field(DateType, 'status', OrderDoc);
  public status?: number;

  public static source = new Field(DateType, 'source', OrderDoc);
  public source?: number;
  public static price = new Field(DateType, 'price', OrderDoc);
  public price?: number;
  public static dateCreated = new Field(DateType, 'date_created', OrderDoc);
  public date_created?: Date;

  public static conditionSourceDesktop() {
    return OrderDoc.source.in([OrderSource.desktop]);
  }

  public static conditionLowPrice() {
    return OrderDoc.price.lt(10);
  }
}
