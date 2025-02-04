import { UserInterface } from "../types/UserInterface";

export class User implements UserInterface {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string
  ) {}
  // hydrateData(data: Array<typeof User>) {
  //     const result = [];
  //     data.map((item, index) => {
  //         const ob
  //     })
  // }
}
