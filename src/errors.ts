export class NotImplemented extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = 'NotImplemented';
  }
}
