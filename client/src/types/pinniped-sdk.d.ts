// pinniped-sdk.d.ts

declare module "pinniped-sdk" {
  export interface PinnipedClient {
    auth: PinnipedAuth;
    db: PinnipedDB;
  }

  interface PinnipedDB {
    getAll(
      tableName: string,
      pageNum: number,
      limit: number,
      sortBy: string,
      order: string
    ): Promise<any[]>;
    getOne(tableName: string, rowId: string): Promise<any>;
    createOne(tableName: string, data: any): Promise<void>;
    updateOne(tableName: string, rowId: string, data: any): Promise<void>;
    deleteOne(tableName: string, rowId: string): Promise<void>;
  }

  interface PinnipedAuth {
    login(username: string, password: string): Promise<void>;
    register(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
    getUser(): Promise<string>;
  }

  export default function Pinniped(connectionString: string): PinnipedClient;
}
