import { faker } from "@faker-js/faker";
import { defineStore } from "pinia";
import { sleep } from "../utils";

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
      await sleep(Math.random() * 300);

      const newKid: Wizkid = {
        id: faker.datatype.uuid(),
        isEmployee: true,
        ...body,
      };

      this.wizkids = [...this.wizkids, newKid];
      return newKid;
    },

    async updateWizkid(body: Partial<Wizkid>) {
      await sleep(Math.random() * 300);

      const record: Record<string, any> | undefined = this.wizkids.find(
        (e) => e.id === body.id
      );

      if (!record) {
        throw new Error(`Could not update wizkid with id ${body.id}`);
      }

      Object.entries(body).forEach(([key, value]) => {
        record[key] = value;
      });

      return record;
    },

    async deleteWizkid(id?: string) {
      if (!id) throw new Error("id is undefined");
      await sleep(Math.random() * 300);
      const record = this.wizkids.find((e) => e.id === id);
      if (!record) return;
      record.archived = true;
      return record;
    },

    async restoreWizkid(id?: string) {
      if (!id) throw new Error("id is undefined");
      await sleep(Math.random() * 300);
      const record = this.wizkids.find((e) => e.id === id);
      if (!record) return;
      record.archived = false;
      return record;
    },

    async fireWizkid(id?: string) {
      if (!id) throw new Error("id is undefined");
      await sleep(Math.random() * 300);
      const record = this.wizkids.find((e) => e.id === id);
      if (!record) return;
      record.isEmployee = false;
      return record;
    },

    async unfireWizkid(id?: string) {
      if (!id) throw new Error("id is undefined");
      await sleep(Math.random() * 300);
      const record = this.wizkids.find((e) => e.id === id);
      if (!record) return;
      record.isEmployee = true;
      return record;
    },

    async login() {
      await sleep(Math.random() * 300);
      this.authenticated = true;
    },

    async logout() {
      await sleep(Math.random() * 300);
      this.authenticated = false;
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
  isEmployee?: boolean;
};

export type WizkidRole = "boss" | "developer" | "designer" | "intern";
