import { address, random } from "faker";
import { Account } from "../interface/account/entity/account";
// by default, 10 random accounts will be generated
export const getRandomAccounts = (size = 10): Account[] => {
  const accounts: Account[] = [];
  for (let index = 0; index < size; index++) {
    accounts.push({
      id: index.toString(),
      address: address.streetAddress(),
      password: random.words(),
      tags: [
        {
          tag: random.word(),
          theme: "volcano",
        },
      ],
      username: random.word(),
      age: Math.round(Math.random() * 80 + 20),
    });
  }
  return accounts;
};
