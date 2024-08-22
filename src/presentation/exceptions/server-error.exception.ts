export class ServerErrorException extends Error {
  constructor() {
    super("Internal Server Error");
    this.name = "ServerErrorException";
  }
}
