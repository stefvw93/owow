import { faker } from "@faker-js/faker";
import { defineStore } from "pinia";

type State = {
  wizkids: Wizkid[];
  authenticated: boolean;
};

export const useApiStore = defineStore("api", {
  state: () =>
    ({
      wizkids: [] as Wizkid[],
      authenticated: false,
      ...JSON.parse(localStorage.getItem("store") ?? "null"),
    } as State),

  actions: {
    async createWizkid(body: Wizkid) {
      this.wizkids = [...this.wizkids, { id: faker.datatype.uuid(), ...body }];
    },
  },
});

/**
 * A wizkid has the following information:
 * - Name
 * - Role: boss, developer, designer, intern.
 * - Email
 * - Picture
 * - Phone number (optional)
 */
export type Wizkid = {
  name: string;
  role: WizkidRole;
  email: string;
  picture: string;
  phoneNumber?: string;

  /* meta */
  id?: string;
  archived?: boolean;
};

export type WizkidRole = "boss" | "developer" | "designer" | "intern";
